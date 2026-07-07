import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Award, a as Star, c as Quote, d as MapPin, g as HeartPulse, i as Stethoscope, l as Phone, o as Sparkles, p as Leaf, s as ShieldCheck, v as Clock, w as ArrowRight, x as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as mandala_default, t as Layout } from "./Layout-COgubxA5.mjs";
import { n as SectionEyebrow } from "./Section-CJiBqKHh.mjs";
import { t as doctor_default } from "./doctor-Dejz-l0N.mjs";
import { t as hero_bg_default } from "./hero-bg-BAJOW0R3.mjs";
import { a as remedies_default, i as parallax_wood_default, n as parallax_botanical_default, r as parallax_nature_default, t as BLOG_POSTS } from "./blog-data-zj46Id2p.mjs";
import { t as InstagramFeed } from "./InstagramFeed-DmuBLt4x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-COHB80qJ.js
var import_jsx_runtime = require_jsx_runtime();
var doctor_consultation_default = "/assets/doctor-consultation-jqvkhmF9.png";
var practice_promise_action_default = "/assets/practice-promise-action-txDlYmLW.png";
var dark_botanical_default = "/assets/dark-botanical-DBGRfHPy.png";
var parallax_dark_default = "/assets/parallax-dark-BxGu9XbQ.png";
var parallax_water_default = "/assets/parallax-water-CbtZ1oAv.png";
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative isolate min-h-screen overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 -z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_bg_default,
						alt: "Homeopathic remedies surrounded by tulsi, neem and marigold in warm sunrise light",
						className: "h-full w-full object-cover animate-ken-burns",
						width: 1920,
						height: 1280
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/50" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: mandala_default,
					alt: "",
					"aria-hidden": true,
					className: "pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] opacity-20 animate-spin-slow"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: mandala_default,
					alt: "",
					"aria-hidden": true,
					className: "pointer-events-none absolute -bottom-32 -left-24 h-[22rem] w-[22rem] opacity-15 animate-float"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "container-x relative flex min-h-screen items-center justify-center pt-36 pb-24 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-4xl text-primary-foreground flex flex-col items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-cream",
								children: ["Heal Gently. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "gold-text",
									children: "Heal Deeply."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed mx-auto",
								children: [
									"Personalised homeopathic care by ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
										className: "font-medium text-gold",
										children: "Dr. Poulamy Singha Roy"
									}),
									" — BHMS (Hons.), MD (Hom.), with 8+ years guiding patients across India through chronic, hormonal, skin and paediatric concerns."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/consultations",
									className: "group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary shadow-lg shadow-black/20 transition hover:bg-gold/90",
									children: ["Book Online Consultation ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/consultations",
									className: "inline-flex items-center gap-2 rounded-full border border-cream/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:bg-white/10",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" }), " Visit Durgapur Clinic"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-14 grid max-w-2xl w-full grid-cols-2 gap-6 sm:grid-cols-3 border-t border-cream/15 pt-8 mx-auto",
								children: [
									{
										k: "8+ Years",
										v: "Clinical experience"
									},
									{
										k: "BHMS · MD",
										v: "WBUHS qualified"
									},
									{
										k: "PAN India",
										v: "Online care"
									}
								].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
										className: "font-display text-2xl text-gold",
										children: s.k
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-xs uppercase tracking-[0.18em] text-cream/65",
										children: s.v
									})]
								}, s.k))
							})
						]
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-cream/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4 text-center",
				children: [
					{
						icon: Award,
						label: "BHMS (Hons.), MD (Hom.) WBUHS"
					},
					{
						icon: Stethoscope,
						label: "Assistant Professor, Bengal Hom. College"
					},
					{
						icon: ShieldCheck,
						label: "Safe for infants & pregnancy"
					},
					{
						icon: Clock,
						label: "30-40 min first consultation"
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center gap-2 text-primary/85",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs md:text-sm font-medium",
						children: i.label
					})]
				}, i.label))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center",
			style: { backgroundImage: `url(${dark_botanical_default})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 grid gap-14 lg:grid-cols-2 items-center drop-shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: doctor_default,
						alt: "Dr. Poulamy Singha Roy, homeopathic physician",
						className: "w-full object-cover rounded-3xl shadow-2xl shadow-black/40 aspect-[3/4]",
						loading: "lazy",
						width: 1024,
						height: 1280
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-8 -right-4 md:-right-8 max-w-xs rounded-2xl bg-black/60 backdrop-blur-md border border-cream/10 p-5 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-cream",
								children: "Dr. Poulamy Singha Roy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-cream/70",
								children: "BHMS (Hons.), MD (Hom) — WBUHS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center gap-1 text-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-gold" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-xs text-cream/70",
										children: "Trusted by 1000+ patients"
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							className: "text-gold",
							children: "About the Doctor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl leading-tight",
							children: [
								"A calm, attentive practice rooted in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic text-gold",
									children: "classical homeopathy"
								}),
								"."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-cream/90 leading-relaxed font-medium",
							children: "Dr. Poulamy is a dedicated homeopathic physician and academician with a strong foundation in classical method, clinical assessment and patient‑centred care. Her practice focuses on understanding each person as a whole — physical symptoms, emotions, lifestyle, triggers and long‑term patterns."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-cream/90 leading-relaxed font-medium",
							children: "Alongside her clinical work she serves as Assistant Professor at Bengal Homoeopathic Medical College and Hospital, bringing academic depth and disciplined case analysis into every consultation."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid grid-cols-2 gap-3 text-sm font-medium",
							children: [
								"8+ years clinical experience",
								"Constitutional repertorisation",
								"Detailed 30-40 min case‑taking",
								"PAN‑India remedy dispatch"
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 mt-0.5 text-gold" }),
									" ",
									b
								]
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "mt-8 inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all drop-shadow-md",
							children: ["Read more about Dr. Poulamy ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32 bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-2xl mx-auto",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Why choose us" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl text-primary",
						children: "A thoughtful, professional experience at every step."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "We combine clear communication, gentle classical care and follow-up support so your path to recovery feels steady and well-guided."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: ShieldCheck,
						t: "Safe & gentle care",
						d: "Homeopathy tailored to your constitution, safe for children, women and sensitive cases."
					},
					{
						icon: HeartPulse,
						t: "Whole-person support",
						d: "We listen to your physical symptoms, emotions, sleep and lifestyle for a complete prescription."
					},
					{
						icon: Clock,
						t: "Clear follow-up plan",
						d: "Regular reviews keep treatment focused and help you track progress with confidence."
					},
					{
						icon: Sparkles,
						t: "Calm clinic experience",
						d: "An attentive environment built for comfort, trust and professional, compassionate care."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-border bg-card p-7 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 font-display text-xl text-primary",
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
			className: "relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center",
			style: { backgroundImage: `url(${parallax_dark_default})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 drop-shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto text-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							className: "text-gold",
							children: "Treatment Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "How constitutional care works"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-cream/90 font-medium",
							children: "A structured, holistic approach to finding and addressing the root cause of your health concerns."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
					children: [
						{
							n: "01",
							t: "Detailed Case‑Taking",
							d: "A 30-40 min initial consultation exploring symptoms, history, emotions, sleep, lifestyle and triggers."
						},
						{
							n: "02",
							t: "Constitutional Analysis",
							d: "Systematic repertorisation to find unique patterns and select a single, individualised remedy."
						},
						{
							n: "03",
							t: "Remedy Prescription",
							d: "Custom remedy with diet and lifestyle guidance to support your body's self‑healing."
						},
						{
							n: "04",
							t: "Systematic Follow‑Ups",
							d: "Brief 3–4 weekly reviews to track progress and adjust potency as your health improves."
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative rounded-2xl border border-cream/20 bg-black/40 backdrop-blur-md p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 text-cream",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-5xl text-gold/60 group-hover:text-gold transition",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-xl",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-cream/80 leading-relaxed font-medium",
								children: s.d
							})
						]
					}, s.n))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32 bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Our Services" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl text-primary",
						children: "Support for everyday & chronic concerns"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/services",
					className: "text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all",
					children: ["Explore all services ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: [
					{
						icon: HeartPulse,
						t: "Chronic Disease Care",
						d: "Long‑term constitutional care for recurring, persistent and pattern‑based complaints."
					},
					{
						icon: Sparkles,
						t: "Skin & Hair",
						d: "Acne, eczema, psoriasis, allergies, hair fall and recurring skin sensitivity."
					},
					{
						icon: Leaf,
						t: "Women's Health",
						d: "PCOS, menstrual, hormonal and lifestyle‑linked concerns with gentle support."
					},
					{
						icon: ShieldCheck,
						t: "Child Health",
						d: "Recurrent colds, digestion, immunity, allergies and developmental concerns."
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-gold/60 hover:shadow-xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-12 w-12 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-cream transition",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-xl text-primary",
							children: s.t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: s.d
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services",
							className: "mt-5 inline-flex items-center gap-1 text-sm text-leaf font-medium",
							children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
						})
					]
				}, s.t))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center",
			style: { backgroundImage: `url(${parallax_nature_default})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 drop-shadow-2xl text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center max-w-2xl mx-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							className: "text-gold",
							children: "Conditions we treat"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl md:text-4xl",
							children: "Comprehensive care for common and chronic ailments"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto",
						children: [
							"PCOS & PCOD",
							"Thyroid Disorders",
							"Asthma & Bronchitis",
							"Allergic Rhinitis",
							"Eczema & Psoriasis",
							"Migraine",
							"Arthritis & Joint Pain",
							"Gastric Issues & IBS",
							"Anxiety & Depression",
							"Tonsillitis in Children",
							"Hair Fall & Alopecia",
							"Insomnia",
							"Urinary Tract Infections",
							"Kidney Stones",
							"Menstrual Irregularities"
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-flex items-center rounded-full border border-cream/20 bg-black/40 backdrop-blur px-4 py-2 text-sm text-cream/90 hover:border-gold/50 hover:bg-black/60 transition cursor-default",
							children: c
						}, c))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/contact",
							className: "inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all drop-shadow-md",
							children: ["Don't see your concern? Contact us ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-24 md:py-32 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Consultations" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl text-primary",
						children: "Online across India. Sunday clinic in Durgapur."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground leading-relaxed max-w-xl",
						children: "Choose what suits you — a guided video consultation from home with remedies couriered to your door, or an in‑person visit to our calm Durgapur clinic every Sunday."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/consultations",
						className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-cream hover:bg-primary/90 transition",
						children: ["Book your slot ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-primary",
								children: "Online Consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
								children: "Mon – Sat"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Share your symptoms and history through a guided video call. Custom remedies dispatched PAN‑India via tracked courier."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl text-primary",
								children: "Offline Clinic Visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold",
								children: "Sundays"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Visit our clinic near Maa Kamala Mandir, Gopalmath, Durgapur — full day, by appointment."
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center",
			style: { backgroundImage: `url(${parallax_botanical_default})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 grid gap-14 lg:grid-cols-2 items-center drop-shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-cream",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							className: "text-gold",
							children: "Remedies & Wellness"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Pure remedies, dispensed with care."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-cream/90 leading-relaxed font-medium",
							children: "Our in‑clinic dispensary stocks high‑quality classical homeopathic remedies, mother tinctures and supportive wellness essentials — sourced from trusted Indian pharmacopoeias and carefully potentised."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-3 text-sm font-medium",
							children: [
								"Single‑remedy classical preparations",
								"Mother tinctures (Q) and biochemic salts",
								"Lifestyle and immunity support kits",
								"Couriered PAN‑India after consultation"
							].map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Leaf, { className: "h-4 w-4 mt-0.5 text-gold" }),
									" ",
									b
								]
							}, b))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products",
							className: "mt-8 inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all drop-shadow-md",
							children: ["Browse remedies ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: remedies_default,
						alt: "Homeopathic globules, herbs and brass mortar on cream linen",
						className: "rounded-3xl shadow-2xl shadow-black/40",
						loading: "lazy",
						width: 1280,
						height: 960
					})
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-24 md:py-32 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-card p-10 md:p-14 shadow-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center max-w-4xl mx-auto mb-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "Practice promise" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl text-primary",
							children: "Professional care designed to restore balance, not simply suppress symptoms."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground text-lg",
						children: "Every treatment is built from detailed case-taking, constitutional analysis and a continuous review plan so your long-term wellbeing stays central."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-2 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-2 lg:order-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: practice_promise_action_default,
							alt: "Dr. Poulamy Singha Roy practicing in the clinic",
							className: "w-full rounded-2xl object-cover shadow-lg aspect-[4/5] object-center",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4 order-1 lg:order-2",
						children: [
							{
								t: "In-depth case taking",
								d: "30-40 minutes with careful review of history, emotions and lifestyle."
							},
							{
								t: "Individualised remedy plan",
								d: "Single constitutional prescription with supportive guidance."
							},
							{
								t: "Consistent follow-up",
								d: "Structured reviews to keep treatment responsive and effective."
							},
							{
								t: "Holistic Healing",
								d: "A comprehensive approach addressing mind, body, and emotional wellness."
							},
							{
								t: "Safe & Natural",
								d: "Gentle homeopathic remedies free from harsh side effects."
							}
						].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-background p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-lg text-primary",
								children: item.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground leading-relaxed",
								children: item.d
							})]
						}, item.t))
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center",
			style: { backgroundImage: `url(${parallax_water_default})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 drop-shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-2xl mx-auto text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
						className: "text-gold",
						children: "Patient Voices"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl",
						children: "Real experiences, real healing."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 w-full overflow-x-auto pt-6 pb-6 flex gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gold/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gold/80",
					children: [
						{
							q: "Dr. Poulamy is an absolute gem in Durgapur! I was struggling with chronic thyroid issues for years, and her constitutional treatment has completely changed my life. I finally feel energetic again.",
							n: "Sunita M.",
							c: "Durgapur"
						},
						{
							q: "I travel from Bardhaman just for her clinic visits. The way she takes time to understand my child's recurrent allergies is remarkable. We have seen a massive improvement in just three months.",
							n: "Rajib S.",
							c: "West Bengal"
						},
						{
							q: "Her deep understanding of classical homeopathy sets her apart in Durgapur. My chronic arthritis pain has reduced so much that I no longer rely on daily painkillers. Highly recommended.",
							n: "Arindam C.",
							c: "Durgapur"
						},
						{
							q: "After years of dealing with PCOS, Dr. Poulamy's approach was the first that truly listened. My cycles have regulated in 5 months. I feel like myself again.",
							n: "Ananya R.",
							c: "Kolkata"
						},
						{
							q: "My son's recurrent colds have reduced dramatically. The follow-ups are detailed and the remedies are so easy to give to a toddler.",
							n: "Suparna B.",
							c: "Bengaluru"
						},
						{
							q: "Calm, professional and deeply knowledgeable. The online consultation felt as personal as a clinic visit. Medicines arrived perfectly packed.",
							n: "Rohit M.",
							c: "Pune"
						},
						{
							q: "I had been suffering from chronic migraines for nearly a decade. Standard treatments only offered temporary relief. Within three months of Dr. Poulamy's constitutional remedies, the frequency has dropped by 80%.",
							n: "Meenakshi S.",
							c: "Delhi"
						},
						{
							q: "The treatment for my severe eczema has been life-changing. It flared up initially for a few days, exactly as she predicted, and then started healing beautifully from the inside out.",
							n: "Kabir D.",
							c: "Mumbai"
						},
						{
							q: "Dr. Poulamy has an incredible ability to pinpoint exactly what's wrong by understanding your emotional state. It's a truly holistic healing process, unlike anything I've experienced.",
							n: "Sneha T.",
							c: "Durgapur"
						},
						{
							q: "I was highly skeptical about homeopathy for my chronic acidity and IBS, but I am now entirely off my daily antacids. I highly recommend her systematic, logical approach.",
							n: "Vikram K.",
							c: "Hyderabad"
						},
						{
							q: "We consult her for our entire family now. The remedies are always dispatched on time, and the online appointment system is flawless. She remembers every detail.",
							n: "Kavita P.",
							c: "Chennai"
						},
						{
							q: "She takes the time to listen, which is so rare these days. I felt heard, understood, and genuinely cared for during my first consultation.",
							n: "Aditi M.",
							c: "Asansol"
						},
						{
							q: "A blessing for my asthma. This winter was the first time in five years that I didn't need my inhaler every single day. The remedies work deeply to fix the root cause.",
							n: "Siddharth J.",
							c: "Kolkata"
						},
						{
							q: "I reached out to Dr. Poulamy for hormonal acne after trying every topical cream on the market. Not only is my skin clearing up, but my overall energy levels have completely transformed.",
							n: "Priya V.",
							c: "Gurgaon"
						},
						{
							q: "Extremely patient and empathetic. She explains the 'why' behind her prescriptions and the expected timeline, which gave me immense confidence in the treatment.",
							n: "Amit R.",
							c: "Durgapur"
						}
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px] snap-start rounded-2xl bg-black/40 backdrop-blur-md border border-cream/20 p-8 shadow-lg relative text-cream transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute -top-4 left-6 h-8 w-8 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
								className: "text-sm text-cream/90 leading-relaxed font-medium",
								children: [
									"\"",
									t.q,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
								className: "mt-5 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-medium text-gold",
									children: t.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-cream/70",
									children: t.c
								})]
							})
						]
					}, t.n))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-24 md:py-32 bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center text-center max-w-2xl mx-auto mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: "FAQ" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl md:text-5xl text-primary",
						children: "Answers to common queries"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Learn more about classical homeopathy, consultations and policies."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: doctor_consultation_default,
					alt: "Doctor in consultation with a patient",
					className: "w-full rounded-3xl object-cover shadow-xl aspect-square md:aspect-[4/3] lg:aspect-[4/5]",
					loading: "lazy"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border rounded-2xl border border-border bg-card text-foreground",
					children: [
						{
							q: "How long does classical constitutional treatment take?",
							a: "Acute issues often improve in days. Chronic conditions show gradual change within 1-2 months, with full recovery typically over 6-12 months depending on severity and history."
						},
						{
							q: "Are there strict dietary restrictions during treatment?",
							a: "No extreme restrictions. We only suggest avoiding strong raw flavours (raw onion/garlic, mint) for 30 minutes around remedy intake. Normal cooked food is fine."
						},
						{
							q: "Can I continue allopathic medicines alongside homeopathy?",
							a: "Yes - never stop critical medications abruptly. Homeopathic remedies can be safely taken alongside, with a 30-45 min gap between the two."
						},
						{
							q: "How are medicines delivered for online consultations?",
							a: "Remedies are shipped via tracked speed courier across India. A tracking ID is shared after dispatch. For international patients, a detailed prescription is emailed."
						},
						{
							q: "Is homeopathic care safe for infants and pregnant women?",
							a: "Yes. Homeopathy is gentle, nontoxic and free from side effects, making it suitable for infants, children, pregnancy and breastfeeding mothers."
						},
						{
							q: "What should I expect during my first consultation?",
							a: "Your first visit will take 30-40 minutes. We will discuss your main complaints in detail, along with your medical history, sleep patterns, emotional state, and lifestyle to understand your unique constitution and find the most accurate remedy."
						},
						{
							q: "Do you treat acute conditions like sudden fever or colds?",
							a: "Yes. While our primary focus is on chronic disease, we provide rapid-acting acute remedies for our registered patients during flare-ups, seasonal illnesses, or sudden ailments."
						}
					].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group p-6 [&_summary::-webkit-details-marker]:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
							className: "flex cursor-pointer items-center justify-between gap-4 font-medium text-primary",
							children: [f.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "h-7 w-7 grid place-items-center rounded-full border border-border text-gold group-open:rotate-45 transition",
								children: "+"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: f.a
						})]
					}, f.q))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center",
			style: { backgroundImage: `url(${parallax_wood_default})` },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x relative z-10 drop-shadow-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-center text-center gap-5 mb-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl text-cream flex flex-col items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							className: "text-gold",
							children: "Journal"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl md:text-5xl",
							children: "Latest health insights"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/blog",
						className: "text-gold font-medium inline-flex items-center gap-2 hover:gap-3 transition-all drop-shadow-md",
						children: ["View all articles ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-3",
					children: BLOG_POSTS.slice(0, 3).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "group rounded-2xl border border-cream/20 bg-black/40 backdrop-blur-md overflow-hidden hover:shadow-xl transition flex flex-col text-cream",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: "h-40 relative block overflow-hidden bg-black/50",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									className: "h-full w-full object-cover transition duration-500 group-hover:scale-105",
									loading: "lazy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute bottom-3 left-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream",
									children: p.category
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-6 flex flex-col flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/blog/$slug",
									params: { slug: p.slug },
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-xl text-cream group-hover:text-gold transition",
										children: p.title
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-cream/80 flex-1 font-medium",
									children: p.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/blog/$slug",
									params: { slug: p.slug },
									className: "mt-4 inline-flex items-center gap-1 text-sm text-gold/80 font-medium hover:gap-2 transition-all",
									children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					}, p.slug))
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-24 md:py-32 bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_1.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-center rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
							className: "mx-auto",
							children: "Community"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-3xl text-primary",
							children: "Holistic health tips."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted-foreground leading-relaxed",
							children: "Join our newsletter for gentle lifestyle advice and clinic updates. No spam, ever."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 flex flex-col gap-3",
							onSubmit: (e) => e.preventDefault(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "email",
								placeholder: "Your email address",
								required: true,
								className: "w-full rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-center"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-cream hover:bg-primary/90 transition shadow-md shadow-primary/10",
								children: "Subscribe"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-leaf/80 p-8 md:p-12 text-cream shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: mandala_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute -right-24 -bottom-24 h-96 w-96 opacity-15 animate-spin-slow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-10 md:grid-cols-2 items-center h-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
								className: "text-gold",
								children: "Visit Us"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 font-display text-4xl leading-tight",
								children: "Find calm, classical care in Durgapur."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-cream/85 leading-relaxed",
								children: "Offline consultation every Sunday near Maa Kamala Mandir, Gopalmath, Durgapur, West Bengal — 713217."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-col xl:flex-row gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "https://maps.google.com/?q=Maa+Kamala+Mandir+Gopalmath+Durgapur",
									target: "_blank",
									rel: "noopener",
									className: "inline-flex justify-center items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary hover:bg-gold/90 transition",
									children: ["Open in Maps ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "tel:+917685950399",
									className: "inline-flex justify-center items-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-sm font-medium hover:bg-white/10 transition",
									children: [
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4" }),
										" Call clinic"
									]
								})]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-2xl overflow-hidden border border-cream/20 aspect-square md:aspect-[4/5] lg:aspect-square bg-black/20 relative z-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Dr. Poulamy's Clinic location",
								src: "https://www.google.com/maps?q=Maa+Kamala+Mandir+Gopalmath+Durgapur+West+Bengal&output=embed",
								className: "absolute inset-0 h-full w-full",
								loading: "lazy",
								referrerPolicy: "no-referrer-when-downgrade"
							})
						})]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramFeed, {})
	] });
}
//#endregion
export { Home as component };
