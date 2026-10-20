"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export function HeroScrollIndicator() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  // Fade out scroll indicator on scroll
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 100], [1, 0]);

  return (
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
  );
}
