import { r as __toESM } from "../_runtime.mjs";
import { t as SITE_URL } from "./site-config-bxSqWGfN.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$10 } from "./blog_._slug-ChsvHDnw.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Kr2RsTby.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-C7q30MXs.css";
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
					className: "font-display text-7xl text-primary",
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
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground",
					children: "Go home"
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
					className: "font-display text-2xl text-primary",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "rounded-full border border-border px-5 py-2.5 text-sm",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var siteJsonLd = {
	"@context": "https://schema.org",
	"@graph": [{
		"@type": "MedicalBusiness",
		"@id": "#clinic",
		name: "Dr. Poulamy's Homeopathy Clinic",
		description: "Classical, constitutional homeopathic care led by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal.",
		telephone: "+917685950399",
		email: "drpoulamys@gmail.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Near Maa Kamala Mandir, Gopalmath",
			addressLocality: "Durgapur",
			addressRegion: "West Bengal",
			postalCode: "713217",
			addressCountry: "IN"
		},
		geo: {
			"@type": "GeoCoordinates",
			latitude: "23.5186",
			longitude: "87.3512"
		},
		openingHoursSpecification: {
			"@type": "OpeningHoursSpecification",
			dayOfWeek: "Sunday",
			opens: "09:00",
			closes: "20:00"
		},
		areaServed: [{
			"@type": "Country",
			name: "India"
		}, {
			"@type": "City",
			name: "Durgapur"
		}],
		priceRange: "₹₹"
	}, {
		"@type": "Physician",
		"@id": "#doctor",
		name: "Dr. Poulamy Singha Roy",
		jobTitle: "Homeopathic Physician, Assistant Professor",
		medicalSpecialty: "Homeopathy",
		knowsAbout: [
			"Classical Homeopathy",
			"Chronic Disease Care",
			"Skin & Hair",
			"Women's Health",
			"Child Health"
		],
		worksFor: { "@id": "#clinic" }
	}]
};
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India" },
			{
				name: "description",
				content: "Classical, constitutional homeopathic care by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal."
			},
			{
				name: "author",
				content: "Dr. Poulamy's Homeopathy Clinic"
			},
			{
				name: "theme-color",
				content: "#1f4d3a"
			},
			{
				property: "og:site_name",
				content: "Dr. Poulamy's Homeopathy Clinic"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:locale",
				content: "en_IN"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				property: "og:title",
				content: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India"
			},
			{
				name: "twitter:title",
				content: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India"
			},
			{
				property: "og:description",
				content: "Classical, constitutional homeopathic care by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal."
			},
			{
				name: "twitter:description",
				content: "Classical, constitutional homeopathic care by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal."
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e2cba8a-2cc1-4136-b181-cba4480498d7/id-preview-654155d7--ecd92988-7d9a-41ac-b75f-cb5f7fed6a8d.lovable.app-1782981174130.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1e2cba8a-2cc1-4136-b181-cba4480498d7/id-preview-654155d7--ecd92988-7d9a-41ac-b75f-cb5f7fed6a8d.lovable.app-1782981174130.png"
			}
		],
		links: [
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "stylesheet",
				href: styles_default
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
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify(siteJsonLd)
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var BASE_URL = SITE_URL;
var Route$8 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
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
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/services",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/consultations",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/products",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/blog",
				changefreq: "weekly",
				priority: "0.7"
			},
			{
				path: "/gallery",
				changefreq: "monthly",
				priority: "0.5"
			},
			{
				path: "/contact",
				changefreq: "yearly",
				priority: "0.6"
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
var $$splitComponentImporter$7 = () => import("./services-fCiWV4jQ.mjs");
var Route$7 = createFileRoute("/services")({
	head: () => ({
		meta: [
			{ title: "Homeopathy Services | Chronic, Skin, Women's & Child Care — Dr. Poulamy's" },
			{
				name: "description",
				content: "Classical homeopathic services for chronic disease, skin & hair, women's health, child health, lifestyle disorders, mental wellness, respiratory and joint care."
			},
			{
				property: "og:title",
				content: "Homeopathy Services — Dr. Poulamy's Clinic"
			},
			{
				property: "og:description",
				content: "Constitutional care for chronic, skin, hormonal, paediatric and lifestyle conditions."
			},
			{
				property: "og:url",
				content: SITE_URL + "/services"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/services"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./products-BgCENi44.mjs");
var Route$6 = createFileRoute("/products")({
	head: () => ({
		meta: [
			{ title: "Homeopathic Remedies & Wellness Products | Dr. Poulamy's" },
			{
				name: "description",
				content: "Classical single remedies, mother tinctures, biochemic salts and curated wellness kits — dispensed after consultation and couriered across India."
			},
			{
				property: "og:title",
				content: "Homeopathic Remedies & Wellness Products"
			},
			{
				property: "og:description",
				content: "Pure classical remedies and curated wellness kits, dispensed with care."
			},
			{
				property: "og:url",
				content: SITE_URL + "/products"
			},
			{
				property: "og:image",
				content: SITE_URL + "/assets/remedies.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./gallery-CcG3ir9z.mjs");
var Route$5 = createFileRoute("/gallery")({
	head: () => ({
		meta: [
			{ title: "Gallery | Inside Dr. Poulamy's Homeopathy Clinic, Durgapur" },
			{
				name: "description",
				content: "A look inside our Durgapur clinic — calm consultation spaces, the in‑clinic dispensary and moments from everyday classical homeopathic practice."
			},
			{
				property: "og:title",
				content: "Clinic Gallery — Dr. Poulamy's"
			},
			{
				property: "og:description",
				content: "A look inside the clinic, dispensary and consultation room."
			},
			{
				property: "og:url",
				content: SITE_URL + "/gallery"
			},
			{
				property: "og:image",
				content: SITE_URL + "/assets/clinic.jpg"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/gallery"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-CUEo6Q3M.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({
		meta: [
			{ title: "Contact Dr. Poulamy's Homeopathy Clinic | Durgapur, West Bengal" },
			{
				name: "description",
				content: "Reach Dr. Poulamy's Homeopathy Clinic in Durgapur — phone, email and clinic address. Online consultations across India and Sunday clinic visits."
			},
			{
				property: "og:title",
				content: "Contact Dr. Poulamy's Homeopathy Clinic"
			},
			{
				property: "og:description",
				content: "Phone, email and clinic address. Online & offline consultations."
			},
			{
				property: "og:url",
				content: SITE_URL + "/contact"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/contact"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./consultations-C3pUhuE6.mjs");
var Route$3 = createFileRoute("/consultations")({
	head: () => ({
		meta: [
			{ title: "Book Consultation | Online India & Durgapur Clinic — Dr. Poulamy's" },
			{
				name: "description",
				content: "Book an online homeopathy consultation (Mon–Sat) anywhere in India, or visit our Sunday clinic in Durgapur. Remedies couriered PAN‑India after consultation."
			},
			{
				property: "og:title",
				content: "Book a Homeopathy Consultation — Dr. Poulamy's"
			},
			{
				property: "og:description",
				content: "Online consultations across India and Sunday clinic visits in Durgapur."
			},
			{
				property: "og:url",
				content: SITE_URL + "/consultations"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/consultations"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./blog-CytkFakP.mjs");
var Route$2 = createFileRoute("/blog")({
	head: () => ({
		meta: [
			{ title: "Homeopathy Blog | Insights, Cases & Wellness — Dr. Poulamy's" },
			{
				name: "description",
				content: "Articles and insights on classical homeopathy, chronic care, women's health, child health and lifestyle — by Dr. Poulamy Singha Roy."
			},
			{
				property: "og:title",
				content: "Homeopathy Blog — Dr. Poulamy's"
			},
			{
				property: "og:description",
				content: "Practical insights on classical homeopathy and constitutional care."
			},
			{
				property: "og:url",
				content: SITE_URL + "/blog"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/blog"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-o2GEhTmq.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About Dr. Poulamy Singha Roy | Homeopathic Physician, Durgapur" },
			{
				name: "description",
				content: "Meet Dr. Poulamy Singha Roy, BHMS (Hons.), MD (Hom.) WBUHS — homeopathic physician and Assistant Professor with 8+ years of classical practice and academic experience."
			},
			{
				property: "og:title",
				content: "About Dr. Poulamy Singha Roy"
			},
			{
				property: "og:description",
				content: "BHMS (Hons.), MD (Hom.) WBUHS — 8+ years of classical homeopathic practice."
			},
			{
				property: "og:url",
				content: SITE_URL + "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-COHB80qJ.mjs");
var Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Dr. Poulamy's Homeopathy Clinic | Online Consultation India & Durgapur Clinic" },
			{
				name: "description",
				content: "Classical homeopathy by Dr. Poulamy Singha Roy (BHMS Hons., MD Hom.). Personalised constitutional care for chronic, skin, hormonal & child health. Online across India, clinic in Durgapur."
			},
			{
				name: "keywords",
				content: "homeopathy clinic India, online homeopathy consultation, Durgapur homeopath, classical homeopathy, Dr Poulamy, PCOS homeopathy, skin homeopathy, child homeopathy"
			},
			{
				property: "og:title",
				content: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India"
			},
			{
				property: "og:description",
				content: "Personalised constitutional homeopathic care — online across India and at our Durgapur clinic."
			},
			{
				property: "og:url",
				content: SITE_URL + "/"
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [{
			rel: "canonical",
			href: SITE_URL + "/"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$8.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$9
});
var ServicesRoute = Route$7.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$9
});
var ProductsRoute = Route$6.update({
	id: "/products",
	path: "/products",
	getParentRoute: () => Route$9
});
var GalleryRoute = Route$5.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var ConsultationsRoute = Route$3.update({
	id: "/consultations",
	path: "/consultations",
	getParentRoute: () => Route$9
});
var BlogRoute = Route$2.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute,
	BlogRoute,
	ConsultationsRoute,
	ContactRoute,
	GalleryRoute,
	ProductsRoute,
	ServicesRoute,
	SitemapDotxmlRoute,
	BlogSlugRoute: Route$10.update({
		id: "/blog_/$slug",
		path: "/blog/$slug",
		getParentRoute: () => Route$9
	})
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
