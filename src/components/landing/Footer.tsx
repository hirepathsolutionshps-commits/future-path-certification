import { Link } from "@tanstack/react-router";
import logo from "@/assets/hire-path-logo.jpeg.asset.json";
import { Seal } from "@/components/Seal";

const PHONE_DISPLAY = "+234 906 555 0142";
const PHONE_DIGITS = "2349065550142";

export function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="h-px w-full bg-gold" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <Seal size={56} withText={false} />
          <p className="mt-7 max-w-2xl font-display text-xl font-semibold leading-snug tracking-tight text-background sm:text-2xl">
            Secure your future. Work from anywhere. Change your life.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
            <a
              href={`tel:${PHONE_DIGITS}`}
              className="font-data text-sm text-gold hover:brightness-110"
            >
              Call: {PHONE_DISPLAY}
            </a>
            <span className="hidden text-background/30 sm:inline">·</span>
            <a
              href={`https://wa.me/${PHONE_DIGITS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-data text-sm text-gold hover:brightness-110"
            >
              WhatsApp: {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-7 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <img
              src={logo.url}
              alt="Hire Path Solutions logo"
              width={24}
              height={24}
              className="h-6 w-6 rounded-[5px]"
            />
            <span className="text-sm font-medium text-background/80">
              © {new Date().getFullYear()} Hire Path Solutions
            </span>
          </div>
          <nav className="flex items-center gap-6 text-sm text-background/70">
            <Link to="/privacy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/refund" className="hover:text-gold">
              Refund Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
