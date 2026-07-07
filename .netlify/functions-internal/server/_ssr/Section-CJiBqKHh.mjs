import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Section-CJiBqKHh.js
var import_jsx_runtime = require_jsx_runtime();
function SectionEyebrow({ children, className = "" }) {
	const isDark = className.includes("text-gold") || className.includes("text-cream");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `inline-flex items-center gap-3 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all ${isDark ? "border-gold/30 bg-black/40 shadow-sm" : "border-primary/10 bg-primary/5"} ${isDark && !className.includes("text-") ? "text-gold" : className || "text-leaf"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-px w-6 ${isDark ? "bg-gold" : "bg-primary/40"}` }),
			" ",
			children
		]
	});
}
function PageHero({ eyebrow, title, subtitle, bgImage }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: `relative overflow-hidden border-b border-border ${bgImage ? "bg-background" : "bg-secondary/20"}`,
		children: [bgImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: bgImage,
			alt: "",
			className: "absolute inset-0 w-full h-full object-cover pointer-events-none"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/30 pointer-events-none" })] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-[0.06] pointer-events-none",
			style: { backgroundImage: "radial-gradient(circle at 20% 20%, var(--leaf), transparent 60%), radial-gradient(circle at 80% 80%, var(--gold), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: eyebrow }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-5 font-display text-4xl md:text-6xl text-primary",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground",
					children: subtitle
				})
			]
		})]
	});
}
//#endregion
export { SectionEyebrow as n, PageHero as t };
