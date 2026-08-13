import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import ogImage from "@/assets/og-image.jpg";
import { Nav } from "@/components/landing/Nav";
import { GVAHero } from "@/components/gva/GVAHero";

const GVACurriculum = lazy(() =>
  import("@/components/gva/GVACurriculum").then((m) => ({ default: m.GVACurriculum })),
);
const GVABenefits = lazy(() =>
  import("@/components/gva/GVABenefits").then((m) => ({ default: m.GVABenefits })),
);
const GVAPricing = lazy(() =>
  import("@/components/gva/GVAPricing").then((m) => ({ default: m.GVAPricing })),
);
const GVATestimonials = lazy(() =>
  import("@/components/gva/GVATestimonials").then((m) => ({ default: m.GVATestimonials })),
);
const GVAApplicationForm = lazy(() =>
  import("@/components/gva/GVAApplicationForm").then((m) => ({ default: m.GVAApplicationForm })),
);
const GVAFaq = lazy(() =>
  import("@/components/gva/GVAFaq").then((m) => ({ default: m.GVAFaq })),
);
const Footer = lazy(() =>
  import("@/components/landing/Footer").then((m) => ({ default: m.Footer })),
);

const TITLE = "General Virtual Assistant Training | HirePath Solutions";
const DESCRIPTION =
  "Become a General Virtual Assistant in 6 weeks. Learn in-demand remote skills, land paying clients, and build a flexible career — ₦60,000 flat fee. July cohort now enrolling.";

export const Route = createFileRoute("/programs/general-virtual-assistant")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      {
        property: "og:url",
        content: "https://hirepathsolutions.com/programs/general-virtual-assistant",
      },
      { property: "og:image", content: ogImage },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: ogImage },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://hirepathsolutions.com/programs/general-virtual-assistant",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "General Virtual Assistant Training",
          description: DESCRIPTION,
          provider: {
            "@type": "Organization",
            name: "Hire Path Solutions",
            sameAs: "https://hirepathsolutions.com",
          },
          offers: {
            "@type": "Offer",
            price: "60000",
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
  component: GeneralVirtualAssistant,
});

function SectionFallback() {
  return <div className="h-32" />;
}

function GeneralVirtualAssistant() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <GVAHero />
        <Suspense fallback={<SectionFallback />}>
          <GVACurriculum />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GVABenefits />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GVAPricing />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GVATestimonials />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GVAApplicationForm />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <GVAFaq />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
