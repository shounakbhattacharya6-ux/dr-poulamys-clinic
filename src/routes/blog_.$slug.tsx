import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { BLOG_POSTS } from "@/lib/blog-data";
import { SITE_URL } from "@/lib/site-config";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);
    if (!post) {
      throw new Error("Post not found");
    }
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Post Not Found | Dr. Poulamy's" }]
      };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} | Dr. Poulamy's Homeopathy Clinic` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:image", content: SITE_URL + post.image },
        { property: "og:url", content: `${SITE_URL}/blog/${post.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `${SITE_URL}/blog/${post.slug}` }],
    };
  },
  component: BlogPost,
  errorComponent: () => (
    <Layout>
      <div className="container-x py-32 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="font-display text-4xl text-primary">Post not found</h1>
        <p className="mt-4 text-muted-foreground">The article you are looking for does not exist.</p>
        <Link to="/blog" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-medium text-cream hover:bg-primary/90 transition">
          <ArrowLeft className="h-4 w-4" /> Back to Journal
        </Link>
      </div>
    </Layout>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <Layout>
      <article className="pt-24 pb-32">
        {/* Header Section */}
        <header className="container-x max-w-4xl pt-12 md:pt-20">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-gold transition">
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Link>
          <div className="mt-8">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="rounded-full bg-secondary px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                {post.category}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {post.date}
              </span>
              <span className="text-sm text-muted-foreground">•</span>
              <span className="text-sm font-medium text-gold">
                By Dr. Poulamy's Homeopathy Clinic
              </span>
            </div>
            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-primary leading-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {post.description}
            </p>
          </div>
        </header>

        {/* Hero Image */}
        <div className="container-x max-w-5xl mt-12 mb-16">
          <div className="aspect-video w-full overflow-hidden rounded-3xl bg-secondary">
            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
          </div>
        </div>

        {/* Content Section */}
        <div className="container-x max-w-3xl">
          <div 
            className="prose prose-lg prose-headings:font-display prose-headings:text-primary prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-justify prose-a:text-gold hover:prose-a:text-primary max-w-none prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </Layout>
  );
}
