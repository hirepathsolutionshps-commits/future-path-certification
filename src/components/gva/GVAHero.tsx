import { motion, useReducedMotion } from "framer-motion";
import { Wrench, GraduationCap, Briefcase } from "lucide-react";
import { CtaButton } from "@/components/landing/CtaButton";
import { Reveal } from "@/components/Reveal";

const WA_LINK = "https://wa.me/2348068579982";

const pillars = [
  {
    icon: Wrench,
    title: "Practical Skills",
    detail: "Hands-on training in real tools every VA uses daily — no fluff, no theory.",
  },
  {
    icon: GraduationCap,
    title: "Expert Trainers",
    detail: "Learn from coaches who have placed VAs with real remote clients.",
  },
  {
    icon: Briefcase,
    title: "Job Support",
    detail: "We help you pitch, interview, and land a paying remote role after graduation.",
  },
];

const trust = [
  { value: "₦60,000", label: "One-time fee" },
  { value: "6", label: "Week program" },
  { value: "100%", label: "Remote work" },
];

export function GVAHero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <>
      {/* Hero */}
      <section
        id="top"
        className="relative overflow-hidden bg-background"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,151,28,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <motion.p
              {...fade(0.05)}
              className="eyebrow inline-flex items-center justify-center gap-2 text-gold"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              July Cohort
            </motion.p>

            <motion.h1
              {...fade(0.12)}
              className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              General Virtual Assistant Cohort
            </motion.h1>

            <motion.p
              {...fade(0.2)}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg"
            >
              Learn in-demand skills, work remotely and build a successful career as a General
              Virtual Assistant.
            </motion.p>

            <motion.p
              {...fade(0.26)}
              className="mt-3 text-sm text-graphite/70"
            >
              Your path to freedom, flexibility and financial growth starts here.
            </motion.p>

            <motion.div
              {...fade(0.3)}
              className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <CtaButton href="#apply" variant="gold" className="w-full sm:w-auto">
                Enroll Now
              </CtaButton>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline"
              >
                Talk to an Advisor →
              </a>
            </motion.div>

            <motion.div
              {...fade(0.5)}
              className="mt-10 grid grid-cols-3 divide-x divide-border rounded-md border border-border bg-cream lg:mt-12"
            >
              {trust.map((t) => (
                <div key={t.label} className="px-4 py-5 text-center">
                  <p className="font-data text-xl font-bold text-ink sm:text-2xl">{t.value}</p>
                  <p className="mt-0.5 text-xs text-graphite">{t.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      </section>

      {/* Value pillars */}
      <section className="bg-ink text-background">
        <div className="h-px w-full bg-gold" />
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1} className="flex flex-col items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-gold/20">
                  <p.icon className="h-5 w-5 text-gold" strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-background">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-background/60">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
