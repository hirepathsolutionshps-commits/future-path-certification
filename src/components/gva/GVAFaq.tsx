import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need previous experience as a VA?",
    a: "No experience is required. The program is built for complete beginners and walks you through every skill step by step, from tools and communication to landing your first client.",
  },
  {
    q: "Do I need a laptop?",
    a: "A laptop is strongly recommended to do client work professionally. If you don't have one yet, you can still apply. We'll guide you on what you need before you start working with clients.",
  },
  {
    q: "What kind of clients will I work with?",
    a: "General VAs work with entrepreneurs, small businesses, startups, and busy professionals who need help with admin, email, scheduling, and organisation. Our graduates have found clients both locally and internationally.",
  },
  {
    q: "How soon can I get a client after the program?",
    a: "Many of our students land their first client during or within weeks of completing the program. Our placement support actively works with you to find and secure your first paying role.",
  },
  {
    q: "What is your refund and guarantee policy?",
    a: "We back the program with a job-placement guarantee. If you complete the full training and follow our placement process, we keep working with you until you have a paying client. Full refund terms are in our refund policy.",
  },
];

export function GVAFaq() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-gold">Questions, Answered</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Frequently Asked
          </h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left font-display text-lg font-semibold text-ink hover:text-gold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-graphite">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
