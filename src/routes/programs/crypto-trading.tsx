import { createFileRoute } from "@tanstack/react-router";
import { ComingSoonProgramPage } from "@/components/ComingSoonProgramPage";

const TITLE = "Crypto Trading Training in Nigeria | HirePath Solutions";
const DESCRIPTION =
  "Learn crypto trading and blockchain fundamentals in Nigeria. From beginner to confident trader — understand DeFi, market analysis, and risk management with HirePath Solutions.";
const PROGRAM_URL = "https://hirepathsolutions.com/programs/crypto-trading";

export const Route = createFileRoute("/programs/crypto-trading")({
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
          name: "Crypto Trading Training",
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
  component: CryptoTradingPage,
});

function CryptoTradingPage() {
  return (
    <ComingSoonProgramPage
      programName="Crypto Trading"
      heading="Learn Crypto Trading — From Fundamentals to Profitable Strategies"
      tagline="Understand blockchain, DeFi, and crypto markets from the ground up — and start trading with confidence."
      description="This program takes you from zero to a structured understanding of cryptocurrency markets. You'll learn blockchain fundamentals, how to read charts, execute trades, manage risk, and navigate DeFi protocols — all through practical exercises and real market scenarios. Designed for complete beginners in Nigeria who want to participate in the global crypto economy."
      keywords={[
        "crypto trading Nigeria",
        "blockchain course Nigeria",
        "learn crypto trading",
        "DeFi training",
        "cryptocurrency for beginners Nigeria",
      ]}
    />
  );
}
