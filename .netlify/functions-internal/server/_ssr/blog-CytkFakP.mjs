import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
import { t as PageHero } from "./Section-CJiBqKHh.mjs";
import { t as BLOG_POSTS } from "./blog-data-zj46Id2p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CytkFakP.js
var import_jsx_runtime = require_jsx_runtime();
var blog_bg_default = "/assets/blog-bg-COYq3UY9.png";
function Blog() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			bgImage: blog_bg_default,
			eyebrow: "Blog",
			title: "Insights on holistic healing",
			subtitle: "Articles, case studies and tips for maintaining natural wellness."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						t: "Classical practice",
						d: "Articles about homeopathy, case review and constitutional care."
					},
					{
						t: "Women's health",
						d: "Practical guidance for hormonal balance, PCOS and reproductive wellness."
					},
					{
						t: "Child care",
						d: "Supportive advice for growing children, immunity and everyday concerns."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-lg text-primary",
						children: item.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground leading-relaxed",
						children: item.d
					})]
				}, item.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
			children: BLOG_POSTS.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition flex flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog/$slug",
					params: { slug: p.slug },
					className: "h-48 relative block overflow-hidden bg-secondary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: p.title,
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-105",
							loading: "lazy"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute bottom-3 left-4 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary",
							children: p.category
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-6 flex flex-col flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl text-primary group-hover:text-gold transition",
								children: p.title
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground flex-1",
							children: p.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/blog/$slug",
							params: { slug: p.slug },
							className: "mt-4 inline-flex items-center gap-1 text-sm text-gold font-medium hover:gap-2 transition-all",
							children: ["Read article ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})]
			}, p.slug))
		})
	] });
}
//#endregion
export { Blog as component };
