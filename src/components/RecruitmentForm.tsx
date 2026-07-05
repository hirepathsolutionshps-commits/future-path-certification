import { useState, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const PHONE_REGEX = /^(70|80|81|90|91)\d{8}$/;
const MAX_CV_BYTES = 500 * 1024; // 500 KB
const ACCEPTED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const inputCls =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none transition-colors";

type Step = 0 | 1 | 2;

interface FormState {
  full_name: string;
  email: string;
  phone: string; // the 10 digits the user types (without +234)
  state: string;
  city: string;
  cv: File | null;
}

const empty: FormState = {
  full_name: "",
  email: "",
  phone: "",
  state: "",
  city: "",
  cv: null,
};

const STEPS = ["Personal Info", "Location", "Upload CV"];

export function RecruitmentForm() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState<Step>(0);
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const set = (patch: Partial<FormState>) => setForm((f) => ({ ...f, ...patch }));

  // ── Validation per step ───────────────────────────────────────────────────

  function validateStep(s: Step): boolean {
    if (s === 0) {
      if (form.full_name.trim().length < 2) {
        toast.error("Please enter your full name");
        return false;
      }
      if (!form.email.trim().includes("@")) {
        toast.error("Please enter a valid email address");
        return false;
      }
      if (!PHONE_REGEX.test(form.phone.trim())) {
        toast.error(
          "Phone must be 10 digits and start with 70, 80, 81, 90, or 91"
        );
        return false;
      }
      return true;
    }
    if (s === 1) {
      if (!form.state.trim()) {
        toast.error("Please enter your state");
        return false;
      }
      if (!form.city.trim()) {
        toast.error("Please enter your city / LGA");
        return false;
      }
      return true;
    }
    return true;
  }

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 2) as Step);
  };

  // ── CV file selection ─────────────────────────────────────────────────────

  function handleFile(file: File | undefined | null) {
    if (!file) return;
    if (!ACCEPTED_TYPES.includes(file.type)) {
      toast.error("Only PDF or DOCX files are accepted");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      toast.error("File is too large — maximum size is 500 KB");
      if (fileRef.current) fileRef.current.value = "";
      return;
    }
    set({ cv: file });
  }

  // ── Submit ────────────────────────────────────────────────────────────────

  const handleSubmit = async () => {
    if (!form.cv) {
      toast.error("Please upload your CV before submitting");
      return;
    }
    setSubmitting(true);

    try {
      // 1. Upload CV to Supabase Storage
      const ext = form.cv.name.split(".").pop();
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("cv-uploads")
        .upload(path, form.cv, { contentType: form.cv.type, upsert: false });

      if (uploadError) {
        console.error("[storage]", uploadError);
        toast.error("CV upload failed. Please try again.");
        return;
      }

      // 2. Insert into applicants table
      const fullPhone = `+234${form.phone.trim()}`;
      const { error: dbError } = await supabase.from("applicants").insert({
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: fullPhone,
        state: form.state.trim(),
        city: form.city.trim(),
        cv_url: path,
      });

      if (dbError) {
        console.error("[db]", dbError);
        toast.error("Submission failed. Please contact us on WhatsApp.");
        return;
      }

      // 3. Send confirmation email
      await fetch("/api/send-applicant-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: form.full_name.trim(),
          email: form.email.trim(),
          phone: fullPhone,
          state: form.state.trim(),
          city: form.city.trim(),
        }),
      });

      setDone(true);
      toast.success("Application submitted! Check your email for confirmation.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Animation ─────────────────────────────────────────────────────────────

  const anim = reduce
    ? {}
    : {
        initial: { opacity: 0, x: 18 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -18 },
        transition: { duration: 0.28 },
      };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <section id="apply" className="bg-cream">
      <div className="mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28">
        {/* Heading */}
        <div className="mb-10 text-center">
          <p className="eyebrow text-gold">Join Our Team</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Apply Now
          </h2>
          <p className="mx-auto mt-4 max-w-md text-graphite">
            Submit your details and CV — our team reviews every application and
            gets back within 5 business days.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-md border border-border bg-card p-6 shadow-sm sm:p-9">
          {done ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
                <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                Application Received!
              </h3>
              <p className="mx-auto mt-3 max-w-sm text-graphite">
                Thanks, {form.full_name.split(" ")[0]}! We've received your CV
                and will be in touch after our review.
              </p>
              <a
                href="https://wa.me/2348068579982"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-gold"
              >
                Message Us on WhatsApp
              </a>
            </div>
          ) : (
            <>
              {/* Progress bar */}
              <div className="mb-8 flex items-center gap-2">
                {STEPS.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors ${
                      i <= step ? "bg-gold" : "bg-border"
                    }`}
                  />
                ))}
              </div>
              <p className="eyebrow mb-6 text-graphite">
                Step {step + 1} / {STEPS.length} — {STEPS[step]}
              </p>

              <AnimatePresence mode="wait">
                {/* ── Step 0: Personal info ─────────────────────────────── */}
                {step === 0 && (
                  <motion.div key="s0" {...anim} className="space-y-4">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">Full name</span>
                      <input
                        className={inputCls}
                        value={form.full_name}
                        onChange={(e) => set({ full_name: e.target.value })}
                        placeholder="Your full name"
                        autoComplete="name"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">Email address</span>
                      <input
                        className={inputCls}
                        value={form.email}
                        onChange={(e) => set({ email: e.target.value })}
                        placeholder="you@email.com"
                        inputMode="email"
                        autoComplete="email"
                      />
                    </label>

                    {/* Nigerian phone */}
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">Phone number</span>
                      <div className="flex">
                        <span className="flex items-center rounded-l-sm border border-r-0 border-input bg-background px-3 text-sm font-medium text-graphite select-none">
                          +234
                        </span>
                        <input
                          className="w-full rounded-r-sm border border-input bg-background px-4 py-3 text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none transition-colors"
                          value={form.phone}
                          onChange={(e) => {
                            // Strip non-digits and cap at 10
                            const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                            set({ phone: digits });
                          }}
                          placeholder="8031234567"
                          inputMode="numeric"
                          maxLength={10}
                          autoComplete="tel-national"
                        />
                      </div>
                      <p className="mt-1.5 text-xs text-graphite/60">
                        10 digits only — must start with 70, 80, 81, 90, or 91
                      </p>
                    </label>
                  </motion.div>
                )}

                {/* ── Step 1: Location ──────────────────────────────────── */}
                {step === 1 && (
                  <motion.div key="s1" {...anim} className="space-y-4">
                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">State</span>
                      <input
                        className={inputCls}
                        value={form.state}
                        onChange={(e) => set({ state: e.target.value })}
                        placeholder="e.g. Lagos"
                        autoComplete="address-level1"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-1.5 block text-sm font-medium text-ink">City / LGA</span>
                      <input
                        className={inputCls}
                        value={form.city}
                        onChange={(e) => set({ city: e.target.value })}
                        placeholder="e.g. Ikeja"
                        autoComplete="address-level2"
                      />
                    </label>
                  </motion.div>
                )}

                {/* ── Step 2: CV upload ─────────────────────────────────── */}
                {step === 2 && (
                  <motion.div key="s2" {...anim} className="space-y-4">
                    <p className="text-sm font-medium text-ink">Upload your CV</p>
                    <p className="text-xs text-graphite/70">PDF or DOCX · max 500 KB</p>

                    {/* Drop zone */}
                    <label
                      className={`flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border-2 border-dashed px-6 py-10 text-center transition-colors ${
                        form.cv
                          ? "border-gold/60 bg-gold/5"
                          : "border-border hover:border-gold/40"
                      }`}
                    >
                      <input
                        ref={fileRef}
                        type="file"
                        accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="sr-only"
                        onChange={(e) => handleFile(e.target.files?.[0])}
                      />
                      {form.cv ? (
                        <>
                          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium text-ink">{form.cv.name}</span>
                          <span className="text-xs text-graphite/60">
                            {(form.cv.size / 1024).toFixed(1)} KB · Click to change
                          </span>
                        </>
                      ) : (
                        <>
                          <svg className="h-8 w-8 text-graphite/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                          </svg>
                          <span className="text-sm text-graphite">
                            Click to browse or drop your file here
                          </span>
                        </>
                      )}
                    </label>

                    {form.cv && (
                      <button
                        type="button"
                        onClick={() => {
                          set({ cv: null });
                          if (fileRef.current) fileRef.current.value = "";
                        }}
                        className="text-xs text-graphite/60 underline hover:text-ink"
                      >
                        Remove file
                      </button>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex items-center justify-between gap-3">
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStep((s) => Math.max(s - 1, 0) as Step)}
                    className="text-sm font-medium text-graphite hover:text-ink"
                  >
                    ← Back
                  </button>
                ) : (
                  <span />
                )}

                {step < 2 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-gold transition-opacity hover:opacity-90"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting || !form.cv}
                    className="rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-50"
                  >
                    {submitting ? "Submitting…" : "Submit Application"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
