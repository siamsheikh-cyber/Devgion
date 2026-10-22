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

  // Strip any trailing "| Devgion" from incoming title to prevent duplicates with layout template
  const cleanTitle = title
    ? title.replace(new RegExp(`\\s*\\|\\s*${siteConfig.name}$`, "i"), "").trim()
    : siteConfig.name;

  // Open Graph and Twitter cards do not inherit Next.js title.template, so provide full title
  const fullTitle =
    cleanTitle === siteConfig.name
      ? siteConfig.name
      : `${cleanTitle} | ${siteConfig.name}`;

  return {
    title: noTemplate ? { absolute: cleanTitle } : cleanTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}
