import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="dot-grid-bg py-20 sm:py-28 relative">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            {/* Small pill label above heading */}
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Work
            </span>

            {/* Heading with one gradient word matching other sections */}
            <h2
              id="work-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Recent{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                work
              </span>
            </h2>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Click any project to see the problem, what we did, and the result.
            </p>
          </FadeIn>
        </div>

        {/* 3 Project cards in responsive grid with staggered reveal */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.12} direction="up">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
