import { createFileRoute, Link } from "@tanstack/react-router";

const TITLE = "Privacy Policy | Hire Path Solutions";
const DESCRIPTION =
  "How Hire Path Solutions collects, uses, and protects the information you share when you apply to our Healthcare Virtual Assistant program.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <Link to="/" className="font-data text-xs uppercase tracking-widest text-gold hover:underline">
          ← Back home
        </Link>
        <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 leading-relaxed text-graphite">
          <p>
            Hire Path Solutions respects your privacy. This policy explains what information we
            collect and how we use it.
          </p>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Information we collect</h2>
            <p className="mt-2">
              When you apply, we collect your name, phone number, email address, whether you have a
              laptop, and your preferred schedule. We use this solely to process your application and
              to contact you about the program.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">How we use your information</h2>
            <p className="mt-2">
              We use your details to confirm your seat, communicate by phone, WhatsApp, or email, and
              deliver the training. We do not sell your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Data security</h2>
            <p className="mt-2">
              Your information is stored securely and access is restricted to our team. You may
              request that we update or delete your data at any time by contacting us.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
            <p className="mt-2">
              For any privacy questions, reach us on WhatsApp or by phone at 08068579882.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
