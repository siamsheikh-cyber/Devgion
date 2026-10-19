import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface BuildMetadataOptions {
  title?: string;
  description?: string;
  /** Relative path, e.g. "/services" */
  path?: string;
  /** Disable the title template for pages that need a custom title */
  noTemplate?: boolean;
}

/**
 * Build a complete Next.js Metadata object for a page.
 * Sets title, description, canonical URL, Open Graph, and Twitter cards.
 */
export function buildMetadata({
  title,
  description = siteConfig.description,
  path = "",
  noTemplate = false,
}: BuildMetadataOptions = {}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const resolvedTitle = noTemplate
    ? (title ?? siteConfig.name)
    : title
      ? `${title} | ${siteConfig.name}`
      : siteConfig.name;

  return {
    title: resolvedTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
    },
  };
}
