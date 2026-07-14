import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./Reveal-ru0NZ_-w.mjs";
import { t as Seal } from "./Seal-DkvR5B5V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Benefits-BRCtCpbg.js
var import_jsx_runtime = require_jsx_runtime();
var benefits = [
	{
		title: "Step-by-step training",
		detail: "A structured 6-week path from complete beginner to job-ready Healthcare VA."
	},
	{
		title: "Tools & templates",
		detail: "Done-for-you scripts, checklists, and templates you'll use on real client work."
	},
	{
		title: "Portfolio & CV help",
		detail: "We help you build a portfolio and CV that get you noticed by US & UK clients."
	},
	{
		title: "Community access",
		detail: "Join a private community of fellow VAs, mentors, and alumni for ongoing support."
	},
	{
		title: "Guaranteed paying job",
		detail: "We don't just train you. We help you land a real, paying client through our network."
	}
];
function Benefits() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Included in Your Enrollment"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
					children: "You Will Get"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "border-t border-border/70",
				children: benefits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * .06,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-4 border-b border-border/70 py-5 sm:gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Seal, {
							size: 34,
							withText: false,
							className: "mt-0.5 shrink-0"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg font-semibold text-ink",
							children: b.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-graphite sm:text-base",
							children: b.detail
						})] })]
					})
				}, b.title))
			})]
		})
	});
}
//#endregion
export { Benefits };
