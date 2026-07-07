import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as MapPin, f as Mail, l as Phone, v as Clock } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
import { t as PageHero } from "./Section-CJiBqKHh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CUEo6Q3M.js
var import_jsx_runtime = require_jsx_runtime();
var contact_bg_default = "/assets/contact-bg-CeK3fAB5.png";
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			bgImage: contact_bg_default,
			eyebrow: "Contact",
			title: "We'd love to hear from you",
			subtitle: "Reach out for appointments, follow‑up queries or guidance on starting treatment."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "container-x py-20 grid lg:grid-cols-2 gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [[
					{
						icon: MapPin,
						t: "Clinic",
						d: "Near Maa Kamala Mandir, Gopalmath, Durgapur, West Bengal — 713217"
					},
					{
						icon: Phone,
						t: "Phone / WhatsApp",
						d: "+91 76859 50399",
						href: "tel:+917685950399"
					},
					{
						icon: Mail,
						t: "Email",
						d: "drpoulamys@gmail.com",
						href: "mailto:drpoulamys@gmail.com"
					},
					{
						icon: Clock,
						t: "Hours",
						d: "Online: Mon – Sat (by appointment) · Clinic: Sunday, full day"
					}
				].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl border border-border bg-card p-6 flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-11 w-11 grid place-items-center rounded-xl bg-secondary text-primary shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(i.icon, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg text-primary",
						children: i.t
					}), i.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: i.href,
						className: "text-sm text-muted-foreground hover:text-primary",
						children: i.d
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: i.d
					})] })]
				}, i.t)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-2xl overflow-hidden border border-border aspect-[5/3]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Clinic location map",
						src: "https://www.google.com/maps?q=Maa+Kamala+Mandir+Gopalmath+Durgapur+West+Bengal&output=embed",
						className: "h-full w-full",
						loading: "lazy"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-3xl border border-border bg-secondary/30 p-8 h-fit",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-primary",
						children: "Book your consultation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground leading-relaxed",
						children: "Reach out by phone, WhatsApp or email to reserve your slot. We can help you select the right consultation type for your needs."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 mb-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-primary",
								children: "Online consultation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Teleconsultation with remedies couriered across India."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border border-border bg-card p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium text-primary",
								children: "Clinic visit"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 text-sm text-muted-foreground",
								children: "Sunday appointments at our Durgapur clinic with in-person dispensing."
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: (e) => {
							e.preventDefault();
							const form = e.currentTarget;
							const name = form.elements.namedItem("name").value;
							const email = form.elements.namedItem("email").value;
							const phone = form.elements.namedItem("phone").value;
							const subject = form.elements.namedItem("subject").value;
							const message = form.elements.namedItem("message").value;
							const msg = `Hi Dr. Poulamy,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}${phone ? `%0APhone: ${encodeURIComponent(phone)}` : ""}${subject ? `%0ASubject: ${encodeURIComponent(subject)}` : ""}%0A%0A${encodeURIComponent(message)}`;
							window.open(`https://wa.me/917685950399?text=${msg}`, "_blank");
						},
						className: "grid gap-4 bg-card rounded-2xl p-6 border border-border shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl text-primary mb-2",
								children: "Send a message"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-name",
								className: "block text-sm font-medium text-primary mb-1",
								children: "Name"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-name",
								name: "name",
								required: true,
								placeholder: "Your name",
								className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-email",
								className: "block text-sm font-medium text-primary mb-1",
								children: "Email"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-email",
								name: "email",
								required: true,
								type: "email",
								placeholder: "Email",
								className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-phone",
								className: "block text-sm font-medium text-primary mb-1",
								children: "Phone (optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-phone",
								name: "phone",
								type: "tel",
								placeholder: "Phone",
								className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-subject",
								className: "block text-sm font-medium text-primary mb-1",
								children: "Subject"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "contact-subject",
								name: "subject",
								placeholder: "Subject",
								className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "contact-message",
								className: "block text-sm font-medium text-primary mb-1",
								children: "Message"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "contact-message",
								name: "message",
								required: true,
								rows: 5,
								placeholder: "How can we help?",
								className: "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground",
								children: "Send via WhatsApp"
							})
						]
					})
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-3xl border border-gold/30 bg-gold/5 p-8 md:p-10 flex flex-col items-center justify-center text-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl font-bold text-primary",
						children: "Urgent or Emergency Care"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-muted-foreground leading-relaxed",
						children: "Classical homeopathy is highly effective for chronic and recurring conditions. However, our clinic is not equipped for acute medical emergencies. In case of a severe medical emergency, please visit your nearest hospital immediately."
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20 border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1fr_1.4fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm uppercase tracking-[0.2em] text-gold mb-4",
						children: "Patient guide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-4xl text-primary",
						children: "Visiting FAQs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Everything you need to know about reaching the clinic and managing your appointments."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "divide-y divide-border rounded-2xl border border-border bg-card",
					children: [
						{
							q: "How far in advance should I book my appointment?",
							a: "We recommend booking at least 3-4 days in advance, especially for Sunday clinic visits as slots fill up quickly."
						},
						{
							q: "Is there parking available at the Durgapur clinic?",
							a: "Yes, there is ample street parking available near Maa Kamala Mandir."
						},
						{
							q: "What should I bring to my first consultation?",
							a: "Please bring any recent medical reports, a list of current allopathic medications, and notes about your symptoms and medical history."
						},
						{
							q: "What if I need to reschedule my consultation?",
							a: "Please inform us via WhatsApp at least 24 hours in advance so we can offer the slot to another patient and reschedule your appointment."
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
			})
		})
	] });
}
//#endregion
export { Contact as component };
