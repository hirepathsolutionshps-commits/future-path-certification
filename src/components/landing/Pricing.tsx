import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";
import { CtaButton } from "./CtaButton";

const includes = [
  "Full 6-week training program",
  "All tools, templates & resources",
  "Portfolio + CV review",
  "Private community access",
  "Guaranteed job placement support",
];

export function Pricing() {
  const cardRef = useRef<HTMLDivElement>(null);
  const inView = useInView(cardRef, { once: true, margin: "-120px" });
  const [shone, setShone] = useState(false);
  if (inView && !shone) setShone(true);

  return (
    <section id="pricing" className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-gold">Enrollment · Limited Cohort</p>
          <h2 className="mt-4 font-display text-3xl font-600 tracking-tight text-ink sm:text-4xl">
            Secure Your Seat
          </h2>
        </Reveal>

        <Reveal>
          <div
            ref={cardRef}
            data-shine={shone ? "true" : "false"}
            className="shine-sweep relative mx-auto max-w-xl overflow-hidden rounded-md border-2 border-gold bg-card p-8 text-center shadow-[0_24px_60px_-30px_rgba(201,151,28,0.5)] sm:p-12"
          >
            <div className="pointer-events-none absolute inset-2 rounded border border-gold/30" />

            <div className="relative">
              <div className="flex justify-center">
                <Seal size={64} withText={false} />
              </div>

              <p className="eyebrow mt-6 text-graphite">Certificate of Enrollment</p>
              <h3 className="mt-2 font-display text-2xl font-600 text-ink">
                Healthcare VA Program
              </h3>

              <div className="mt-7 flex items-end justify-center gap-3">
                <span className="font-data text-lg font-400 text-graphite line-through decoration-gold/60">
                  ₦100,000
                </span>
                <span className="font-data text-5xl font-700 tracking-tight text-ink">
                  ₦50,000
                </span>
              </div>
              <p className="mt-2 font-data text-xs uppercase tracking-widest text-gold">
                50% Cohort Discount
              </p>

              <ul className="mx-auto mt-8 max-w-sm space-y-2.5 text-left">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-graphite">
                    <span className="mt-0.5 font-data text-gold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <CtaButton href="#apply" variant="gold" className="w-full">
                  Claim Your Discounted Seat
                </CtaButton>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
