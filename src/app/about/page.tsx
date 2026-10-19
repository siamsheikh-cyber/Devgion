import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "Learn about Devgion — a web studio focused on helping restaurants and cafes grow online with fast, conversion-focused websites.",
  path: "/about",
});

/**
 * About page placeholder.
 * TODO: Add founder story, mission, process overview, and team section.
 */
export default function AboutPage() {
  return (
    <section
      aria-labelledby="about-heading"
      className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-24 text-center"
    >
      <h1
        id="about-heading"
        className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl"
      >
        About Devgion
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
        🚧 <strong>About page coming soon.</strong> This placeholder will
        include the studio story, mission, and team.
      </p>
    </section>
  );
}
