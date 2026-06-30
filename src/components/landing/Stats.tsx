import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "₦200K-₦800K+", unit: "/ month", label: "Earning potential" },
  { value: "100%", unit: "remote", label: "Work from anywhere" },
  { value: "US & UK", unit: "clients", label: "Paid in dollars" },
];

export function Stats() {
  return (
    <section className="bg-ink text-background">
      <div className="h-px w-full bg-gold" />
      <div className="mx-auto grid max-w-6xl gap-px px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-3">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.12}
            className="px-2 text-center md:px-6 md:text-left"
          >
            <div className="font-data text-3xl font-semibold tracking-tight text-gold sm:text-4xl">
              {s.value}
              <span className="ml-1.5 font-data text-sm font-normal text-background/60">{s.unit}</span>
            </div>
            <div className="eyebrow mt-3 text-background/70">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
