import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Section";
import bgImage from "@/assets/about-bg.png";
import { SITE_URL } from "@/lib/site-config";
import { ArrowRight, GraduationCap, Award, BookOpen, Heart } from "lucide-react";
import doctor from "@/assets/doctor.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Poulamy Singha Roy | Homeopathic Physician, Durgapur" },
      { name: "description", content: "Meet Dr. Poulamy Singha Roy, BHMS (Hons.), MD (Hom.) WBUHS — homeopathic physician and Assistant Professor with 8+ years of classical practice and academic experience." },
      { property: "og:title", content: "About Dr. Poulamy Singha Roy" },
      { property: "og:description", content: "BHMS (Hons.), MD (Hom.) WBUHS — 8+ years of classical homeopathic practice." },
      { property: "og:url", content: SITE_URL + "/about" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Our Story" title="Rooted in classical homeopathy" subtitle="Meet Dr. Poulamy and learn about her journey from Kolkata to establishing a trusted practice in Durgapur." />

      <section className="container-x py-20 grid lg:grid-cols-[1fr_1.2fr] gap-14 items-start">
        <div className="relative lg:sticky lg:top-28">
          <div className="absolute -inset-5 -z-10 rounded-3xl bg-gradient-to-br from-gold/20 to-leaf/10" />
          <img src={doctor} alt="Dr. Poulamy Singha Roy in her clinic" className="rounded-3xl shadow-xl" width={1024} height={1280} />
          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="font-display text-xl text-primary">Dr. Poulamy Singha Roy</div>
            <div className="text-sm text-muted-foreground">BHMS (Hons.), MD (Hom.) — WBUHS</div>
            <div className="text-xs text-muted-foreground mt-1">Assistant Professor, Bengal Homoeopathic Medical College</div>
          </div>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p className="text-lg text-foreground">
            Dr. Poulamy Singha Roy is a dedicated homeopathic physician and academician with a strong foundation in classical homeopathy, clinical assessment and patient‑centred care.
          </p>
          <p>
            Her practice focuses on understanding each person as a whole — physical symptoms, emotional health, lifestyle, environmental triggers and long‑term patterns. Every prescription is the result of detailed case‑taking and disciplined repertorisation.
          </p>
          <p>
            Alongside her clinical work, she serves as Assistant Professor at Bengal Homoeopathic Medical College and Hospital, where she contributes to research and the next generation of homeopathic physicians.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 pt-4">
            {[
              { icon: GraduationCap, t: "Education", d: "BHMS (Hons.), MD (Hom.) — West Bengal University of Health Sciences" },
              { icon: Award, t: "Experience", d: "8+ years of clinical practice and teaching" },
              { icon: BookOpen, t: "Academic role", d: "Assistant Professor, Bengal Homoeopathic Medical College" },
              { icon: Heart, t: "Practice focus", d: "Classical, constitutional homeopathy for chronic care" },
            ].map((i) => (
              <div key={i.t} className="rounded-2xl border border-border bg-card p-5">
                <i.icon className="h-5 w-5 text-gold" />
                <div className="mt-3 font-display text-lg text-primary">{i.t}</div>
                <p className="mt-1 text-sm">{i.d}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-2 pt-10">
            <div className="rounded-3xl border border-border bg-secondary/30 p-8">
              <h3 className="font-display text-2xl text-primary">Care approach</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                Every consultation is structured to understand your body, mind and lifestyle together. This helps us choose a remedy that speaks to your unique constitution.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><span className="mt-0.5 block h-2 w-2 rounded-full bg-gold" /> Detailed case-taking with attentive listening.</li>
                <li className="flex gap-3"><span className="mt-0.5 block h-2 w-2 rounded-full bg-gold" /> Constitutional analysis to identify root patterns.</li>
                <li className="flex gap-3"><span className="mt-0.5 block h-2 w-2 rounded-full bg-gold" /> Gentle, single-remedy prescriptions with clear follow-up.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-8">
              <h3 className="font-display text-2xl text-primary">Clinic highlights</h3>
              <dl className="mt-6 grid gap-4">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Consultation style</dt>
                  <dd className="mt-2 font-medium text-primary">Personal, respectful and evidence-informed.</dd>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Patient experience</dt>
                  <dd className="mt-2 font-medium text-primary">Clear guidance, warm support and follow-up care.</dd>
                </div>
                <div className="rounded-2xl border border-border bg-background p-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Teaching practice</dt>
                  <dd className="mt-2 font-medium text-primary">Academic rigor from clinical teaching and case study review.</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="font-display text-3xl text-primary">Our philosophy</h2>
            <p className="mt-3">We believe healing is not just the absence of symptoms — it is restored balance. Homeopathy, practised classically, gently stimulates the body's own intelligence to address root causes, not just surface complaints.</p>
          </div>

          <Link to="/consultations" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Book a consultation <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </Layout>
  );
}
