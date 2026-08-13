import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";

const benefits = [
  {
    title: "Step-by-step training",
    detail: "A structured 6-week path from complete beginner to confident, job-ready General VA.",
  },
  {
    title: "Real tools & templates",
    detail:
      "Done-for-you scripts, email templates, and workflow checklists you'll use on real client work from day one.",
  },
  {
    title: "Portfolio & CV help",
    detail: "We help you build a portfolio and CV that prove your skills and attract remote clients.",
  },
  {
    title: "Community access",
    detail:
      "Join a private community of fellow VAs, coaches, and alumni for support, accountability, and ongoing opportunities.",
  },
  {
    title: "Job placement support",
    detail:
      "We don't just train you — we actively help you land a real, paying remote client through our network.",
  },
];

export function GVABenefits() {
  return (
    <>
      {/* "We Train You and Get You Hired" section */}
      <section className="bg-ink text-background">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="text-center">
            <p className="eyebrow text-gold">Real Results</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-background sm:text-4xl">
              We Train You And Get You Hired
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-background/70 sm:text-lg">
              Most training programs stop at the certificate. We go further. Our job is not done
              until you have a paying remote client. Every module in this program is designed around
              real tasks clients pay for — and our placement support stays with you until you land
              the role.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {[
              { stat: "6 Weeks", label: "From zero to job-ready" },
              { stat: "100%", label: "Remote-first curriculum" },
              { stat: "₦60K", label: "One-time investment" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1} className="rounded-md border border-gold/25 bg-background/5 px-6 py-8 text-center">
                <p className="font-data text-3xl font-bold text-gold">{s.stat}</p>
                <p className="mt-2 text-sm text-background/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-cream">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <Reveal className="mb-12 text-center">
            <p className="eyebrow text-gold">Included in Your Enrollment</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              You Will Get
            </h2>
          </Reveal>

          <ul className="border-t border-border/70">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 border-b border-border/70 py-5 sm:gap-6">
                  <Seal size={34} withText={false} className="mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">{b.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-graphite sm:text-base">
                      {b.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
