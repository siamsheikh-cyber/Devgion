import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Devgion offers website design, redesign, local SEO, branding, and video for restaurants and cafes. Explore what we do.",
  path: "/services",
});

/**
 * Services page placeholder.
 * TODO: Build out service cards, pricing overview, and FAQ sections.
 */
export default function ServicesPage() {
  return (
    <section
      aria-labelledby="services-heading"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center"
    >
      <h1
        id="services-heading"
        className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
      >
        Our Services
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        🚧 <strong>Services page coming soon.</strong> This placeholder will be
        replaced with service cards, platform options, and pricing details.
      </p>
    </section>
  );
}
