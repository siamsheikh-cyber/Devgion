import type { Metadata } from "next";
import {
  HeroSection,
  ProblemSection,
  ServicesSection,
  ProcessSection,
  WorkSection,
  WhyUsSection,
  StatsSection,
  FaqSection,
  TestimonialsSection,
  CtaSection,
} from "@/components/sections";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { faqItems } from "@/data/faq";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Websites That Fill Tables — Restaurant & Cafe Web Design",
  description:
    "We design and redesign restaurant and cafe websites so guests can find your menu, book a table and order in a few taps. Claim your free 3-day design update today.",
  path: "",
});

/**
 * Devgion Homepage.
 * Semantic structure:
 * - Single <h1> in HeroSection
 * - Strict heading hierarchy: <h2> for each major section, <h3> for cards/steps/accordions
 * - FAQPage JSON-LD structured data for Google search rich snippets
 * - Zero fabricated data: no fake reviews, testimonials, ratings, or stats
 */
export default function HomePage() {
  // Generate FAQPage structured data for rich snippets in Google Search
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Websites That Fill Tables — Devgion",
    url: siteConfig.url,
    description:
      "We design and redesign restaurant and cafe websites on Squarespace, Wix, WordPress and custom Next.js so guests can find your menu, book a table and order in a few taps.",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={[webPageSchema, faqSchema]} />

      {/* 1. Hero */}
      <HeroSection />

      {/* 2. The Problem */}
      <ProblemSection />

      {/* 3. Services */}
      <ServicesSection />

      {/* 4. Two paths: how we work */}
      <ProcessSection />

      {/* 5. Our Work */}
      <WorkSection />

      {/* 6. Why Devgion */}
      <WhyUsSection />

      {/* 6b. Stats Panel */}
      <StatsSection />

      {/* 7. FAQ */}
      <FaqSection />

      {/* 7b. Testimonials */}
      <TestimonialsSection />

      {/* 8. Final Call to Action */}
      <CtaSection />
    </>
  );
}
