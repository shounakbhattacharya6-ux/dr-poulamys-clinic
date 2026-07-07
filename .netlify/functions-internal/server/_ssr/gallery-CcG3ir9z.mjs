import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Layout } from "./Layout-COgubxA5.mjs";
import { t as PageHero } from "./Section-CJiBqKHh.mjs";
import { t as doctor_default } from "./doctor-Dejz-l0N.mjs";
import { t as hero_bg_default } from "./hero-bg-BAJOW0R3.mjs";
import { t as clinic_default } from "./clinic-DEgCFrtk.mjs";
import { t as InstagramFeed } from "./InstagramFeed-DmuBLt4x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-CcG3ir9z.js
var import_jsx_runtime = require_jsx_runtime();
var gallery_bg_default = "/assets/gallery-bg-FRDb754W.png";
var gallery_waiting_default = "/assets/gallery-waiting-CVzhwiCR.png";
var gallery_herbs_default = "/assets/gallery-herbs-DnungR5-.png";
var user_gallery_1_default = "/assets/user_gallery_1-Bqk8j4Se.jpg";
var user_gallery_2_default = "/assets/user_gallery_2-Dm9i0egn.jpg";
var user_gallery_3_default = "/assets/user_gallery_3-Cv7Q9DMx.jpg";
var user_gallery_4_default = "/assets/user_gallery_4-DjpUU6NG.jpg";
var user_gallery_5_default = "/assets/user_gallery_5-DZCW4ieh.jpg";
var user_gallery_6_default = "/assets/user_gallery_6-tCTGlj_E.jpg";
var user_gallery_7_default = "/assets/user_gallery_7-BvT6iZ_m.jpg";
var galleryAlts = [
	"Clinic consultation room with warm lighting",
	"Classical homeopathic remedies, herbs and brass mortar",
	"Homeopathic preparations surrounded by medicinal herbs",
	"Dr. Poulamy Singha Roy, homeopathic physician",
	"Inside the Durgapur clinic dispensary",
	"Dr. Poulamy Singha Roy desk nameplate and stethoscope",
	"Dr. Poulamy consulting with a patient on laptop",
	"Clinic consultation room setup with certificates",
	"Clinic dispensary shelves filled with homeopathic dilutions",
	"Doctor of Medicine (M.D. Homoeopathy) certificate",
	"The Guiding Symptoms of our Materia Medica books stack",
	"Internship Completion Certificate from Mahesh Bhattacharyya Homoeopathic Medical College"
];
function Gallery() {
	const images = [
		clinic_default,
		gallery_herbs_default,
		hero_bg_default,
		doctor_default,
		gallery_waiting_default,
		user_gallery_1_default,
		user_gallery_2_default,
		user_gallery_3_default,
		user_gallery_4_default,
		user_gallery_5_default,
		user_gallery_6_default,
		user_gallery_7_default
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			bgImage: gallery_bg_default,
			eyebrow: "Gallery",
			title: "Inside the clinic",
			subtitle: "A glimpse into our healing space in Durgapur."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: [
					{
						t: "Consultation room",
						d: "A peaceful space for attentive listening and detailed case-taking."
					},
					{
						t: "Dispensary care",
						d: "Carefully prepared remedies and supportive wellness essentials."
					},
					{
						t: "Clinic atmosphere",
						d: "A gentle environment designed for calm, respectful healing."
					}
				].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl border border-border bg-card p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-xl text-primary",
						children: item.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground leading-relaxed",
						children: item.d
					})]
				}, item.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "columns-1 sm:columns-2 lg:columns-3 gap-5 [&>img]:mb-5 [&>img]:break-inside-avoid",
				children: images.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: galleryAlts[i],
					loading: "lazy",
					className: "w-full rounded-2xl border border-border"
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramFeed, { title: "Latest from Instagram" })
	] });
}
//#endregion
export { Gallery as component };
