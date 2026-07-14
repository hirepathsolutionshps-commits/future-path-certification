import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-IyAcA0NK.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CareerAssessmentModal-D8sczzcc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STEP_LABELS = [
	"Personal Info",
	"Background",
	"Skills and Goals",
	"Availability"
];
var EDUCATION_OPTIONS = [
	"High School / WAEC",
	"OND / NCE",
	"HND",
	"BSc / BA",
	"MSc / MBA",
	"PhD",
	"Other"
];
var EXPERIENCE_OPTIONS = [
	"No experience yet",
	"Less than 1 year",
	"1 to 3 years",
	"3 to 5 years",
	"5 to 10 years",
	"10 or more years"
];
var TIMELINE_OPTIONS = [
	"Immediately",
	"Within 1 month",
	"1 to 3 months",
	"3 to 6 months",
	"Just exploring for now"
];
var BESTTIME_OPTIONS = [
	"Morning (8am to 12pm)",
	"Afternoon (12pm to 4pm)",
	"Evening (4pm to 8pm)",
	"Any time"
];
var SKILL_TAGS = [
	"Microsoft Office",
	"Customer Service",
	"Data Entry",
	"Social Media",
	"Content Writing",
	"Project Management",
	"Coding / Programming",
	"Design",
	"Sales",
	"Teaching / Training"
];
var empty = {
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
	best_time: ""
};
var inputCls = "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none";
var selectCls = "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-ink focus-visible:border-gold focus-visible:outline-none appearance-none";
var labelCls = "mb-1.5 block text-sm font-medium text-ink";
var FOCUSABLE = "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex=\"-1\"])";
function RadioGroup({ options, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex flex-wrap gap-2",
		children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => onChange(o),
			className: `rounded-sm border px-4 py-2.5 text-sm font-medium transition-colors ${value === o ? "border-gold bg-gold/10 text-ink" : "border-input text-graphite hover:border-gold/50 hover:text-ink"}`,
			children: o
		}, o))
	});
}
function SelectField({ label, value, onChange, options, placeholder }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: labelCls,
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
				className: selectCls,
				value,
				onChange: (e) => onChange(e.target.value),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: "",
					children: placeholder ?? "Select one…"
				}), options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: o,
					children: o
				}, o))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-graphite/50",
				children: "▼"
			})]
		})]
	});
}
function CareerAssessmentModal({ onClose }) {
	const [step, setStep] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)(empty);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	const dialogRef = (0, import_react.useRef)(null);
	const titleId = "career-assessment-title";
	(0, import_react.useEffect)(() => {
		const el = dialogRef.current;
		if (!el) return;
		el.querySelector(FOCUSABLE)?.focus();
		const onKey = (e) => {
			if (e.key === "Escape") {
				onClose();
				return;
			}
			if (e.key === "Tab") {
				const focusable = Array.from(el.querySelectorAll(FOCUSABLE)).filter((n) => !n.closest("[inert]"));
				if (focusable.length === 0) return;
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (e.shiftKey) {
					if (document.activeElement === first) {
						e.preventDefault();
						last.focus();
					}
				} else if (document.activeElement === last) {
					e.preventDefault();
					first.focus();
				}
			}
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [onClose]);
	const set = (patch) => setForm((f) => ({
		...f,
		...patch
	}));
	const toggleSkill = (skill) => {
		set({ current_skills: form.current_skills.includes(skill) ? form.current_skills.filter((s) => s !== skill) : [...form.current_skills, skill] });
	};
	const validateStep = () => {
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
				current_skills: form.current_skills.join(", ")
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
				body: JSON.stringify(payload)
			});
			if (!res.ok) console.error("[career-assessment] email API returned", res.status);
			setDone(true);
		} catch (err) {
			console.error("[career-assessment]", err);
			toast.error("Something went wrong. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center bg-ink/60 px-4 py-6 backdrop-blur-sm",
		"aria-hidden": "true",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: dialogRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": titleId,
			className: "relative flex max-h-[90vh] w-full max-w-lg flex-col rounded-xl border border-border bg-background shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-b border-border px-7 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-semibold uppercase tracking-[0.16em] text-gold",
							children: "Free Career Assessment"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							id: titleId,
							className: "mt-1 font-display text-xl font-semibold text-ink",
							children: done ? "Assessment Received!" : STEP_LABELS[step]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: onClose,
							className: "mt-0.5 shrink-0 rounded-md p-1.5 text-graphite transition-colors hover:bg-border hover:text-ink",
							"aria-label": "Close career assessment",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "2",
								strokeLinecap: "round",
								strokeLinejoin: "round",
								"aria-hidden": "true",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "18",
									y1: "6",
									x2: "6",
									y2: "18"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
									x1: "6",
									y1: "6",
									x2: "18",
									y2: "18"
								})]
							})
						})]
					}), !done && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex items-center gap-1.5",
						"aria-hidden": "true",
						children: STEP_LABELS.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-gold" : "bg-border"}` }, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 overflow-y-auto px-7 py-6",
					children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "py-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									className: "h-7 w-7 text-gold",
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2,
									"aria-hidden": "true",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M5 13l4 4L19 7"
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-5 font-display text-xl font-semibold text-ink",
								children: [
									"Thanks, ",
									form.full_name.split(" ")[0],
									"!"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-3 max-w-xs text-sm leading-relaxed text-graphite",
								children: "We have received your assessment. A career coach will review your profile and reach out within 24 to 48 hours with your personalized plan."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/2348068579982",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-6 py-3 text-sm font-semibold text-gold transition-opacity hover:opacity-80",
								children: "Message Us on WhatsApp"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: labelCls,
										children: ["Full name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											"aria-hidden": "true",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.full_name,
										onChange: (e) => set({ full_name: e.target.value }),
										placeholder: "Your full name",
										autoComplete: "name",
										"aria-required": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: labelCls,
										children: ["Email ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											"aria-hidden": "true",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										type: "email",
										value: form.email,
										onChange: (e) => set({ email: e.target.value }),
										placeholder: "you@email.com",
										autoComplete: "email",
										inputMode: "email",
										"aria-required": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: labelCls,
										children: ["Phone / WhatsApp ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-gold",
											"aria-hidden": "true",
											children: "*"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.phone,
										onChange: (e) => set({ phone: e.target.value }),
										placeholder: "+234 …",
										inputMode: "tel",
										autoComplete: "tel",
										"aria-required": "true"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelCls,
											children: "City"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.city,
											onChange: (e) => set({ city: e.target.value }),
											placeholder: "Lagos",
											autoComplete: "address-level2"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: labelCls,
											children: "State"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.state,
											onChange: (e) => set({ state: e.target.value }),
											placeholder: "Lagos State",
											autoComplete: "address-level1"
										})]
									})]
								})
							] }),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
									label: "Highest education level",
									value: form.education_level,
									onChange: (v) => set({ education_level: v }),
									options: EDUCATION_OPTIONS
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelCls,
										children: "Field of study"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.field_of_study,
										onChange: (e) => set({ field_of_study: e.target.value }),
										placeholder: "e.g. Business Administration"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelCls,
										children: "Current or most recent job title"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.job_title,
										onChange: (e) => set({ job_title: e.target.value }),
										placeholder: "e.g. Customer Service Rep"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
									label: "Years of experience",
									value: form.years_experience,
									onChange: (v) => set({ years_experience: v }),
									options: EXPERIENCE_OPTIONS
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelCls,
										children: "Industry"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.industry,
										onChange: (e) => set({ industry: e.target.value }),
										placeholder: "e.g. Healthcare, Finance, Education"
									})]
								})
							] }),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: labelCls,
									children: "Current skills (select all that apply)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2 flex flex-wrap gap-2",
									children: SKILL_TAGS.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => toggleSkill(skill),
										"aria-pressed": form.current_skills.includes(skill),
										className: `rounded-sm border px-3 py-2 text-xs font-medium transition-colors ${form.current_skills.includes(skill) ? "border-gold bg-gold/10 text-ink" : "border-input text-graphite hover:border-gold/50 hover:text-ink"}`,
										children: skill
									}, skill))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelCls,
										children: "Skills you want to gain"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: `${inputCls} resize-none`,
										rows: 2,
										value: form.skills_to_gain,
										onChange: (e) => set({ skills_to_gain: e.target.value }),
										placeholder: "e.g. Virtual assistance, UI/UX design, AI automation…"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "block",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: labelCls,
										children: "Target role or field"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: inputCls,
										value: form.target_role,
										onChange: (e) => set({ target_role: e.target.value }),
										placeholder: "e.g. Remote Healthcare VA, Product Designer"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
									className: labelCls,
									children: "Work preference"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
										options: [
											"Remote",
											"Physical",
											"Open to both"
										],
										value: form.work_preference,
										onChange: (v) => set({ work_preference: v })
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
									label: "Timeline to start",
									value: form.timeline,
									onChange: (v) => set({ timeline: v }),
									options: TIMELINE_OPTIONS
								})
							] }),
							step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
								className: labelCls,
								children: "Preferred contact method"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroup, {
									options: [
										"WhatsApp",
										"Email",
										"Phone Call"
									],
									value: form.contact_method,
									onChange: (v) => set({ contact_method: v })
								})
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectField, {
								label: "Best time to reach you",
								value: form.best_time,
								onChange: (v) => set({ best_time: v }),
								options: BESTTIME_OPTIONS
							})] })
						]
					})
				}),
				!done && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-border px-7 py-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-3",
						children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep((s) => s - 1),
							className: "text-sm font-medium text-graphite hover:text-ink",
							children: "← Back"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-graphite/60",
							children: [
								"Step ",
								step + 1,
								" of ",
								STEP_LABELS.length
							]
						}), step < 3 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: next,
							className: "rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90",
							children: "Continue →"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleSubmit,
							disabled: submitting,
							className: "rounded-sm bg-gold px-6 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60",
							children: submitting ? "Submitting…" : "Submit Assessment"
						})]
					}), step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-center text-xs text-graphite/50",
						"aria-live": "polite",
						children: [
							"Step ",
							step + 1,
							" of ",
							STEP_LABELS.length
						]
					})]
				})
			]
		})
	});
}
//#endregion
export { CareerAssessmentModal };
