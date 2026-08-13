import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/Reveal";
import { CtaButton } from "./CtaButton";

declare global {
  interface Window {
    PaystackPop: {
      setup: (opts: {
        key: string;
        email: string;
        amount: number;
        currency: string;
        ref: string;
        firstname: string;
        metadata?: Record<string, unknown>;
        onClose: () => void;
        callback: (response: { reference: string }) => void;
      }) => { openIframe: () => void };
    };
  }
}

const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string;

const PRICES: Record<"Regular" | "VIP", number> = {
  Regular: 50000 * 100,
  VIP: 100000 * 100,
};

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(120),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a valid phone number")
    .max(40)
    .regex(/^[0-9+()\-\s]+$/, "Phone can only contain numbers and + - ( )"),
  email: z.string().trim().email("Enter a valid email").max(255),
  has_laptop: z.boolean(),
  schedule_type: z.enum(["Regular", "VIP"]),
});

type FormState = {
  name: string;
  phone: string;
  email: string;
  has_laptop: boolean | null;
  schedule_type: "Regular" | "VIP" | null;
};

const empty: FormState = {
  name: "",
  phone: "",
  email: "",
  has_laptop: null,
  schedule_type: null,
};

const inputCls =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none";

let paystackScriptPromise: Promise<void> | null = null;

function loadPaystackScript(): Promise<void> {
  if (typeof window !== "undefined" && window.PaystackPop) {
    return Promise.resolve();
  }

  if (paystackScriptPromise) return paystackScriptPromise;

  paystackScriptPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById("paystack-js") as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Paystack failed to load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.id = "paystack-js";
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Paystack failed to load"));
    document.head.appendChild(script);
  });

  return paystackScriptPromise;
}

export function ApplicationForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(empty);
  const [cohort, setCohort] = useState<{ id: string; name: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    supabase
      .from("cohorts")
      .select("id, name")
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data }) => {
        if (data) setCohort({ id: data.id, name: data.name });
      });
  }, []);

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  const next = () => {
    if (step === 0) {
      const r = schema.pick({ name: true, phone: true, email: true }).safeParse(form);
      if (!r.success) {
        toast.error(r.error.issues[0].message);
        return;
      }
    }
    if (step === 1 && form.has_laptop === null) {
      toast.error("Please let us know if you have a laptop");
      return;
    }
    setStep((s) => Math.min(s + 1, 2));
  };

  const handlePayAndSubmit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    if (!form.schedule_type) {
      toast.error("Please choose a schedule");
      return;
    }

    if (!window.PaystackPop) {
      try {
        await loadPaystackScript();
      } catch {
        toast.error("Paystack could not load. Please check your connection and try again.");
        return;
      }
    }

    if (!window.PaystackPop) {
      toast.error("Paystack is unavailable. Please try again in a moment.");
      return;
    }

    const ref = `hps-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email: parsed.data.email,
      amount: PRICES[parsed.data.schedule_type],
      currency: "NGN",
      ref,
      firstname: parsed.data.name.split(" ")[0],
      metadata: { schedule_type: parsed.data.schedule_type },
      onClose: () => {
        toast.info("Payment cancelled. Your progress is saved.");
      },
      callback: async (response) => {
        setSubmitting(true);
        try {
           const verification = await fetch("/api/verify-paystack", {
             method: "POST",
             headers: { "Content-Type": "application/json" },
             body: JSON.stringify({
               reference: response.reference,
               email: parsed.data.email,
               scheduleType: parsed.data.schedule_type,
             }),
           });

           if (!verification.ok) {
             toast.error(
               "We couldn't verify the payment yet. Please contact us before trying again.",
             );
             return;
           }

          const { error } = await supabase.from("students").insert({
            name: parsed.data.name,
            phone: parsed.data.phone,
            email: parsed.data.email,
            has_laptop: parsed.data.has_laptop,
            schedule_type: parsed.data.schedule_type,
            cohort_id: cohort?.id ?? null,
            payment_ref: response.reference,
            paid: true,
          });

          if (error) {
            console.error("[db]", error);
            toast.error("Payment received but registration had an issue. Contact us on WhatsApp.");
            setSubmitting(false);
            return;
          }

          await fetch("/api/send-confirmation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: parsed.data.name,
              email: parsed.data.email,
              phone: parsed.data.phone,
              scheduleType: parsed.data.schedule_type,
              cohortName: cohort?.name ?? "Healthcare VA Program",
            }),
          });

          setDone(true);
          toast.success("You're in! Check your email for confirmation.");
        } finally {
          setSubmitting(false);
        }
      },
    });

    handler.openIframe();
  };

  const stepAnim = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 16 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -16 },
        transition: { duration: 0.3 },
      };

  return (
    <section id="apply" className="bg-cream">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal className="mb-10 text-center">
          <p className="eyebrow text-gold">Apply Now</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Start Your Application
          </h2>
          <p className="mx-auto mt-4 max-w-md text-graphite">
            Three quick steps, then pay securely with Paystack to confirm your seat.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-md border border-border bg-card p-6 shadow-sm sm:p-9">
            {done ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                  <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Payment Confirmed!
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-graphite">
                  Welcome, {form.name.split(" ")[0]}! A confirmation email is on its way. Our team
                  will reach out on WhatsApp within 24 hours with your onboarding details.
                </p>
                <a
                  href="https://wa.me/2348068579882"
                  className="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-gold"
                >
                  Message Us on WhatsApp
                </a>
              </div>
            ) : (
              <>
                <div className="mb-8 flex items-center gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-colors ${
                        i <= step ? "bg-gold" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <p className="eyebrow mb-6 text-graphite">Step {step + 1} / 3</p>

                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="s0" {...stepAnim} className="space-y-4">
                      <label className="block">
                        <span className="mb-1.5 block text-sm font-medium text-ink">Full name</span>
                        <input
                          className={inputCls}
                          value={form.name}
                          onChange={(e) => set({ name: e.target.value })}
                          placeholder="Your full name"
                          autoComplete="name"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-sm font-medium text-ink">
                          Phone / WhatsApp
                        </span>
                        <input
                          className={inputCls}
                          value={form.phone}
                          onChange={(e) => set({ phone: e.target.value })}
                          placeholder="+234 ..."
                          inputMode="tel"
                          autoComplete="tel"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-1.5 block text-sm font-medium text-ink">Email</span>
                        <input
                          className={inputCls}
                          value={form.email}
                          onChange={(e) => set({ email: e.target.value })}
                          placeholder="you@email.com"
                          inputMode="email"
                          autoComplete="email"
                        />
                      </label>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="s1" {...stepAnim}>
                      <p className="mb-4 text-sm font-medium text-ink">Do you have a laptop?</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Yes, I do", val: true },
                          { label: "Not yet", val: false },
                        ].map((o) => (
                          <button
                            key={o.label}
                            type="button"
                            onClick={() => set({ has_laptop: o.val })}
                            className={`rounded-sm border px-4 py-5 text-sm font-medium transition-colors ${
                              form.has_laptop === o.val
                                ? "border-gold bg-gold/10 text-ink"
                                : "border-input text-graphite hover:border-gold/50"
                            }`}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" {...stepAnim}>
                      <p className="mb-4 text-sm font-medium text-ink">Choose your schedule</p>
                      <div className="space-y-3">
                        {[
                          {
                            val: "Regular" as const,
                            title: "Regular",
                            price: "₦50,000",
                            desc: "Standard cohort pace and group sessions.",
                          },
                          {
                            val: "VIP" as const,
                            title: "VIP",
                            price: "₦100,000",
                            desc: "Priority support and flexible 1-on-1 guidance.",
                          },
                        ].map((o) => (
                          <button
                            key={o.val}
                            type="button"
                            onClick={() => set({ schedule_type: o.val })}
                            className={`flex w-full items-start gap-3 rounded-sm border px-4 py-4 text-left transition-colors ${
                              form.schedule_type === o.val
                                ? "border-gold bg-gold/10"
                                : "border-input hover:border-gold/50"
                            }`}
                          >
                            <span className="mt-0.5 font-data text-gold">
                              {form.schedule_type === o.val ? "●" : "○"}
                            </span>
                            <span className="flex-1">
                              <span className="block text-sm font-semibold text-ink">{o.title}</span>
                              <span className="block text-sm text-graphite">{o.desc}</span>
                            </span>
                            <span className="font-data text-sm font-bold text-gold">{o.price}</span>
                          </button>
                        ))}
                      </div>
                      <p className="mt-4 text-center text-xs text-graphite/70">
                        You will be taken to a secure Paystack payment page after clicking below.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-8 flex items-center justify-between gap-3">
                  {step > 0 ? (
                    <button
                      type="button"
                      onClick={() => setStep((s) => s - 1)}
                      className="text-sm font-medium text-graphite hover:text-ink"
                    >
                      ← Back
                    </button>
                  ) : (
                    <span />
                  )}
                  {step < 2 ? (
                    <CtaButton onClick={next} variant="ink">
                      Continue
                    </CtaButton>
                  ) : (
                    <CtaButton
                      onClick={handlePayAndSubmit}
                      variant="gold"
                      disabled={submitting || !form.schedule_type}
                    >
                      {submitting ? "Processing…" : "Pay and Confirm Seat"}
                    </CtaButton>
                  )}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
