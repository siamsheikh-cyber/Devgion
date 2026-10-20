import type { Project } from "@/types";

/**
 * Devgion portfolio project data.
 * Real client work as specified.
 * Screenshots are stored in /public/images/
 * Desktop images: 1440 x 900, Mobile images: 390 x 844
 */
export const projects: Project[] = [
  {
    slug: "vmv-catering",
    title: "VMV Catering",
    client: "VMV Catering",
    platform: "Wix",
    tags: ["Order Online", "Per-Person Pricing", "Action Sections"],
    problem:
      "Office managers needed to see per-person pricing and order quickly.",
    whatWeDid:
      "Built the site from the client's design reference, with a clear Order Online button, best-seller cards with pricing and extra action sections.",
    result:
      "Delivered and launched; measured results will be added when available.",
    liveUrl: "https://www.vmvcatering.com.au/",
    coverImage: "/images/vmv-desktop.webp",
    coverImageAlt: "VMV Catering website, desktop view",
    desktopImage: "/images/vmv-desktop.webp",
    desktopImageAlt: "VMV Catering website, desktop view",
    mobileImage: "/images/vmv-mobile.webp",
    mobileImageAlt: "VMV Catering website, mobile view",
    featured: true,
  },
  {
    slug: "your-behind-bbq",
    title: "Your Behind BBQ",
    client: "Your Behind BBQ",
    platform: "Squarespace",
    tags: ["Squarespace", "Menu & Catering", "Online Ordering", "Store"],
    problem:
      "A competition BBQ restaurant needed guests to find the menu and order easily.",
    whatWeDid:
      "Built the site on Squarespace with menu, catering, online ordering, store and pitmaster story pages.",
    result:
      "Delivered and launched; measured results will be added when available.",
    liveUrl: "https://yourbehindbbq.com/",
    coverImage: "/images/ybbq-desktop.webp",
    coverImageAlt: "Your Behind BBQ website, desktop view",
    desktopImage: "/images/ybbq-desktop.webp",
    desktopImageAlt: "Your Behind BBQ website, desktop view",
    mobileImage: "/images/ybbq-mobile.webp",
    mobileImageAlt: "Your Behind BBQ website, mobile view",
    featured: true,
  },
  {
    slug: "restaurant-website",
    title: "Restaurant website (private client)",
    client: "Private Client",
    platform: "WordPress",
    tags: ["Responsive Layout", "Reservations", "Events", "Shop"],
    problem:
      "A restaurant needed a responsive site with menu, reservations and events.",
    whatWeDid:
      "Designed desktop and mobile layouts with menu, reservation, events and shop pages.",
    result:
      "Delivered; client details are kept private and the logo and text shown are placeholders.",
    coverImage: "/images/restaurant-desktop.webp",
    coverImageAlt: "Private restaurant client website, desktop view",
    desktopImage: "/images/restaurant-desktop.webp",
    desktopImageAlt: "Private restaurant client website, desktop view",
    mobileImage: "/images/restaurant-mobile.webp",
    mobileImageAlt: "Private restaurant client website, mobile view",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
