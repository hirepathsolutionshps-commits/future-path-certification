import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface Props {
  programName: string;
  heading: string;
  tagline: string;
  description: string;
  keywords?: string[];
}

export function ComingSoonProgramPage({
  programName,
  heading,
  tagline,
  description,
  keywords = [],
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter your name");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitting(true);
    try {
      const { error } = await supabase.from("program_waitlist").insert({
        program_name: programName,
        name: name.trim(),
        email: email.trim().toLowerCase(),
      });
      if (error) {
        console.error("[db]", error);
        toast.error("Something went wrong. Please try again.");
        return;
      }
      fetch("/api/send-waitlist-notification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
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

  const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Programs", href: "/programs" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-ink antialiased">

      {/* ── NAV ── */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5" aria-label="HirePath Solutions home">
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
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-graphite transition-colors hover:text-gold"
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

      <main>
        {/* ── HERO ── */}
        <section className="border-b border-border bg-cream">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <span className="inline-block rounded-full border border-border bg-background px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-graphite">
              Coming Soon
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
              {heading}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-graphite sm:text-lg">
              {tagline}
            </p>
          </div>
        </section>

        {/* ── BODY ── */}
        <section className="bg-background">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

              {/* Left — description */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  About This Program
                </p>
                <p className="mt-4 text-base leading-relaxed text-graphite">{description}</p>

                {keywords.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {keywords.map((k) => (
                      <span
                        key={k}
                        className="rounded-sm border border-border bg-cream px-3 py-1 text-xs font-medium text-graphite"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-8">
                  <Link
                    to="/programs"
                    className="text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline"
                  >
                    ← Back to all programs
                  </Link>
                </div>
              </div>

              {/* Right — waitlist + VA Blueprint CTA */}
              <div className="space-y-6">
                <div className="rounded-xl border border-gold/30 bg-cream p-8">
                  {done ? (
                    <div className="py-4 text-center">
                      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15">
                        <svg
                          className="h-6 w-6 text-gold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h2 className="mt-4 font-display text-xl font-semibold text-ink">
                        You're on the list!
                      </h2>
                      <p className="mt-2 text-sm text-graphite">
                        We'll notify you as soon as {programName} enrollment opens.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                        Join the Waitlist
                      </p>
                      <h2 className="mt-2 font-display text-xl font-semibold text-ink">
                        Be first to know when we launch
                      </h2>
                      <p className="mt-2 text-sm text-graphite">
                        No spam — just one notification when enrollment opens.
                      </p>
                      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                        <input
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none"
                          placeholder="Your full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoComplete="name"
                        />
                        <input
                          className="w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none"
                          placeholder="Your email address"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          inputMode="email"
                          autoComplete="email"
                        />
                        <button
                          type="submit"
                          disabled={submitting}
                          className="w-full rounded-sm bg-gold px-5 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
                        >
                          {submitting ? "Saving…" : "Join Waitlist"}
                        </button>
                      </form>
                    </>
                  )}
                </div>

                <div className="rounded-xl border border-border bg-background p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    Ready to Start Now?
                  </p>
                  <h3 className="mt-2 font-display text-base font-semibold text-ink">
                    The VA Blueprint is enrolling
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite">
                    Our flagship Healthcare Virtual Assistant program is open. Train remotely and
                    get hired by US &amp; UK clients — no experience required.
                  </p>
                  <Link
                    to="/va-blueprint"
                    className="mt-4 inline-flex rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-ink/80"
                  >
                    View VA Blueprint →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-ink text-background">
        <div className="h-px w-full bg-gold" />
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <img
              src="/logo.png"
              alt="HirePath Solutions logo"
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl"
              loading="lazy"
              decoding="async"
            />
            <p className="mt-4 font-display text-xl font-semibold text-background sm:text-2xl">
              Train Smart, Earn More.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="tel:08068579982"
                className="inline-flex items-center gap-2 rounded-sm border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-gold hover:text-gold"
              >
                08068579982
              </a>
              <a
                href="https://wa.me/2348068579982"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
              >
                Message HPS on WhatsApp
              </a>
            </div>
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-7 sm:flex-row">
            <span className="text-sm font-medium text-background/70">
              © {new Date().getFullYear()} HirePath Solutions
            </span>
            <nav className="flex items-center gap-6 text-sm text-background/60">
              <Link to="/privacy" className="transition-colors hover:text-gold">Privacy</Link>
              <Link to="/refund" className="transition-colors hover:text-gold">Refund Policy</Link>
              <Link to="/va-blueprint" className="transition-colors hover:text-gold">VA Blueprint</Link>
            </nav>
          </div>
        </div>
      </footer>

    </div>
  );
}
