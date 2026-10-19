import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch with Devgion to claim your free 7-day restaurant website test. We'll have your new site ready in days.",
  path: "/contact",
});

/**
 * Contact page placeholder.
 * TODO: Add contact form (validated with Zod), calendly embed or booking link,
 *       and quick-response promise (e.g. "Reply within 24h").
 */
export default function ContactPage() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center"
    >
      <h1
        id="contact-heading"
        className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
      >
        Get a Free Test Site
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        🚧 <strong>Contact form coming soon.</strong> This placeholder will have
        a Zod-validated contact form and a booking option for a free 7-day trial
        website.
      </p>
    </section>
  );
}
