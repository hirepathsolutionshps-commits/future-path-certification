import { createFileRoute } from "@tanstack/react-router";
import { sendWaitlistEmail } from "@/lib/email";

export const Route = createFileRoute("/api/send-waitlist-notification")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const data = await request.json();
          await sendWaitlistEmail(data);
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[send-waitlist-notification]", err);
          return new Response(JSON.stringify({ ok: false }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
