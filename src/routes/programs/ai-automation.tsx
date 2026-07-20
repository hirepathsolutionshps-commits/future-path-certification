import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonProgramPage } from "@/components/ComingSoonProgramPage";

const TITLE = "AI Automation Training in Nigeria | HirePath Solutions";
const DESCRIPTION =
  "Learn to build AI-powered workflows and automations from Nigeria. Train for high-demand remote roles with international clients — no prior experience required. HirePath Solutions.";
const PROGRAM_URL = "https://hirepathsolutions.com/programs/ai-automation";

export const Route = createFileRoute("/programs/ai-automation")({
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
          name: "AI Automation Training",
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
  component: AiAutomationPage,
});

function AiAutomationPage() {
  return (
    <ComingSoonProgramPage
      programName="AI Automation"
      heading="Build AI Automations — Work Remotely, Earn in Dollars"
      tagline="Learn to design and deploy AI-powered workflows that businesses pay premium rates for — from Nigeria, for the world."
      description="AI Automation is one of the fastest-growing skills in the global job market. In this program, you'll learn to build intelligent workflows using leading AI tools, automate repetitive business processes, and offer in-demand automation services to US and UK clients — all from Nigeria, with no prior technical experience required."
      keywords={[
        "AI automation Nigeria",
        "AI workflow training",
        "remote automation jobs",
        "no-code AI tools",
        "freelance automation",
      ]}
    />
  );
}
