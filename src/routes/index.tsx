import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import ogImage from "@/assets/og-image.jpg";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { Curriculum } from "@/components/landing/Curriculum";
import { Benefits } from "@/components/landing/Benefits";
import { Pricing } from "@/components/landing/Pricing";
import { ApplicationForm } from "@/components/landing/ApplicationForm";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";

const TITLE = "Hire Path Solutions — Become a Healthcare Virtual Assistant";
const DESCRIPTION =
  "6-week training to become a remote Healthcare Virtual Assistant for US & UK clients. Work from anywhere, get paid in dollars from Lagos. No experience required.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "Healthcare Virtual Assistant Training",
          description: DESCRIPTION,
          provider: {
            "@type": "Organization",
            name: "Hire Path Solutions",
            sameAs: "/",
          },
          offers: {
            "@type": "Offer",
            price: "50000",
            priceCurrency: "NGN",
            availability: "https://schema.org/InStock",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
            courseWorkload: "P6W",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Curriculum />
        <Benefits />
        <Pricing />
        <ApplicationForm />
        <Faq />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
