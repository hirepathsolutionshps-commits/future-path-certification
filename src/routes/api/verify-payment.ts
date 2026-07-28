import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { sendConfirmationEmail } from "@/lib/email";

// ── Supabase anon client (server-side, no localStorage) ───────────────────────
function getSupabase() {
  const url =
    process.env.SUPABASE_URL ??
    "https://izmzyjktrpappepzwumt.supabase.co";
  const key =
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bXp5amt0cnBhcHBlcHp3dW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3Njg4MzMsImV4cCI6MjA5ODM0NDgzM30.BGHZl4zwJ8mGBIhNsF3_l7LylSkUT3TCDOejsOXeQKA";
  return createClient(url, key, { auth: { persistSession: false } });
}

// ── Paystack verification ──────────────────────────────────────────────────────
interface PaystackVerifyResponse {
  status: boolean;
  message: string;
  data?: {
    status: string;       // "success" | "failed" | ...
    reference: string;
    amount: number;       // in kobo
    currency: string;
    metadata?: Record<string, unknown>;
  };
}

async function verifyWithPaystack(
  reference: string,
): Promise<PaystackVerifyResponse> {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) throw new Error("PAYSTACK_SECRET_KEY not set");

  const res = await fetch(
    `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
    { headers: { Authorization: `Bearer ${secretKey}` } },
  );
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Paystack verify failed (${res.status}): ${text}`);
  }
  return res.json() as Promise<PaystackVerifyResponse>;
}

// ── Expected amounts in kobo ───────────────────────────────────────────────────
const EXPECTED_AMOUNTS: Record<string, number> = {
  Regular: 50_000 * 100,
  VIP: 100_000 * 100,
};

// Programs with a flat fee override (program slug → kobo amount)
const PROGRAM_FLAT_AMOUNTS: Record<string, number> = {
  "general-virtual-assistant": 60_000 * 100,
};

// ── Payload type ───────────────────────────────────────────────────────────────
interface VerifyPayload {
  reference: string;
  name: string;
  email: string;
  phone: string;
  has_laptop: boolean;
  schedule_type: "Regular" | "VIP";
  program?: string;
  cohort_id: string | null;
  cohort_name: string;
}

function validate(d: unknown): d is VerifyPayload {
  if (!d || typeof d !== "object") return false;
  const o = d as Record<string, unknown>;
  return (
    typeof o.reference === "string" && o.reference.length > 0 &&
    typeof o.name === "string" && o.name.trim().length >= 2 &&
    typeof o.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email) &&
    typeof o.phone === "string" && o.phone.trim().length >= 7 &&
    typeof o.has_laptop === "boolean" &&
    (o.schedule_type === "Regular" || o.schedule_type === "VIP") &&
    typeof o.cohort_name === "string"
  );
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// ── Route ──────────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/api/verify-payment")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // 1. Parse body
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return json({ ok: false, error: "Invalid JSON" }, 400);
        }

        if (!validate(payload)) {
          return json({ ok: false, error: "Invalid payload" }, 400);
        }

        // 2. Verify payment with Paystack
        let paystackData: PaystackVerifyResponse;
        try {
          paystackData = await verifyWithPaystack(payload.reference);
        } catch (err) {
          console.error("[verify-payment] Paystack API error:", err);
          return json({ ok: false, error: "Could not verify payment" }, 502);
        }

        if (
          !paystackData.status ||
          paystackData.data?.status !== "success" ||
          paystackData.data?.currency !== "NGN"
        ) {
          console.warn("[verify-payment] Payment not successful:", paystackData);
          return json({ ok: false, error: "Payment not confirmed by Paystack" }, 402);
        }

        // 3. Verify amount matches expected
        const expected =
          payload.program && PROGRAM_FLAT_AMOUNTS[payload.program] !== undefined
            ? PROGRAM_FLAT_AMOUNTS[payload.program]
            : EXPECTED_AMOUNTS[payload.schedule_type];
        if (paystackData.data.amount !== expected) {
          console.warn(
            `[verify-payment] Amount mismatch: got ${paystackData.data.amount}, expected ${expected}`,
          );
          return json({ ok: false, error: "Payment amount mismatch" }, 402);
        }

        // 4. Upsert student record in Supabase
        const supabase = getSupabase();
        const { error: dbError } = await supabase.from("students").upsert(
          {
            name: payload.name,
            phone: payload.phone,
            email: payload.email,
            has_laptop: payload.has_laptop,
            schedule_type: payload.schedule_type,
            cohort_id: payload.cohort_id ?? null,
            payment_ref: payload.reference,
            paid: true,
          },
          { onConflict: "payment_ref" },
        );

        if (dbError) {
          console.error("[verify-payment] Supabase insert error:", dbError);
          // Payment succeeded — don't block the user, just log
        }

        // 5. Send confirmation email — await so we can log the outcome
        const priceDisplay =
          payload.program && PROGRAM_FLAT_AMOUNTS[payload.program] !== undefined
            ? `₦${(PROGRAM_FLAT_AMOUNTS[payload.program] / 100).toLocaleString()}`
            : undefined;
        try {
          await sendConfirmationEmail({
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            scheduleType: payload.schedule_type,
            cohortName: payload.cohort_name,
            priceDisplay,
          });
          console.log("[verify-payment] Confirmation email dispatched for", payload.email);
        } catch (err) {
          // Log but don't block — payment already verified and saved
          console.error("[verify-payment] Email send threw:", err);
        }

        return json({ ok: true });
      },
    },
  },
});
