import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Refund & Guarantee Policy | Hire Path Solutions";
const DESCRIPTION =
  "Our refund terms and job-placement guarantee for the Hire Path Solutions Healthcare Virtual Assistant training program.";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: Refund,
});

function Refund() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Link to="/" className="font-data text-xs uppercase tracking-widest text-gold hover:underline">
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink">
          Refund &amp; Guarantee Policy
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-graphite">
          <p>
            We stand behind our training. This policy explains our guarantee and the conditions for
            refunds.
          </p>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Job-placement guarantee</h2>
            <p className="mt-2">
              If you complete the full 6-week program and actively follow our placement process
              (submitting applications, attending interviews, and applying our guidance), we will
              continue to support you until you secure a paying client.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Refund eligibility</h2>
            <p className="mt-2">
              Refund requests must be made within the first week of the cohort and before completing
              more than the first module of training. After substantial course materials have been
              accessed, the enrollment fee becomes non-refundable.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">How to request a refund</h2>
            <p className="mt-2">
              Contact us on WhatsApp or by phone at +234 906 555 0142 with your name and enrollment
              details. We aim to respond to all requests within 5 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
