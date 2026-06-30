import { Reveal } from "@/components/Reveal";

const weeks = [
  {
    week: "01",
    title: "Foundations of Healthcare VA Work",
    detail:
      "How the US & UK healthcare system works, what a Healthcare Virtual Assistant actually does, and the standards clients expect.",
  },
  {
    week: "02",
    title: "Tools, Systems & HIPAA Basics",
    detail:
      "EHR/EMR systems, scheduling tools, telehealth platforms, and patient-data privacy fundamentals you must know.",
  },
  {
    week: "03",
    title: "Patient Communication & Scheduling",
    detail:
      "Professional calls, appointment setting, follow-ups, and handling sensitive conversations with confidence.",
  },
  {
    week: "04",
    title: "Medical Billing & Admin Workflows",
    detail:
      "Insurance verification basics, claims support, documentation, and the day-to-day admin clients pay for.",
  },
  {
    week: "05",
    title: "Portfolio, CV & Personal Brand",
    detail:
      "Build a portfolio that proves your skills, a CV that lands interviews, and profiles that attract US/UK clients.",
  },
  {
    week: "06",
    title: "Getting Hired & Getting Paid",
    detail:
      "Where to find clients, how to interview, how to get paid in dollars from Lagos, and your guaranteed placement support.",
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="bg-background">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow text-gold">The Transcript · 6 Weeks</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What You&apos;ll Learn
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-graphite">
            A genuine, sequential program where each week builds on the last, exactly like an official
            course of study.
          </p>
        </Reveal>

        <ol className="border-t border-border">
          {weeks.map((w, i) => (
            <Reveal as="li" key={w.week} delay={i * 0.06}>
              <div className="grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 border-b border-border py-6 sm:gap-x-8">
                <span className="font-data text-sm font-semibold text-gold sm:text-base">
                  WK&nbsp;{w.week}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{w.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-graphite sm:text-base">
                    {w.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
