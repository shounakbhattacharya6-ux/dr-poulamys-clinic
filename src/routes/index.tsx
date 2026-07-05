import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { SectionEyebrow } from "@/components/Section";
import { InstagramFeed } from "@/components/InstagramFeed";
import { SITE_URL } from "@/lib/site-config";
import { ArrowRight, Leaf, HeartPulse, Sparkles, ShieldCheck, Star, Phone, MapPin, Stethoscope, Clock, Award, Quote, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import doctor from "@/assets/doctor.jpg";
import remedies from "@/assets/remedies.jpg";
import mandala from "@/assets/mandala.png";
import doctorConsultation from "@/assets/doctor-consultation.png";
import practicePromiseFace from "@/assets/practice-promise-face.png";
import practicePromiseAction from "@/assets/practice-promise-action.png";

import { BLOG_POSTS } from "@/lib/blog-data";

// Dark Parallax Backgrounds
import parallax1 from "@/assets/dark-botanical.png";
import parallax2 from "@/assets/parallax-dark.png";
import parallax3 from "@/assets/parallax-nature.png";
import parallax4 from "@/assets/parallax-botanical.png";
import parallax5 from "@/assets/parallax-water.png";
import parallax6 from "@/assets/parallax-wood.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Poulamy's Homeopathy Clinic | Online Consultation India & Durgapur Clinic" },
      { name: "description", content: "Classical homeopathy by Dr. Poulamy Singha Roy (BHMS Hons., MD Hom.). Personalised constitutional care for chronic, skin, hormonal & child health. Online across India, clinic in Durgapur." },
      { name: "keywords", content: "homeopathy clinic India, online homeopathy consultation, Durgapur homeopath, classical homeopathy, Dr Poulamy, PCOS homeopathy, skin homeopathy, child homeopathy" },
      { property: "og:title", content: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India" },
      { property: "og:description", content: "Personalised constitutional homeopathic care — online across India and at our Durgapur clinic." },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <Layout>
      {/* 1. HERO */}
      <section className="relative isolate min-h-screen overflow-hidden">
        {/* Cinematic background */}
        <div className="absolute inset-0 -z-10">
          <img
            src={heroBg}
            alt="Homeopathic remedies surrounded by tulsi, neem and marigold in warm sunrise light"
            className="h-full w-full object-cover animate-ken-burns"
            width={1920}
            height={1280}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Floating mandala accents */}
        <img src={mandala} alt="" aria-hidden className="pointer-events-none absolute -top-24 -right-24 h-[28rem] w-[28rem] opacity-20 animate-spin-slow" />
        <img src={mandala} alt="" aria-hidden className="pointer-events-none absolute -bottom-32 -left-24 h-[22rem] w-[22rem] opacity-15 animate-float" />

        <div className="container-x relative flex min-h-screen items-center justify-center pt-36 pb-24 text-center">
          <div className="max-w-4xl text-primary-foreground flex flex-col items-center">
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] text-cream">
              Heal Gently. <span className="gold-text">Heal Deeply.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-cream/85 leading-relaxed mx-auto">
              Personalised homeopathic care by <strong className="font-medium text-gold">Dr. Poulamy Singha Roy</strong> — BHMS (Hons.), MD (Hom.), with 8+ years guiding patients across India through chronic, hormonal, skin and paediatric concerns.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link to="/consultations" className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-primary shadow-lg shadow-black/20 transition hover:bg-gold/90">
                Book Online Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
              <Link to="/consultations" className="inline-flex items-center gap-2 rounded-full border border-cream/40 bg-white/5 px-7 py-3.5 text-sm font-medium text-cream backdrop-blur transition hover:bg-white/10">
                <MapPin className="h-4 w-4" /> Visit Durgapur Clinic
              </Link>
            </div>

            <dl className="mt-14 grid max-w-2xl w-full grid-cols-2 gap-6 sm:grid-cols-3 border-t border-cream/15 pt-8 mx-auto">
              {[
                { k: "8+ Years", v: "Clinical experience" },
                { k: "BHMS · MD", v: "WBUHS qualified" },
                { k: "PAN India", v: "Online care" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col items-center">
                  <dt className="font-display text-2xl text-gold">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-cream/65">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP (Solid) */}
      <section className="border-y border-border bg-cream/60">
        <div className="container-x grid grid-cols-2 gap-6 py-8 md:grid-cols-4 text-center">
          {[
            { icon: Award, label: "BHMS (Hons.), MD (Hom.) WBUHS" },
            { icon: Stethoscope, label: "Assistant Professor, Bengal Hom. College" },
            { icon: ShieldCheck, label: "Safe for infants & pregnancy" },
            { icon: Clock, label: "30-40 min first consultation" },
          ].map((i) => (
            <div key={i.label} className="flex flex-col items-center gap-2 text-primary/85">
              <i.icon className="h-5 w-5 text-gold" />
              <p className="text-xs md:text-sm font-medium">{i.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT DOCTOR (Parallax 1) */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax1})` }}>
        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 grid gap-14 lg:grid-cols-2 items-center drop-shadow-2xl">
          <div className="relative">
            <img src={doctor} alt="Dr. Poulamy Singha Roy, homeopathic physician" className="w-full object-cover rounded-3xl shadow-2xl shadow-black/40 aspect-[3/4]" loading="lazy" width={1024} height={1280} />
            <div className="absolute -bottom-8 -right-4 md:-right-8 max-w-xs rounded-2xl bg-black/60 backdrop-blur-md border border-cream/10 p-5 shadow-xl">
              <div className="font-display text-lg text-cream">Dr. Poulamy Singha Roy</div>
              <div className="text-xs text-cream/70">BHMS (Hons.), MD (Hom) — WBUHS</div>
              <div className="mt-3 flex items-center gap-1 text-gold"><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><Star className="h-4 w-4 fill-gold" /><span className="ml-2 text-xs text-cream/70">Trusted by 1000+ patients</span></div>
            </div>
          </div>
          <div className="text-cream">
            <SectionEyebrow className="text-gold">About the Doctor</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight">A calm, attentive practice rooted in <em className="not-italic text-gold">classical homeopathy</em>.</h2>
            <p className="mt-6 text-cream/90 leading-relaxed font-medium">
              Dr. Poulamy is a dedicated homeopathic physician and academician with a strong foundation in classical method, clinical assessment and patient‑centred care. Her practice focuses on understanding each person as a whole — physical symptoms, emotions, lifestyle, triggers and long‑term patterns.
            </p>
            <p className="mt-4 text-cream/90 leading-relaxed font-medium">
              Alongside her clinical work she serves as Assistant Professor at Bengal Homoeopathic Medical College and Hospital, bringing academic depth and disciplined case analysis into every consultation.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm font-medium">
              {["8+ years clinical experience", "Constitutional repertorisation", "Detailed 30-40 min case‑taking", "PAN‑India remedy dispatch"].map((b) => (
                <li key={b} className="flex items-start gap-2"><Leaf className="h-4 w-4 mt-0.5 text-gold" /> {b}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all drop-shadow-md">
              Read more about Dr. Poulamy <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US (Solid) */}
      <section className="container-x py-24 md:py-32 bg-background">
        <div className="text-center max-w-2xl mx-auto">
          <SectionEyebrow>Why choose us</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">A thoughtful, professional experience at every step.</h2>
          <p className="mt-4 text-muted-foreground">We combine clear communication, gentle classical care and follow-up support so your path to recovery feels steady and well-guided.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Safe & gentle care", d: "Homeopathy tailored to your constitution, safe for children, women and sensitive cases." },
            { icon: HeartPulse, t: "Whole-person support", d: "We listen to your physical symptoms, emotions, sleep and lifestyle for a complete prescription." },
            { icon: Clock, t: "Clear follow-up plan", d: "Regular reviews keep treatment focused and help you track progress with confidence." },
            { icon: Sparkles, t: "Calm clinic experience", d: "An attentive environment built for comfort, trust and professional, compassionate care." },
          ].map((item) => (
            <article key={item.t} className="rounded-3xl border border-border bg-card p-7 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-display text-xl text-primary">{item.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 5. PROCESS (Parallax 2) */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax2})` }}>
        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 drop-shadow-2xl">
          <div className="text-center max-w-2xl mx-auto text-cream">
            <SectionEyebrow className="text-gold">Treatment Process</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">How constitutional care works</h2>
            <p className="mt-4 text-cream/90 font-medium">A structured, holistic approach to finding and addressing the root cause of your health concerns.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Detailed Case‑Taking", d: "A 30-40 min initial consultation exploring symptoms, history, emotions, sleep, lifestyle and triggers." },
              { n: "02", t: "Constitutional Analysis", d: "Systematic repertorisation to find unique patterns and select a single, individualised remedy." },
              { n: "03", t: "Remedy Prescription", d: "Custom remedy with diet and lifestyle guidance to support your body's self‑healing." },
              { n: "04", t: "Systematic Follow‑Ups", d: "Brief 3–4 weekly reviews to track progress and adjust potency as your health improves." },
            ].map((s) => (
              <div key={s.n} className="group relative rounded-2xl border border-cream/20 bg-black/40 backdrop-blur-md p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 text-cream">
                <div className="font-display text-5xl text-gold/60 group-hover:text-gold transition">{s.n}</div>
                <h3 className="mt-4 font-display text-xl">{s.t}</h3>
                <p className="mt-2 text-sm text-cream/80 leading-relaxed font-medium">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SERVICES (Solid) */}
      <section className="container-x py-24 md:py-32 bg-background">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <SectionEyebrow>Our Services</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Support for everyday & chronic concerns</h2>
          </div>
          <Link to="/services" className="text-primary font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">Explore all services <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: HeartPulse, t: "Chronic Disease Care", d: "Long‑term constitutional care for recurring, persistent and pattern‑based complaints." },
            { icon: Sparkles, t: "Skin & Hair", d: "Acne, eczema, psoriasis, allergies, hair fall and recurring skin sensitivity." },
            { icon: Leaf, t: "Women's Health", d: "PCOS, menstrual, hormonal and lifestyle‑linked concerns with gentle support." },
            { icon: ShieldCheck, t: "Child Health", d: "Recurrent colds, digestion, immunity, allergies and developmental concerns." },
          ].map((s) => (
            <article key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition hover:border-gold/60 hover:shadow-xl">
              <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center text-primary group-hover:bg-primary group-hover:text-cream transition">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm text-leaf font-medium">Learn more <ChevronRight className="h-3.5 w-3.5" /></Link>
            </article>
          ))}
        </div>
      </section>

      {/* 7. CONDITIONS WE TREAT (Parallax 3) */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax3})` }}>
        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 drop-shadow-2xl text-cream">
          <div className="text-center max-w-2xl mx-auto">
            <SectionEyebrow className="text-gold">Conditions we treat</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">Comprehensive care for common and chronic ailments</h2>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["PCOS & PCOD", "Thyroid Disorders", "Asthma & Bronchitis", "Allergic Rhinitis", "Eczema & Psoriasis", "Migraine", "Arthritis & Joint Pain", "Gastric Issues & IBS", "Anxiety & Depression", "Tonsillitis in Children", "Hair Fall & Alopecia", "Insomnia", "Urinary Tract Infections", "Kidney Stones", "Menstrual Irregularities"].map((c) => (
              <span key={c} className="inline-flex items-center rounded-full border border-cream/20 bg-black/40 backdrop-blur px-4 py-2 text-sm text-cream/90 hover:border-gold/50 hover:bg-black/60 transition cursor-default">
                {c}
              </span>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all drop-shadow-md">Don't see your concern? Contact us <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* 8. CONSULTATIONS (Solid) */}
      <section className="container-x py-24 md:py-32 bg-background">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionEyebrow>Consultations</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Online across India. Sunday clinic in Durgapur.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              Choose what suits you — a guided video consultation from home with remedies couriered to your door, or an in‑person visit to our calm Durgapur clinic every Sunday.
            </p>
            <Link to="/consultations" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-cream hover:bg-primary/90 transition">Book your slot <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-5">
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-primary">Online Consultation</h3>
                <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">Mon – Sat</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Share your symptoms and history through a guided video call. Custom remedies dispatched PAN‑India via tracked courier.</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-primary">Offline Clinic Visit</h3>
                <span className="rounded-full bg-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">Sundays</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Visit our clinic near Maa Kamala Mandir, Gopalmath, Durgapur — full day, by appointment.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 9. REMEDIES & WELLNESS (Parallax 4) */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax4})` }}>
        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 grid gap-14 lg:grid-cols-2 items-center drop-shadow-2xl">
          <div className="text-cream">
            <SectionEyebrow className="text-gold">Remedies & Wellness</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Pure remedies, dispensed with care.</h2>
            <p className="mt-5 text-cream/90 leading-relaxed font-medium">
              Our in‑clinic dispensary stocks high‑quality classical homeopathic remedies, mother tinctures and supportive wellness essentials — sourced from trusted Indian pharmacopoeias and carefully potentised.
            </p>
            <ul className="mt-6 space-y-3 text-sm font-medium">
              {["Single‑remedy classical preparations", "Mother tinctures (Q) and biochemic salts", "Lifestyle and immunity support kits", "Couriered PAN‑India after consultation"].map((b) => (
                <li key={b} className="flex items-start gap-2"><Leaf className="h-4 w-4 mt-0.5 text-gold" /> {b}</li>
              ))}
            </ul>
            <Link to="/products" className="mt-8 inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all drop-shadow-md">Browse remedies <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="relative">
            <img src={remedies} alt="Homeopathic globules, herbs and brass mortar on cream linen" className="rounded-3xl shadow-2xl shadow-black/40" loading="lazy" width={1280} height={960} />
          </div>
        </div>
      </section>

      {/* 10. PRACTICE PROMISE (Solid) */}
      <section className="container-x py-24 md:py-32 bg-background">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14 shadow-xl">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14">
            <div className="flex flex-col items-center">
              <SectionEyebrow>Practice promise</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Professional care designed to restore balance, not simply suppress symptoms.</h2>
            </div>
            <p className="mt-5 text-muted-foreground text-lg">Every treatment is built from detailed case-taking, constitutional analysis and a continuous review plan so your long-term wellbeing stays central.</p>
          </div>
          
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div className="order-2 lg:order-1">
              <img src={practicePromiseAction} alt="Dr. Poulamy Singha Roy practicing in the clinic" className="w-full rounded-2xl object-cover shadow-lg aspect-[4/5] object-center" loading="lazy" />
            </div>
            <div className="grid gap-4 order-1 lg:order-2">
              {[
                { t: "In-depth case taking", d: "30-40 minutes with careful review of history, emotions and lifestyle." },
                { t: "Individualised remedy plan", d: "Single constitutional prescription with supportive guidance." },
                { t: "Consistent follow-up", d: "Structured reviews to keep treatment responsive and effective." },
                { t: "Holistic Healing", d: "A comprehensive approach addressing mind, body, and emotional wellness." },
                { t: "Safe & Natural", d: "Gentle homeopathic remedies free from harsh side effects." },
              ].map((item) => (
                <div key={item.t} className="rounded-2xl border border-border bg-background p-6">
                  <div className="font-display text-lg text-primary">{item.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. TESTIMONIALS (Parallax 5) */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax5})` }}>
        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 drop-shadow-2xl">
          <div className="text-center max-w-2xl mx-auto text-cream">
            <SectionEyebrow className="text-gold">Patient Voices</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Real experiences, real healing.</h2>
          </div>
          <div className="mt-14 w-full overflow-x-auto pt-6 pb-6 flex gap-6 snap-x snap-mandatory [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gold/50 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-gold/80">
            {[
              { q: "Dr. Poulamy is an absolute gem in Durgapur! I was struggling with chronic thyroid issues for years, and her constitutional treatment has completely changed my life. I finally feel energetic again.", n: "Sunita M.", c: "Durgapur" },
              { q: "I travel from Bardhaman just for her clinic visits. The way she takes time to understand my child's recurrent allergies is remarkable. We have seen a massive improvement in just three months.", n: "Rajib S.", c: "West Bengal" },
              { q: "Her deep understanding of classical homeopathy sets her apart in Durgapur. My chronic arthritis pain has reduced so much that I no longer rely on daily painkillers. Highly recommended.", n: "Arindam C.", c: "Durgapur" },
              { q: "After years of dealing with PCOS, Dr. Poulamy's approach was the first that truly listened. My cycles have regulated in 5 months. I feel like myself again.", n: "Ananya R.", c: "Kolkata" },
              { q: "My son's recurrent colds have reduced dramatically. The follow-ups are detailed and the remedies are so easy to give to a toddler.", n: "Suparna B.", c: "Bengaluru" },
              { q: "Calm, professional and deeply knowledgeable. The online consultation felt as personal as a clinic visit. Medicines arrived perfectly packed.", n: "Rohit M.", c: "Pune" },
              { q: "I had been suffering from chronic migraines for nearly a decade. Standard treatments only offered temporary relief. Within three months of Dr. Poulamy's constitutional remedies, the frequency has dropped by 80%.", n: "Meenakshi S.", c: "Delhi" },
              { q: "The treatment for my severe eczema has been life-changing. It flared up initially for a few days, exactly as she predicted, and then started healing beautifully from the inside out.", n: "Kabir D.", c: "Mumbai" },
              { q: "Dr. Poulamy has an incredible ability to pinpoint exactly what's wrong by understanding your emotional state. It's a truly holistic healing process, unlike anything I've experienced.", n: "Sneha T.", c: "Durgapur" },
              { q: "I was highly skeptical about homeopathy for my chronic acidity and IBS, but I am now entirely off my daily antacids. I highly recommend her systematic, logical approach.", n: "Vikram K.", c: "Hyderabad" },
              { q: "We consult her for our entire family now. The remedies are always dispatched on time, and the online appointment system is flawless. She remembers every detail.", n: "Kavita P.", c: "Chennai" },
              { q: "She takes the time to listen, which is so rare these days. I felt heard, understood, and genuinely cared for during my first consultation.", n: "Aditi M.", c: "Asansol" },
              { q: "A blessing for my asthma. This winter was the first time in five years that I didn't need my inhaler every single day. The remedies work deeply to fix the root cause.", n: "Siddharth J.", c: "Kolkata" },
              { q: "I reached out to Dr. Poulamy for hormonal acne after trying every topical cream on the market. Not only is my skin clearing up, but my overall energy levels have completely transformed.", n: "Priya V.", c: "Gurgaon" },
              { q: "Extremely patient and empathetic. She explains the 'why' behind her prescriptions and the expected timeline, which gave me immense confidence in the treatment.", n: "Amit R.", c: "Durgapur" }
            ].map((t) => (
              <figure key={t.n} className="min-w-[320px] max-w-[320px] md:min-w-[400px] md:max-w-[400px] snap-start rounded-2xl bg-black/40 backdrop-blur-md border border-cream/20 p-8 shadow-lg relative text-cream transition-transform duration-300 hover:-translate-y-1 flex flex-col justify-between">
                <Quote className="absolute -top-4 left-6 h-8 w-8 text-gold" />
                <blockquote className="text-sm text-cream/90 leading-relaxed font-medium">"{t.q}"</blockquote>
                <figcaption className="mt-5 text-sm">
                  <div className="font-medium text-gold">{t.n}</div>
                  <div className="text-xs text-cream/70">{t.c}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 12. FAQ (Solid) */}
      <section className="container-x py-24 md:py-32 bg-background">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-primary">Answers to common queries</h2>
          <p className="mt-4 text-muted-foreground">Learn more about classical homeopathy, consultations and policies.</p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] items-center">
          <div>
            <img src={doctorConsultation} alt="Doctor in consultation with a patient" className="w-full rounded-3xl object-cover shadow-xl aspect-square md:aspect-[4/3] lg:aspect-[4/5]" loading="lazy" />
          </div>
          
          <div className="divide-y divide-border rounded-2xl border border-border bg-card text-foreground">
            {[
              { q: "How long does classical constitutional treatment take?", a: "Acute issues often improve in days. Chronic conditions show gradual change within 1-2 months, with full recovery typically over 6-12 months depending on severity and history." },
              { q: "Are there strict dietary restrictions during treatment?", a: "No extreme restrictions. We only suggest avoiding strong raw flavours (raw onion/garlic, mint) for 30 minutes around remedy intake. Normal cooked food is fine." },
              { q: "Can I continue allopathic medicines alongside homeopathy?", a: "Yes - never stop critical medications abruptly. Homeopathic remedies can be safely taken alongside, with a 30-45 min gap between the two." },
              { q: "How are medicines delivered for online consultations?", a: "Remedies are shipped via tracked speed courier across India. A tracking ID is shared after dispatch. For international patients, a detailed prescription is emailed." },
              { q: "Is homeopathic care safe for infants and pregnant women?", a: "Yes. Homeopathy is gentle, nontoxic and free from side effects, making it suitable for infants, children, pregnancy and breastfeeding mothers." },
              { q: "What should I expect during my first consultation?", a: "Your first visit will take 30-40 minutes. We will discuss your main complaints in detail, along with your medical history, sleep patterns, emotional state, and lifestyle to understand your unique constitution and find the most accurate remedy." },
              { q: "Do you treat acute conditions like sudden fever or colds?", a: "Yes. While our primary focus is on chronic disease, we provide rapid-acting acute remedies for our registered patients during flare-ups, seasonal illnesses, or sudden ailments." },
            ].map((f) => (
              <details key={f.q} className="group p-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-primary">
                  {f.q}
                  <span className="h-7 w-7 grid place-items-center rounded-full border border-border text-gold group-open:rotate-45 transition">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 13. LATEST INSIGHTS (Parallax 6) */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${parallax6})` }}>
        <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
        <div className="container-x relative z-10 drop-shadow-2xl">
          <div className="flex flex-col items-center justify-center text-center gap-5 mb-12">
            <div className="max-w-xl text-cream flex flex-col items-center">
              <SectionEyebrow className="text-gold">Journal</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">Latest health insights</h2>
            </div>
            <Link to="/blog" className="text-gold font-medium inline-flex items-center gap-2 hover:gap-3 transition-all drop-shadow-md">View all articles <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {BLOG_POSTS.slice(0, 3).map((p) => (
              <article key={p.slug} className="group rounded-2xl border border-cream/20 bg-black/40 backdrop-blur-md overflow-hidden hover:shadow-xl transition flex flex-col text-cream">
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="h-40 relative block overflow-hidden bg-black/50">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">{p.category}</span>
                </Link>
                <div className="p-6 flex flex-col flex-1">
                  <Link to="/blog/$slug" params={{ slug: p.slug }}>
                    <h3 className="font-display text-xl text-cream group-hover:text-gold transition">{p.title}</h3>
                  </Link>
                  <p className="mt-2 text-sm text-cream/80 flex-1 font-medium">{p.description}</p>
                  <Link to="/blog/$slug" params={{ slug: p.slug }} className="mt-4 inline-flex items-center gap-1 text-sm text-gold/80 font-medium hover:gap-2 transition-all">Read more <ChevronRight className="h-3.5 w-3.5" /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14. CONNECT & VISIT (Solid) */}
      <section className="container-x py-24 md:py-32 bg-background">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.8fr]">
          
          {/* NEWSLETTER */}
          <div className="flex flex-col justify-center rounded-3xl border border-border bg-card p-8 md:p-12 text-center shadow-sm">
            <SectionEyebrow className="mx-auto">Community</SectionEyebrow>
            <h2 className="mt-4 font-display text-3xl text-primary">Holistic health tips.</h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">Join our newsletter for gentle lifestyle advice and clinic updates. No spam, ever.</p>
            <form className="mt-8 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                required
                className="w-full rounded-full border border-border bg-background px-5 py-3.5 text-sm outline-none focus:border-gold focus:ring-1 focus:ring-gold transition text-center"
              />
              <button type="submit" className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-cream hover:bg-primary/90 transition shadow-md shadow-primary/10">
                Subscribe
              </button>
            </form>
          </div>

          {/* VISIT US */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary to-leaf/80 p-8 md:p-12 text-cream shadow-xl">
            <img src={mandala} alt="" aria-hidden className="absolute -right-24 -bottom-24 h-96 w-96 opacity-15 animate-spin-slow" />
            <div className="relative grid gap-10 md:grid-cols-2 items-center h-full">
              <div>
                <SectionEyebrow className="text-gold">Visit Us</SectionEyebrow>
                <h2 className="mt-4 font-display text-4xl leading-tight">Find calm, classical care in Durgapur.</h2>
                <p className="mt-4 text-sm text-cream/85 leading-relaxed">Offline consultation every Sunday near Maa Kamala Mandir, Gopalmath, Durgapur, West Bengal — 713217.</p>
                <div className="mt-8 flex flex-col xl:flex-row gap-3">
                  <a href="https://maps.google.com/?q=Maa+Kamala+Mandir+Gopalmath+Durgapur" target="_blank" rel="noopener" className="inline-flex justify-center items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-primary hover:bg-gold/90 transition">Open in Maps <MapPin className="h-4 w-4" /></a>
                  <a href="tel:+917685950399" className="inline-flex justify-center items-center gap-2 rounded-full border border-cream/40 px-5 py-3 text-sm font-medium hover:bg-white/10 transition"> <Phone className="h-4 w-4" /> Call clinic</a>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-cream/20 aspect-square md:aspect-[4/5] lg:aspect-square bg-black/20 relative z-10">
                <iframe
                  title="Dr. Poulamy's Clinic location"
                  src="https://www.google.com/maps?q=Maa+Kamala+Mandir+Gopalmath+Durgapur+West+Bengal&output=embed"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      <InstagramFeed />

    </Layout>
  );
}
