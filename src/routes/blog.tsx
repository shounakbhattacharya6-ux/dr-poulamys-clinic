import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Section";
import bgImage from "@/assets/blog-bg.png";
import { SITE_URL } from "@/lib/site-config";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Homeopathy Blog | Insights, Cases & Wellness — Dr. Poulamy's" },
      { name: "description", content: "Articles and insights on classical homeopathy, chronic care, women's health, child health and lifestyle — by Dr. Poulamy Singha Roy." },
      { property: "og:title", content: "Homeopathy Blog — Dr. Poulamy's" },
      { property: "og:description", content: "Practical insights on classical homeopathy and constitutional care." },
      { property: "og:url", content: SITE_URL + "/blog" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/blog" }],
  }),
  component: Blog,
});

import { BLOG_POSTS } from "@/lib/blog-data";

function Blog() {
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Blog" title="Insights on holistic healing" subtitle="Articles, case studies and tips for maintaining natural wellness." />

      <section className="container-x py-16">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Classical practice", d: "Articles about homeopathy, case review and constitutional care." },
            { t: "Women's health", d: "Practical guidance for hormonal balance, PCOS and reproductive wellness." },
            { t: "Child care", d: "Supportive advice for growing children, immunity and everyday concerns." },
          ].map((item) => (
            <div key={item.t} className="rounded-3xl border border-border bg-card p-6">
              <div className="font-display text-lg text-primary">{item.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x py-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((p) => (
          <article key={p.slug} className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl transition flex flex-col">
            <Link to="/blog/$slug" params={{ slug: p.slug }} className="h-48 relative block overflow-hidden bg-secondary">
              <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-3 left-4 rounded-full bg-card/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">{p.category}</span>
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <div className="mb-3 text-xs text-muted-foreground font-medium flex items-center justify-between">
                <span>{p.date}</span>
              </div>
              <Link to="/blog/$slug" params={{ slug: p.slug }}>
                <h2 className="font-display text-xl text-primary group-hover:text-gold transition">{p.title}</h2>
              </Link>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{p.description}</p>
              <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex items-center gap-1 text-sm text-gold font-medium hover:gap-2 transition-all">Read article <ArrowRight className="h-3.5 w-3.5" /></Link>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
