import { createFileRoute, Link } from "@tanstack/react-router";
import { RecruitmentForm } from "@/components/RecruitmentForm";

const TITLE = "Apply | Hire Path Solutions";
const DESCRIPTION =
  "Submit your application to join the HirePath Solutions team. Upload your CV and we'll be in touch within 5 business days.";

export const Route = createFileRoute("/recruitment")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/recruitment" }],
  }),
  component: RecruitmentPage,
});

function RecruitmentPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
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
          <Link
            to="/"
            className="text-sm font-medium text-graphite transition-colors hover:text-ink"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      <main>
        <RecruitmentForm />
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-8 text-center text-sm text-graphite/60">
        © {new Date().getFullYear()} HirePath Solutions · Lagos, Nigeria
      </footer>
    </div>
  );
}
