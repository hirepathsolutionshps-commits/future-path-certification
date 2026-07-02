import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const STEP_LABELS = [
  "Personal Info",
  "Background",
  "Skills and Goals",
  "Availability",
];

const EDUCATION_OPTIONS = [
  "High School / WAEC",
  "OND / NCE",
  "HND",
  "BSc / BA",
  "MSc / MBA",
  "PhD",
  "Other",
];

const EXPERIENCE_OPTIONS = [
  "No experience yet",
  "Less than 1 year",
  "1 to 3 years",
  "3 to 5 years",
  "5 to 10 years",
  "10 or more years",
];

const TIMELINE_OPTIONS = [
  "Immediately",
  "Within 1 month",
  "1 to 3 months",
  "3 to 6 months",
  "Just exploring for now",
];

const BESTTIME_OPTIONS = [
  "Morning (8am to 12pm)",
  "Afternoon (12pm to 4pm)",
  "Evening (4pm to 8pm)",
  "Any time",
];

const SKILL_TAGS = [
  "Microsoft Office",
  "Customer Service",
  "Data Entry",
  "Social Media",
  "Content Writing",
  "Project Management",
  "Coding / Programming",
  "Design",
  "Sales",
  "Teaching / Training",
];

type Form = {
  full_name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  education_level: string;
  field_of_study: string;
  job_title: string;
  years_experience: string;
  industry: string;
  current_skills: string[];
  skills_to_gain: string;
  target_role: string;
  work_preference: string;
  timeline: string;
  contact_method: string;
  best_time: string;
};

const empty: Form = {
  full_name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
  education_level: "",
  field_of_study: "",
  job_title: "",
  years_experience: "",
  industry: "",
  current_skills: [],
  skills_to_gain: "",
  target_role: "",
  work_preference: "",
  timeline: "",
  contact_method: "",
  best_time: "",
};

const inputCls =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none";
const selectCls =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink focus-visible:border-gold focus-visible:outline-none appearance-none";
const labelCls = "mb-1.5 block text-sm font-medium text-ink";

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function RadioGroup({
  options,
  value,
  onChange,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          onClick={() => onChange(o)}
          className={`rounded-sm border px-4 py-2.5 text-sm font-medium transition-colors ${
            value === o
              ? "border-gold bg-gold/10 text-ink"
              : "border-input text-graphite hover:border-gold/50 hover:text-ink"
          }`}
        >
          {o}
        </button>
      ))}
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className={labelCls}>{label}</span>
      <div className="relative">
        <select
          className={selectCls}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{placeholder ?? "Select one…"}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-graphite/50">
          ▼
        </span>
      </div>
    </label>
  );
}

export function CareerAssessmentModal({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<Form>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = "career-assessment-title";

  // ── Accessibility: focus first element on open + Escape to close ──
  useEffect(() => {
    const el = dialogRef.current;
    if (!el) return;

    // Focus first focusable element
    const first = el.querySelector<HTMLElement>(FOCUSABLE);
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const focusable = Array.from(el.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
          (n) => !n.closest("[inert]")
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const set = (patch: Partial<Form>) => setForm((f) => ({ ...f, ...patch }));

  const toggleSkill = (skill: string) => {
    set({
      current_skills: form.current_skills.includes(skill)
        ? form.current_skills.filter((s) => s !== skill)
        : [...form.current_skills, skill],
    });
  };

  const validateStep = (): boolean => {
    if (step === 0) {
      if (!form.full_name.trim() || form.full_name.trim().length < 2) {
        toast.error("Please enter your full name");
        return false;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        toast.error("Please enter a valid email address");
        return false;
      }
      if (!form.phone.trim() || form.phone.trim().length < 7) {
        toast.error("Please enter a valid phone number");
        return false;
      }
    }
    return true;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, 3));
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;
    setSubmitting(true);
    try {
      const payload = {
        ...form,
        current_skills: form.current_skills.join(", "),
      };

      const { error } = await supabase.from("career_assessments").insert(payload);

      if (error) {
        console.error("[db]", error);
        toast.error("Something went wrong. Please try again or contact us on WhatsApp.");
        setSubmitting(false);
        return;
      }

      const res = await fetch("/api/send-career-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Data was saved; email may have failed — still show success but log
        console.error("[career-assessment] email API returned", res.status);
      }

      setDone(true);
    } catch (err) {
      console.error("[career-assessment]", err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 py-6 backdrop-blur-sm"
      aria-hidden="true"
      onClick={onClose}
    >
      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-xl border border-border bg-background shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="border-b border-border px-7 py-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                Free Career Assessment
              </p>
              <h2 id={titleId} className="mt-1 font-display text-xl font-semibold text-ink">
                {done ? "Assessment Received!" : STEP_LABELS[step]}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="mt-0.5 shrink-0 rounded-md p-1.5 text-graphite transition-colors hover:bg-border hover:text-ink"
              aria-label="Close career assessment"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {!done && (
            <div className="mt-4 flex items-center gap-1.5" aria-hidden="true">
              {STEP_LABELS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                    i <= step ? "bg-gold" : "bg-border"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-7 py-6">
          {done ? (
            <div className="py-4 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                <svg
                  className="h-7 w-7 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                Thanks, {form.full_name.split(" ")[0]}!
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-graphite">
                We have received your assessment. A career coach will review your profile and reach
                out within 24 to 48 hours with your personalized plan.
              </p>
              <a
                href="https://wa.me/2348068579982"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-gold transition-opacity hover:opacity-80"
              >
                Message Us on WhatsApp
              </a>
            </div>
          ) : (
            <div className="space-y-4">
              {/* ── Step 0: Personal Info ── */}
              {step === 0 && (
                <>
                  <label className="block">
                    <span className={labelCls}>
                      Full name <span className="text-gold" aria-hidden="true">*</span>
                    </span>
                    <input
                      className={inputCls}
                      value={form.full_name}
                      onChange={(e) => set({ full_name: e.target.value })}
                      placeholder="Your full name"
                      autoComplete="name"
                      aria-required="true"
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>
                      Email <span className="text-gold" aria-hidden="true">*</span>
                    </span>
                    <input
                      className={inputCls}
                      type="email"
                      value={form.email}
                      onChange={(e) => set({ email: e.target.value })}
                      placeholder="you@email.com"
                      autoComplete="email"
                      inputMode="email"
                      aria-required="true"
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>
                      Phone / WhatsApp <span className="text-gold" aria-hidden="true">*</span>
                    </span>
                    <input
                      className={inputCls}
                      value={form.phone}
                      onChange={(e) => set({ phone: e.target.value })}
                      placeholder="+234 …"
                      inputMode="tel"
                      autoComplete="tel"
                      aria-required="true"
                    />
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className={labelCls}>City</span>
                      <input
                        className={inputCls}
                        value={form.city}
                        onChange={(e) => set({ city: e.target.value })}
                        placeholder="Lagos"
                        autoComplete="address-level2"
                      />
                    </label>
                    <label className="block">
                      <span className={labelCls}>State</span>
                      <input
                        className={inputCls}
                        value={form.state}
                        onChange={(e) => set({ state: e.target.value })}
                        placeholder="Lagos State"
                        autoComplete="address-level1"
                      />
                    </label>
                  </div>
                </>
              )}

              {/* ── Step 1: Background ── */}
              {step === 1 && (
                <>
                  <SelectField
                    label="Highest education level"
                    value={form.education_level}
                    onChange={(v) => set({ education_level: v })}
                    options={EDUCATION_OPTIONS}
                  />
                  <label className="block">
                    <span className={labelCls}>Field of study</span>
                    <input
                      className={inputCls}
                      value={form.field_of_study}
                      onChange={(e) => set({ field_of_study: e.target.value })}
                      placeholder="e.g. Business Administration"
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Current or most recent job title</span>
                    <input
                      className={inputCls}
                      value={form.job_title}
                      onChange={(e) => set({ job_title: e.target.value })}
                      placeholder="e.g. Customer Service Rep"
                    />
                  </label>
                  <SelectField
                    label="Years of experience"
                    value={form.years_experience}
                    onChange={(v) => set({ years_experience: v })}
                    options={EXPERIENCE_OPTIONS}
                  />
                  <label className="block">
                    <span className={labelCls}>Industry</span>
                    <input
                      className={inputCls}
                      value={form.industry}
                      onChange={(e) => set({ industry: e.target.value })}
                      placeholder="e.g. Healthcare, Finance, Education"
                    />
                  </label>
                </>
              )}

              {/* ── Step 2: Skills and Goals ── */}
              {step === 2 && (
                <>
                  <fieldset>
                    <legend className={labelCls}>Current skills (select all that apply)</legend>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {SKILL_TAGS.map((skill) => (
                        <button
                          key={skill}
                          type="button"
                          onClick={() => toggleSkill(skill)}
                          aria-pressed={form.current_skills.includes(skill)}
                          className={`rounded-sm border px-3 py-2 text-xs font-medium transition-colors ${
                            form.current_skills.includes(skill)
                              ? "border-gold bg-gold/10 text-ink"
                              : "border-input text-graphite hover:border-gold/50 hover:text-ink"
                          }`}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                  </fieldset>
                  <label className="block">
                    <span className={labelCls}>Skills you want to gain</span>
                    <textarea
                      className={`${inputCls} resize-none`}
                      rows={2}
                      value={form.skills_to_gain}
                      onChange={(e) => set({ skills_to_gain: e.target.value })}
                      placeholder="e.g. Virtual assistance, UI/UX design, AI automation…"
                    />
                  </label>
                  <label className="block">
                    <span className={labelCls}>Target role or field</span>
                    <input
                      className={inputCls}
                      value={form.target_role}
                      onChange={(e) => set({ target_role: e.target.value })}
                      placeholder="e.g. Remote Healthcare VA, Product Designer"
                    />
                  </label>
                  <fieldset>
                    <legend className={labelCls}>Work preference</legend>
                    <div className="mt-2">
                      <RadioGroup
                        options={["Remote", "Physical", "Open to both"]}
                        value={form.work_preference}
                        onChange={(v) => set({ work_preference: v })}
                      />
                    </div>
                  </fieldset>
                  <SelectField
                    label="Timeline to start"
                    value={form.timeline}
                    onChange={(v) => set({ timeline: v })}
                    options={TIMELINE_OPTIONS}
                  />
                </>
              )}

              {/* ── Step 3: Availability ── */}
              {step === 3 && (
                <>
                  <fieldset>
                    <legend className={labelCls}>Preferred contact method</legend>
                    <div className="mt-2">
                      <RadioGroup
                        options={["WhatsApp", "Email", "Phone Call"]}
                        value={form.contact_method}
                        onChange={(v) => set({ contact_method: v })}
                      />
                    </div>
                  </fieldset>
                  <SelectField
                    label="Best time to reach you"
                    value={form.best_time}
                    onChange={(v) => set({ best_time: v })}
                    options={BESTTIME_OPTIONS}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer — actions */}
        {!done && (
          <div className="border-t border-border px-7 py-5">
            <div className="flex items-center justify-between gap-3">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="text-sm font-medium text-graphite hover:text-ink"
                >
                  ← Back
                </button>
              ) : (
                <span className="text-xs text-graphite/60">
                  Step {step + 1} of {STEP_LABELS.length}
                </span>
              )}
              {step < 3 ? (
                <button
                  type="button"
                  onClick={next}
                  className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Continue →
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={submitting}
                  className="rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60"
                >
                  {submitting ? "Submitting…" : "Submit Assessment"}
                </button>
              )}
            </div>
            {step > 0 && (
              <p className="mt-3 text-center text-xs text-graphite/50" aria-live="polite">
                Step {step + 1} of {STEP_LABELS.length}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
