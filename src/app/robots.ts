import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates /robots.txt automatically via Next.js.
 * Blocks crawlers from admin/api routes.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
