import type { ReactNode } from "react";
import { ChevronUp } from "lucide-react";
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { SOCIAL_LINKS } from "@/lib/site-config";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-20 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground focus:shadow-lg">Skip to content</a>

      <div className="fixed left-4 top-[30%] z-50 hidden md:flex flex-col items-center gap-1 p-2 rounded-full border border-white/30 dark:border-white/10 bg-white/20 dark:bg-black/20 backdrop-blur-xl shadow-xl shadow-black/5">
        <a href="https://www.instagram.com/dr_poulamys_homeopathy_clinic/" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110" title="Instagram">
          <FaInstagram className="h-5 w-5" />
        </a>
        <a href="mailto:drpoulamys@gmail.com" className="grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110" title="Email">
          <FaEnvelope className="h-5 w-5" />
        </a>
        <a href="https://wa.me/917685950399" target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110" title="WhatsApp">
          <FaWhatsapp className="h-5 w-5" />
        </a>
        <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110" title="Facebook">
          <FaFacebook className="h-5 w-5" />
        </a>
        <a href="tel:+917685950399" className="grid h-10 w-10 place-items-center rounded-full text-primary transition hover:bg-white/40 hover:text-gold hover:scale-110" title="Call">
          <FaPhoneAlt className="h-[18px] w-[18px]" />
        </a>
      </div>

      <main id="main-content" className="flex-1">{children}</main>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed right-5 bottom-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-gold hover:text-primary"
        title="Scroll to top"
      >
        <ChevronUp className="h-5 w-5" />
      </button>

      <SiteFooter />
    </div>
  );
}
