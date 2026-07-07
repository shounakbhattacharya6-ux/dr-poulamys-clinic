import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHero } from "@/components/Section";
import bgImage from "@/assets/gallery-bg.png";
import { InstagramFeed } from "@/components/InstagramFeed";
import { SITE_URL } from "@/lib/site-config";
import clinic from "@/assets/clinic.jpg";
import remedies from "@/assets/remedies.jpg";
import hero from "@/assets/hero-bg.jpg";
import doctor from "@/assets/doctor.jpg";
import galleryWaiting from "@/assets/gallery-waiting.png";
import galleryHerbs from "@/assets/gallery-herbs.png";
import userGallery1 from "@/assets/user_gallery_1.jpg";
import userGallery2 from "@/assets/user_gallery_2.jpg";
import userGallery3 from "@/assets/user_gallery_3.jpg";
import userGallery4 from "@/assets/user_gallery_4.jpg";
import userGallery5 from "@/assets/user_gallery_5.jpg";
import userGallery6 from "@/assets/user_gallery_6.jpg";
import userGallery7 from "@/assets/user_gallery_7.jpg";
import userGallery8 from "@/assets/user_gallery_8.jpg";
import userGallery9 from "@/assets/user_gallery_9.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Inside Dr. Poulamy's Homeopathy Clinic, Durgapur" },
      { name: "description", content: "A look inside our Durgapur clinic — calm consultation spaces, the in‑clinic dispensary and moments from everyday classical homeopathic practice." },
      { property: "og:title", content: "Clinic Gallery — Dr. Poulamy's" },
      { property: "og:description", content: "A look inside the clinic, dispensary and consultation room." },
      { property: "og:url", content: SITE_URL + "/gallery" },
      { property: "og:image", content: SITE_URL + "/assets/clinic.jpg" },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/gallery" }],
  }),
  component: Gallery,
});

const galleryAlts = [
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
  "Internship Completion Certificate from Mahesh Bhattacharyya Homoeopathic Medical College",
  "Clinic waiting area with chairs and floral desk",
  "Clinic dispensary counter filled with homeopathic products",
];

function Gallery() {
  const images = [clinic, galleryHerbs, hero, doctor, galleryWaiting, userGallery1, userGallery2, userGallery3, userGallery4, userGallery5, userGallery6, userGallery7, userGallery8, userGallery9];
  return (
    <Layout>
      <PageHero bgImage={bgImage} eyebrow="Gallery" title="Inside the clinic" subtitle="A glimpse into our healing space in Durgapur." />
      <section className="container-x py-16">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Consultation room", d: "A peaceful space for attentive listening and detailed case-taking." },
            { t: "Dispensary care", d: "Carefully prepared remedies and supportive wellness essentials." },
            { t: "Clinic atmosphere", d: "A gentle environment designed for calm, respectful healing." },
          ].map((item) => (
            <div key={item.t} className="rounded-3xl border border-border bg-card p-6">
              <div className="font-display text-xl text-primary">{item.t}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container-x py-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>div]:mb-6 [&>div]:break-inside-avoid">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 cursor-pointer">
              <img src={src} alt={galleryAlts[i]} loading="lazy" className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex flex-col justify-end p-6">
                <p className="text-white/95 font-medium text-sm translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 drop-shadow-md leading-relaxed">
                  {galleryAlts[i]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <InstagramFeed title="Latest from Instagram" />
    </Layout>
  );
}
