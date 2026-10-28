/**
 * Shared TypeScript types for the Devgion project.
 * Import with: import type { NavLink, ... } from '@/types'
 */

/** A navigation link with an optional external flag */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/** A footer link group */
export interface FooterLinkGroup {
  heading: string;
  links: NavLink[];
}

/** Platform tags Devgion works with */
export type Platform =
  | "Squarespace"
  | "Wix"
  | "WordPress"
  | "Custom Next.js"
  | "React / Next.js"
  | "TODO";

/** A service offering */
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string; // Lucide icon name
}

/** A portfolio project */
export interface Project {
  slug: string;
  title: string;
  client: string;
  platform: Platform;
  tags: string[];
  problem: string;
  whatWeDid: string;
  result: string;
  coverImage: string; // primary desktop image path in /public/images/
  coverImageAlt: string;
  desktopImage: string; // desktop image path in /public/images/ (1440x900)
  desktopImageAlt: string;
  mobileImage: string; // mobile image path in /public/images/ (390x844)
  mobileImageAlt: string;
  liveUrl?: string;
  featured: boolean;
}

/** Problem point */
export interface ProblemPoint {
  title: string;
  description: string;
  icon: string;
}

/** Step in the 3-day design update process */
export interface TestStep {
  step: number;
  title: string;
  description: string;
}

/** Why restaurants choose us point */
export interface WhyPoint {
  title: string;
  description: string;
  icon: string;
}

/** FAQ item */
export interface FaqItem {
  question: string;
  answer: string;
}

/** Open Graph image dimensions */
export interface OgImageSize {
  width: number;
  height: number;
}
