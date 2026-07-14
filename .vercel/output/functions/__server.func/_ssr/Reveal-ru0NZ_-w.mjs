import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { i as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-ru0NZ_-w.js
var import_jsx_runtime = require_jsx_runtime();
var variants = {
	hidden: {
		opacity: 0,
		y: 20
	},
	visible: {
		opacity: 1,
		y: 0
	}
};
/**
* Restrained scroll reveal: fade in + 20px rise as the element enters view.
* Respects prefers-reduced-motion automatically (Framer Motion handles it,
* and reduced-motion CSS also neutralizes transitions).
*/
function Reveal({ children, className, delay = 0, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className,
		variants,
		initial: "hidden",
		whileInView: "visible",
		viewport: {
			once: true,
			margin: "-60px"
		},
		transition: {
			duration: .55,
			ease: [
				.22,
				1,
				.36,
				1
			],
			delay
		},
		children
	});
}
//#endregion
export { Reveal as t };
