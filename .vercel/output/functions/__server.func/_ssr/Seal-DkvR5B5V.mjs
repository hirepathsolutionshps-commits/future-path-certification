import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as motion, n as useReducedMotion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Seal-DkvR5B5V.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Circular certification seal: the signature "verified credibility" motif.
* When `draw` is true it traces its outlines in on mount (one of the two
* standout animation moments). Small instances render static next to trust
* signals. Respects prefers-reduced-motion.
*/
function Seal({ size = 160, withText = true, draw = false, className }) {
	const reduce = useReducedMotion();
	const animate = draw && !reduce;
	const strokeProps = (delay) => animate ? {
		initial: {
			pathLength: 0,
			opacity: 0
		},
		animate: {
			pathLength: 1,
			opacity: 1
		},
		transition: {
			duration: 1.4,
			ease: "easeInOut",
			delay
		}
	} : { initial: false };
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 200 200",
		fill: "none",
		role: "img",
		"aria-label": "Hire Path Solutions certified program seal",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				id: "seal-top",
				d: "M 100,100 m -76,0 a 76,76 0 1,1 152,0",
				fill: "none"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				id: "seal-bottom",
				d: "M 100,100 m -68,0 a 68,68 0 1,0 136,0",
				fill: "none"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "100",
				cy: "100",
				r: "92",
				stroke: "var(--gold)",
				strokeWidth: "1.5",
				...strokeProps(0)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "100",
				cy: "100",
				r: "84",
				stroke: "var(--gold)",
				strokeWidth: "3",
				...strokeProps(.15)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
				cx: "100",
				cy: "100",
				r: "60",
				stroke: "var(--ink)",
				strokeWidth: "1",
				strokeDasharray: "2 4",
				...strokeProps(.4)
			}),
			Array.from({ length: 48 }).map((_, i) => {
				const angle = i / 48 * Math.PI * 2;
				const r1 = 72;
				const r2 = 78;
				const round = (n) => Number(n.toFixed(2));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.line, {
					x1: round(100 + Math.cos(angle) * r1),
					y1: round(100 + Math.sin(angle) * r1),
					x2: round(100 + Math.cos(angle) * r2),
					y2: round(100 + Math.sin(angle) * r2),
					stroke: "var(--gold)",
					strokeWidth: "1",
					initial: animate ? { opacity: 0 } : false,
					animate: animate ? { opacity: .7 } : void 0,
					transition: animate ? {
						duration: .4,
						delay: .9 + i * .004
					} : void 0
				}, i);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 78 132 C 92 120, 96 108, 104 96 C 110 86, 118 80, 126 74",
				stroke: "var(--gold)",
				strokeWidth: "6",
				strokeLinecap: "round",
				...strokeProps(.7)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
				d: "M 113 70 L 130 70 L 130 87",
				stroke: "var(--gold)",
				strokeWidth: "6",
				strokeLinecap: "round",
				strokeLinejoin: "round",
				...strokeProps(1)
			}),
			withText && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				fontSize: "11",
				fontFamily: "var(--font-mono)",
				fontWeight: "500",
				letterSpacing: "3",
				fill: "var(--ink)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
					href: "#seal-top",
					startOffset: "50%",
					textAnchor: "middle",
					children: "HIRE PATH SOLUTIONS"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				fontSize: "8",
				fontFamily: "var(--font-mono)",
				fontWeight: "500",
				letterSpacing: "4",
				fill: "var(--gold)",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textPath", {
					href: "#seal-bottom",
					startOffset: "50%",
					textAnchor: "middle",
					children: "CERTIFIED · VERIFIED · 2025"
				})
			})] })
		]
	});
}
//#endregion
export { Seal as t };
