import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ArrowLeft } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog_._slug-CNonEC-K.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "container-x py-32 text-center min-h-[70vh] flex flex-col items-center justify-center",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display text-4xl text-primary",
			children: "Post not found"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-muted-foreground",
			children: "The article you are looking for does not exist."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/blog",
			className: "mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-cream hover:bg-primary/90 transition",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back to Journal"]
		})
	]
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
