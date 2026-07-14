import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./Reveal-ru0NZ_-w.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-onv9hNhH.js
var import_jsx_runtime = require_jsx_runtime();
var testimonials = [
	{
		name: "Adaeze Okonkwo",
		location: "Lagos, Nigeria",
		quote: "I had zero experience in healthcare before this program. Six weeks later I was onboarded by a US telehealth clinic and earning in dollars. Hire Path is the real deal.",
		cohort: "Cohort 1"
	},
	{
		name: "Emeka Nwosu",
		location: "Abuja, Nigeria",
		quote: "The curriculum is thorough and practical. Week by week I could see myself actually becoming job-ready. I landed my first client before the cohort even ended.",
		cohort: "Cohort 2"
	},
	{
		name: "Chidinma Eze",
		location: "Port Harcourt, Nigeria",
		quote: "I was skeptical at first but the placement support is genuine. They kept working with me until I had a paying client. I now make more remotely than I did in my old office job.",
		cohort: "Cohort 1"
	},
	{
		name: "Tunde Adeyemi",
		location: "Lagos, Nigeria",
		quote: "The HIPAA training and EHR walkthroughs alone are worth the fee. My UK client told me I was better prepared than most applicants they had seen. I owe that to this program.",
		cohort: "Cohort 2"
	},
	{
		name: "Ngozi Obiora",
		location: "Enugu, Nigeria",
		quote: "Clear structure, real mentors, and a community that actually helps each other. I went from confused to confident in six weeks. Highly recommend to anyone serious about remote work.",
		cohort: "Cohort 3"
	},
	{
		name: "Bola Fashola",
		location: "Ibadan, Nigeria",
		quote: "Within two weeks of completing the program I had my first client call. The CV and portfolio sessions were game-changing. I had never thought I could work for a US healthcare provider.",
		cohort: "Cohort 3"
	}
];
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Student Stories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
					children: "Graduates Who Made the Move"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .07,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full flex-col rounded-2xl border border-border/60 bg-background p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "flex-1 text-sm leading-relaxed text-graphite",
							children: [
								"“",
								t.quote,
								"”"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex items-center gap-3 border-t border-border/50 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 font-display text-sm font-semibold text-gold",
								children: t.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold text-ink",
								children: t.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-graphite/70",
								children: [
									t.location,
									" · ",
									t.cohort
								]
							})] })]
						})]
					})
				}, t.name))
			})]
		})
	});
}
//#endregion
export { Testimonials };
