import { CtaButton } from "./CtaButton";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 nav-material">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Hire Path Solutions home">
          <img
            src="/logo.png"
            alt="Hire Path Solutions logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-[7px]"
          />
          <span className="font-display text-base font-semibold tracking-tight text-ink sm:text-lg">
            Hire Path <span className="text-gold">Solutions</span>
          </span>
        </a>
        <CtaButton href="#apply" variant="ink" className="px-5 py-2.5 text-xs sm:text-sm">
          Apply Now
        </CtaButton>
      </nav>
      {/* Scroll edge effect: content softly fades under floating chrome instead of a hard 1px rule */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-full h-4 bg-gradient-to-b from-background/70 to-transparent"
      />
    </header>
  );
}
