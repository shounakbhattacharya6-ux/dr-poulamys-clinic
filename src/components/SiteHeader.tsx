import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/consultations", label: "Consultations" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-0 right-0 z-50 mx-4 md:mx-auto max-w-6xl rounded-full border border-white/20 dark:border-white/10 bg-white/10 dark:bg-black/20 backdrop-blur-2xl shadow-lg shadow-black/5">
      <div className="px-6 md:px-8 flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Dr. Poulamy's Homeopathy Clinic logo" className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-gold/40 bg-cream/90 p-1 shadow-sm" width={48} height={48} />
          <div className="min-w-0 leading-tight">
            <div className="font-display text-lg font-semibold text-black truncate">Dr. Poulamy's</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-black/70">Homeopathy Clinic</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="font-display text-[17px] font-semibold tracking-wide text-black transition-all hover:text-gold hover:-translate-y-0.5 [&.active]:text-gold [&.active]:font-bold"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/consultations"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:opacity-95 hover:shadow-md"
          >
            Book Consultation
          </Link>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 text-black hover:bg-black/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-3xl border border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-2xl shadow-xl overflow-hidden">
          <nav className="flex flex-col py-4 px-6">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="font-display py-4 text-xl font-semibold tracking-wide text-black border-b border-black/10 last:border-0 hover:text-gold transition-colors [&.active]:text-gold [&.active]:font-bold"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <Link to="/consultations" onClick={() => setOpen(false)} className="mt-4 mb-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground">
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
