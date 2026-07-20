import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonProgramPage } from "@/components/ComingSoonProgramPage";

const TITLE = "UI/UX Design Training in Nigeria | HirePath Solutions";
const DESCRIPTION =
  "Learn UI/UX design from scratch in Nigeria. Build real-world portfolios and land remote product design roles with US & UK companies — no experience required. HirePath Solutions.";
const PROGRAM_URL = "https://hirepathsolutions.com/programs/ui-ux-design";

export const Route = createFileRoute("/programs/ui-ux-design")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: PROGRAM_URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: PROGRAM_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Course",
          name: "UI/UX Design Training",
          description: DESCRIPTION,
          provider: {
            "@type": "Organization",
            name: "Hire Path Solutions",
            sameAs: "https://hirepathsolutions.com",
          },
          hasCourseInstance: {
            "@type": "CourseInstance",
            courseMode: "online",
          },
        }),
      },
    ],
  }),
  component: UiUxDesignPage,
});

function UiUxDesignPage() {
  return (
    <ComingSoonProgramPage
      programName="UI/UX Design"
      heading="Become a UI/UX Designer — Trained in Nigeria, Hired Globally"
      tagline="Master product design from wireframes to high-fidelity prototypes and land your first remote design role."
      description="UI/UX designers are in high demand worldwide, and the best news is: you don't need a design degree to start. This program takes you from absolute beginner to portfolio-ready designer. You'll learn industry-standard tools, design principles, and how to attract remote clients from the US and UK — all without leaving Nigeria."
      keywords={[
        "UI/UX design Nigeria",
        "product design training",
        "Figma course Nigeria",
        "remote design jobs",
        "UX design for beginners",
      ]}
    />
  );
}
