"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { CountUp } from "@/components/ui/CountUp";
import { heroData } from "@/data/homepage";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // Fade out scroll indicator on scroll
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden"
    >
      {/* ============================================================
          FULL-BLEED BACKGROUND IMAGE
          fill + object-cover + optional slow zoom
          ============================================================ */}
      <div className="absolute inset-0 -z-20 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute inset-0"
          {...(!shouldReduceMotion && {
            initial: { scale: 1 },
            animate: { scale: 1.06 },
            transition: { duration: 18, ease: "linear", repeat: Infinity, repeatType: "reverse" },
          })}
        >
          <Image
            src="/images/hero-bg.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </div>

      {/* ============================================================
          OVERLAY STACK
          1. Left-to-right: dark on left (readable), lighter on right
          2. Bottom fade to blend into page background
          Both layers respect light & dark modes via opacity tuning
          ============================================================ */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Primary directional overlay — darkest on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/99 via-background/80 to-background/20 dark:from-background/99 dark:via-background/95 dark:to-background/30" />
        {/* Bottom fade so the section blends into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Subtle top vignette */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />
      </div>

      {/* ============================================================
          CONTENT — left-aligned, vertically centered
          ============================================================ */}
      <Container className="relative my-auto py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Heading */}
          <motion.h1
            id="hero-heading"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] sm:leading-[1.08]"
          >
            We Design Or Redesign{" "}
            <span className="box-decoration-clone bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Restaurant Websites
            </span>{" "}
            To Bring In More Orders And Bookings.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.35,
              ease: "easeOut",
            }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed"
          >
            {heroData.subheading}
          </motion.p>

          {/* Two Action Buttons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: shouldReduceMotion ? 0 : 0.45,
              ease: "easeOut",
            }}
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          >
            {/* Primary Gradient Button with Shine Sweep + Nudge Arrow */}
            <Link
              href={heroData.primaryCta.href}
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {/* Soft shine sweep overlay */}
              <span
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                aria-hidden="true"
              />
              <span>{heroData.primaryCta.label}</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Ghost Button with Glowing Border on Hover */}
            <a
              href={heroData.secondaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-xs transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <span>{heroData.secondaryCta.label}</span>
              <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-primary" />
            </a>
          </motion.div>

          {/* Proof Line + Supported Platforms */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: shouldReduceMotion ? 0 : 0.55,
            }}
            className="mt-8 border-t border-border/60 pt-5 space-y-2"
          >
            {/* Proof counter */}
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <span className="flex size-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>
                <CountUp to={18} duration={1.2} suffix="+" className="font-bold text-primary" /> websites built
              </span>
            </div>

            {/* Platform labels */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-muted-foreground">
              <span className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5">Squarespace</span>
              <span className="text-border">·</span>
              <span className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5">Wix</span>
              <span className="text-border">·</span>
              <span className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5">WordPress</span>
              <span className="text-border">·</span>
              <span className="rounded-md border border-border/70 bg-muted/40 px-2 py-0.5">Next.js</span>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* ============================================================
          SUBTLE SCROLL INDICATOR AT BOTTOM OF HERO
          Fades out as the user scrolls down
          ============================================================ */}
      <motion.div
        style={{ opacity: shouldReduceMotion ? 1 : scrollIndicatorOpacity }}
        aria-hidden="true"
        className="pointer-events-none mb-6 hidden justify-center md:flex"
      >
        <a
          href="#work"
          className="pointer-events-auto flex flex-col items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="tracking-wider uppercase text-[10px] font-medium">Scroll to explore</span>
          <div className="flex h-7 w-4 items-start justify-center rounded-full border border-border p-1 shadow-xs">
            <motion.span
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                    y: [0, 8, 0],
                  }
              }
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-1.5 w-1 rounded-full bg-primary"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
