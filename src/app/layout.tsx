import { Suspense } from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { SkipLink } from "@/components/layout/SkipLink";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import "./globals.css";

/* ----------------------------------------------------------------
   Fonts — next/font loads these at build time (no layout shift).
   display: 'swap' is used so text is readable before the font loads.
   ---------------------------------------------------------------- */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["600", "700", "800"],
});

/* ----------------------------------------------------------------
   Root Metadata
   - metadataBase: required for absolute OG/Twitter URLs
   - title.template: adds " | Devgion" suffix to all child pages
   ---------------------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ----------------------------------------------------------------
   Viewport — separate export as required by Next.js 14+
   themeColor provides browser chrome tinting for light/dark modes.
   ---------------------------------------------------------------- */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f17" },
  ],
  width: "device-width",
  initialScale: 1,
};

/* ----------------------------------------------------------------
   JSON-LD Structured Data
   Organization + WebSite schemas on every page.
   No fake data — unknowns are omitted (TODO markers in comments).
   ---------------------------------------------------------------- */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  logo: `${siteConfig.url}${siteConfig.logo.light}`,
  sameAs: Object.values(siteConfig.social),
  contactPoint: {
    "@type": "ContactPoint",
    email: siteConfig.contact.email,
    contactType: "customer service",
  },
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/work?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/* ----------------------------------------------------------------
   Root Layout
   - lang="en" for accessibility / SEO
   - suppressHydrationWarning prevents React mismatch from next-themes
     injecting the class attribute server vs. client
   - ThemeProvider uses class strategy to work with Tailwind dark:
   ---------------------------------------------------------------- */
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal?: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${plusJakartaSans.variable}`}
    >
      <body className="flex min-h-svh flex-col bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Site-wide fixed dotted background layer */}
          <div className="fixed-dotted-background" aria-hidden="true" />

          {/* Structured data */}
          <JsonLd data={[organizationSchema, webSiteSchema]} />

          {/* Top page scroll progress line */}
          <ScrollProgress />

          {/* Accessibility: skip to main content */}
          <SkipLink />

          <Suspense fallback={<div className="h-16 w-full border-b border-border/40 bg-background/80" />}>
            <Header />
          </Suspense>

          {/* id="main-content" is the target for the skip-link */}
          <main id="main-content" className="flex-1">
            {children}
          </main>

          {/* Intercepted modal slot */}
          {modal}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
