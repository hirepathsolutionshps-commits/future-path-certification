import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as motion, n as useReducedMotion } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-ru0NZ_-w.mjs";
import { t as CtaButton } from "./CtaButton-BoHfoj4d.mjs";
import { t as Seal } from "./Seal-DkvR5B5V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/va-blueprint-ChUJR3MQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "flex items-center gap-2.5",
				"aria-label": "Hire Path Solutions home",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/logo.png",
					alt: "Hire Path Solutions logo",
					width: 32,
					height: 32,
					className: "h-8 w-8 rounded-[7px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-display text-base font-semibold tracking-tight text-ink sm:text-lg",
					children: ["Hire Path ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold",
						children: "Solutions"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
				href: "#apply",
				variant: "ink",
				className: "px-5 py-2.5 text-xs sm:text-sm",
				children: "Apply Now"
			})]
		})
	});
}
var trust = [
	{
		value: "6",
		label: "Week program"
	},
	{
		value: "100%",
		label: "Remote work"
	},
	{
		value: "US & UK",
		label: "Clients"
	}
];
function Hero() {
	const reduce = useReducedMotion();
	const fade = (delay) => reduce ? {} : {
		initial: {
			opacity: 0,
			y: 20
		},
		animate: {
			opacity: 1,
			y: 0
		},
		transition: {
			duration: .6,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative overflow-hidden bg-background",
		style: {
			backgroundImage: "radial-gradient(circle, rgba(201,151,28,0.06) 1px, transparent 1px)",
			backgroundSize: "28px 28px"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24 lg:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
							...fade(.05),
							className: "eyebrow inline-flex items-center justify-center gap-2 text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "relative flex h-2 w-2 shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-gold" })]
							}), "New Cohort, 6 Weeks"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
							...fade(.12),
							className: "mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl",
							children: "Become a Healthcare Virtual Assistant"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							...fade(.2),
							className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg",
							children: "Train for six weeks, then work remotely with US & UK healthcare clients and get paid in dollars, right from Lagos. No experience required. We train you, place you, and stand behind you."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...fade(.3),
							className: "mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
								href: "#apply",
								variant: "gold",
								className: "w-full sm:w-auto",
								children: "Apply for This Cohort"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#curriculum",
								className: "text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline",
								children: "See the 6-week curriculum →"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							...fade(.42),
							className: "mt-10 flex justify-center lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {
								size: 96,
								withText: true,
								draw: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							...fade(.5),
							className: "mt-10 grid grid-cols-3 divide-x divide-border rounded-md border border-border bg-cream lg:mt-12",
							children: trust.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "px-4 py-5 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-data text-xl font-bold text-ink sm:text-2xl",
									children: t.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-graphite",
									children: t.label
								})]
							}, t.label))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: reduce ? false : {
					opacity: 0,
					scale: .88
				},
				animate: reduce ? void 0 : {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .7,
					ease: [
						.22,
						1,
						.36,
						1
					],
					delay: .45
				},
				className: "pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block 2xl:right-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {
					size: 148,
					withText: true,
					draw: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" })
		]
	});
}
var stats = [
	{
		value: "₦200K-₦800K+",
		unit: "/ month",
		label: "Earning potential"
	},
	{
		value: "100%",
		unit: "remote",
		label: "Work from anywhere"
	},
	{
		value: "US & UK",
		unit: "clients",
		label: "Paid in dollars"
	}
];
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-ink text-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-px px-5 py-14 sm:px-8 sm:py-16 md:grid-cols-3",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: i * .12,
				className: "px-2 text-center md:px-6 md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-data text-3xl font-semibold tracking-tight text-gold sm:text-4xl",
					children: [s.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-1.5 font-data text-sm font-normal text-background/60",
						children: s.unit
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "eyebrow mt-3 text-background/70",
					children: s.label
				})]
			}, s.label))
		})]
	});
}
var Curriculum = (0, import_react.lazy)(() => import("./Curriculum-Dyc6QNMY.mjs").then((m) => ({ default: m.Curriculum })));
var Benefits = (0, import_react.lazy)(() => import("./Benefits-BRCtCpbg.mjs").then((m) => ({ default: m.Benefits })));
var Pricing = (0, import_react.lazy)(() => import("./Pricing-Eky9h-Vf.mjs").then((m) => ({ default: m.Pricing })));
var Testimonials = (0, import_react.lazy)(() => import("./Testimonials-onv9hNhH.mjs").then((m) => ({ default: m.Testimonials })));
var ApplicationForm = (0, import_react.lazy)(() => import("./ApplicationForm-GDoim5rU.mjs").then((m) => ({ default: m.ApplicationForm })));
var Faq = (0, import_react.lazy)(() => import("./Faq-Dw-RM3VS.mjs").then((m) => ({ default: m.Faq })));
var Footer = (0, import_react.lazy)(() => import("./Footer-C6UWvvDC.mjs").then((m) => ({ default: m.Footer })));
function SectionFallback() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-32" });
}
function VaBlueprint() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Curriculum, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Benefits, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApplicationForm, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
					fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionFallback, {}),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: null,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
			})
		]
	});
}
//#endregion
export { VaBlueprint as component };
