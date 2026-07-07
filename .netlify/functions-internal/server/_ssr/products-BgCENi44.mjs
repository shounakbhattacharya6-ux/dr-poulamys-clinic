import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as Leaf, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
import { n as SectionEyebrow, t as PageHero } from "./Section-CJiBqKHh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BgCENi44.js
var import_jsx_runtime = require_jsx_runtime();
var product_tincture_default = "/assets/product-tincture-BSW8-u_l.png";
var product_globules_default = "/assets/product-globules-dKWfrS9n.png";
var products_bg_default = "/assets/products-bg-U5XePCa7.png";
var items = [
	{
		t: "Single Remedies",
		d: "Classical single‑remedy preparations across all common potencies (6C, 30C, 200C, 1M)."
	},
	{
		t: "Mother Tinctures (Q)",
		d: "Pure mother tinctures from trusted Indian pharmacopoeias for supportive care."
	},
	{
		t: "Biochemic Salts",
		d: "Schuessler's 12 cell salts for everyday nutritional and constitutional support."
	},
	{
		t: "Immunity Kit",
		d: "Curated remedies for seasonal immunity and recovery — for adults and children."
	},
	{
		t: "Women's Wellness Kit",
		d: "Supportive companion remedies for cycle balance and hormonal ease."
	},
	{
		t: "Child Care Kit",
		d: "Gentle remedies for everyday children's complaints — colds, digestion, sleep."
	}
];
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			bgImage: products_bg_default,
			eyebrow: "Remedies & Wellness",
			title: "Pure remedies, dispensed with care",
			subtitle: "Classical preparations from trusted pharmacopoeias — dispensed in‑clinic and couriered PAN‑India."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:sticky lg:top-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product_tincture_default,
						alt: "Homeopathic mother tinctures in amber glass bottles",
						className: "rounded-3xl shadow-xl w-full aspect-[4/3] object-cover",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product_globules_default,
						alt: "Homeopathic sugar globules in glass vials",
						className: "rounded-3xl shadow-xl w-full aspect-[3/2] object-cover",
						loading: "lazy"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-sm text-muted-foreground",
					children: "Remedies are prescribed only after a proper consultation. We do not sell over‑the‑counter prescriptions."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [items.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 hover:border-gold/60 transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-5 w-5 text-leaf" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 font-display text-xl text-primary",
							children: p.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: p.d
						})
					]
				}, p.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "sm:col-span-2 rounded-2xl bg-primary text-primary-foreground p-7 flex flex-wrap items-center justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl",
						children: "Need a remedy?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-cream/80",
						children: "Start with a consultation — we'll guide you to the right prescription."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/consultations",
						className: "inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary",
						children: ["Book now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Ordering process" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl text-primary",
						children: "How remedy ordering works"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "A simple, transparent process from consultation to safe delivery."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-6 sm:grid-cols-3",
				children: [
					{
						t: "Consultation",
						d: "Book an online or clinic session so the remedy is prescribed responsibly."
					},
					{
						t: "Prescription",
						d: "Receive the customised prescription and supportive guidance."
					},
					{
						t: "Delivery",
						d: "Remedies are couriered PAN-India with tracking for secure arrival."
					}
				].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-7 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm uppercase tracking-[0.2em] text-gold",
						children: step.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground leading-relaxed",
						children: step.d
					})]
				}, step.t))
			})]
		})
	] });
}
//#endregion
export { Products as component };
