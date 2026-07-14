import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as m, n as useReducedMotion, o as LazyMotion, r as domAnimation } from "../_libs/framer-motion.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DWHzqhx5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CareerAssessmentModal = (0, import_react.lazy)(() => import("./CareerAssessmentModal-D8sczzcc.mjs").then((mod) => ({ default: mod.CareerAssessmentModal })));
var WA_LINK = "https://wa.me/2348068579982";
var NAV_LINKS = [
	{
		label: "Home",
		href: "#top"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Programs",
		href: "#programs"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
var MARQUEE_ITEMS = [
	"VA Blueprint",
	"AI Automation",
	"UI/UX Design",
	"Cybersecurity",
	"Crypto Trading",
	"YouTube Automation",
	"100% Remote",
	"No Experience Required",
	"Get Hired Faster",
	"Earn in Dollars"
];
var PROCESS_STEPS = [
	{
		num: "01",
		title: "Submit Your Profile",
		desc: "Share your profession, experience, salary expectations, and preferences. Upload your CV for review."
	},
	{
		num: "02",
		title: "Career Assessment",
		desc: "Our expert career coaches review your profile to identify gaps and opportunities in the market."
	},
	{
		num: "03",
		title: "Personalized Plan",
		desc: "Receive a tailored career roadmap, recommended services, and pricing specific to your goals."
	},
	{
		num: "04",
		title: "Start Your Journey",
		desc: "Begin training, receive application support, and start landing better paying placements."
	}
];
var EXPERTISE_CARDS = [
	{
		title: "Career Assessment and Placement",
		desc: "Strategic evaluation of your skills and targeted placement into high paying roles."
	},
	{
		title: "CV Optimization and Branding",
		desc: "Transform your resume, LinkedIn, and professional presence to attract top recruiters."
	},
	{
		title: "Application and Interview Prep",
		desc: "End to end support for job applications and rigorous mock interview sessions."
	},
	{
		title: "Skill Development Programs",
		desc: "Industry aligned training to bridge your skill gaps and make you highly hirable."
	}
];
function useMounted() {
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setMounted(true);
	}, []);
	return mounted;
}
function useInView$1(rootMargin = "300px") {
	const ref = (0, import_react.useRef)(null);
	const [inView, setInView] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const obs = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				setInView(true);
				obs.disconnect();
			}
		}, { rootMargin });
		obs.observe(el);
		return () => obs.disconnect();
	}, [rootMargin]);
	return {
		ref,
		inView
	};
}
function LazySection({ children, id, className, minHeight = "4rem" }) {
	const { ref, inView } = useInView$1("300px");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id,
		ref,
		className,
		style: !inView ? { minHeight } : void 0,
		children: inView ? children : null
	});
}
function WAIcon({ size = 14 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		width: size,
		height: size,
		viewBox: "0 0 24 24",
		fill: "currentColor",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
	});
}
function HomePage() {
	const reduce = useReducedMotion();
	const mounted = useMounted();
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const [assessmentOpen, setAssessmentOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onResize = () => {
			if (window.innerWidth >= 768) setMenuOpen(false);
		};
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, []);
	const fade = (delay = 0) => !mounted || reduce ? {} : {
		initial: {
			opacity: 0,
			y: 18
		},
		animate: {
			opacity: 1,
			y: 0
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
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LazyMotion, {
		features: domAnimation,
		strict: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-screen bg-background font-sans text-ink antialiased",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					id: "top",
					className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#top",
								className: "flex items-center gap-2.5",
								"aria-label": "HirePath Solutions",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/logo.png",
									alt: "HirePath Solutions logo",
									width: 32,
									height: 32,
									className: "h-8 w-8 rounded-[7px]",
									fetchPriority: "high"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-display text-base font-semibold tracking-tight text-ink sm:text-lg",
									children: ["HirePath ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "Solutions"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "hidden items-center gap-7 md:flex",
								children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: l.href,
									className: "text-sm font-medium text-graphite transition-colors hover:text-gold",
									children: l.label
								}) }, l.label))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#programs",
								className: "hidden rounded-sm bg-ink px-5 py-2.5 text-xs font-semibold tracking-wide text-background transition-colors hover:bg-ink/80 md:inline-flex",
								children: "Explore Programs"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => setMenuOpen((o) => !o),
								className: "flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden",
								"aria-label": menuOpen ? "Close menu" : "Open menu",
								"aria-expanded": menuOpen,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex h-[14px] w-5 flex-col justify-between",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-0.5 w-full origin-center rounded-full bg-ink transition-transform duration-300 ease-in-out${menuOpen ? " translate-y-[6px] rotate-45" : ""}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-0.5 w-full rounded-full bg-ink transition-opacity duration-200 ease-in-out${menuOpen ? " opacity-0" : ""}` }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `block h-0.5 w-full origin-center rounded-full bg-ink transition-transform duration-300 ease-in-out${menuOpen ? " -translate-y-[6px] -rotate-45" : ""}` })
									]
								})
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden transition-all duration-300 md:hidden",
						style: {
							maxHeight: menuOpen ? "320px" : "0px",
							opacity: menuOpen ? 1 : 0
						},
						"aria-hidden": !menuOpen,
						inert: !menuOpen,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "border-t border-border bg-background px-5 pb-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "flex flex-col gap-3 pt-4",
								children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: l.href,
									onClick: () => setMenuOpen(false),
									className: "block py-1 text-sm font-medium text-graphite hover:text-gold",
									children: l.label
								}) }, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "#programs",
										onClick: () => setMenuOpen(false),
										className: "inline-flex w-full justify-center rounded-sm bg-ink px-5 py-2.5 text-sm font-semibold text-background",
										children: "Explore Programs"
									})
								})]
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "relative overflow-hidden bg-background",
					style: {
						backgroundImage: "radial-gradient(circle, rgba(201,151,28,0.06) 1px, transparent 1px)",
						backgroundSize: "28px 28px"
					},
					children: [
						mounted && !reduce && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
							animate: {
								y: [
									0,
									-28,
									0
								],
								x: [
									0,
									12,
									0
								]
							},
							transition: {
								duration: 9,
								repeat: Infinity,
								ease: "easeInOut"
							},
							className: "pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
							animate: {
								y: [
									0,
									22,
									0
								],
								x: [
									0,
									-10,
									0
								]
							},
							transition: {
								duration: 11,
								repeat: Infinity,
								ease: "easeInOut",
								delay: 2
							},
							className: "pointer-events-none absolute -bottom-12 -left-24 h-80 w-80 rounded-full bg-gold/8 blur-3xl"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:py-28",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-col items-center text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-3xl",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.p, {
											...fade(.05),
											className: "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
											children: "Career Training, Nigeria"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.h1, {
											...fade(.12),
											className: "mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]",
											children: "Build Your Career. Increase Your Income. Access Better Opportunities."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.p, {
											...fade(.2),
											className: "mx-auto mt-6 max-w-xl text-base leading-relaxed text-graphite sm:text-lg",
											children: "HirePath Solutions helps students, professionals, and job seekers acquire in demand skills, optimize their career profiles, and access better paying remote and physical job opportunities."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(m.div, {
											...fade(.3),
											className: "mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												onClick: () => setAssessmentOpen(true),
												onMouseEnter: () => import("./CareerAssessmentModal-D8sczzcc.mjs"),
												onFocus: () => import("./CareerAssessmentModal-D8sczzcc.mjs"),
												className: "w-full rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90 sm:w-auto",
												children: "Get Started"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: "#about",
												className: "text-sm font-medium text-ink underline-offset-4 hover:text-gold hover:underline",
												children: "Learn about us →"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
											...fade(.42),
											className: "mt-12 grid grid-cols-3 divide-x divide-border rounded-md border border-border bg-cream",
											children: [
												{
													value: "6",
													label: "Programs"
												},
												{
													value: "100%",
													label: "Remote"
												},
												{
													value: "No Exp",
													label: "Required"
												}
											].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "px-4 py-5 text-center",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "font-mono text-xl font-bold text-ink sm:text-2xl",
													children: s.value
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-0.5 text-xs text-graphite",
													children: s.label
												})]
											}, s.label))
										})
									]
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden border-y border-border bg-cream py-3.5",
					children: mounted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m.div, {
						animate: { x: ["0%", "-50%"] },
						transition: {
							duration: 28,
							repeat: Infinity,
							ease: "linear"
						},
						className: "flex w-max gap-10 whitespace-nowrap",
						children: [...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-graphite/60",
							children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold/50" })]
						}, i))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-10 whitespace-nowrap px-5",
						children: MARQUEE_ITEMS.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-graphite/60",
							children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold/50" })]
						}, i))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySection, {
					id: "about",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
									children: "Who We Are"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl",
									children: "We bridge the gap between ambition and employment."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "space-y-5 text-base leading-relaxed text-graphite",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "HirePath Solutions is a career development and workforce solutions company that helps individuals build in demand skills, strengthen their career profiles, and access better employment opportunities. We provide practical, industry relevant training, along with CV optimization, job application support, interview preparation, and career coaching to help our participants achieve long term career success." })
								})]
							})
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-gold/30 bg-cream px-8 py-14 text-center sm:px-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
									children: "Career Guidance"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-4 font-display text-3xl font-semibold leading-snug tracking-tight text-ink sm:text-4xl",
									children: "Confused About Your Career Path?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mx-auto mt-4 max-w-lg text-base leading-relaxed text-graphite",
									children: "We train you with in demand skills, build your CV and portfolio, prepare you for interviews, and help you get hired."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/programs",
										className: "inline-flex rounded-sm bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90",
										children: "Explore Programs"
									})
								})
							]
						})
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySection, {
					id: "programs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "bg-cream",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
										children: "The Process"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
										children: "How HirePath Solutions Works"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-lg text-base text-graphite",
										children: "A streamlined path from where you are to where you want to be."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
								children: PROCESS_STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-background p-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-3xl font-bold text-gold/40",
											children: s.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-3 font-display text-base font-semibold text-ink",
											children: s.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-graphite",
											children: s.desc
										})
									]
								}, s.num))
							})]
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySection, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "bg-background",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-semibold uppercase tracking-[0.18em] text-gold",
										children: "Our Expertise"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
										children: "What We Offer"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mx-auto mt-4 max-w-lg text-base text-graphite",
										children: "Comprehensive solutions to elevate your professional trajectory."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-14 grid gap-6 sm:grid-cols-2",
								children: EXPERTISE_CARDS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "rounded-xl border border-border bg-background p-7 transition-shadow hover:shadow-md",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2.5 w-2.5 rounded-full bg-gold" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-5 font-display text-lg font-semibold text-ink",
											children: c.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-2 text-sm leading-relaxed text-graphite",
											children: c.desc
										})
									]
								}, c.title))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/programs",
									className: "inline-flex rounded-sm border border-ink px-8 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-background",
									children: "View All Services"
								})
							})
						]
					})
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LazySection, {
					id: "contact",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
						className: "bg-ink text-background",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px w-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-5xl px-5 py-16 sm:px-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col items-center text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.png",
										alt: "HirePath Solutions logo",
										width: 48,
										height: 48,
										className: "h-12 w-12 rounded-xl",
										loading: "lazy",
										decoding: "async"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 font-display text-xl font-semibold text-background sm:text-2xl",
										children: "Train Smart, Earn More."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap justify-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "tel:08068579982",
											className: "inline-flex items-center gap-2 rounded-sm border border-background/20 px-5 py-2.5 text-sm font-medium text-background transition-colors hover:border-gold hover:text-gold",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												width: "14",
												height: "14",
												viewBox: "0 0 24 24",
												fill: "none",
												stroke: "currentColor",
												strokeWidth: "2",
												strokeLinecap: "round",
												strokeLinejoin: "round",
												"aria-hidden": "true",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" })
											}), "08068579982"]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: WA_LINK,
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex items-center gap-2 rounded-sm bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WAIcon, { size: 14 }), "Message HPS on WhatsApp"]
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/15 pt-7 sm:flex-row",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: "/logo.png",
										alt: "",
										width: 20,
										height: 20,
										className: "h-5 w-5 rounded-[4px]"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-sm font-medium text-background/70",
										children: [
											"© ",
											(/* @__PURE__ */ new Date()).getFullYear(),
											" HirePath Solutions"
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
									className: "flex items-center gap-6 text-sm text-background/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/privacy",
											className: "hover:text-gold transition-colors",
											children: "Privacy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/refund",
											className: "hover:text-gold transition-colors",
											children: "Refund Policy"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/va-blueprint",
											className: "hover:text-gold transition-colors",
											children: "VA Blueprint"
										})
									]
								})]
							})]
						})]
					})
				})
			]
		}), assessmentOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
			fallback: null,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CareerAssessmentModal, { onClose: () => setAssessmentOpen(false) })
		})]
	});
}
//#endregion
export { HomePage as component };
