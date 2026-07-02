import { createFileRoute } from "@tanstack/react-router";
import { sendCareerAssessmentEmail } from "@/lib/email";

// ── Server-side schema validation ─────────────────────────────────────────────

interface AssessmentPayload {
  full_name: string;
  email: string;
  phone: string;
  [key: string]: unknown;
}

function validate(data: unknown): data is AssessmentPayload {
  if (!data || typeof data !== "object") return false;
  const d = data as Record<string, unknown>;

  // Required string fields with length caps
  if (typeof d.full_name !== "string" || d.full_name.trim().length < 2 || d.full_name.length > 120) return false;
  if (typeof d.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) || d.email.length > 255) return false;
  if (typeof d.phone !== "string" || d.phone.trim().length < 7 || d.phone.length > 40) return false;

  // Optional string fields — cap length to prevent abuse
  const optionalStr = [
    "city", "state", "education_level", "field_of_study", "job_title",
    "years_experience", "industry", "current_skills", "skills_to_gain",
    "target_role", "work_preference", "timeline", "contact_method", "best_time",
  ];
  for (const key of optionalStr) {
    if (key in d && d[key] !== undefined && d[key] !== null) {
      if (typeof d[key] !== "string" || (d[key] as string).length > 500) return false;
    }
  }

  return true;
}

export const Route = createFileRoute("/api/send-career-assessment")({
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

        if (!validate(data)) {
          return new Response(JSON.stringify({ ok: false, error: "Invalid payload" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          await sendCareerAssessmentEmail(data);
          return new Response(JSON.stringify({ ok: true }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (err) {
          console.error("[send-career-assessment]", err);
          return new Response(JSON.stringify({ ok: false, error: "Email send failed" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
