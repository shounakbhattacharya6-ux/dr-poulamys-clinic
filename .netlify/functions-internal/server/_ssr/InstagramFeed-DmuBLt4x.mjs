import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionEyebrow } from "./Section-CJiBqKHh.mjs";
import { t as consultations_bg_default } from "./consultations-bg-CRXgvI2U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/InstagramFeed-DmuBLt4x.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FEED_ID = "WxHeSGPLv5etSM05IMFk";
function InstagramFeed({ title = "Follow Us on Instagram", subtitle = "@dr_poulamys_homeopathy_clinic" }) {
	(0, import_react.useEffect)(() => {
		const src = "https://w.behold.so/widget.js";
		if (document.querySelector(`script[src="${src}"]`)) return;
		const s = document.createElement("script");
		s.type = "module";
		s.src = src;
		document.body.appendChild(s);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-24 bg-fixed bg-cover bg-center",
		style: { backgroundImage: `url(${consultations_bg_default})` },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x relative z-10 drop-shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-14 text-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, {
						className: "mx-auto text-gold",
						children: "Social"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-3xl md:text-4xl",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-cream/90 font-medium",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://www.instagram.com/dr_poulamys_homeopathy_clinic/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hover:text-gold transition-colors drop-shadow-md",
							children: subtitle
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("behold-widget", { "feed-id": FEED_ID })]
		})]
	});
}
//#endregion
export { InstagramFeed as t };
