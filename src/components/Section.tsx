import type { ReactNode } from "react";

export function SectionEyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  const isDark = className.includes("text-gold") || className.includes("text-cream");
  
  return (
    <div className={`inline-flex items-center gap-3 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-md transition-all ${
      isDark 
        ? "border-gold/30 bg-black/40 shadow-sm" 
        : "border-primary/10 bg-primary/5"
    } ${isDark && !className.includes("text-") ? "text-gold" : className || "text-leaf"}`}>
      <span className={`h-px w-6 ${isDark ? "bg-gold" : "bg-primary/40"}`} /> {children}
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle, bgImage }: { eyebrow: string; title: string; subtitle?: string; bgImage?: string }) {
  return (
    <section className={`relative overflow-hidden border-b border-border ${bgImage ? "bg-background" : "bg-secondary/20"}`}>
      {bgImage ? (
        <>
          <img src={bgImage} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
          {/* Subtle white overlay to ensure dark text remains perfectly readable */}
          <div className="absolute inset-0 bg-background/30 pointer-events-none" />
        </>
      ) : (
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--leaf), transparent 60%), radial-gradient(circle at 80% 80%, var(--gold), transparent 60%)" }} />
      )}
      <div className="container-x relative z-10 pt-32 pb-20 md:pt-40 md:pb-28 text-center">
        <SectionEyebrow>{eyebrow}</SectionEyebrow>
        <h1 className="mt-5 font-display text-4xl md:text-6xl text-primary">{title}</h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
