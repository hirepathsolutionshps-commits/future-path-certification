import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";

const benefits = [
  {
    title: "Step-by-step training",
    detail: "A structured 6-week path from complete beginner to job-ready Healthcare VA.",
  },
  {
    title: "Tools & templates",
    detail: "Done-for-you scripts, checklists, and templates you'll use on real client work.",
  },
  {
    title: "Portfolio & CV help",
    detail: "We help you build a portfolio and CV that get you noticed by US & UK clients.",
  },
  {
    title: "Community access",
    detail: "Join a private community of fellow VAs, mentors, and alumni for ongoing support.",
  },
  {
    title: "Guaranteed paying job",
    detail: "We don't just train you — we help you land a real, paying client through our network.",
  },
];

export function Benefits() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow text-gold">Included in Your Enrollment</p>
          <h2 className="mt-4 font-display text-3xl font-600 tracking-tight text-ink sm:text-4xl">
            You Will Get
          </h2>
        </Reveal>

        <ul className="border-t border-border/70">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={i * 0.06}>
              <div className="flex items-start gap-4 border-b border-border/70 py-5 sm:gap-6">
                <Seal size={34} withText={false} className="mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-600 text-ink">{b.title}</h3>
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
  );
}
