import { o as __toESM } from "../_runtime.mjs";
import { t as supabase } from "./client-IyAcA0NK.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as motion, n as useReducedMotion, s as AnimatePresence } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-ru0NZ_-w.mjs";
import { t as CtaButton } from "./CtaButton-BoHfoj4d.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { i as stringType, n as enumType, r as objectType, t as booleanType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ApplicationForm-GDoim5rU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAYSTACK_KEY = void 0;
var PRICES = {
	Regular: 5e4 * 100,
	VIP: 1e5 * 100
};
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your full name").max(120),
	phone: stringType().trim().min(7, "Enter a valid phone number").max(40).regex(/^[0-9+()\-\s]+$/, "Phone can only contain numbers and + - ( )"),
	email: stringType().trim().email("Enter a valid email").max(255),
	has_laptop: booleanType(),
	schedule_type: enumType(["Regular", "VIP"])
});
var empty = {
	name: "",
	phone: "",
	email: "",
	has_laptop: null,
	schedule_type: null
};
var inputCls = "w-full rounded-sm border border-input bg-background px-4 py-3 text-ink placeholder:text-graphite/50 focus-visible:border-gold focus-visible:outline-none";
function usePaystackScript() {
	const loaded = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (loaded.current || document.getElementById("paystack-js")) {
			loaded.current = true;
			return;
		}
		const s = document.createElement("script");
		s.id = "paystack-js";
		s.src = "https://js.paystack.co/v1/inline.js";
		s.async = true;
		document.head.appendChild(s);
		loaded.current = true;
	}, []);
}
function ApplicationForm() {
	usePaystackScript();
	const reduce = useReducedMotion();
	const [step, setStep] = (0, import_react.useState)(0);
	const [form, setForm] = (0, import_react.useState)(empty);
	const [cohort, setCohort] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [done, setDone] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		supabase.from("cohorts").select("id, name").eq("is_active", true).order("created_at", { ascending: false }).limit(1).maybeSingle().then(({ data }) => {
			if (data) setCohort({
				id: data.id,
				name: data.name
			});
		});
	}, []);
	const set = (patch) => setForm((f) => ({
		...f,
		...patch
	}));
	const next = () => {
		if (step === 0) {
			const r = schema.pick({
				name: true,
				phone: true,
				email: true
			}).safeParse(form);
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
			toast.error("Payment script not ready. Please wait a moment and try again.");
			return;
		}
		const ref = `hps-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
		window.PaystackPop.setup({
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
					const { error } = await supabase.from("students").insert({
						name: parsed.data.name,
						phone: parsed.data.phone,
						email: parsed.data.email,
						has_laptop: parsed.data.has_laptop,
						schedule_type: parsed.data.schedule_type,
						cohort_id: cohort?.id ?? null,
						payment_ref: response.reference,
						paid: true
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
							cohortName: cohort?.name ?? "Healthcare VA Program"
						})
					});
					setDone(true);
					toast.success("You're in! Check your email for confirmation.");
				} finally {
					setSubmitting(false);
				}
			}
		}).openIframe();
	};
	const stepAnim = reduce ? {} : {
		initial: {
			opacity: 0,
			x: 16
		},
		animate: {
			opacity: 1,
			x: 0
		},
		exit: {
			opacity: 0,
			x: -16
		},
		transition: { duration: .3 }
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "apply",
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-2xl px-5 py-20 sm:px-8 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-10 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Apply Now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
						children: "Start Your Application"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-4 max-w-md text-graphite",
						children: "Three quick steps, then pay securely with Paystack to confirm your seat."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md border border-border bg-card p-6 shadow-sm sm:p-9",
				children: done ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "py-8 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/15",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
								className: "h-8 w-8 text-gold",
								fill: "none",
								viewBox: "0 0 24 24",
								stroke: "currentColor",
								strokeWidth: 2,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
									strokeLinecap: "round",
									strokeLinejoin: "round",
									d: "M5 13l4 4L19 7"
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-2xl font-semibold text-ink",
							children: "Payment Confirmed!"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mx-auto mt-3 max-w-sm text-graphite",
							children: [
								"Welcome, ",
								form.name.split(" ")[0],
								"! A confirmation email is on its way. Our team will reach out on WhatsApp within 24 hours with your onboarding details."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://wa.me/2348068579882",
							className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-ink px-5 py-3 text-sm font-semibold text-gold",
							children: "Message Us on WhatsApp"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-8 flex items-center gap-2",
						children: [
							0,
							1,
							2
						].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-gold" : "bg-border"}` }, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "eyebrow mb-6 text-graphite",
						children: [
							"Step ",
							step + 1,
							" / 3"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
						mode: "wait",
						children: [
							step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...stepAnim,
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block text-sm font-medium text-ink",
											children: "Full name"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.name,
											onChange: (e) => set({ name: e.target.value }),
											placeholder: "Your full name",
											autoComplete: "name"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block text-sm font-medium text-ink",
											children: "Phone / WhatsApp"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.phone,
											onChange: (e) => set({ phone: e.target.value }),
											placeholder: "+234 ...",
											inputMode: "tel",
											autoComplete: "tel"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "block",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mb-1.5 block text-sm font-medium text-ink",
											children: "Email"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											className: inputCls,
											value: form.email,
											onChange: (e) => set({ email: e.target.value }),
											placeholder: "you@email.com",
											inputMode: "email",
											autoComplete: "email"
										})]
									})
								]
							}, "s0"),
							step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...stepAnim,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-4 text-sm font-medium text-ink",
									children: "Do you have a laptop?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid grid-cols-2 gap-3",
									children: [{
										label: "Yes, I do",
										val: true
									}, {
										label: "Not yet",
										val: false
									}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => set({ has_laptop: o.val }),
										className: `rounded-sm border px-4 py-5 text-sm font-medium transition-colors ${form.has_laptop === o.val ? "border-gold bg-gold/10 text-ink" : "border-input text-graphite hover:border-gold/50"}`,
										children: o.label
									}, o.label))
								})]
							}, "s1"),
							step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								...stepAnim,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mb-4 text-sm font-medium text-ink",
										children: "Choose your schedule"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: [{
											val: "Regular",
											title: "Regular",
											price: "₦50,000",
											desc: "Standard cohort pace and group sessions."
										}, {
											val: "VIP",
											title: "VIP",
											price: "₦100,000",
											desc: "Priority support and flexible 1-on-1 guidance."
										}].map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => set({ schedule_type: o.val }),
											className: `flex w-full items-start gap-3 rounded-sm border px-4 py-4 text-left transition-colors ${form.schedule_type === o.val ? "border-gold bg-gold/10" : "border-input hover:border-gold/50"}`,
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mt-0.5 font-data text-gold",
													children: form.schedule_type === o.val ? "●" : "○"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-sm font-semibold text-ink",
														children: o.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-sm text-graphite",
														children: o.desc
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-data text-sm font-bold text-gold",
													children: o.price
												})
											]
										}, o.val))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-center text-xs text-graphite/70",
										children: "You will be taken to a secure Paystack payment page after clicking below."
									})
								]
							}, "s2")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex items-center justify-between gap-3",
						children: [step > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setStep((s) => s - 1),
							className: "text-sm font-medium text-graphite hover:text-ink",
							children: "← Back"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), step < 2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
							onClick: next,
							variant: "ink",
							children: "Continue"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
							onClick: handlePayAndSubmit,
							variant: "gold",
							disabled: submitting || !form.schedule_type,
							children: submitting ? "Processing…" : "Pay and Confirm Seat"
						})]
					})
				] })
			}) })]
		})
	});
}
//#endregion
export { ApplicationForm };
