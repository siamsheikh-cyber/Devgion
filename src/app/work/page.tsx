import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Work — Restaurant & Cafe Websites",
  description:
    "Explore Devgion's recent restaurant and cafe website projects. Conversion-focused layouts, fast load speeds, and local SEO.",
  path: "/work",
});

/**
 * Our Work portfolio overview page.
 * Displays project cards which trigger the case study modal or navigate.
 */
export default function WorkPage() {
  return (
    <div className="py-16 sm:py-20 md:py-24">
      <Container>
        <div className="max-w-2xl">
          <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
            Portfolio
          </span>
          <h1 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Recent Work
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Real restaurant and cafe websites engineered to make it effortless
            for guests to view menus, reserve tables, and place direct orders.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
