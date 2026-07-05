import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero, SectionEyebrow } from "@/components/Section";
import { Leaf, ArrowRight } from "lucide-react";
import productTincture from "@/assets/product-tincture.png";
import productGlobules from "@/assets/product-globules.png";
import { SITE_URL } from "@/lib/site-config";
import bgImage from "@/assets/products-bg.png";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Homeopathic Remedies & Wellness Products | Dr. Poulamy's" },
      { name: "description", content: "Classical single remedies, mother tinctures, biochemic salts and curated wellness kits — dispensed after consultation and couriered across India." },
      { property: "og:title", content: "Homeopathic Remedies & Wellness Products" },
      { property: "og:description", content: "Pure classical remedies and curated wellness kits, dispensed with care." },
      { property: "og:url", content: SITE_URL + "/products" },
      { property: "og:image", content: SITE_URL + "/assets/remedies.jpg" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/products" }],
  }),
  component: Products,
});

const items = [
  { t: "Single Remedies", d: "Classical single‑remedy preparations across all common potencies (6C, 30C, 200C, 1M)." },
  { t: "Mother Tinctures (Q)", d: "Pure mother tinctures from trusted Indian pharmacopoeias for supportive care." },
  { t: "Biochemic Salts", d: "Schuessler's 12 cell salts for everyday nutritional and constitutional support." },
  { t: "Immunity Kit", d: "Curated remedies for seasonal immunity and recovery — for adults and children." },
  { t: "Women's Wellness Kit", d: "Supportive companion remedies for cycle balance and hormonal ease." },
  { t: "Child Care Kit", d: "Gentle remedies for everyday children's complaints — colds, digestion, sleep." },
];

function Products() {
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Remedies & Wellness" title="Pure remedies, dispensed with care" subtitle="Classical preparations from trusted pharmacopoeias — dispensed in‑clinic and couriered PAN‑India." />

      <section className="container-x py-20 grid gap-10 lg:grid-cols-[1fr_1.4fr] items-start">
        <div className="lg:sticky lg:top-28">
          <div className="grid gap-5">
            <img src={productTincture} alt="Homeopathic mother tinctures in amber glass bottles" className="rounded-3xl shadow-xl w-full aspect-[4/3] object-cover" loading="lazy" />
            <img src={productGlobules} alt="Homeopathic sugar globules in glass vials" className="rounded-3xl shadow-xl w-full aspect-[3/2] object-cover" loading="lazy" />
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Remedies are prescribed only after a proper consultation. We do not sell over‑the‑counter prescriptions.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-card p-6 hover:border-gold/60 transition">
              <Leaf className="h-5 w-5 text-leaf" />
              <h3 className="mt-3 font-display text-xl text-primary">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
          <div className="sm:col-span-2 rounded-2xl bg-primary text-primary-foreground p-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl">Need a remedy?</h3>
              <p className="text-sm text-cream/80">Start with a consultation — we'll guide you to the right prescription.</p>
            </div>
            <Link to="/consultations" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary">Book now <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Ordering process</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">How remedy ordering works</h2>
          <p className="mt-4 text-muted-foreground">A simple, transparent process from consultation to safe delivery.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {[
            { t: "Consultation", d: "Book an online or clinic session so the remedy is prescribed responsibly." },
            { t: "Prescription", d: "Receive the customised prescription and supportive guidance." },
            { t: "Delivery", d: "Remedies are couriered PAN-India with tracking for secure arrival." },
          ].map((step) => (
            <div key={step.t} className="rounded-3xl border border-border bg-card p-7 text-left">
              <div className="text-sm uppercase tracking-[0.2em] text-gold">{step.t}</div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
