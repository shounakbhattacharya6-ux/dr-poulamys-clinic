import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
import { t as Route } from "./blog_._slug-ChsvHDnw.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog_._slug-L0aBaUjN.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPost() {
	const { post } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "pt-24 pb-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "container-x max-w-4xl pt-12 md:pt-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/blog",
					className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Journal"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 flex-wrap",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary",
								children: post.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-medium text-gold",
								children: "By Dr. Poulamy's Homeopathy Clinic"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight",
							children: post.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl",
							children: post.description
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x max-w-5xl mt-12 mb-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-video w-full overflow-hidden rounded-3xl bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: post.image,
						alt: post.title,
						className: "h-full w-full object-cover"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-x max-w-3xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "prose prose-lg prose-headings:font-display prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-justify prose-a:text-gold hover:prose-a:text-primary max-w-none prose-li:text-muted-foreground",
					dangerouslySetInnerHTML: { __html: post.content }
				})
			})
		]
	}) });
}
//#endregion
export { BlogPost as component };
