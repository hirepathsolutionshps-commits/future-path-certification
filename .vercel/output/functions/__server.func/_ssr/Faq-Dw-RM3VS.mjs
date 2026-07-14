import { o as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, n as Header, r as Item, s as require_react, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Reveal } from "./Reveal-ru0NZ_-w.mjs";
import { t as ChevronDown } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Faq-Dw-RM3VS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "Do I need a laptop?",
		a: "A laptop is strongly recommended to do client work professionally. If you don't have one yet, you can still apply. We'll guide you on affordable options and what's required before you start working with clients."
	},
	{
		q: "Is this legit?",
		a: "Yes. Hire Path Solutions is a structured training and placement program. We train you over six real weeks, help you build a portfolio and CV, and support you all the way to a paying client. Healthcare Virtual Assistant work for US & UK clients is a genuine, growing remote field."
	},
	{
		q: "What if I have no experience?",
		a: "No experience is required. The program is built for complete beginners and moves step-by-step from the basics to job-ready skills. Most of our students start with zero background in healthcare or virtual assistance."
	},
	{
		q: "What is your refund / guarantee policy?",
		a: "We back the program with a job-placement guarantee: if you complete the full training and follow our placement process, we work with you until you land a paying client. Full refund terms are outlined in our refund policy."
	}
];
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-5 py-20 sm:px-8 sm:py-28",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-gold",
					children: "Questions, Answered"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
					children: "Frequently Asked"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "border-t border-border",
				children: faqs.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: f.q,
					className: "border-b border-border",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-5 text-left font-display text-lg font-semibold text-ink hover:text-gold hover:no-underline",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-5 text-base leading-relaxed text-graphite",
						children: f.a
					})]
				}, f.q))
			}) })]
		})
	});
}
//#endregion
export { Faq };
