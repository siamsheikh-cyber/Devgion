import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/work/ProjectCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Our Work — Restaurant & Cafe Websites",
  description:
    "Explore restaurant and cafe websites designed and redesigned by Devgion. Conversion-focused layouts, fast load speeds, and intuitive booking flows.",
  path: "/work",
});

/**
 * Our Work portfolio overview page.
 * Natural extension of the homepage Our Work section.
 */
export default function WorkPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Header Area & 2. Project Grid */}
      <section
        id="work-portfolio"
        aria-labelledby="work-heading"
        className="py-12 sm:py-18"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <SectionLabel>Our Work</SectionLabel>
              <h1
                id="work-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                Featured restaurant{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  projects
                </span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                A collection of restaurant and cafe websites Devgion has
                designed and redesigned. Each project is engineered around how
                hungry diners actually decide—making it effortless to view
                menus, book tables, and order online.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <FadeIn
                key={project.slug}
                delay={index * 0.12}
                direction="up"
                className="h-full flex flex-col"
              >
                <ProjectCard project={project} className="h-full flex-1" />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. Final Reused CTA Box */}
      <CtaSection
        heading={
          <>
            Ready to see what your restaurant&apos;s website{" "}
            <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
              could do?
            </span>
          </>
        }
        subheading="Every project starts with an honest look at your current site. No pitch, no pressure."
      />
    </div>
  );
}
