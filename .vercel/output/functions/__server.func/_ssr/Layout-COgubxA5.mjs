import { r as __toESM } from "../_runtime.mjs";
import { n as SOCIAL_LINKS } from "./site-config-bxSqWGfN.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ChevronUp, d as MapPin, f as Mail, l as Phone, t as X, u as Menu } from "../_libs/lucide-react.mjs";
import { a as FaWhatsapp, i as FaPhoneAlt, n as FaFacebook, r as FaInstagram, t as FaEnvelope } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-COgubxA5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default$1 = "/assets/logo-CgEmyzyG.png";
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/consultations",
		label: "Consultations"
	},
	{
		to: "/blog",
		label: "Blog"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-4 left-0 right-0 z-50 mx-4 md:mx-auto max-w-6xl rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-lg shadow-black/5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 md:px-8 flex h-16 items-center justify-between gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-3",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_default$1,
						alt: "Dr. Poulamy's Homeopathy Clinic logo",
						className: "h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-gold/40 bg-cream/90 p-1 shadow-sm",
						width: 48,
						height: 48
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-lg font-semibold text-black truncate",
							children: "Dr. Poulamy's"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[10px] uppercase tracking-[0.2em] text-black/70",
							children: "Homeopathy Clinic"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center gap-7",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "font-display text-[17px] font-semibold tracking-wide text-black transition-all hover:text-gold hover:-translate-y-0.5 [&.active]:text-gold [&.active]:font-bold",
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex items-center gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/consultations",
						className: "inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-95 hover:shadow-md",
						children: "Book Consultation"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": open ? "Close menu" : "Open menu",
					className: "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-black hover:bg-black/5",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-3xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-xl overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col py-4 px-6",
				children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "font-display py-4 text-xl font-semibold tracking-wide text-black border-b border-black/10 last:border-0 hover:text-gold transition-colors [&.active]:text-gold [&.active]:font-bold",
					activeOptions: { exact: n.to === "/" },
					children: n.label
				}, n.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/consultations",
					onClick: () => setOpen(false),
					className: "mt-4 mb-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground",
					children: "Book Consultation"
				})]
			})
		})]
	});
}
var logo_default = "/assets/logo-DkVDOZrp.jpg";
var mandala_default = "/assets/mandala-D-8l4W5a.png";
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-border bg-gradient-to-br from-[#0b1c11] via-primary/95 to-black text-primary-foreground relative overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mandala_default,
				alt: "",
				className: "absolute -bottom-64 -right-64 w-[800px] h-[800px] object-contain opacity-[0.03] pointer-events-none animate-[spin_60s_linear_infinite]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: mandala_default,
				alt: "",
				className: "absolute -top-64 -left-64 w-[800px] h-[800px] object-contain opacity-[0.03] pointer-events-none animate-[spin_60s_linear_infinite_reverse]",
				"aria-hidden": "true"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: logo_default,
									alt: "Dr. Poulamy's logo",
									className: "h-12 w-12 rounded-full ring-1 ring-gold/40",
									width: 48,
									height: 48
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-xl",
									children: "Dr. Poulamy's"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70",
									children: "Homeopathy Clinic"
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-primary-foreground/75 leading-relaxed",
								children: "Classical, constitutional homeopathic care for India — gentle, personalised and rooted in evidence."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-3 pt-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "Instagram",
										href: SOCIAL_LINKS.instagram,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaInstagram, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "Facebook",
										href: SOCIAL_LINKS.facebook,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaFacebook, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "WhatsApp",
										href: "https://wa.me/917685950399",
										target: "_blank",
										rel: "noopener noreferrer",
										className: "h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "Email",
										href: "mailto:drpoulamys@gmail.com",
										className: "h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, { className: "h-5 w-5" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										"aria-label": "Phone",
										href: "tel:+917685950399",
										className: "h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhoneAlt, { className: "h-4 w-4" })
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg mb-4",
						children: "Explore"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-2 text-sm text-primary-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "hover:text-gold",
								children: "About Dr. Poulamy"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services",
								className: "hover:text-gold",
								children: "Services"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/consultations",
								className: "hover:text-gold",
								children: "Online & Clinic Visits"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								className: "hover:text-gold",
								children: "Remedies & Products"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/blog",
								className: "hover:text-gold",
								children: "Blog"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/gallery",
								className: "hover:text-gold",
								children: "Gallery"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg mb-4",
						children: "Visit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-3 text-sm text-primary-foreground/80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }), " Near Maa Kamala Mandir, Gopalmath, Durgapur, West Bengal 713217"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "tel:+917685950399",
										className: "hover:text-gold",
										children: "+91 76859 50399"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4 mt-0.5 shrink-0 text-gold" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: "mailto:drpoulamys@gmail.com",
										className: "hover:text-gold",
										children: "drpoulamys@gmail.com"
									})
								]
							})
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-lg mb-4",
							children: "Hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "space-y-2 text-sm text-primary-foreground/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Online:"
							}), " Mon – Sat, by appointment"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "Clinic:"
							}), " Sunday, full day"] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-xs leading-relaxed text-primary-foreground/60",
							children: "Medical disclaimer: information on this site is for educational purposes and is not a substitute for professional medical advice."
						})
					] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-primary-foreground/10 relative z-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-x py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Dr. Poulamy's Homeopathy Clinic. All rights reserved."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Durgapur · West Bengal · India" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							"Crafted with ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-destructive",
								children: "♥"
							}),
							" by ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://nexiog.in",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "text-gold hover:text-cream",
								children: "NexiOG Technologies"
							})
						] })
					]
				})
			})
		]
	});
}
function Layout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main-content",
				className: "sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed left-4 top-[30%] z-50 hidden md:flex flex-col items-center gap-1 p-2 rounded-full border border-white/30 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-xl shadow-black/5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://www.instagram.com/dr_poulamys_homeopathy_clinic/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110",
						title: "Instagram",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaInstagram, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:drpoulamys@gmail.com",
						className: "grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110",
						title: "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaEnvelope, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://wa.me/917685950399",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110",
						title: "WhatsApp",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: SOCIAL_LINKS.facebook,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110",
						title: "Facebook",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaFacebook, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "tel:+917685950399",
						className: "grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110",
						title: "Call",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhoneAlt, { className: "h-[18px] w-[18px]" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main-content",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => window.scrollTo({
					top: 0,
					behavior: "smooth"
				}),
				className: "fixed right-5 bottom-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-gold hover:text-primary",
				title: "Scroll to top",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-5 w-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { mandala_default as n, Layout as t };
