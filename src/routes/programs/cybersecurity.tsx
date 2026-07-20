import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonProgramPage } from "@/components/ComingSoonProgramPage";

const TITLE = "Cybersecurity Training in Nigeria | HirePath Solutions";
const DESCRIPTION =
  "Launch a cybersecurity career from Nigeria. Learn threat analysis, ethical hacking, and security fundamentals to work remotely with international clients — no experience required. HirePath Solutions.";
const PROGRAM_URL = "https://hirepathsolutions.com/programs/cybersecurity";

export const Route = createFileRoute("/programs/cybersecurity")({
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
          name: "Cybersecurity Training",
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
  component: CybersecurityPage,
});

function CybersecurityPage() {
  return (
    <ComingSoonProgramPage
      programName="Cybersecurity"
      heading="Start a Cybersecurity Career — Trained in Nigeria, Hired Globally"
      tagline="Enter one of the world's fastest-growing fields and access high-paying remote security roles with international organisations."
      description="Cybersecurity is a field with more open positions than qualified candidates globally. This program equips you with the fundamentals of threat analysis, ethical hacking, network defence, and security compliance — practical skills that remote employers in the US and UK actively hire for. No technical background needed to start."
      keywords={[
        "cybersecurity training Nigeria",
        "ethical hacking course",
        "remote cybersecurity jobs",
        "information security Nigeria",
        "cyber career Nigeria",
      ]}
    />
  );
}
