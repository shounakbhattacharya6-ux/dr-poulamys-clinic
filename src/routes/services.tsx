import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero, SectionEyebrow } from "@/components/Section";
import { SITE_URL } from "@/lib/site-config";
import bgImage from "@/assets/services-bg.png";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";

import serviceChronic from "@/assets/service-chronic.png";
import serviceSkin from "@/assets/service-skin.png";
import serviceWomen from "@/assets/service-women.png";
import serviceChild from "@/assets/service-child.png";
import serviceRespiratory from "@/assets/service-respiratory.png";
import serviceJoint from "@/assets/service-joint.png";
import serviceMind from "@/assets/service-mind.png";
import serviceImmunity from "@/assets/service-immunity.png";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Homeopathy Services | Chronic, Skin, Women's & Child Care — Dr. Poulamy's" },
      { name: "description", content: "Classical homeopathic services for chronic disease, skin & hair, women's health, child health, lifestyle disorders, mental wellness, respiratory and joint care." },
      { property: "og:title", content: "Homeopathy Services — Dr. Poulamy's Clinic" },
      { property: "og:description", content: "Constitutional care for chronic, skin, hormonal, paediatric and lifestyle conditions." },
      { property: "og:url", content: SITE_URL + "/services" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/services" }],
  }),
  component: Services,
});

const services = [
  { img: serviceChronic, t: "Chronic Disease Care", d: "Long‑term constitutional care for recurring complaints — thyroid, blood pressure, diabetes support, autoimmune patterns." },
  { img: serviceSkin, t: "Skin & Hair", d: "Acne, eczema, psoriasis, vitiligo, urticaria, hair fall, alopecia and recurring skin sensitivity." },
  { img: serviceWomen, t: "Women's Health", d: "PCOS, PCOD, irregular cycles, menstrual pain, fertility support, menopausal transitions and hormonal balance." },
  { img: serviceChild, t: "Child Health", d: "Recurrent colds, tonsillitis, asthma, digestion, immunity, allergies, behavioural and developmental concerns." },
  { img: serviceRespiratory, t: "Respiratory Care", d: "Asthma, allergic rhinitis, sinusitis, recurrent cough and seasonal allergic flares." },
  { img: serviceJoint, t: "Joint & Spine", d: "Arthritis, frozen shoulder, lower back pain, sciatica and post‑injury constitutional support." },
  { img: serviceMind, t: "Mind & Stress", d: "Anxiety, sleep concerns, stress patterns, exam stress and constitutional support for emotional wellbeing." },
  { img: serviceImmunity, t: "Lifestyle & Immunity", d: "Recurrent infections, fatigue, post‑viral recovery and seasonal immunity care." },
];

function Services() {
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Our Services" title="Healing from the roots" subtitle="Comprehensive homeopathic treatment for chronic, acute and pediatric conditions." />

      {/* IMAGE-LED SERVICES GRID */}
      <section className="container-x py-20">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <article key={s.t} className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden transition-all hover:shadow-2xl hover:border-gold/40">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={s.img} alt={s.t} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <h3 className="font-display text-2xl text-primary">{s.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.d}</p>
                <div className="mt-5 h-1 w-10 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* NEW SECTION: OUR HEALING PHILOSOPHY */}
      <section className="container-x py-24 border-y border-border bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <SectionEyebrow>Our Healing Philosophy</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary leading-tight">Treating the person, not just the disease.</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Conventional medicine often focuses on silencing the symptoms. In classical homeopathy, symptoms are seen as your body's way of communicating an internal imbalance. Our goal is to find the single, constitutional remedy that addresses the root cause of this imbalance, stimulating your own immune system to heal naturally, deeply, and permanently.
          </p>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { t: "Holistic Assessment", d: "We examine your physical symptoms, emotional state, and lifestyle to form a complete picture." },
            { t: "Single Remedy Approach", d: "We prescribe one perfectly matched constitutional remedy at a time, avoiding confusing multi-drug mixtures." },
            { t: "Gentle & Non-Toxic", d: "Our medicines are highly diluted, safe, and completely free from the harsh side effects of chemical drugs." }
          ].map((item) => (
            <div key={item.t} className="rounded-2xl bg-background p-8 border border-border shadow-sm flex flex-col items-center text-center">
              <CheckCircle2 className="h-8 w-8 text-gold mb-5" />
              <h3 className="font-display text-xl text-primary">{item.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEW SECTION: PATIENT SUCCESS STORIES */}
      <section className="container-x py-24 bg-background">
        <div className="flex flex-col items-center text-center mb-16">
          <SectionEyebrow>Patient Success Stories</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl text-primary">Journeys back to health</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { q: "My daughter's chronic asthma meant she was using inhalers almost daily. Within 3 months of Dr. Poulamy's treatment, her immunity strengthened significantly. She hasn't needed her inhaler all winter.", n: "Priya S.", c: "Mother of a 6-year-old" },
            { q: "I had struggled with severe hormonal acne and irregular cycles for years. Conventional treatments failed, but the constitutional remedy here cleared my skin and regulated my cycle naturally.", n: "Aditi R.", c: "PCOS Patient" },
            { q: "The arthritis in my knees made walking painful. The holistic care and precise remedy provided immense relief. My mobility is back, and I feel so much more energetic overall.", n: "Ramesh M.", c: "Senior Patient" }
          ].map((t) => (
            <figure key={t.n} className="rounded-3xl border border-border bg-card p-8 md:p-10 relative">
              <Quote className="absolute top-8 right-8 h-10 w-10 text-gold/20" />
              <blockquote className="text-muted-foreground leading-relaxed italic relative z-10">"{t.q}"</blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary grid place-items-center font-display text-primary text-xl font-bold">{t.n.charAt(0)}</div>
                <div>
                  <div className="font-medium text-primary">{t.n}</div>
                  <div className="text-xs text-muted-foreground">{t.c}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-14 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">Not sure where to begin?</h2>
            <p className="mt-3 text-cream/80 max-w-xl">Book a detailed first consultation. Dr. Poulamy will guide you through the right path of treatment for your case.</p>
          </div>
          <Link to="/consultations" className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary transition hover:bg-gold/90">Book consultation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </Layout>
  );
}
