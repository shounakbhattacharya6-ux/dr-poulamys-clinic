import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground">Go home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-primary">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try again or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">Try again</button>
          <a href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": "#clinic",
      name: "Dr. Poulamy's Homeopathy Clinic",
      description: "Classical, constitutional homeopathic care led by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal.",
      telephone: "+917685950399",
      email: "drpoulamys@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Maa Kamala Mandir, Gopalmath",
        addressLocality: "Durgapur",
        addressRegion: "West Bengal",
        postalCode: "713217",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "23.5186", longitude: "87.3512" },
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "09:00", closes: "20:00" },
      areaServed: [{ "@type": "Country", name: "India" }, { "@type": "City", name: "Durgapur" }],
      priceRange: "₹₹",
    },
    {
      "@type": "Physician",
      "@id": "#doctor",
      name: "Dr. Poulamy Singha Roy",
      jobTitle: "Homeopathic Physician, Assistant Professor",
      medicalSpecialty: "Homeopathy",
      knowsAbout: ["Classical Homeopathy", "Chronic Disease Care", "Skin & Hair", "Women's Health", "Child Health"],
      worksFor: { "@id": "#clinic" },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India" },
      { name: "description", content: "Classical, constitutional homeopathic care by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal." },
      { name: "author", content: "Dr. Poulamy's Homeopathy Clinic" },
      { name: "theme-color", content: "#1f4d3a" },
      { property: "og:site_name", content: "Dr. Poulamy's Homeopathy Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India" },
      { name: "twitter:title", content: "Dr. Poulamy's Homeopathy Clinic | Classical Homeopathy in India" },
      { property: "og:description", content: "Classical, constitutional homeopathic care by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal." },
      { name: "twitter:description", content: "Classical, constitutional homeopathic care by Dr. Poulamy Singha Roy. Online consultations across India and Sunday clinic visits in Durgapur, West Bengal." },
      { property: "og:image", content: "https://drpoulamys.in/favicon.png" },
      { name: "twitter:image", content: "https://drpoulamys.in/favicon.png" },
    ],
    links: [
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(siteJsonLd) },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
