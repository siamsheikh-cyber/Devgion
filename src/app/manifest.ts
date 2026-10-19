import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * Generates /manifest.webmanifest for PWA baseline support.
 * TODO: Add real icons in /public/icons/ and update the icons array.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "Devgion",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#6366f1", // matches --primary light TODO: keep in sync with globals.css
    icons: [
      // TODO: generate real icons (192x192, 512x512) and add them to /public/icons/
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
