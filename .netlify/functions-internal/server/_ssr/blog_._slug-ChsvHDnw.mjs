import { t as SITE_URL } from "./site-config-bxSqWGfN.mjs";
import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as BLOG_POSTS } from "./blog-data-zj46Id2p.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog_._slug-ChsvHDnw.js
var $$splitErrorComponentImporter = () => import("./blog_._slug-CNonEC-K.mjs");
var $$splitComponentImporter = () => import("./blog_._slug-L0aBaUjN.mjs");
var Route = createFileRoute("/blog_/$slug")({
	loader: ({ params }) => {
		const post = BLOG_POSTS.find((p) => p.slug === params.slug);
		if (!post) throw new Error("Post not found");
		return { post };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Post Not Found | Dr. Poulamy's" }] };
		const { post } = loaderData;
		return {
			meta: [
				{ title: `${post.title} | Dr. Poulamy's Homeopathy Clinic` },
				{
					name: "description",
					content: post.description
				},
				{
					property: "og:title",
					content: post.title
				},
				{
					property: "og:description",
					content: post.description
				},
				{
					property: "og:image",
					content: SITE_URL + post.image
				},
				{
					property: "og:url",
					content: `${SITE_URL}/blog/${post.slug}`
				},
				{
					property: "og:type",
					content: "article"
				}
			],
			links: [{
				rel: "canonical",
				href: `${SITE_URL}/blog/${post.slug}`
			}]
		};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
