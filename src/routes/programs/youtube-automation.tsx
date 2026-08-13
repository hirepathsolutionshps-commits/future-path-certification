import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonProgramPage } from "@/components/ComingSoonProgramPage";

const TITLE = "Faceless YouTube Automation Training in Nigeria | HirePath Solutions";
const DESCRIPTION =
  "Build a monetised YouTube channel without showing your face. Learn AI-powered faceless YouTube automation from Nigeria — script, produce, and grow a channel that earns passively. HirePath Solutions.";
const PROGRAM_URL = "https://hirepathsolutions.com/programs/youtube-automation";

export const Route = createFileRoute("/programs/youtube-automation")({
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
          name: "Faceless YouTube Automation Training",
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
  component: YoutubeAutomationPage,
});

function YoutubeAutomationPage() {
  return (
    <ComingSoonProgramPage
      programName="YouTube Automation"
      heading="Build a Faceless YouTube Channel — Automate, Monetise, Earn"
      tagline="Create and grow a YouTube channel without ever appearing on camera, using AI tools and proven automation frameworks."
      description="YouTube automation lets you build a profitable content business without showing your face. In this program, you'll learn to pick winning niches, use AI to script and produce videos, optimise for the YouTube algorithm, and scale to monetisation — all from Nigeria. Whether you want passive income or a full content business, this gives you the playbook."
      keywords={[
        "faceless YouTube Nigeria",
        "YouTube automation course",
        "AI YouTube channel",
        "passive income Nigeria",
        "YouTube monetisation Nigeria",
      ]}
    />
  );
}
