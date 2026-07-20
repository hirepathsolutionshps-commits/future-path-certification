/**
 * Development-only route to test Resend email delivery.
 * POST /api/test-email  { "to": "you@email.com" }
 * Remove this file before going to production.
 */
import { createFileRoute } from "@tanstack/react-router";
import { sendConfirmationEmail } from "@/lib/email";

export const Route = createFileRoute("/api/test-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const { to } = (await request.json()) as { to?: string };
        if (!to) {
          return new Response(JSON.stringify({ ok: false, error: "missing 'to'" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        console.log("[test-email] Sending test confirmation to", to);
        console.log("[test-email] RESEND_API_KEY present:", !!process.env.RESEND_API_KEY);

        try {
          await sendConfirmationEmail({
            name: "Test User",
            email: to,
            phone: "+234 800 000 0000",
            scheduleType: "Regular",
            cohortName: "Healthcare VA Program — Test",
          });
          console.log("[test-email] Done");
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[test-email] Error:", err);
          return new Response(JSON.stringify({ ok: false, error: String(err) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
