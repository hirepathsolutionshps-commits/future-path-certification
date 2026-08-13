/**
 * Paystack webhook endpoint
 *
 * Paystack POSTs signed events here whenever a transaction completes.
 * This acts as a safety net for cases where the browser closed before the
 * client-side callback finished (e.g. network drop after payment).
 *
 * Set your webhook URL in Paystack dashboard → Settings → API Keys & Webhooks:
 *   https://hirepathsolutions.com/api/paystack-webhook
 *
 * Docs: https://paystack.com/docs/payments/webhooks/
 */
import { createFileRoute } from "@tanstack/react-router";
import { createClient } from "@supabase/supabase-js";
import { createHmac, timingSafeEqual } from "node:crypto";
import { sendConfirmationEmail } from "@/lib/email";

// ── Supabase anon client (server-side) ────────────────────────────────────────
function getSupabase() {
  const url =
    process.env.SUPABASE_URL ??
    "https://izmzyjktrpappepzwumt.supabase.co";
  const key =
    process.env.SUPABASE_PUBLISHABLE_KEY ??
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6bXp5amt0cnBhcHBlcHp3dW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODI3Njg4MzMsImV4cCI6MjA5ODM0NDgzM30.BGHZl4zwJ8mGBIhNsF3_l7LylSkUT3TCDOejsOXeQKA";
  return createClient(url, key, { auth: { persistSession: false } });
}

// ── HMAC-SHA512 signature verification ────────────────────────────────────────
function isValidSignature(body: string, signatureHeader: string | null): boolean {
  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey || !signatureHeader) return false;

  const expected = createHmac("sha512", secretKey).update(body).digest("hex");
  try {
    return timingSafeEqual(
      Buffer.from(signatureHeader, "hex"),
      Buffer.from(expected, "hex"),
    );
  } catch {
    return false;
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// ── Paystack charge.success event shape (minimal) ─────────────────────────────
interface ChargeSuccessData {
  reference: string;
  amount: number;       // kobo
  currency: string;
  status: string;
  customer: { email: string };
  metadata?: {
    custom_fields?: Array<{ variable_name: string; value: unknown }>;
    [key: string]: unknown;
  };
}

// ── Route ──────────────────────────────────────────────────────────────────────
export const Route = createFileRoute("/api/paystack-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        // 1. Read raw body for signature verification
        const rawBody = await request.text();
        const signature = request.headers.get("x-paystack-signature");

        // 2. Verify signature — reject anything that doesn't match
        if (!isValidSignature(rawBody, signature)) {
          console.warn("[paystack-webhook] Invalid signature — rejected");
          return json({ ok: false, error: "Unauthorized" }, 401);
        }

        // 3. Parse event
        let event: { event: string; data: ChargeSuccessData };
        try {
          event = JSON.parse(rawBody);
        } catch {
          return json({ ok: false, error: "Invalid JSON" }, 400);
        }

        // 4. Only handle charge.success
        if (event.event !== "charge.success") {
          return json({ ok: true, message: "Event ignored" });
        }

        const { reference, amount, currency, status, customer } = event.data;

        if (status !== "success" || currency !== "NGN") {
          return json({ ok: true, message: "Not a successful NGN charge" });
        }

        console.log(`[paystack-webhook] charge.success for ref=${reference} amount=${amount}`);

        // 5. Determine schedule_type from amount
        const scheduleType: "Regular" | "VIP" | null =
          amount === 50_000 * 100 ? "Regular"
          : amount === 100_000 * 100 ? "VIP"
          : null;

        const supabase = getSupabase();

        // 6. Check if student already exists (client-side flow may have already saved them)
        const { data: existing } = await supabase
          .from("students")
          .select("id, paid, name, email, phone, schedule_type, cohort_id")
          .eq("payment_ref", reference)
          .maybeSingle();

        if (existing?.paid) {
          // Already recorded — nothing to do
          console.log("[paystack-webhook] Already recorded, skipping.");
          return json({ ok: true, message: "Already recorded" });
        }

        if (existing) {
          // Row exists but not marked paid — update it
          await supabase
            .from("students")
            .update({ paid: true })
            .eq("id", existing.id);

          // Send confirmation email if we have enough data
          if (existing.name && existing.email && existing.phone && existing.schedule_type) {
            const cohortRes = existing.cohort_id
              ? await supabase.from("cohorts").select("name").eq("id", existing.cohort_id).single()
              : null;
            sendConfirmationEmail({
              name: existing.name,
              email: existing.email,
              phone: existing.phone,
              scheduleType: existing.schedule_type as "Regular" | "VIP",
              cohortName: cohortRes?.data?.name ?? "Healthcare VA Program",
            }).catch((err) => console.error("[paystack-webhook] Email error:", err));
          }
        } else {
          // No row at all (browser closed before callback) — create a minimal record
          await supabase.from("students").insert({
            email: customer.email,
            name: customer.email, // best we have without browser data
            phone: "—",
            has_laptop: false,
            schedule_type: scheduleType ?? "Regular",
            payment_ref: reference,
            paid: true,
          });
          console.log(
            `[paystack-webhook] Created fallback record for ${customer.email} — admin should update name/phone.`,
          );
        }

        return json({ ok: true });
      },
    },
  },
});
