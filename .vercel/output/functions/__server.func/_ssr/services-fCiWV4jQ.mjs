import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Quote, w as ArrowRight, y as CircleCheck } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
import { n as SectionEyebrow, t as PageHero } from "./Section-CJiBqKHh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-fCiWV4jQ.js
var import_jsx_runtime = require_jsx_runtime();
var services_bg_default = "/assets/services-bg-D3f4d5NK.png";
var services = [
	{
		img: "/assets/service-chronic-BXYCXDM6.png",
		t: "Chronic Disease Care",
		d: "Long‑term constitutional care for recurring complaints — thyroid, blood pressure, diabetes support, autoimmune patterns."
	},
	{
		img: "/assets/service-skin-O7zTNHqg.png",
		t: "Skin & Hair",
		d: "Acne, eczema, psoriasis, vitiligo, urticaria, hair fall, alopecia and recurring skin sensitivity."
	},
	{
		img: "/assets/service-women-D5bHXrpp.png",
		t: "Women's Health",
		d: "PCOS, PCOD, irregular cycles, menstrual pain, fertility support, menopausal transitions and hormonal balance."
	},
	{
		img: "/assets/service-child-BdblFdnC.png",
		t: "Child Health",
		d: "Recurrent colds, tonsillitis, asthma, digestion, immunity, allergies, behavioural and developmental concerns."
	},
	{
		img: "/assets/service-respiratory-CBV0PHjc.png",
		t: "Respiratory Care",
		d: "Asthma, allergic rhinitis, sinusitis, recurrent cough and seasonal allergic flares."
	},
	{
		img: "/assets/service-joint-CwDi0Etj.png",
		t: "Joint & Spine",
		d: "Arthritis, frozen shoulder, lower back pain, sciatica and post‑injury constitutional support."
	},
	{
		img: "/assets/service-mind-DG3RayGs.png",
		t: "Mind & Stress",
		d: "Anxiety, sleep concerns, stress patterns, exam stress and constitutional support for emotional wellbeing."
	},
	{
		img: "/assets/service-immunity-Cw5VA40Q.png",
		t: "Lifestyle & Immunity",
		d: "Recurrent infections, fatigue, post‑viral recovery and seasonal immunity care."
	}
];
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			bgImage: services_bg_default,
			eyebrow: "Our Services",
			title: "Healing from the roots",
			subtitle: "Comprehensive homeopathic treatment for chronic, acute and pediatric conditions."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 xl:grid-cols-4",
				children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group flex flex-col rounded-3xl border border-border bg-card overflow-hidden transition-all hover:shadow-2xl hover:border-gold/40",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "aspect-[4/3] overflow-hidden relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: s.t,
							className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-7 flex flex-col flex-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-primary",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground leading-relaxed flex-1",
								children: s.d
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-5 h-1 w-10 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" })
						]
					})]
				}, s.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 border-y border-border bg-secondary/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-4xl mx-auto text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Our Healing Philosophy" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-4xl md:text-5xl text-primary leading-tight",
						children: "Treating the person, not just the disease."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-lg text-muted-foreground leading-relaxed",
						children: "Conventional medicine often focuses on silencing the symptoms. In classical homeopathy, symptoms are seen as your body's way of communicating an internal imbalance. Our goal is to find the single, constitutional remedy that addresses the root cause of this imbalance, stimulating your own immune system to heal naturally, deeply, and permanently."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-6 md:grid-cols-3",
				children: [
					{
						t: "Holistic Assessment",
						d: "We examine your physical symptoms, emotional state, and lifestyle to form a complete picture."
					},
					{
						t: "Single Remedy Approach",
						d: "We prescribe one perfectly matched constitutional remedy at a time, avoiding confusing multi-drug mixtures."
					},
					{
						t: "Gentle & Non-Toxic",
						d: "Our medicines are highly diluted, safe, and completely free from the harsh side effects of chemical drugs."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-background p-8 border border-border shadow-sm flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-8 w-8 text-gold mb-5" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-primary",
							children: item.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: item.d
						})
					]
				}, item.t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Patient Success Stories" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-5 font-display text-4xl md:text-5xl text-primary",
					children: "Journeys back to health"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-8 md:grid-cols-2 lg:grid-cols-3",
				children: [
					{
						q: "My daughter's chronic asthma meant she was using inhalers almost daily. Within 3 months of Dr. Poulamy's treatment, her immunity strengthened significantly. She hasn't needed her inhaler all winter.",
						n: "Priya S.",
						c: "Mother of a 6-year-old"
					},
					{
						q: "I had struggled with severe hormonal acne and irregular cycles for years. Conventional treatments failed, but the constitutional remedy here cleared my skin and regulated my cycle naturally.",
						n: "Aditi R.",
						c: "PCOS Patient"
					},
					{
						q: "The arthritis in my knees made walking painful. The holistic care and precise remedy provided immense relief. My mobility is back, and I feel so much more energetic overall.",
						n: "Ramesh M.",
						c: "Senior Patient"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "rounded-3xl border border-border bg-card p-8 md:p-10 relative",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute top-8 right-8 h-10 w-10 text-gold/20" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "text-muted-foreground leading-relaxed italic relative z-10",
							children: [
								"\"",
								t.q,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-8 flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-10 w-10 rounded-full bg-secondary grid place-items-center font-display text-primary text-xl font-bold",
								children: t.n.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-primary",
								children: t.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: t.c
							})] })]
						})
					]
				}, t.n))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl",
					children: "Not sure where to begin?"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-cream/80 max-w-xl",
					children: "Book a detailed first consultation. Dr. Poulamy will guide you through the right path of treatment for your case."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/consultations",
					className: "inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary transition hover:bg-gold/90",
					children: ["Book consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			})
		})
	] });
}
//#endregion
export { Services as component };
