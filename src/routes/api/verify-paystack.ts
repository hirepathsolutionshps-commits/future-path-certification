import { createFileRoute } from "@tanstack/react-router";

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;
const PRICES: Record<"Regular" | "VIP", number> = {
  Regular: 50_000 * 100,
  VIP: 100_000 * 100,
};

interface VerifyPayload {
  reference: string;
  email: string;
  scheduleType: "Regular" | "VIP";
}

function isPayload(value: unknown): value is VerifyPayload {
  if (!value || typeof value !== "object") return false;
  const data = value as Record<string, unknown>;
  return (
    typeof data.reference === "string" &&
    /^[a-zA-Z0-9._-]{3,100}$/.test(data.reference) &&
    typeof data.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) &&
    (data.scheduleType === "Regular" || data.scheduleType === "VIP")
  );
}

export const Route = createFileRoute("/api/verify-paystack")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        if (!PAYSTACK_SECRET_KEY) {
          console.error("[verify-paystack] PAYSTACK_SECRET_KEY is not configured");
          return Response.json({ ok: false, error: "Payment verification is unavailable" }, { status: 503 });
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
        }

        if (!isPayload(body)) {
          return Response.json({ ok: false, error: "Invalid payment details" }, { status: 400 });
        }

        try {
          const response = await fetch(
            `https://api.paystack.co/transaction/verify/${encodeURIComponent(body.reference)}`,
            {
              headers: {
                Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
                "Content-Type": "application/json",
              },
            },
          );

          const result = (await response.json()) as {
            status?: boolean;
            message?: string;
            data?: {
              status?: string;
              amount?: number;
              currency?: string;
              reference?: string;
              customer?: { email?: string };
            };
          };

          const transaction = result.data;
          const expectedAmount = PRICES[body.scheduleType];
          const emailMatches =
            transaction?.customer?.email?.toLowerCase() === body.email.toLowerCase();

          if (
            !response.ok ||
            result.status !== true ||
            transaction?.status !== "success" ||
            transaction.amount !== expectedAmount ||
            transaction.currency !== "NGN" ||
            transaction.reference !== body.reference ||
            !emailMatches
          ) {
            console.error("[verify-paystack] Transaction verification failed", {
              reference: body.reference,
              status: transaction?.status,
              amount: transaction?.amount,
              currency: transaction?.currency,
              emailMatches,
            });
            return Response.json({ ok: false, error: "Payment could not be verified" }, { status: 402 });
          }

          return Response.json({
            ok: true,
            reference: transaction.reference,
          });
        } catch (error) {
          console.error("[verify-paystack] Request failed", error);
          return Response.json({ ok: false, error: "Payment verification failed" }, { status: 502 });
        }
      },
    },
  },
});