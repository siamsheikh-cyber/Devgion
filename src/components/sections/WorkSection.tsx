import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonShine } from "@/components/ui/ButtonShine";
import { ProjectCard } from "@/components/work/ProjectCard";
import { projects } from "@/data/projects";

export function WorkSection() {
  return (
    <section id="work" aria-labelledby="work-heading" className="relative py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            {/* Small pill label above heading */}
            <SectionLabel>Our Work</SectionLabel>

            {/* Heading with one gradient word matching other sections */}
            <h2
              id="work-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Recent{" "}
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">work</span>
            </h2>

            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Click any project to see the problem, what we did, and the result.
            </p>
          </FadeIn>
        </div>

        {/* 3 Project cards in responsive grid with staggered reveal and equal height */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.12} direction="up" className="h-full flex flex-col">
              <ProjectCard project={project} className="h-full flex-1" />
            </FadeIn>
          ))}
        </div>

        {/* Centered secondary CTA button with shine sweep linking to /work */}
        <FadeIn delay={0.4} className="mt-14 flex justify-center">
          <Link
            href="/work"
            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-xs transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ButtonShine variant="secondary" />
            <span>View All Projects</span>
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
