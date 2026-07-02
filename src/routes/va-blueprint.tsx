import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import ogImage from "@/assets/og-image.jpg";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";

const Curriculum = lazy(() => import("@/components/landing/Curriculum").then(m => ({ default: m.Curriculum })));
const Benefits = lazy(() => import("@/components/landing/Benefits").then(m => ({ default: m.Benefits })));
const Pricing = lazy(() => import("@/components/landing/Pricing").then(m => ({ default: m.Pricing })));
const Testimonials = lazy(() => import("@/components/landing/Testimonials").then(m => ({ default: m.Testimonials })));
const ApplicationForm = lazy(() => import("@/components/landing/ApplicationForm").then(m => ({ default: m.ApplicationForm })));
const Faq = lazy(() => import("@/components/landing/Faq").then(m => ({ default: m.Faq })));
const Footer = lazy(() => import("@/components/landing/Footer").then(m => ({ default: m.Footer })));

const TITLE = "Healthcare Virtual Assistant Blueprint | Hire Path Solutions";
const DESCRIPTION =
  "6-week training to become a remote Healthcare Virtual Assistant for US & UK clients. Work from anywhere, get paid in dollars from Lagos. No experience required.";

export const Route = createFileRoute("/va-blueprint")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/va-blueprint" },
      { property: "og:image", content: ogImage },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/va-blueprint" }],
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
  component: VaBlueprint,
});

function SectionFallback() {
  return <div className="h-32" />;
}

function VaBlueprint() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Suspense fallback={<SectionFallback />}>
          <Curriculum />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ApplicationForm />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Faq />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Toaster position="top-center" />
    </div>
  );
}
