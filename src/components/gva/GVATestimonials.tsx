import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    name: "Amara Osei",
    location: "Lagos, Nigeria",
    quote:
      "I had no remote work experience before this program. Six weeks later I was handling email management and scheduling for a UK-based startup. The practical training made all the difference.",
    cohort: "Cohort 1",
  },
  {
    name: "Ifeanyi Chukwu",
    location: "Abuja, Nigeria",
    quote:
      "The curriculum is straightforward and outcome-focused. By week four I already had clients reaching out. I landed my first paying remote role before the program even ended.",
    cohort: "Cohort 1",
  },
  {
    name: "Blessing Adamu",
    location: "Port Harcourt, Nigeria",
    quote:
      "The placement support is real — they stayed with me until I had a paying client. I now earn more as a remote VA than I did in my previous full-time office job.",
    cohort: "Cohort 2",
  },
];

export function GVATestimonials() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow text-gold">Student Stories</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Graduates Who Made the Move
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-background p-6 shadow-sm">
                <blockquote className="flex-1 text-sm leading-relaxed text-graphite">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-semibold text-gold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-ink">{t.name}</p>
                    <p className="text-xs text-graphite/70">
                      {t.location} &middot; {t.cohort}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
