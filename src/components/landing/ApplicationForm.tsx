import { useEffect, useState } from "react";
import { z } from "zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Reveal } from "@/components/Reveal";
import { Seal } from "@/components/Seal";
import { CtaButton } from "./CtaButton";

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
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-ink placeholder:text-graphite/50 focus-visible:border-gold";

export function ApplicationForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(empty);
  const [cohortId, setCohortId] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    supabase
      .from("cohorts")
      .select("id")
      .eq("is_active", true)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle()
      .then(({ data }) => setCohortId(data?.id ?? null));
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

  const submit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("students").insert({
      name: parsed.data.name,
      phone: parsed.data.phone,
      email: parsed.data.email,
      has_laptop: parsed.data.has_laptop,
      schedule_type: parsed.data.schedule_type,
      cohort_id: cohortId,
    });
    setSubmitting(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Application received!");
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
            Three quick steps. We&apos;ll reach out on phone or WhatsApp to confirm your seat.
          </p>
        </Reveal>

        <Reveal>
          <div className="rounded-md border border-border bg-card p-6 shadow-sm sm:p-9">
            {done ? (
              <div className="py-6 text-center">
                <div className="flex justify-center">
                  <Seal size={90} draw withText={false} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                  Application Received
                </h3>
                <p className="mx-auto mt-3 max-w-sm text-graphite">
                  Thank you, {form.name.split(" ")[0]}. Our team will contact you shortly to confirm
                  your place in the new cohort.
                </p>
              </div>
            ) : (
              <>
                {/* Progress */}
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
                <p className="eyebrow mb-6 text-graphite">
                  Step {step + 1} / 3
                </p>

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
                            desc: "Standard cohort pace and group sessions.",
                          },
                          {
                            val: "VIP" as const,
                            title: "VIP",
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
                            <span>
                              <span className="block text-sm font-semibold text-ink">{o.title}</span>
                              <span className="block text-sm text-graphite">{o.desc}</span>
                            </span>
                          </button>
                        ))}
                      </div>
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
                      onClick={submit}
                      variant="gold"
                      disabled={submitting || !form.schedule_type}
                    >
                      {submitting ? "Submitting…" : "Submit Application"}
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
