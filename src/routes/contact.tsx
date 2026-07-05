import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Section";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_URL } from "@/lib/site-config";
import bgImage from "@/assets/contact-bg.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Poulamy's Homeopathy Clinic | Durgapur, West Bengal" },
      { name: "description", content: "Reach Dr. Poulamy's Homeopathy Clinic in Durgapur — phone, email and clinic address. Online consultations across India and Sunday clinic visits." },
      { property: "og:title", content: "Contact Dr. Poulamy's Homeopathy Clinic" },
      { property: "og:description", content: "Phone, email and clinic address. Online & offline consultations." },
      { property: "og:url", content: SITE_URL + "/contact" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Contact" title="We'd love to hear from you" subtitle="Reach out for appointments, follow‑up queries or guidance on starting treatment." />

      <section className="container-x py-20 grid lg:grid-cols-2 gap-10">
        <div className="space-y-5">
          {[
            { icon: MapPin, t: "Clinic", d: "Near Maa Kamala Mandir, Gopalmath, Durgapur, West Bengal — 713217" },
            { icon: Phone, t: "Phone / WhatsApp", d: "+91 76859 50399", href: "tel:+917685950399" },
            { icon: Mail, t: "Email", d: "drpoulamys@gmail.com", href: "mailto:drpoulamys@gmail.com" },
            { icon: Clock, t: "Hours", d: "Online: Mon – Sat (by appointment) · Clinic: Sunday, full day" },
          ].map((i) => (
            <div key={i.t} className="rounded-2xl border border-border bg-card p-6 flex gap-4">
              <div className="h-11 w-11 grid place-items-center rounded-xl bg-secondary text-primary shrink-0"><i.icon className="h-5 w-5" /></div>
              <div>
                <div className="font-display text-lg text-primary">{i.t}</div>
                {i.href ? <a href={i.href} className="text-sm text-muted-foreground hover:text-primary">{i.d}</a> : <div className="text-sm text-muted-foreground">{i.d}</div>}
              </div>
            </div>
          ))}
          <div className="rounded-2xl overflow-hidden border border-border aspect-[5/3]">
            <iframe title="Clinic location map" src="https://www.google.com/maps?q=Maa+Kamala+Mandir+Gopalmath+Durgapur+West+Bengal&output=embed" className="h-full w-full" loading="lazy" />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-secondary/30 p-8 h-fit">
          <h2 className="font-display text-2xl text-primary">Book your consultation</h2>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Reach out by phone, WhatsApp or email to reserve your slot. We can help you select the right consultation type for your needs.</p>
          
          <div className="mt-6 grid gap-4 sm:grid-cols-2 mb-8">
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="font-medium text-primary">Online consultation</div>
              <div className="mt-2 text-sm text-muted-foreground">Teleconsultation with remedies couriered across India.</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <div className="font-medium text-primary">Clinic visit</div>
              <div className="mt-2 text-sm text-muted-foreground">Sunday appointments at our Durgapur clinic with in-person dispensing.</div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
              const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const msg = `Hi Dr. Poulamy,%0A%0AName: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}${phone ? `%0APhone: ${encodeURIComponent(phone)}` : ""}${subject ? `%0ASubject: ${encodeURIComponent(subject)}` : ""}%0A%0A${encodeURIComponent(message)}`;
              window.open(`https://wa.me/917685950399?text=${msg}`, "_blank");
            }}
            className="grid gap-4 bg-card rounded-2xl p-6 border border-border shadow-sm"
          >
            <h3 className="font-display text-xl text-primary mb-2">Send a message</h3>
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-primary mb-1">Name</label>
              <input id="contact-name" name="name" required placeholder="Your name" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-primary mb-1">Email</label>
              <input id="contact-email" name="email" required type="email" placeholder="Email" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-primary mb-1">Phone (optional)</label>
              <input id="contact-phone" name="phone" type="tel" placeholder="Phone" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-sm font-medium text-primary mb-1">Subject</label>
              <input id="contact-subject" name="subject" placeholder="Subject" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-primary mb-1">Message</label>
              <textarea id="contact-message" name="message" required rows={5} placeholder="How can we help?" className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm" />
            </div>
            <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Send via WhatsApp</button>
          </form>
        </div>
      </section>

      {/* EMERGENCIES DISCLAIMER */}
      <section className="container-x pb-20">
        <div className="rounded-3xl border border-gold/30 bg-gold/5 p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">Urgent or Emergency Care</h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Classical homeopathy is highly effective for chronic and recurring conditions. However, our clinic is not equipped for acute medical emergencies. In case of a severe medical emergency, please visit your nearest hospital immediately.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ FOR VISITS */}
      <section className="container-x py-20 border-t border-border">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <div className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Patient guide</div>
            <h2 className="font-display text-4xl text-primary">Visiting FAQs</h2>
            <p className="mt-4 text-muted-foreground">Everything you need to know about reaching the clinic and managing your appointments.</p>
          </div>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card">
            {[
              { q: "How far in advance should I book my appointment?", a: "We recommend booking at least 3-4 days in advance, especially for Sunday clinic visits as slots fill up quickly." },
              { q: "Is there parking available at the Durgapur clinic?", a: "Yes, there is ample street parking available near Maa Kamala Mandir." },
              { q: "What should I bring to my first consultation?", a: "Please bring any recent medical reports, a list of current allopathic medications, and notes about your symptoms and medical history." },
              { q: "What if I need to reschedule my consultation?", a: "Please inform us via WhatsApp at least 24 hours in advance so we can offer the slot to another patient and reschedule your appointment." },
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

    </Layout>
  );
}
