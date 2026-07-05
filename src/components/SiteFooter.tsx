import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "@/assets/logo.jpg";
import mandala from "@/assets/mandala.png";
import { SOCIAL_LINKS } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-br from-[#0b1c11] via-primary/95 to-black text-primary-foreground relative overflow-hidden">
      {/* Revolving Mandala Backgrounds */}
      <img 
        src={mandala} 
        alt="" 
        className="absolute -bottom-64 -right-64 w-[800px] h-[800px] object-contain opacity-[0.03] pointer-events-none animate-[spin_60s_linear_infinite]" 
        aria-hidden="true" 
      />
      <img 
        src={mandala} 
        alt="" 
        className="absolute -top-64 -left-64 w-[800px] h-[800px] object-contain opacity-[0.03] pointer-events-none animate-[spin_60s_linear_infinite_reverse]" 
        aria-hidden="true" 
      />
      
      <div className="container-x py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Dr. Poulamy's logo" className="h-12 w-12 rounded-full ring-1 ring-gold/40" width={48} height={48} />
            <div>
              <div className="font-display text-xl">Dr. Poulamy's</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-primary-foreground/70">Homeopathy Clinic</div>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75 leading-relaxed">
            Classical, constitutional homeopathic care for India — gentle, personalised and rooted in evidence.
          </p>
          <div className="flex gap-3 pt-2">
            <a aria-label="Instagram" href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110"><FaInstagram className="h-5 w-5" /></a>
            <a aria-label="Facebook" href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110"><FaFacebook className="h-5 w-5" /></a>
            <a aria-label="WhatsApp" href="https://wa.me/917685950399" target="_blank" rel="noopener noreferrer" className="h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110"><FaWhatsapp className="h-5 w-5" /></a>
            <a aria-label="Email" href="mailto:drpoulamys@gmail.com" className="h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110"><FaEnvelope className="h-5 w-5" /></a>
            <a aria-label="Phone" href="tel:+917685950399" className="h-10 w-10 grid place-items-center rounded-full border border-primary-foreground/20 text-primary-foreground hover:border-gold hover:text-gold transition hover:scale-110"><FaPhoneAlt className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About Dr. Poulamy</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/consultations" className="hover:text-gold">Online & Clinic Visits</Link></li>
            <li><Link to="/products" className="hover:text-gold">Remedies & Products</Link></li>
            <li><Link to="/blog" className="hover:text-gold">Blog</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> Near Maa Kamala Mandir, Gopalmath, Durgapur, West Bengal 713217</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> <a href="tel:+917685950399" className="hover:text-gold">+91 76859 50399</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" /> <a href="mailto:drpoulamys@gmail.com" className="hover:text-gold">drpoulamys@gmail.com</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg mb-4">Hours</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><span className="text-gold">Online:</span> Mon – Sat, by appointment</li>
            <li><span className="text-gold">Clinic:</span> Sunday, full day</li>
          </ul>
          <p className="mt-5 text-xs leading-relaxed text-primary-foreground/60">
            Medical disclaimer: information on this site is for educational purposes and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 relative z-10">
        <div className="container-x py-5 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Dr. Poulamy's Homeopathy Clinic. All rights reserved.</span>
          <span>Durgapur · West Bengal · India</span>
          <span>
            Crafted with <span className="text-destructive">♥</span> by <a href="https://nexiog.in" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-cream">NexiOG Technologies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
