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

      {/* Earnings card — floating left on large screens only */}
      <motion.div
        initial={reduce ? false : { opacity: 0, x: -24 }}
        animate={reduce ? undefined : { opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
        className="pointer-events-none absolute left-6 top-1/2 hidden -translate-y-1/2 xl:block 2xl:left-12"
      >
        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-56 overflow-hidden rounded-2xl border border-border bg-white/90 shadow-xl backdrop-blur-sm"
        >
          <div className="bg-ink px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-gold">Graduate Earnings</p>
          </div>
          <div className="p-4">
            <p className="font-mono text-2xl font-bold text-ink">$600 – $1,200</p>
            <p className="mt-0.5 text-xs text-graphite">per month, remote</p>
            <div className="mt-3 space-y-1.5">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-graphite">Placement rate</span>
                <span className="font-semibold text-ink">82%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                <div className="h-full w-[82%] rounded-full bg-gold" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 rounded-lg bg-green-50 px-2.5 py-1.5">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                <polyline points="16 7 22 7 22 13" />
              </svg>
              <p className="text-[10px] font-medium text-green-700">Avg. 74% income increase</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="mt-3 flex items-center gap-2.5 rounded-xl border border-gold/20 bg-ink px-3.5 py-2.5 shadow-md"
        >
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <p className="text-[11px] font-medium text-background">New cohort now open</p>
        </motion.div>
      </motion.div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
