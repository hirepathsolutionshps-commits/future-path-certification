import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need a laptop?",
    a: "A laptop is strongly recommended to do client work professionally. If you don't have one yet, you can still apply — we'll guide you on affordable options and what's required before you start working with clients.",
  },
  {
    q: "Is this legit?",
    a: "Yes. Hire Path Solutions is a structured training and placement program. We train you over six real weeks, help you build a portfolio and CV, and support you all the way to a paying client. Healthcare Virtual Assistant work for US & UK clients is a genuine, growing remote field.",
  },
  {
    q: "What if I have no experience?",
    a: "No experience is required. The program is built for complete beginners and moves step-by-step from the basics to job-ready skills. Most of our students start with zero background in healthcare or virtual assistance.",
  },
  {
    q: "What is your refund / guarantee policy?",
    a: "We back the program with a job-placement guarantee: if you complete the full training and follow our placement process, we work with you until you land a paying client. Full refund terms are outlined in our refund policy.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-gold">Questions, Answered</p>
          <h2 className="mt-4 font-display text-3xl font-600 tracking-tight text-ink sm:text-4xl">
            Frequently Asked
          </h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                <AccordionTrigger className="py-5 text-left font-display text-lg font-600 text-ink hover:text-gold hover:no-underline">
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
