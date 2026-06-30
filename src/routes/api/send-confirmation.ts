import { createFileRoute } from "@tanstack/react-router";
import { sendConfirmationEmail } from "@/lib/email";

export const Route = createFileRoute("/api/send-confirmation")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const data = await request.json();
          await sendConfirmationEmail(data);
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[send-confirmation]", err);
          return new Response(JSON.stringify({ ok: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
