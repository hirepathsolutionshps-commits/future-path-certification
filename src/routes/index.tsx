import { createFileRoute, Link } from "@tanstack/react-router";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TITLE = "HirePath Solutions | Train Smart, Earn More";
const DESCRIPTION =
  "HirePath Solutions helps you discover in-demand career paths, learn practical skills, build your CV and portfolio, and get hired.";

const WA_LINK = "https://wa.me/2348068579982";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

// ── Data ──────────────────────────────────────────────────────────────────────

const PROGRAMS = [
  {
    id: "va-blueprint",
    title: "Virtual Assistant Blueprint",
    description:
      "Become a remote Healthcare VA serving US & UK clients. 6-week intensive. No experience needed.",
    badge: "Enrolling Now",
    badgeVariant: "gold" as const,
    cta: "View Program",
    available: true,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Learn to build AI-powered workflows and automations that businesses pay premium rates for.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Master product design from wireframes to high-fidelity prototypes and land your first design job.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Enter one of the world's fastest-growing fields. Learn threat analysis, ethical hacking, and more.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
  {
    id: "crypto",
    title: "Crypto",
    description:
      "Understand blockchain, DeFi, and crypto trading strategies from fundamentals to advanced practice.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
  {
    id: "faceless-youtube",
    title: "Faceless YouTube Automation",
    description:
      "Build a monetised YouTube channel without showing your face using AI tools and proven frameworks.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
];

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Contact", href: "#contact" },
];

const MARQUEE_ITEMS = [
  "VA Blueprint", "AI Automation", "UI/UX Design", "Cybersecurity",
  "Crypto Trading", "YouTube Automation", "100% Remote", "No Experience Required",
  "Get Hired Faster", "Earn in Dollars",
];

// ── Hooks ─────────────────────────────────────────────────────────────────────

/** Prevents framer-motion SSR hydration flash by deferring animations to after mount */
function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return mounted;
}

/** Reveals element when it enters the viewport — defers rendering until near-visible */
function useInView(rootMargin = "300px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);
  return { ref, inView };
}

// ── Lazy below-fold sections ──────────────────────────────────────────────────
// The wrapper always stays in the DOM (so anchor IDs like #about work),
// but inner content is only rendered once near the viewport.

function LazySection({
  children,
  id,
  className,
  minHeight = "4rem",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
  minHeight?: string;
}) {
  const { ref, inView } = useInView("300px");
  return (
    <div id={id} ref={ref} className={className} style={!inView ? { minHeight } : undefined}>
      {inView ? children : null}
    </div>
  );
}

// ── WhatsApp Icon ─────────────────────────────────────────────────────────────

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

function HomePage() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistProgram, setWaitlistProgram] = useState<string | null>(null);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Animate hero text — only after hydration to prevent SSR flash
  const fade = (delay = 0) =>
    !mounted || reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay },
        };

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="min-h-screen bg-background font-sans text-ink antialiased">

        {/* ── NAVIGATION ── */}
        <header id="top" className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
          <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
            <a href="#top" className="flex items-center gap-2.5" aria-label="HirePath Solutions">
              <img
                src="/logo.png"
                alt="HirePath Solutions logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-[7px]"
                fetchPriority="high"
              />
              <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
                HirePath <span className="text-gold">Solutions</span>
              </span>
            </a>

            {/* Desktop links */}
            <ul className="hidden items-center gap-7 md:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm font-medium text-graphite transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#programs"
              className="hidden rounded-sm bg-ink px-5 py-2.5 text-xs font-semibold tracking-wide text-background transition-colors hover:bg-ink/80 md:inline-flex"
            >
              Explore Programs
            </a>

            {/* Animated hamburger → X */}
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="relative flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="flex h-4 w-5 flex-col justify-between">
                <span
                  className="block h-0.5 w-full rounded-full bg-ink origin-center transition-all duration-300"
                  style={menuOpen ? { transform: "translateY(7px) rotate(45deg)" } : {}}
                />
                <span
                  className="block h-0.5 w-full rounded-full bg-ink transition-all duration-200"
                  style={menuOpen ? { opacity: 0, transform: "scaleX(0)" } : {}}
                />
                <span
                  className="block h-0.5 w-full rounded-full bg-ink origin-center transition-all duration-300"
                  style={menuOpen ? { transform: "translateY(-7px) rotate(-45deg)" } : {}}
                />
              </span>
            </button>
          </nav>

          {/* Mobile menu — slide down */}
          <div
            className="overflow-hidden transition-all duration-300 md:hidden"
            style={{ maxHeight: menuOpen ? "320px" : "0px", opacity: menuOpen ? 1 : 0 }}
            aria-hidden={!menuOpen}
            inert={!menuOpen}
          >
            <div className="border-t border-border bg-background px-5 pb-4">
              <ul className="flex flex-col gap-3 pt-4">
                {NAV_LINKS.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-1 text-sm font-medium text-graphite hover:text-gold"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#programs"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex w-full justify-center rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-background"
                  >
                    Explore Programs
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* ── HERO — loads immediately ── */}
        <section
          className="relative overflow-hidden bg-background"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(201,151,28,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        >
          {/* Ambient orbs — only render after mount to avoid SSR mismatch */}
          {mounted && !reduce && (
            <>
              <m.div
                animate={{ y: [0, -28, 0], x: [0, 12, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
              />
              <m.div
                animate={{ y: [0, 22, 0], x: [0, -10, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="pointer-events-none absolute -bottom-12 -left-24 h-80 w-80 rounded-full bg-gold/8 blur-3xl"
              />
            </>
          )}

          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28">
            <div className="flex flex-col items-center text-center lg:items-center">
              <div className="w-full max-w-3xl">
                <m.p {...fade(0.05)} className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Career Training, Nigeria
                </m.p>
                <m.h1
                  {...fade(0.12)}
                  className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
                >
                  Confused About Your Career Path?
                </m.h1>
                <m.p
                  {...fade(0.2)}
                  className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg"
                >
                  We train you with in-demand skills, build your CV and portfolio, prepare you for
                  interviews, and help you get hired.
                </m.p>
                <m.div
                  {...fade(0.3)}
                  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                >
                  <a
                    href="#programs"
                    className="w-full rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90 sm:w-auto"
                  >
                    Explore Programs
                  </a>
                  <a href="#about" className="text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline">
                    Learn about us →
                  </a>
                </m.div>

                {/* Trust strip */}
                <m.div
                  {...fade(0.42)}
                  className="mt-12 grid grid-cols-3 divide-x divide-border rounded-md border border-border bg-cream"
                >
                  {[
                    { value: "8", label: "Programs" },
                    { value: "100%", label: "Remote" },
                    { value: "No Exp", label: "Required" },
                  ].map((s) => (
                    <div key={s.label} className="px-4 py-5 text-center">
                      <p className="font-mono text-xl font-bold text-ink sm:text-2xl">{s.value}</p>
                      <p className="mt-0.5 text-xs text-graphite">{s.label}</p>
                    </div>
                  ))}
                </m.div>
              </div>
            </div>
          </div>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        </section>

        {/* ── MARQUEE — loads immediately ── */}
        <div className="overflow-hidden border-y border-border bg-cream py-3.5">
          {mounted ? (
            <m.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="flex w-max gap-10 whitespace-nowrap"
            >
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-graphite/60">
                  {item}
                  <span className="h-1 w-1 rounded-full bg-gold/50" />
                </span>
              ))}
            </m.div>
          ) : (
            // Static fallback during SSR / before mount
            <div className="flex gap-10 whitespace-nowrap px-5">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-graphite/60">
                  {item}
                  <span className="h-1 w-1 rounded-full bg-gold/50" />
                </span>
              ))}
            </div>
          )}
        </div>

        {/* ── ABOUT — lazy: render when near viewport ── */}
        <LazySection id="about">
          <section className="bg-cream">
            <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Who We Are</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl">
                    We bridge the gap between ambition and employment.
                  </h2>
                </div>
                <div className="space-y-5 text-base leading-relaxed text-graphite">
                  <p>
                    HirePath Solutions is a career training company built for people who are ready
                    to work but don't know where to start. We identify the most in-demand skills in
                    the global job market and design practical programs around them.
                  </p>
                  <p>
                    We don't just hand you a certificate. We help you build a real portfolio, sharpen
                    your interview skills, and connect you with opportunities, remote and local, so
                    you can start earning faster.
                  </p>
                  <p>
                    Whether you're a fresh graduate, a career-switcher, or someone ready to earn in
                    foreign currency, HirePath gives you the roadmap and the support to get there.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── PROGRAMS — lazy ── */}
        <LazySection id="programs">
          <section className="bg-background">
            <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">What We Offer</p>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Programs built for the real world
                </h2>
                <p className="mx-auto mt-4 max-w-lg text-base text-graphite">
                  Every program is hands-on, market-tested, and designed to get you job-ready. Not just certified.
                </p>
              </div>

              <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {PROGRAMS.map((p) => (
                  <div
                    key={p.id}
                    className={`flex flex-col rounded-xl border p-6 ${
                      p.available
                        ? "border-gold/40 bg-ink text-background shadow-lg"
                        : "border-border bg-background"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`font-display text-lg font-semibold leading-snug ${p.available ? "text-background" : "text-ink"}`}>
                        {p.title}
                      </h3>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                          p.badgeVariant === "gold" ? "bg-gold text-ink" : "bg-border text-graphite"
                        }`}
                      >
                        {p.badge}
                      </span>
                    </div>
                    <p className={`mt-3 flex-1 text-sm leading-relaxed ${p.available ? "text-background/70" : "text-graphite"}`}>
                      {p.description}
                    </p>
                    <div className="mt-6">
                      {p.available ? (
                        <Link
                          to="/va-blueprint"
                          className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                        >
                          {p.cta}
                        </Link>
                      ) : (
                        <button
                          onClick={() => setWaitlistProgram(p.title)}
                          className="inline-flex w-full items-center justify-center rounded-sm border border-border bg-cream px-5 py-2.5 text-sm font-medium text-graphite transition-colors hover:border-gold/50 hover:text-ink"
                        >
                          {p.cta}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </LazySection>

        {/* ── WAITLIST MODAL — lazy ── */}
        {waitlistProgram && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-5 backdrop-blur-sm"
            onClick={() => setWaitlistProgram(null)}
          >
            <div
              className="w-full max-w-sm rounded-xl border border-border bg-background p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-xl font-semibold text-ink">
                Join the {waitlistProgram} Waitlist
              </h3>
              <p className="mt-2 text-sm text-graphite">
                Send us a WhatsApp message with your name and the program you're interested in.
                We'll notify you as soon as enrollment opens.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-gold"
              >
                <WAIcon size={16} />
                Message HPS on WhatsApp
              </a>
              <button
                onClick={() => setWaitlistProgram(null)}
                className="mt-3 w-full text-center text-xs text-graphite hover:text-ink"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* ── FOOTER — lazy ── */}
        <LazySection id="contact">
          <footer className="bg-ink text-background">
            <div className="h-px w-full bg-gold" />
            <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
              <div className="flex flex-col items-center text-center">
                <img src="/logo.png" alt="HirePath Solutions logo" width={48} height={48} className="h-12 w-12 rounded-xl" />
                <p className="mt-4 font-display text-xl font-semibold text-background sm:text-2xl">
                  Train Smart, Earn More.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:08068579882"
                    className="inline-flex items-center gap-2 rounded-sm border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-gold hover:text-gold"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                    </svg>
                    08068579882
                  </a>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                  >
                    <WAIcon size={14} />
                    Message HPS on WhatsApp
                  </a>
                </div>
              </div>

              <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-7 sm:flex-row">
                <div className="flex items-center gap-2.5">
                  <img src="/logo.png" alt="" width={20} height={20} className="h-5 w-5 rounded-[4px]" />
                  <span className="text-sm font-medium text-background/70">
                    © {new Date().getFullYear()} HirePath Solutions
                  </span>
                </div>
                <nav className="flex items-center gap-6 text-sm text-background/60">
                  <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
                  <Link to="/refund" className="hover:text-gold transition-colors">Refund Policy</Link>
                  <a href="/va-blueprint" className="hover:text-gold transition-colors">VA Blueprint</a>
                </nav>
              </div>
            </div>
          </footer>
        </LazySection>

      </div>
    </LazyMotion>
  );
}
