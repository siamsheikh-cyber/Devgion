"use client";

import { useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  X,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Layers,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { Project } from "@/types";
import { BrowserFrame, PhoneFrame } from "@/components/ui/MockupFrame";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project;
}

/**
 * Premium accessible project modal matching Devniq design quality.
 * Features:
 * - Backdrop: Dark and blurred (bg-black/75 backdrop-blur-md)
 * - Smooth scale and fade reveal (respecting reduced-motion)
 * - Top large project image in a browser frame
 * - Category pill, title, and clearly separated blocks (Problem, What we did, Result, Platform)
 * - Visit-live-site link only for projects with a live URL
 * - Scrollable body with custom thin styled scrollbar in brand color
 * - Focus trap, return focus on close, Escape key, backdrop click, body scroll lock
 */
export function ProjectModal({ project }: ProjectModalProps) {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  // Close handler: navigates back in browser history (updating URL to homepage)
  const handleClose = useCallback(() => {
    router.back();
  }, [router]);

  // Lock body scroll and handle keyboard navigation (Escape + Focus Trap)
  useEffect(() => {
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus first focusable element inside modal
    const focusableSelectors =
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements =
      modalRef.current?.querySelectorAll<HTMLElement>(focusableSelectors);

    if (focusableElements && focusableElements.length > 0) {
      focusableElements[0].focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Escape key closes modal
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
        return;
      }

      // Tab key focus trap
      if (e.key === "Tab" && modalRef.current) {
        const elements =
          modalRef.current.querySelectorAll<HTMLElement>(focusableSelectors);
        if (!elements || elements.length === 0) return;

        const firstElement = elements[0];
        const lastElement = elements[elements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      // Return focus to the trigger element on close
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
    };
  }, [handleClose]);

  // Check if platform is defined and not marked TODO
  const showPlatform = project.platform && project.platform !== "TODO";

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8"
    >
      {/* Dark & blurred backdrop */}
      <motion.div
        role="presentation"
        aria-hidden="true"
        onClick={handleClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/75 backdrop-blur-md"
      />

      {/* Modal Dialog container with smooth scale/fade in */}
      <motion.div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
        aria-describedby="modal-project-problem"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 12 }}
        animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }}
        exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-2xl backdrop-blur-md",
        )}
      >
        {/* Sticky top chrome header */}
        <div className="flex items-center justify-between border-b border-border/70 bg-muted/50 px-6 py-3.5 select-none">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
              Case Study
            </span>
            {showPlatform && (
              <span className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                {project.platform}
              </span>
            )}
          </div>

          {/* Visible close button */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close project popup"
            className="rounded-full border border-border/60 bg-background/80 p-1.5 text-muted-foreground shadow-xs transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Modal scrollable body with custom thin styled scrollbar in brand color */}
        <div
          className={cn(
            "flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-6",
            "[scrollbar-width:thin] [scrollbar-color:hsl(var(--primary)/0.4)_transparent]",
          )}
        >
          {/* Project preview frames (desktop browser and mobile phone) */}
          <div className="overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 via-muted/40 to-transparent p-3 sm:p-4">
            <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-12 sm:gap-6">
              <div className={cn(project.mobileImage ? "sm:col-span-8" : "sm:col-span-12")}>
                <BrowserFrame
                  url={project.liveUrl || "https://example.com"}
                  title={project.title}
                  imageSrc={project.desktopImage || project.coverImage}
                  imageAlt={project.desktopImageAlt || project.coverImageAlt}
                  aspectRatio="16/10"
                />
              </div>
              {project.mobileImage && (
                <div className="flex justify-center sm:col-span-4">
                  <PhoneFrame
                    title={`${project.title} Mobile`}
                    imageSrc={project.mobileImage}
                    imageAlt={project.mobileImageAlt}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Category label & Title */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Restaurant Website Redesign
            </span>
            <h2
              id="modal-project-title"
              className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
            >
              {project.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Client: <strong className="font-medium text-foreground">{project.client}</strong>
            </p>
          </div>

          {/* Clearly separated blocks: Problem, What we did, Result, Platform */}
          <div className="grid gap-4 sm:grid-cols-1">
            {/* The Problem */}
            <div className="rounded-xl border border-border/80 bg-muted/30 p-5 shadow-xs">
              <div className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                <AlertCircle className="size-4 text-amber-500" />
                <span>The Problem</span>
              </div>
              <p
                id="modal-project-problem"
                className="mt-2 text-sm leading-relaxed text-muted-foreground"
              >
                {project.problem}
              </p>
            </div>

            {/* What We Did */}
            <div className="rounded-xl border border-border/80 bg-muted/30 p-5 shadow-xs">
              <div className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                <Wrench className="size-4 text-primary" />
                <span>What We Did</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.whatWeDid}
              </p>
            </div>

            {/* Result — Honest text with no fabricated numbers */}
            <div className="rounded-xl border border-border/80 bg-muted/30 p-5 shadow-xs">
              <div className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                <CheckCircle2 className="size-4 text-emerald-500" />
                <span>The Result</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.result}
              </p>
            </div>

            {/* Platform block (hidden if unknown / marked TODO) */}
            {showPlatform && (
              <div className="rounded-xl border border-border/80 bg-muted/30 p-5 shadow-xs">
                <div className="flex items-center gap-2 font-heading text-sm font-semibold text-foreground">
                  <Layers className="size-4 text-primary" />
                  <span>Platform</span>
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">
                  {project.platform}
                </p>
              </div>
            )}
          </div>

          {/* Footer actions: Live Link (if available) + CTA */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-5">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                <span>Visit live website</span>
                <ExternalLink className="size-4" />
              </a>
            ) : (
              <span className="text-xs text-muted-foreground">
                Client details kept private
              </span>
            )}

            <Link
              href="/contact"
              onClick={handleClose}
              className="group inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/20 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <span>Get a free 7-day test</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
