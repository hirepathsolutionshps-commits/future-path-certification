import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as useInView } from "../_libs/framer-motion.mjs";
import { t as Reveal } from "./Reveal-ru0NZ_-w.mjs";
import { t as CtaButton } from "./CtaButton-BoHfoj4d.mjs";
import { t as Seal } from "./Seal-DkvR5B5V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Pricing-Eky9h-Vf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var includes = [
	"Full 6-week training program",
	"All tools, templates & resources",
	"Portfolio + CV review",
	"Private community access",
	"Guaranteed job placement support"
];
function Pricing() {
	const cardRef = (0, import_react.useRef)(null);
	const inView = useInView(cardRef, {
		once: true,
		margin: "-120px"
	});
	const [shone, setShone] = (0, import_react.useState)(false);
	if (inView && !shone) setShone(true);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Enrollment, Limited Cohort"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
					children: "Secure Your Seat"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: cardRef,
				"data-shine": shone ? "true" : "false",
				className: "shine-sweep relative mx-auto max-w-xl overflow-hidden rounded-md border-2 border-gold bg-card p-8 text-center shadow-[0_24px_60px_-30px_rgba(201,151,28,0.5)] sm:p-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-2 rounded border border-gold/30" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {
								size: 64,
								withText: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-6 text-graphite",
							children: "Certificate of Enrollment"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-2xl font-semibold text-ink",
							children: "Healthcare VA Program"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex items-end justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-data text-lg font-normal text-graphite line-through decoration-gold/60",
								children: "₦100,000"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-data text-5xl font-bold tracking-tight text-ink",
								children: "₦50,000"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-data text-xs uppercase tracking-widest text-gold",
							children: "50% Cohort Discount"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mx-auto mt-8 max-w-sm space-y-2.5 text-left",
							children: includes.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-sm text-graphite",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-0.5 font-data text-gold",
									children: "✓"
								}), item]
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaButton, {
								href: "#apply",
								variant: "gold",
								className: "w-full",
								children: "Claim Your Discounted Seat"
							})
						})
					]
				})]
			}) })]
		})
	});
}
//#endregion
export { Pricing };
