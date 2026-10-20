/**
 * Central site configuration.
 * Keep all content/metadata here — don't hardcode strings in components.
 */

export const siteConfig = {
  name: "Devgion",
  tagline: "Websites That Fill Tables",
  description:
    "Devgion is a web studio that designs and redesigns websites for restaurants and cafes — built for conversions, speed, and local SEO. Get a free 7-day test site today.",
  /** Set NEXT_PUBLIC_SITE_URL in .env.local for production */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://devgion.com", // TODO: confirm final domain

  /** Logos for light and dark themes */
  logo: {
    light: "/images/Devgion-light.png",
    dark: "/images/Devgion-dark.png",
    width: 1408,
    height: 768,
  },

  /** Social / contact */
  social: {
    // TODO: add real social profile URLs
    instagram: "https://instagram.com/devgion",
    facebook: "https://facebook.com/devgion",
    linkedin: "https://linkedin.com/company/devgion",
  },

  contact: {
    email: "hello@devgion.com", // TODO: confirm email
    phone: "", // TODO: add phone number
  },

  /** Primary navigation links */
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  /** Footer link groups */
  footerLinks: [
    {
      heading: "Services",
      links: [
        { label: "Website Design", href: "/services#design" },
        { label: "Website Redesign", href: "/services#redesign" },
        { label: "Local SEO", href: "/services#seo" },
        { label: "Branding & Graphics", href: "/services#branding" },
        { label: "Video", href: "/services#video" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Work", href: "/work" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],

  /** Platforms Devgion builds on */
  platforms: ["Squarespace", "Wix", "WordPress", "React / Next.js"] as const,
} as const;

export type SiteConfig = typeof siteConfig;
