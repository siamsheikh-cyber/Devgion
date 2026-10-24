"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonShine } from "@/components/ui/ButtonShine";
import { cn } from "@/lib/utils";

interface StepCard {
  step: string;
  title: string;
  desc: string;
}

const card1Steps: StepCard[] = [
  {
    step: "STEP 01",
    title: "Honest review",
    desc: "We look at your current website and say plainly what works, where guests are dropping off, and exactly what we would fix first. No sales pitch.",
  },
  {
    step: "STEP 02",
    title: "One focused improvement",
    desc: "We design and launch a single high-impact change, such as a mobile menu fix or a reservation flow, and nothing else.",
  },
  {
    step: "STEP 03",
    title: "Track one agreed number",
    desc: "We pick one metric that matters, such as reservation clicks or phone taps, and track how the update performs over 7 days.",
  },
  {
    step: "STEP 04",
    title: "You decide, zero lock-in",
    desc: "You see the results firsthand. Love the difference? Continue from $300. Don't? You walk away with zero obligations.",
  },
];

const card2Steps: StepCard[] = [
  {
    step: "STEP 01",
    title: "Tell us what you need",
    desc: "New site or direct project — share your idea, your platform preference and any references you like.",
  },
  {
    step: "STEP 02",
    title: "We scope and quote",
    desc: "We agree on the exact work and price before anything starts. No surprises.",
  },
  {
    step: "STEP 03",
    title: "We build on Fiverr",
    desc: "Your payment is held safely by Fiverr until you approve the work. Starting from $80.",
  },
  {
    step: "STEP 04",
    title: "Approve & launch",
    desc: "We deliver the complete project on Fiverr. You review, approve, and your website goes live with full ownership.",
  },
];

interface BranchData {
  label: string;
  step1: string;
  step2: string;
}

function FlowDiagram({
  leftBranch,
  rightBranch,
}: {
  leftBranch: BranchData;
  rightBranch: BranchData;
}) {
  return (
    <div className="flex flex-col items-center w-full my-auto py-2 sm:py-3">
      {/* Top box */}
      <div className="inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/95 px-3.5 py-1 text-xs font-semibold text-foreground shadow-2xs">
        <span className="size-1.5 rounded-full bg-primary" />
        <span>What describes you?</span>
      </div>

      {/* Vertical line down */}
      <div className="w-px h-14 sm:h-16 md:h-9 bg-border/80" />

      {/* Horizontal split line */}
      <div className="relative w-3/4 max-w-[240px] h-6 sm:h-7 md:h-5">
        <div className="absolute inset-x-0 top-0 h-px bg-border/80" />
        <div className="absolute left-0 top-0 w-px h-6 sm:h-7 md:h-5 bg-border/80" />
        <div className="absolute right-0 top-0 w-px h-6 sm:h-7 md:h-5 bg-border/80" />
      </div>

      {/* Two branches */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-[380px] mt-4 sm:mt-5 md:mt-3">
        {/* Left branch */}
        <div className="flex flex-col items-center">
          <span className="text-center font-heading text-xs sm:text-sm font-bold bg-gradient-to-r from-[#3D78FB] to-[#7756ee] bg-clip-text text-transparent pb-0.5">
            {leftBranch.label}
          </span>
          <div className="flex flex-col items-center my-7 sm:my-8 md:my-4">
            <div className="w-px h-14 sm:h-16 md:h-8 bg-border/80" />
            <ArrowDown className="size-3.5 text-muted-foreground/60 -mt-0.5" />
          </div>
          <div className="w-full rounded-xl border border-border/70 bg-muted/40 dark:bg-muted/15 p-2 sm:p-2.5 text-center text-xs font-medium text-foreground shadow-2xs">
            {leftBranch.step1}
          </div>
          <div className="flex flex-col items-center my-7 sm:my-8 md:my-4">
            <div className="w-px h-14 sm:h-16 md:h-8 bg-border/80" />
            <ArrowDown className="size-3.5 text-muted-foreground/60 -mt-0.5" />
          </div>
          <div className="w-full rounded-xl border border-border/70 bg-muted/20 p-2 sm:p-2.5 text-center text-[11px] sm:text-xs font-semibold text-muted-foreground shadow-2xs">
            {leftBranch.step2}
          </div>
        </div>

        {/* Right branch */}
        <div className="flex flex-col items-center">
          <span className="text-center font-heading text-xs sm:text-sm font-bold bg-gradient-to-r from-[#3D78FB] to-[#7555EE] bg-clip-text text-transparent pb-0.5">
            {rightBranch.label}
          </span>
          <div className="flex flex-col items-center my-7 sm:my-8 md:my-4">
            <div className="w-px h-14 sm:h-16 md:h-8 bg-border/80" />
            <ArrowDown className="size-3.5 text-muted-foreground/60 -mt-0.5" />
          </div>
          <div className="w-full rounded-xl border border-border/70 bg-muted/40 dark:bg-muted/15 p-2 sm:p-2.5 text-center text-xs font-medium text-foreground shadow-2xs">
            {rightBranch.step1}
          </div>
          <div className="flex flex-col items-center my-7 sm:my-8 md:my-4">
            <div className="w-px h-14 sm:h-16 md:h-8 bg-border/80" />
            <ArrowDown className="size-3.5 text-muted-foreground/60 -mt-0.5" />
          </div>
          <div className="w-full rounded-xl border border-border/70 bg-muted/20 p-2 sm:p-2.5 text-center text-[11px] sm:text-xs font-semibold text-muted-foreground shadow-2xs">
            {rightBranch.step2}
          </div>
        </div>
      </div>
    </div>
  );
}

interface PathCardProps {
  tag: string;
  leftBranch: BranchData;
  rightBranch: BranchData;
  steps: StepCard[];
  ctaText: string;
  pricingNote: string;
  href: string;
}

function PathCard({
  tag,
  leftBranch,
  rightBranch,
  steps,
  ctaText,
  pricingNote,
  href,
}: PathCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative h-full [perspective:1000px]">
      <div
        className="relative grid w-full h-full [transform-style:preserve-3d] transition-transform duration-600 ease-in-out motion-reduce:transition-none"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: shouldReduceMotion
            ? "none"
            : "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* ── FRONT SIDE ── */}
        <div
          role="button"
          tabIndex={isFlipped ? -1 : 0}
          aria-hidden={isFlipped ? true : undefined}
          onClick={() => setIsFlipped(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsFlipped(true);
            }
          }}
          className={cn(
            "col-start-1 row-start-1 flex flex-col justify-between h-full w-full rounded-2xl border border-border bg-card p-6 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 sm:p-8 cursor-pointer select-none [backface-visibility:hidden] [webkit-backface-visibility:hidden]",
            isFlipped && "pointer-events-none"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(0deg)",
          }}
        >
          {/* Visual flow diagram */}
          <FlowDiagram leftBranch={leftBranch} rightBranch={rightBranch} />

          {/* Bottom tag pill & CTA */}
          <div className="mt-12 sm:mt-16 md:mt-12 flex flex-col items-center">
            {/* Tag pill in brand gradient border */}
            <div className="inline-flex w-fit items-center rounded-full p-[1px] bg-gradient-to-r from-[#3D78FB] to-[#7555EE] mb-4 sm:mb-5">
              <span className="rounded-full bg-card px-3 py-1 text-xs font-semibold text-primary">
                {tag}
              </span>
            </div>

            <div className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              <ButtonShine />
              <span>See details</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </div>
          </div>
        </div>

        {/* ── BACK SIDE ── */}
        <div
          aria-hidden={!isFlipped ? true : undefined}
          className={cn(
            "col-start-1 row-start-1 flex flex-col justify-between h-full w-full rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8 [backface-visibility:hidden] [webkit-backface-visibility:hidden]",
            !isFlipped && "pointer-events-none select-none"
          )}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* 2x2 grid of step cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
            {steps.map((item) => (
              <div
                key={item.step}
                className="flex flex-col justify-between rounded-xl border border-border/70 bg-muted/40 dark:bg-muted/15 p-3 sm:p-4 shadow-2xs"
              >
                <div>
                  <span className="text-[10px] sm:text-xs font-bold tracking-wider text-primary uppercase">
                    {item.step}
                  </span>
                  <h4 className="mt-1 font-heading text-xs sm:text-sm font-bold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                {/* Transparent & clear checkmark line */}
                <div className="mt-2.5 pt-2 border-t border-border/50 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium text-primary">
                  <Check className="size-3 shrink-0 text-primary" />
                  <span>Transparent &amp; clear</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA, muted pricing line, back button */}
          <div className="mt-6 flex flex-col items-center">
            <Link
              href={href}
              tabIndex={isFlipped ? 0 : -1}
              onClick={(e) => e.stopPropagation()}
              className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ButtonShine />
              <span>{ctaText}</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Link>
            <p className="mt-2 text-center text-xs text-muted-foreground">
              {pricingNote}
            </p>
            <button
              type="button"
              tabIndex={isFlipped ? 0 : -1}
              onClick={(e) => {
                e.stopPropagation();
                setIsFlipped(false);
              }}
              className="mt-3 inline-flex items-center justify-center text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              &larr; Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * ProcessSection — replaces the old HowItWorksSection.
 * Shows two paths with visual flow diagram front and 2x2 step cards back.
 */
export function ProcessSection() {
  return (
    <section
      aria-labelledby="process-heading"
      className="py-12 sm:py-18 bg-muted/10"
    >
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>Our Process</SectionLabel>
            <h2
              id="process-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                Two ways
              </span>{" "}
              to work with us.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Pick whichever fits your situation — both lead to a site that
              converts visitors into guests.
            </p>
          </FadeIn>
        </div>

        {/* Two flip cards side by side */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 items-stretch">
          {/* ── Card 1: Risk-Free Redesign ── */}
          <FadeIn delay={0.1} className="h-full">
            <PathCard
              tag="Risk-Free Redesign"
              leftBranch={{
                label: "Have a website",
                step1: "7-day free test",
                step2: "From $300",
              }}
              rightBranch={{
                label: "No site / Direct project",
                step1: "Fiverr project",
                step2: "From $80",
              }}
              steps={card1Steps}
              ctaText="Start the free test"
              pricingNote="Free for 7 days · Full redesign from $300"
              href="/contact"
            />
          </FadeIn>

          {/* ── Card 2: Direct Build ── */}
          <FadeIn delay={0.2} className="h-full">
            <PathCard
              tag="Direct Build"
              leftBranch={{
                label: "Need a new site",
                step1: "Fiverr project",
                step2: "From $80",
              }}
              rightBranch={{
                label: "Have a site, want direct",
                step1: "Fiverr project",
                step2: "From $80",
              }}
              steps={card2Steps}
              ctaText="Start on Fiverr"
              pricingNote="Starting from $80 · Price set by project scope"
              href="/contact"
            />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
