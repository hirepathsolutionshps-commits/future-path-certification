import { o as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-E6N3Whrp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BGBtp7U8.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				name: "author",
				content: "Hire Path Solutions"
			},
			{
				name: "theme-color",
				content: "#0A0A0A"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:site_name",
				content: "Hire Path Solutions"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/logo.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/logo.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "preload",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap",
				as: "style"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "LocalBusiness",
				name: "Hire Path Solutions",
				description: "Training program turning students into remote Healthcare Virtual Assistants for US and UK clients.",
				address: {
					"@type": "PostalAddress",
					addressLocality: "Lagos",
					addressCountry: "NG"
				},
				areaServed: [
					"US",
					"GB",
					"NG"
				],
				telephone: "+234"
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			position: "top-center",
			richColors: true
		})]
	});
}
var og_image_default = "/assets/og-image-CSgUuoAs.jpg";
var $$splitComponentImporter$4 = () => import("./va-blueprint-ChUJR3MQ.mjs");
var TITLE$4 = "Healthcare Virtual Assistant Blueprint | Hire Path Solutions";
var DESCRIPTION$4 = "6-week training to become a remote Healthcare Virtual Assistant for US & UK clients. Work from anywhere, get paid in dollars from Lagos. No experience required.";
var Route$8 = createFileRoute("/va-blueprint")({
	head: () => ({
		meta: [
			{ title: TITLE$4 },
			{
				name: "description",
				content: DESCRIPTION$4
			},
			{
				property: "og:title",
				content: TITLE$4
			},
			{
				property: "og:description",
				content: DESCRIPTION$4
			},
			{
				property: "og:url",
				content: "/va-blueprint"
			},
			{
				property: "og:image",
				content: og_image_default
			},
			{
				name: "twitter:title",
				content: TITLE$4
			},
			{
				name: "twitter:description",
				content: DESCRIPTION$4
			},
			{
				name: "twitter:image",
				content: og_image_default
			}
		],
		links: [{
			rel: "canonical",
			href: "/va-blueprint"
		}],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Course",
				name: "Healthcare Virtual Assistant Training",
				description: DESCRIPTION$4,
				provider: {
					"@type": "Organization",
					name: "Hire Path Solutions",
					sameAs: "/"
				},
				offers: {
					"@type": "Offer",
					price: "50000",
					priceCurrency: "NGN",
					availability: "https://schema.org/InStock"
				},
				hasCourseInstance: {
					"@type": "CourseInstance",
					courseMode: "online",
					courseWorkload: "P6W"
				}
			})
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var BASE_URL = "";
var Route$7 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/va-blueprint",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/privacy",
				changefreq: "yearly",
				priority: "0.3"
			},
			{
				path: "/refund",
				changefreq: "yearly",
				priority: "0.3"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$3 = () => import("./refund-BglcxnzX.mjs");
var TITLE$3 = "Refund & Guarantee Policy | Hire Path Solutions";
var DESCRIPTION$3 = "Our refund terms and job-placement guarantee for the Hire Path Solutions Healthcare Virtual Assistant training program.";
var Route$6 = createFileRoute("/refund")({
	head: () => ({
		meta: [
			{ title: TITLE$3 },
			{
				name: "description",
				content: DESCRIPTION$3
			},
			{
				property: "og:title",
				content: TITLE$3
			},
			{
				property: "og:description",
				content: DESCRIPTION$3
			},
			{
				property: "og:url",
				content: "/refund"
			}
		],
		links: [{
			rel: "canonical",
			href: "/refund"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./programs-u6-OgYmW.mjs");
var TITLE$2 = "Programs | HirePath Solutions";
var DESCRIPTION$2 = "Explore HirePath Solutions programs. Practical, industry relevant training designed to get you job ready and earning faster.";
var Route$5 = createFileRoute("/programs")({
	head: () => ({ meta: [
		{ title: TITLE$2 },
		{
			name: "description",
			content: DESCRIPTION$2
		},
		{
			property: "og:title",
			content: TITLE$2
		},
		{
			property: "og:description",
			content: DESCRIPTION$2
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./privacy-DpEf8r8F.mjs");
var TITLE$1 = "Privacy Policy | Hire Path Solutions";
var DESCRIPTION$1 = "How Hire Path Solutions collects, uses, and protects the information you share when you apply to our Healthcare Virtual Assistant program.";
var Route$4 = createFileRoute("/privacy")({
	head: () => ({
		meta: [
			{ title: TITLE$1 },
			{
				name: "description",
				content: DESCRIPTION$1
			},
			{
				property: "og:title",
				content: TITLE$1
			},
			{
				property: "og:description",
				content: DESCRIPTION$1
			},
			{
				property: "og:url",
				content: "/privacy"
			}
		],
		links: [{
			rel: "canonical",
			href: "/privacy"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-DWHzqhx5.mjs");
var TITLE = "HirePath Solutions | Train Smart, Earn More";
var DESCRIPTION = "HirePath Solutions helps students, professionals, and job seekers acquire in demand skills, optimize their career profiles, and access better paying opportunities.";
var Route$3 = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: TITLE },
			{
				name: "description",
				content: DESCRIPTION
			},
			{
				property: "og:title",
				content: TITLE
			},
			{
				property: "og:description",
				content: DESCRIPTION
			},
			{
				property: "og:url",
				content: "/"
			},
			{
				name: "twitter:title",
				content: TITLE
			},
			{
				name: "twitter:description",
				content: DESCRIPTION
			}
		],
		links: [{
			rel: "canonical",
			href: "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var RESEND_API_KEY = process.env.RESEND_API_KEY;
var FROM = "Hire Path Solutions <hello@hirepathsolutions.com>";
var ADMIN_EMAIL = "Hirepathsolutionshps@gmail.com";
var LOGO_URL = "https://hirepathsolutions.com/logo.png";
var SITE_URL = "https://hirepathsolutions.com";
function baseShell(contentHtml) {
	return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Hire Path Solutions</title>
  <!--[if !mso]><!-->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;0,9..144,700;1,9..144,400&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <!--<![endif]-->
  <style>
    /* Reset */
    * { box-sizing: border-box; }
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; border-collapse: collapse; }
    img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }

    /* Animations — degrade gracefully in unsupported clients */
    @keyframes fadeSlideUp {
      from { opacity: 0; transform: translateY(18px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes goldPulse {
      0%   { opacity: 0.5; }
      50%  { opacity: 1; }
      100% { opacity: 0.5; }
    }
    @keyframes shimmer {
      0%   { background-position: -400px 0; }
      100% { background-position: 400px 0; }
    }

    .card-animate {
      animation: fadeSlideUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both;
    }
    .gold-bar-animate {
      animation: goldPulse 3s ease-in-out 0.7s infinite;
    }

    /* Responsive */
    @media screen and (max-width: 600px) {
      .card-wrap { width: 100% !important; padding: 0 !important; }
      .card-inner { border-radius: 0 !important; }
      .card-body { padding: 32px 24px !important; }
      .card-header { padding: 28px 24px !important; }
      .card-footer { padding: 20px 24px !important; }
      .btn-cta { display: block !important; text-align: center !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#F7F5F0;font-family:'Inter',Arial,sans-serif;color:#0A0A0A;">

  <!-- Outer wrapper -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F7F5F0;padding:48px 16px;">
    <tr>
      <td align="center">

        <!-- Card -->
        <table role="presentation" class="card-wrap card-animate" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">
          <tr>
            <td class="card-inner" style="background:#ffffff;border-radius:8px;border:1px solid #E8E5DF;overflow:hidden;box-shadow:0 4px 32px rgba(10,10,10,0.06);">

              <!-- Header -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td class="card-header" style="background:#0A0A0A;padding:32px 40px;text-align:center;">
                    <a href="${SITE_URL}" style="text-decoration:none;display:inline-block;">
                      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                        <tr>
                          <td style="vertical-align:middle;padding-right:10px;">
                            <img src="${LOGO_URL}" alt="Hire Path Solutions" width="36" height="36" style="display:block;border-radius:7px;width:36px;height:36px;" />
                          </td>
                          <td style="vertical-align:middle;">
                            <span style="font-family:Georgia,'Times New Roman',serif;font-size:20px;font-weight:700;color:#ffffff;letter-spacing:-0.3px;display:inline;">
                              Hire Path <span style="color:#C9971C;">Solutions</span>
                            </span>
                          </td>
                        </tr>
                      </table>
                    </a>
                  </td>
                </tr>

                <!-- Gold accent bar -->
                <tr>
                  <td class="gold-bar-animate" style="height:2px;background:linear-gradient(90deg,transparent 0%,#C9971C 30%,#E8B830 50%,#C9971C 70%,transparent 100%);font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- Body -->
              ${contentHtml}

              <!-- Footer -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="height:1px;background:#E8E5DF;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td class="card-footer" style="background:#F7F5F0;padding:24px 40px;text-align:center;">
                    <p style="margin:0 0 6px;font-family:'JetBrains Mono',Courier,monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.2em;color:#888888;">
                      Hire Path Solutions &nbsp;·&nbsp; Lagos, Nigeria
                    </p>
                    <p style="margin:0;font-size:11px;color:#aaaaaa;line-height:1.6;">
                      <a href="tel:+2348068579982" style="color:#aaaaaa;text-decoration:none;">+234 806 857 9982</a>
                      &nbsp;·&nbsp;
                      <a href="${SITE_URL}" style="color:#aaaaaa;text-decoration:none;">hirepathsolutions.com</a>
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>
        </table>
        <!-- /Card -->

      </td>
    </tr>
  </table>
</body>
</html>`;
}
function eyebrow(text) {
	return `<p style="margin:0 0 10px;font-family:'JetBrains Mono',Courier,monospace;font-size:10px;text-transform:uppercase;letter-spacing:0.22em;color:#C9971C;">${text}</p>`;
}
function heading(text) {
	return `<h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:700;color:#0A0A0A;line-height:1.25;letter-spacing:-0.5px;">${text}</h1>`;
}
function bodyText(text, extra = "") {
	return `<p style="margin:0 0 20px;font-size:15px;line-height:1.75;color:#3D3D3D;${extra}">${text}</p>`;
}
function dataRow(label, value, first = false) {
	const borderTop = first ? "" : "border-top:1px solid #E8E5DF;";
	return `<tr>
    <td style="padding:9px 0;font-family:'JetBrains Mono',Courier,monospace;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#888888;${borderTop}">${label}</td>
    <td style="padding:9px 0;font-size:13px;color:#0A0A0A;text-align:right;font-weight:600;${borderTop}">${value}</td>
  </tr>`;
}
function dataTable(rows) {
	return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F7F5F0;border-radius:6px;border:1px solid #E8E5DF;margin:0 0 28px;">
    <tr>
      <td style="padding:20px 24px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
          ${rows.map(([l, v], i) => dataRow(l, v, i === 0)).join("")}
        </table>
      </td>
    </tr>
  </table>`;
}
function ctaButton(href, label) {
	return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:4px 0 28px;">
    <tr>
      <td style="border-radius:4px;background:#0A0A0A;">
        <a href="${href}" class="btn-cta" style="display:inline-block;background:#0A0A0A;color:#C9971C;font-family:'JetBrains Mono',Courier,monospace;font-size:11px;font-weight:500;text-decoration:none;padding:14px 32px;border-radius:4px;letter-spacing:0.15em;text-transform:uppercase;">${label}</a>
      </td>
    </tr>
  </table>`;
}
function divider() {
	return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:24px 0;">
    <tr>
      <td style="height:1px;background:linear-gradient(90deg,transparent,#E8E5DF 20%,#E8E5DF 80%,transparent);font-size:0;line-height:0;">&nbsp;</td>
    </tr>
  </table>`;
}
function buildConfirmationHtml(data) {
	const price = data.scheduleType === "VIP" ? "₦100,000" : "₦50,000";
	const firstName = data.name.split(" ")[0];
	return baseShell(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("Application Confirmed")}
        ${heading(`Welcome aboard, ${firstName}!`)}
        ${bodyText(`Your application and payment have been received. You have officially secured your seat in the <strong style="color:#0A0A0A;">${data.cohortName}</strong>. We're thrilled to have you.`)}

        ${dataTable([
		["Name", data.name],
		["Email", data.email],
		["Phone", data.phone],
		["Plan", data.scheduleType],
		["Amount Paid", price]
	])}

        ${bodyText(`Our team will reach out via <strong>WhatsApp or phone</strong> within 24 hours with your onboarding details and cohort start date.`)}

        ${ctaButton("https://wa.me/2348068579982", "Message Us on WhatsApp")}

        ${divider()}

        <p style="margin:0;font-size:13px;line-height:1.7;color:#888888;font-style:italic;">
          If you have any questions before then, reply to this email or message us directly on WhatsApp. We're here for you.
        </p>

      </td>
    </tr>
  </table>`);
}
function buildCareerAssessmentApplicantHtml(data) {
	const firstName = data.full_name.split(" ")[0];
	return baseShell(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("Assessment Received")}
        ${heading(`Thanks, ${firstName}!`)}
        ${bodyText(`We've received your career assessment and are reviewing your profile. One of our career coaches will reach out within <strong>24 – 48 hours</strong> with your personalised career plan and next steps.`)}

        ${dataTable([
		["Name", data.full_name],
		["Email", data.email],
		["Phone", data.phone]
	])}

        ${bodyText(`In the meantime, feel free to message us on WhatsApp if you have any questions — we're always happy to help.`)}

        ${ctaButton("https://wa.me/2348068579982", "Message Us on WhatsApp")}

        ${divider()}

        <p style="margin:0;font-size:13px;line-height:1.7;color:#888888;font-style:italic;">
          You're one step closer to building the career you deserve. We'll be in touch soon.
        </p>

      </td>
    </tr>
  </table>`);
}
function buildCareerAssessmentAdminHtml(data) {
	const rows = [
		["Name", data.full_name],
		["Email", data.email],
		["Phone", data.phone],
		["Location", [data.city, data.state].filter(Boolean).join(", ") || "—"],
		["Education", data.education_level || "—"],
		["Field of Study", data.field_of_study || "—"],
		["Job Title", data.job_title || "—"],
		["Experience", data.years_experience || "—"],
		["Industry", data.industry || "—"],
		["Current Skills", data.current_skills || "—"],
		["Skills to Gain", data.skills_to_gain || "—"],
		["Target Role", data.target_role || "—"],
		["Work Preference", data.work_preference || "—"],
		["Timeline", data.timeline || "—"],
		["Preferred Contact", data.contact_method || "—"],
		["Best Time", data.best_time || "—"]
	];
	return baseShell(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("New Submission")}
        ${heading(`Career Assessment`)}
        ${bodyText(`A new career assessment has been submitted. Full details are below.`)}

        ${dataTable(rows)}

        ${ctaButton(`mailto:${data.email}`, `Reply to ${data.full_name.split(" ")[0]}`)}

      </td>
    </tr>
  </table>`);
}
function buildEnrollmentAdminHtml(data) {
	const price = data.scheduleType === "VIP" ? "₦100,000" : "₦50,000";
	return baseShell(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("New Enrolment")}
        ${heading(`${data.name} just enrolled`)}
        ${bodyText(`A new student has completed payment and secured their seat.`)}

        ${dataTable([
		["Name", data.name],
		["Email", data.email],
		["Phone", data.phone],
		["Plan", data.scheduleType],
		["Amount Paid", price],
		["Cohort", data.cohortName],
		["Has Laptop", data.has_laptop ? "Yes" : "No"]
	])}

        ${ctaButton(`mailto:${data.email}`, `Reply to ${data.name.split(" ")[0]}`)}

      </td>
    </tr>
  </table>`);
}
function buildWaitlistAdminHtml(data) {
	return baseShell(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("New Waitlist Signup")}
        ${heading(`${data.name} joined the waitlist`)}
        ${bodyText(`Someone has expressed interest in an upcoming program.`)}

        ${dataTable([
		["Name", data.name],
		["Email", data.email],
		["Program", data.program_name]
	])}

        ${ctaButton(`mailto:${data.email}`, `Reply to ${data.name.split(" ")[0]}`)}

      </td>
    </tr>
  </table>`);
}
function buildWaitlistApplicantHtml(data) {
	const firstName = data.name.split(" ")[0];
	return baseShell(`<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td class="card-body" style="padding:40px 40px 32px;">

        ${eyebrow("You're on the list")}
        ${heading(`Got it, ${firstName}!`)}
        ${bodyText(`You've been added to the waitlist for <strong style="color:#0A0A0A;">${data.program_name}</strong>. We'll reach out as soon as enrollment opens — you'll be among the first to know.`)}

        ${dataTable([
		["Name", data.name],
		["Email", data.email],
		["Program", data.program_name]
	])}

        ${bodyText(`In the meantime, feel free to message us if you have any questions.`)}

        ${ctaButton("https://wa.me/2348068579982", "Message Us on WhatsApp")}

        ${divider()}

        <p style="margin:0;font-size:13px;line-height:1.7;color:#888888;font-style:italic;">
          We're working hard to launch this program. We appreciate your interest and can't wait to have you.
        </p>

      </td>
    </tr>
  </table>`);
}
async function sendConfirmationEmail(data) {
	if (!RESEND_API_KEY) {
		console.error("[email] RESEND_API_KEY not set — skipping email");
		return;
	}
	const [studentRes, adminRes] = await Promise.all([fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: FROM,
			to: [data.email],
			subject: `You're in, ${data.name.split(" ")[0]}! Your seat is confirmed — Hire Path Solutions`,
			html: buildConfirmationHtml(data)
		})
	}), fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: FROM,
			to: [ADMIN_EMAIL],
			subject: `New Enrolment: ${data.name} — ${data.scheduleType} Plan`,
			html: buildEnrollmentAdminHtml(data)
		})
	})]);
	if (!studentRes.ok) console.error("[email] Student confirmation error:", await studentRes.text());
	else console.log("[email] Confirmation sent to", data.email);
	if (!adminRes.ok) console.error("[email] Admin enrolment alert error:", await adminRes.text());
	else console.log("[email] Enrolment admin alert sent");
}
async function sendWaitlistEmail(data) {
	if (!RESEND_API_KEY) {
		console.error("[email] RESEND_API_KEY not set — skipping waitlist email");
		return;
	}
	const [userRes, adminRes] = await Promise.all([fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: FROM,
			to: [data.email],
			subject: `You're on the waitlist, ${data.name.split(" ")[0]}! — Hire Path Solutions`,
			html: buildWaitlistApplicantHtml(data)
		})
	}), fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: FROM,
			to: [ADMIN_EMAIL],
			subject: `New Waitlist Signup: ${data.name} — ${data.program_name}`,
			html: buildWaitlistAdminHtml(data)
		})
	})]);
	if (!userRes.ok) console.error("[email] Waitlist user email error:", await userRes.text());
	else console.log("[email] Waitlist confirmation sent to", data.email);
	if (!adminRes.ok) console.error("[email] Waitlist admin alert error:", await adminRes.text());
	else console.log("[email] Waitlist admin alert sent");
}
async function sendCareerAssessmentEmail(data) {
	if (!RESEND_API_KEY) {
		console.error("[email] RESEND_API_KEY not set — skipping career assessment email");
		return;
	}
	const [applicantRes, adminRes] = await Promise.all([fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: FROM,
			to: [data.email],
			subject: `We received your assessment, ${data.full_name.split(" ")[0]}! — Hire Path Solutions`,
			html: buildCareerAssessmentApplicantHtml(data)
		})
	}), fetch("https://api.resend.com/emails", {
		method: "POST",
		headers: {
			Authorization: `Bearer ${RESEND_API_KEY}`,
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			from: FROM,
			to: [ADMIN_EMAIL],
			subject: `New Career Assessment: ${data.full_name}`,
			html: buildCareerAssessmentAdminHtml(data)
		})
	})]);
	if (!applicantRes.ok) console.error("[email] Applicant email error:", await applicantRes.text());
	else console.log("[email] Career assessment confirmation sent to", data.email);
	if (!adminRes.ok) console.error("[email] Admin email error:", await adminRes.text());
	else console.log("[email] Career assessment admin notification sent");
}
var Route$2 = createFileRoute("/api/send-waitlist-notification")({ server: { handlers: { POST: async ({ request }) => {
	try {
		await sendWaitlistEmail(await request.json());
		return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
	} catch (err) {
		console.error("[send-waitlist-notification]", err);
		return new Response(JSON.stringify({ ok: false }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var Route$1 = createFileRoute("/api/send-confirmation")({ server: { handlers: { POST: async ({ request }) => {
	try {
		await sendConfirmationEmail(await request.json());
		return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
	} catch (err) {
		console.error("[send-confirmation]", err);
		return new Response(JSON.stringify({ ok: false }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
function validate(data) {
	if (!data || typeof data !== "object") return false;
	const d = data;
	if (typeof d.full_name !== "string" || d.full_name.trim().length < 2 || d.full_name.length > 120) return false;
	if (typeof d.email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email) || d.email.length > 255) return false;
	if (typeof d.phone !== "string" || d.phone.trim().length < 7 || d.phone.length > 40) return false;
	for (const key of [
		"city",
		"state",
		"education_level",
		"field_of_study",
		"job_title",
		"years_experience",
		"industry",
		"current_skills",
		"skills_to_gain",
		"target_role",
		"work_preference",
		"timeline",
		"contact_method",
		"best_time"
	]) if (key in d && d[key] !== void 0 && d[key] !== null) {
		if (typeof d[key] !== "string" || d[key].length > 500) return false;
	}
	return true;
}
var Route = createFileRoute("/api/send-career-assessment")({ server: { handlers: { POST: async ({ request }) => {
	let data;
	try {
		data = await request.json();
	} catch {
		return new Response(JSON.stringify({
			ok: false,
			error: "Invalid JSON"
		}), {
			status: 400,
			headers: { "Content-Type": "application/json" }
		});
	}
	if (!validate(data)) return new Response(JSON.stringify({
		ok: false,
		error: "Invalid payload"
	}), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	try {
		await sendCareerAssessmentEmail(data);
		return new Response(JSON.stringify({ ok: true }), { headers: { "Content-Type": "application/json" } });
	} catch (err) {
		console.error("[send-career-assessment]", err);
		return new Response(JSON.stringify({
			ok: false,
			error: "Email send failed"
		}), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var VaBlueprintRoute = Route$8.update({
	id: "/va-blueprint",
	path: "/va-blueprint",
	getParentRoute: () => Route$9
});
var SitemapDotxmlRoute = Route$7.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$9
});
var RefundRoute = Route$6.update({
	id: "/refund",
	path: "/refund",
	getParentRoute: () => Route$9
});
var ProgramsRoute = Route$5.update({
	id: "/programs",
	path: "/programs",
	getParentRoute: () => Route$9
});
var PrivacyRoute = Route$4.update({
	id: "/privacy",
	path: "/privacy",
	getParentRoute: () => Route$9
});
var IndexRoute = Route$3.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$9
});
var ApiSendWaitlistNotificationRoute = Route$2.update({
	id: "/api/send-waitlist-notification",
	path: "/api/send-waitlist-notification",
	getParentRoute: () => Route$9
});
var ApiSendConfirmationRoute = Route$1.update({
	id: "/api/send-confirmation",
	path: "/api/send-confirmation",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute,
	PrivacyRoute,
	ProgramsRoute,
	RefundRoute,
	SitemapDotxmlRoute,
	VaBlueprintRoute,
	ApiSendCareerAssessmentRoute: Route.update({
		id: "/api/send-career-assessment",
		path: "/api/send-career-assessment",
		getParentRoute: () => Route$9
	}),
	ApiSendConfirmationRoute,
	ApiSendWaitlistNotificationRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
