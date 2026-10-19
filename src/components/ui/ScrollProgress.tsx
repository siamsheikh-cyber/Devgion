"use client";

import { motion, useScroll, useSpring } from "motion/react";

/**
 * Thin scroll progress line at the very top of the page.
 * Uses a smooth spring animation based on the page scroll position.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary to-accent"
    />
  );
}
