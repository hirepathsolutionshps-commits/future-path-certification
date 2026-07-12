import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const TITLE = "Programs | HirePath Solutions";
const DESCRIPTION =
  "Explore HirePath Solutions programs. Practical, industry relevant training designed to get you job ready and earning faster.";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ProgramsPage,
});

const WA_LINK = "https://wa.me/2348068579982";

const PROGRAMS = [
  {
    id: "va-blueprint",
    title: "Virtual Assistant Blueprint",
    description:
      "Become a remote Healthcare VA serving US and UK clients. 6 week intensive. No experience needed.",
    badge: "Enrolling Now",
    badgeVariant: "gold" as const,
    cta: "View Program",
    available: true,
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    description:
      "Learn to build AI powered workflows and automations that businesses pay premium rates for.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Master product design from wireframes to high fidelity prototypes and land your first design job.",
    badge: "Coming Soon",
    badgeVariant: "muted" as const,
    cta: "Join Waitlist",
    available: false,
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Enter one of the world's fastest growing fields. Learn threat analysis, ethical hacking, and more.",
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

function WAIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

type WaitlistForm = { name: string; email: string };

function WaitlistModal({
  programName,
  onClose,
}: {
  programName: string;
  onClose: () => void;
}) {
  const [form, setForm] = useState<WaitlistForm>({ name: "", email: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async () => {
    if (!form.name.trim() || form.name.trim().length < 2) {
      toast.error("Please enter your name");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }

    setSubmitting(true);
    try {
      const { error } = await supabase.from("program_waitlist").insert({
        program_name: programName,
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
      });

      if (error) {
        console.error("[db]", error);
        toast.error("Something went wrong. Please try again.");
        return;
      }

      // Fire-and-forget: notify admin + send user confirmation email
      fetch("/api/send-waitlist-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim().toLowerCase(),
          program_name: programName,
        }),
      }).catch((err) => console.error("[waitlist-email]", err));

      setDone(true);
    } catch (err) {
      console.error("[waitlist]", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-xl border border-border bg-background p-8 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {done ? (
          <div className="text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
              <svg className="h-6 w-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">You're on the list!</h3>
            <p className="mt-2 text-sm text-graphite">
              We'll notify you as soon as {programName} enrollment opens.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="font-display text-xl font-semibold text-ink">
              Join the {programName} Waitlist
            </h3>
            <p className="mt-2 text-sm text-graphite">
              Be the first to know when enrollment opens. No spam, just one notification.
            </p>
            <div className="mt-5 space-y-3">
              <input
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none"
                placeholder="Your full name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                autoComplete="name"
              />
              <input
                className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none"
                placeholder="Your email address"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                inputMode="email"
                autoComplete="email"
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="mt-5 w-full rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Saving…" : "Join Waitlist"}
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full text-center text-xs text-graphite hover:text-ink"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function ProgramsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [waitlistProgram, setWaitlistProgram] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background font-sans text-ink antialiased">

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="HirePath Solutions">
            <img
              src="/logo.png"
              alt="HirePath Solutions logo"
              width={32}
              height={32}
              className="h-8 w-8 rounded-[7px]"
              decoding="async"
            />
            <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
              HirePath <span className="text-gold">Solutions</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/#about" },
              { label: "Programs", href: "/programs" },
              { label: "Contact", href: "/#contact" },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={`text-sm font-medium transition-colors hover:text-gold ${
                    l.label === "Programs" ? "text-gold" : "text-graphite"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <Link
            to="/va-blueprint"
            className="hidden rounded-sm bg-gold px-5 py-2.5 text-xs font-semibold tracking-wide text-ink transition-opacity hover:opacity-90 md:inline-flex"
          >
            Enroll Now
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="flex h-[14px] w-5 flex-col justify-between">
              <span className={`block h-0.5 w-full origin-center rounded-full bg-ink transition-transform duration-300 ease-in-out${menuOpen ? " translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-0.5 w-full rounded-full bg-ink transition-opacity duration-200 ease-in-out${menuOpen ? " opacity-0" : ""}`} />
              <span className={`block h-0.5 w-full origin-center rounded-full bg-ink transition-transform duration-300 ease-in-out${menuOpen ? " -translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </nav>

        <div
          className="overflow-hidden transition-all duration-300 md:hidden"
          style={{ maxHeight: menuOpen ? "280px" : "0px", opacity: menuOpen ? 1 : 0 }}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          <div className="border-t border-border bg-background px-5 pb-4">
            <ul className="flex flex-col gap-3 pt-4">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/#about" },
                { label: "Programs", href: "/programs" },
                { label: "Contact", href: "/#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} onClick={() => setMenuOpen(false)} className="block py-1 text-sm font-medium text-graphite hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/va-blueprint"
                  className="inline-flex w-full justify-center rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink"
                >
                  Enroll Now
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Our Programs</p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Programs built for the real world
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
            Every program is hands on, market tested, and designed to get you job ready. Not just certified.
          </p>
        </div>
      </section>

      {/* ── PROGRAM CARDS ── */}
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                  <h2
                    className={`font-display text-lg font-semibold leading-snug ${
                      p.available ? "text-background" : "text-ink"
                    }`}
                  >
                    {p.title}
                  </h2>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide ${
                      p.badgeVariant === "gold"
                        ? "bg-gold text-ink"
                        : "border border-border bg-background text-graphite"
                    }`}
                  >
                    {p.badge}
                  </span>
                </div>
                <p
                  className={`mt-3 flex-1 text-sm leading-relaxed ${
                    p.available ? "text-background/70" : "text-graphite"
                  }`}
                >
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

      {/* ── FOOTER ── */}
      <footer className="bg-ink text-background">
        <div className="h-px w-full bg-gold" />
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <img src="/logo.png" alt="HirePath Solutions logo" width={48} height={48} className="h-12 w-12 rounded-xl" loading="lazy" decoding="async" />
            <p className="mt-4 font-display text-xl font-semibold text-background sm:text-2xl">
              Train Smart, Earn More.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:08068579982"
                className="inline-flex items-center gap-2 rounded-sm border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-gold hover:text-gold"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
                08068579982
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
              <img src="/logo.png" alt="" width={20} height={20} className="h-5 w-5 rounded-[4px]" loading="lazy" decoding="async" />
              <span className="text-sm font-medium text-background/70">
                © {new Date().getFullYear()} HirePath Solutions
              </span>
            </div>
            <nav className="flex items-center gap-6 text-sm text-background/60">
              <Link to="/privacy" className="hover:text-gold transition-colors">Privacy</Link>
              <Link to="/refund" className="hover:text-gold transition-colors">Refund Policy</Link>
              <Link to="/va-blueprint" className="hover:text-gold transition-colors">VA Blueprint</Link>
            </nav>
          </div>
        </div>
      </footer>

      {/* ── WAITLIST MODAL ── */}
      {waitlistProgram && (
        <WaitlistModal
          programName={waitlistProgram}
          onClose={() => setWaitlistProgram(null)}
        />
      )}
    </div>
  );
}
