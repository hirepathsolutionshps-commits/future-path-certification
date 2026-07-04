import { motion, useReducedMotion } from "framer-motion";
import { CtaButton } from "./CtaButton";
import { Seal } from "@/components/Seal";

const trust = [
  { value: "6", label: "Week program" },
  { value: "100%", label: "Remote work" },
  { value: "US & UK", label: "Clients" },
];

export function Hero() {
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
    <section id="top" className="relative overflow-hidden bg-background" style={{ backgroundImage: "radial-gradient(circle, rgba(201,151,28,0.06) 1px, transparent 1px)", backgroundSize: "28px 28px" }}>
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p {...fade(0.05)} className="eyebrow inline-flex items-center justify-center gap-2 text-gold">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            New Cohort, 6 Weeks
          </motion.p>
          <motion.h1
            {...fade(0.12)}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Become a Healthcare Virtual Assistant
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg"
          >
            Train for six weeks, then work remotely with US &amp; UK healthcare clients and get
            paid in dollars, right from Lagos. No experience required. We train you, place you, and
            stand behind you.
          </motion.p>
          <motion.div
            {...fade(0.3)}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <CtaButton href="#apply" variant="gold" className="w-full sm:w-auto">
              Apply for This Cohort
            </CtaButton>
            <a
              href="#curriculum"
              className="text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline"
            >
              See the 6-week curriculum →
            </a>
          </motion.div>

          {/* Seal — centered badge on mobile/tablet, hidden on large (shown floating right instead) */}
          <motion.div
            {...fade(0.42)}
            className="mt-10 flex justify-center lg:hidden"
          >
            <Seal size={96} withText draw />
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

      {/* Seal — floating right on large screens only */}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.88 }}
        animate={reduce ? undefined : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.45 }}
        className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block 2xl:right-12"
      >
        <Seal size={148} withText draw />
      </motion.div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
