import { Reveal } from "@/components/Reveal";

const weeks = [
  {
    week: "01",
    title: "VA Fundamentals & Remote Work Setup",
    detail:
      "What a General VA does, how remote work really operates, and how to set yourself up professionally from day one.",
  },
  {
    week: "02",
    title: "Email, Calendar & Inbox Management",
    detail:
      "Master the tools clients depend on — Gmail, Outlook, Google Calendar — and learn to manage a busy inbox with zero errors.",
  },
  {
    week: "03",
    title: "Communication & Client Management Tools",
    detail:
      "Work confidently in Slack, Zoom, and Notion. Professional communication standards that keep clients coming back.",
  },
  {
    week: "04",
    title: "Data Entry, Scheduling & Admin Systems",
    detail:
      "Handle spreadsheets, CRM basics, appointment scheduling, and the day-to-day admin tasks clients pay good money for.",
  },
  {
    week: "05",
    title: "Freelance Platforms & Client Acquisition",
    detail:
      "Set up your profiles on Upwork, Fiverr, and direct outreach channels. Learn to pitch, propose, and close your first client.",
  },
  {
    week: "06",
    title: "Portfolio, Interview Prep & Job Placement Support",
    detail:
      "Build a portfolio that proves your skills, ace your first client interview, and tap into our placement network for your first paid role.",
  },
];

export function GVACurriculum() {
  return (
    <section id="curriculum" className="bg-background">
      <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow text-gold">The Transcript, 6 Weeks</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            What You&apos;ll Learn
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-graphite">
            A genuine, sequential program where each week builds on the last — from complete
            beginner to job-ready General VA.
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
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {w.title}
                  </h3>
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
