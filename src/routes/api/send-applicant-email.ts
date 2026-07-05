import { createFileRoute } from "@tanstack/react-router";
import { sendApplicantEmail } from "@/lib/email";

export const Route = createFileRoute("/api/send-applicant-email")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let data: unknown;
        try {
          data = await request.json();
        } catch {
          return new Response(JSON.stringify({ ok: false, error: "Invalid JSON" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const d = data as Record<string, unknown>;
        if (
          typeof d.full_name !== "string" || d.full_name.trim().length < 2 ||
          typeof d.email !== "string" || !d.email.includes("@") ||
          typeof d.phone !== "string" || d.phone.trim().length < 5 ||
          typeof d.state !== "string" || d.state.trim().length < 1 ||
          typeof d.city !== "string" || d.city.trim().length < 1
        ) {
          return new Response(JSON.stringify({ ok: false, error: "Missing or invalid fields" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          await sendApplicantEmail({
            full_name: d.full_name.trim(),
            email: d.email.trim(),
            phone: d.phone.trim(),
            state: d.state.trim(),
            city: d.city.trim(),
          });
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[send-applicant-email]", err);
          return new Response(JSON.stringify({ ok: false, error: "Email send failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
