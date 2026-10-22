import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonShine } from "@/components/ui/ButtonShine";
import { ProjectCardSpotlight } from "@/components/work/ProjectCardSpotlight";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * Premium interactive project card matching devniq.com design:
 * - Edge-to-edge screenshot at top showing the hero section with subtle hover zoom
 * - Small pill-shaped platform label on top-left of image
 * - Title with animated arrow, short description, and small tag chips
 * - Full-width glossy "See details" button at bottom with shine effect
 * - Uniform height across all cards with buttons aligned at the same level
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card/80 shadow-xs backdrop-blur-xs transition-all duration-300",
        "hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 dark:hover:shadow-primary/15 dark:hover:border-primary/60",
        className,
      )}
    >
      <ProjectCardSpotlight />

      {/* Top Screenshot: edge-to-edge with no padding, rounded corners, subtle hover zoom */}
      <Link
        href={`/work/${project.slug}`}
        scroll={false}
        className="group/img relative z-10 block w-full aspect-[16/10] overflow-hidden bg-muted/40"
        tabIndex={-1}
        aria-hidden="true"
      >
        {/* Platform pill label sitting on top-left of image */}
        {project.platform && (
          <div className="absolute top-3.5 left-3.5 z-10">
            <SectionLabel className="backdrop-blur-md bg-background/85 shadow-xs">
              {project.platform}
            </SectionLabel>
          </div>
        )}

        <Image
          src={project.desktopImage || project.coverImage}
          alt={project.desktopImageAlt || project.coverImageAlt || project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
          priority={project.featured}
        />
      </Link>

      {/* Card Body: flex-1 so content stretches and footer aligns at bottom */}
      <div className="relative z-10 flex flex-1 flex-col p-6">
        {/* Title row with animated arrow */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary">
            <Link
              href={`/work/${project.slug}`}
              scroll={false}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label={`Open ${project.title} details`}
            >
              {project.title}
            </Link>
          </h3>

          <span
            className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border/80 bg-muted/50 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground"
            aria-hidden="true"
          >
            <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>

        {/* Short description */}
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {project.problem}
        </p>

        {/* Small tag chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 bg-muted/40 px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Card footer: Full-width glossy "See details" pill button with shine sweep */}
        <div className="mt-auto pt-6">
          <Link
            href={`/work/${project.slug}`}
            scroll={false}
            className="beam-link group/btn relative flex w-full items-center justify-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2.5 text-xs font-semibold text-foreground backdrop-blur-xs shadow-xs hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>See details</span>
            <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
