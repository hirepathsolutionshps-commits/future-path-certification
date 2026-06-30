import { motion, useReducedMotion } from "framer-motion";
import { Seal } from "@/components/Seal";
import { CtaButton } from "./CtaButton";

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
    <section id="top" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-28">
        <div className="text-center lg:text-left">
          <motion.p {...fade(0.05)} className="eyebrow text-gold">
            New Cohort · 6 Weeks
          </motion.p>
          <motion.h1
            {...fade(0.12)}
            className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
          >
            Become a Healthcare Virtual Assistant
          </motion.h1>
          <motion.p
            {...fade(0.2)}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite lg:mx-0 sm:text-lg"
          >
            Train for six weeks, then work remotely with US &amp; UK healthcare clients and get
            paid in dollars, right from Lagos. No experience required. We train you, place you, and
            stand behind you.
          </motion.p>
          <motion.div
            {...fade(0.3)}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
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
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-full bg-cream blur-2xl" />
            <Seal size={300} draw className="drop-shadow-sm" />
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
