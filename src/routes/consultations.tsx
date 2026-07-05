import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Section";
import { SITE_URL } from "@/lib/site-config";
import { Video, MapPin, Clock, Truck, CheckCircle2, Phone, Mail, ArrowRight, IndianRupee } from "lucide-react";
import clinic from "@/assets/clinic.jpg";
import bgImage from "@/assets/consultations-bg.png";

export const Route = createFileRoute("/consultations")({
  head: () => ({
    meta: [
      { title: "Book Consultation | Online India & Durgapur Clinic — Dr. Poulamy's" },
      { name: "description", content: "Book an online homeopathy consultation (Mon–Sat) anywhere in India, or visit our Sunday clinic in Durgapur. Remedies couriered PAN‑India after consultation." },
      { property: "og:title", content: "Book a Homeopathy Consultation — Dr. Poulamy's" },
      { property: "og:description", content: "Online consultations across India and Sunday clinic visits in Durgapur." },
      { property: "og:url", content: SITE_URL + "/consultations" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/consultations" }],
  }),
  component: Consultations,
});

function Consultations() {
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Consultations" title="Your path to wellness starts here" subtitle="Whether you are in Durgapur or anywhere else in India, we offer flexible consultation options tailored to your convenience." />

      <section className="container-x py-20 grid gap-8 lg:grid-cols-2">
        {/* ONLINE */}
        <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-to-br from-gold/30 to-transparent rounded-bl-full" />
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 grid place-items-center rounded-xl bg-primary text-cream"><Video className="h-6 w-6" /></div>
            <div>
              <h2 className="font-display text-2xl text-primary">Online Consultation</h2>
              <div className="text-xs uppercase tracking-[0.2em] text-leaf">Monday – Saturday · by appointment</div>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground">A guided video consultation from the comfort of your home. Remedies are couriered to your address PAN‑India with tracking.</p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "30-40 minute first consultation",
              "Detailed case‑taking via video / phone",
              "Remedies couriered PAN‑India",
              "Follow‑up every 3–4 weeks",
              "International patients: prescription emailed",
            ].map((b) => (
              <li key={b} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-gold" /> {b}</li>
            ))}
          </ul>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://wa.me/917685950399?text=Hi%20Dr.%20Poulamy%2C%20I%27d%20like%20to%20book%20an%20online%20consultation" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Book on WhatsApp <ArrowRight className="h-4 w-4" /></a>
            <a href="tel:+917685950399" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium"><Phone className="h-4 w-4" /> Call to schedule</a>
          </div>
        </div>

        {/* OFFLINE */}
        <div className="relative rounded-3xl border border-border bg-primary text-primary-foreground p-8 md:p-10 overflow-hidden">
          <img src={clinic} alt="Dr. Poulamy's clinic interior" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/85 to-primary/95" />
          <div className="relative">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 grid place-items-center rounded-xl bg-gold text-primary"><MapPin className="h-6 w-6" /></div>
              <div>
                <h2 className="font-display text-2xl text-cream">Clinic Visit (Offline)</h2>
                <div className="text-xs uppercase tracking-[0.2em] text-gold">Every Sunday · Full Day</div>
              </div>
            </div>
            <p className="mt-5 text-cream/85">Visit our calm Durgapur clinic for in‑person consultation and same‑day dispensing of remedies.</p>
            <ul className="mt-6 space-y-3 text-sm text-cream/90">
              {[
                "Near Maa Kamala Mandir, Gopalmath",
                "Durgapur, West Bengal — 713217",
                "30-40 minute first consultation",
                "Remedies dispensed in‑clinic",
                "Walk‑ins welcome; appointments preferred",
              ].map((b) => (
                <li key={b} className="flex gap-2"><CheckCircle2 className="h-4 w-4 mt-0.5 text-gold" /> {b}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=Maa+Kamala+Mandir+Gopalmath+Durgapur" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-primary">Get directions <ArrowRight className="h-4 w-4" /></a>
              <a href="tel:+917685950399" className="inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream"><Phone className="h-4 w-4" /> +91 76859 50399</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="container-x pb-20">
        <h2 className="font-display text-3xl md:text-4xl text-primary text-center">What to expect</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {[
            { icon: Clock, t: "Detailed first session", d: "30-40 min listening to your full history." },
            { icon: CheckCircle2, t: "Custom remedy", d: "A single, individualised classical prescription." },
            { icon: Truck, t: "Doorstep delivery", d: "Couriered across India with a tracking ID." },
            { icon: IndianRupee, t: "Transparent fees", d: "Shared upfront when you book your slot." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6">
              <s.icon className="h-5 w-5 text-gold" />
              <div className="mt-3 font-display text-lg text-primary">{s.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PREPARATION GUIDE */}
      <section className="container-x py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div>
            <h2 className="font-display text-4xl text-primary">Prepare for your session with ease</h2>
            <p className="mt-4 text-muted-foreground">A few simple steps help make the consultation smooth, thorough and comfortable — whether you are online or visiting the clinic.</p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                { t: "Medical history", d: "Collect past reports, medicines and note patterns of symptoms." },
                { t: "Daily routine", d: "Note sleep, appetite, digestion, mood and triggers." },
                { t: "Current concerns", d: "Share the most important symptoms and how they affect your life." },
                { t: "Questions", d: "Prepare any questions about remedies, treatment duration and follow-up." },
              ].map((item) => (
                <div key={item.t} className="rounded-3xl border border-border bg-card p-6">
                  <div className="font-display text-lg text-primary">{item.t}</div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-secondary/30 p-8">
            <div className="rounded-3xl bg-primary p-6 text-primary-foreground">
              <h3 className="font-display text-2xl">Your consultation flow</h3>
              <p className="mt-3 text-sm text-cream/90">A clear process helps you feel supported from the first call to follow-up.</p>
            </div>
            <dl className="mt-6 space-y-4 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border bg-card p-5">
                <dt className="font-medium text-primary">1. Book your slot</dt>
                <dd className="mt-1">Reserve an online or Sunday clinic appointment quickly via WhatsApp or call.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <dt className="font-medium text-primary">2. Share your history</dt>
                <dd className="mt-1">Provide your symptoms, reports and lifestyle details before or during the first session.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <dt className="font-medium text-primary">3. Receive your remedy</dt>
                <dd className="mt-1">For online appointments, remedies are couriered across India. Clinic visits receive same-day dispense.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* QUICK FORM */}
      <section className="container-x pb-24">
        <div className="grid lg:grid-cols-2 gap-10 rounded-3xl border border-border bg-secondary/40 p-8 md:p-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-primary">Request a callback</h2>
            <p className="mt-3 text-muted-foreground">Leave your details and we'll reach out to schedule your consultation.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex gap-2"><Phone className="h-4 w-4 text-gold" /> +91 76859 50399</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-gold" /> drpoulamys@gmail.com</li>
            </ul>
          </div>
          <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
                const type = (form.elements.namedItem("consultationType") as HTMLSelectElement).value;
                const concern = (form.elements.namedItem("concern") as HTMLTextAreaElement).value;
                const msg = `Hi Dr. Poulamy, I'd like to request a callback.%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AType: ${encodeURIComponent(type)}%0AConcern: ${encodeURIComponent(concern)}`;
                window.open(`https://wa.me/917685950399?text=${msg}`, "_blank");
              }}
              className="grid gap-4"
            >
              <div>
                <label htmlFor="callback-name" className="block text-sm font-medium text-primary mb-1">Name</label>
                <input id="callback-name" name="name" required placeholder="Your name" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm" />
              </div>
              <div>
                <label htmlFor="callback-phone" className="block text-sm font-medium text-primary mb-1">Phone</label>
                <input id="callback-phone" name="phone" required type="tel" placeholder="WhatsApp preferred" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm" />
              </div>
              <div>
                <label htmlFor="callback-type" className="block text-sm font-medium text-primary mb-1">Consultation type</label>
                <select id="callback-type" name="consultationType" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm">
                  <option>Online consultation</option>
                  <option>Clinic visit (Sunday)</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="callback-concern" className="block text-sm font-medium text-primary mb-1">Concern</label>
                <textarea id="callback-concern" name="concern" rows={4} placeholder="Briefly describe your concern" className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm" />
              </div>
              <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Send via WhatsApp</button>
            </form>
        </div>
      </section>
    </Layout>
  );
}
