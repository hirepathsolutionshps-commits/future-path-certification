import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/CtaButton-BoHfoj4d.js
var import_jsx_runtime = require_jsx_runtime();
var base = "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
var styles = {
	gold: "bg-gold text-ink hover:brightness-105 shadow-[0_1px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5",
	ink: "bg-ink text-background hover:bg-graphite hover:-translate-y-0.5",
	outline: "border border-ink/30 text-ink hover:border-gold hover:text-gold"
};
function CtaButton({ children, href, onClick, variant = "gold", type = "button", className = "", disabled, ...rest }) {
	const cls = `${base} ${styles[variant]} ${className}`;
	if (href) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href,
		className: cls,
		...rest,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		onClick,
		disabled,
		className: cls,
		...rest,
		children
	});
}
//#endregion
export { CtaButton as t };
