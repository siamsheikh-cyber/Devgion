"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { BrowserFrame } from "@/components/ui/MockupFrame";
import { cn } from "@/lib/utils";
import { ButtonShine } from "@/components/ui/ButtonShine";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

/**
 * Premium interactive project card for "Our Work".
 * Matches Devniq design quality:
 * - Large browser mockup frame with soft background gradient
 * - Floating platform tag
 * - Hover elevation and glowing border in brand color
 * - Title with animated arrow
 * - Glossy "See details" pill button with soft shine sweep
 */
export function ProjectCard({ project, className }: ProjectCardProps) {
  const showPlatform = project.platform && project.platform !== "TODO";

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/80 bg-card/80 p-6 shadow-xs backdrop-blur-xs transition-all duration-300",
        "hover:-translate-y-2 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10",
        className,
      )}
    >
      <div>
        {/* Large image area on top with soft gradient behind it & floating tag */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-muted/40 to-transparent p-2">
          {/* Floating platform tag over image */}
          {showPlatform && (
            <div className="absolute top-4 left-4 z-20">
              <span className="inline-flex items-center rounded-full border border-border/80 bg-background/90 px-3 py-1 text-[11px] font-semibold text-primary shadow-xs backdrop-blur-md">
                {project.platform}
              </span>
            </div>
          )}

          {/* Browser mockup frame with subtle hover zoom */}
          <div className="overflow-hidden rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.02]">
            <BrowserFrame
              url={project.liveUrl || "https://example.com"}
              title={project.title}
              imageSrc={project.desktopImage || project.coverImage}
              imageAlt={project.desktopImageAlt || project.coverImageAlt}
              aspectRatio="16/10"
              className="border-border/60 shadow-md"
            />
          </div>
        </div>

        {/* Content body */}
        <div className="mt-5 space-y-2.5">
          <div className="flex items-start justify-between gap-2">
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

            {/* Hover arrow */}
            <span
              className="flex size-7 shrink-0 items-center justify-center rounded-full border border-border/80 bg-muted/50 text-muted-foreground transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground"
              aria-hidden="true"
            >
              <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>

          {/* One-line description */}
          <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {project.problem}
          </p>

          {/* Small tag chips */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card footer: Glossy "See details" pill button with shine sweep */}
      <div className="mt-6 border-t border-border/60 pt-4">
        <Link
          href={`/work/${project.slug}`}
          scroll={false}
          className="group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-border/80 bg-background/80 py-2.5 px-4 text-xs font-semibold text-foreground backdrop-blur-xs shadow-xs transition-all duration-300 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground hover:shadow-md hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ButtonShine variant="secondary" />
          <span>See details</span>
          <ArrowUpRight className="size-3.5 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
