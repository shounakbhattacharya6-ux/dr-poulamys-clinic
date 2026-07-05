import { useEffect } from "react";
import { SectionEyebrow } from "./Section";
import bgImage from "@/assets/consultations-bg.png";

const FEED_ID = "WxHeSGPLv5etSM05IMFk";

export function InstagramFeed({
  title = "Follow Us on Instagram",
  subtitle = "@dr_poulamys_homeopathy_clinic",
}: {
  title?: string;
  subtitle?: string;
}) {
  useEffect(() => {
    const src = "https://w.behold.so/widget.js";
    if (document.querySelector(`script[src="${src}"]`)) return;
    const s = document.createElement("script");
    s.type = "module";
    s.src = src;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 z-0 bg-black/50 backdrop-blur-[3px]" />
      <div className="container-x relative z-10 drop-shadow-2xl">
        <div className="text-center mb-14 text-cream">
          <SectionEyebrow className="mx-auto text-gold">Social</SectionEyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 text-sm text-cream/90 font-medium">
            <a
              href="https://www.instagram.com/dr_poulamys_homeopathy_clinic/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors drop-shadow-md"
            >
              {subtitle}
            </a>
          </p>
        </div>
        {/* @ts-expect-error - behold custom element */}
        <behold-widget feed-id={FEED_ID}></behold-widget>
      </div>
    </section>
  );
}
