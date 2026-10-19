"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "none";
  duration?: number;
}

/**
 * Accessible scroll reveal component.
 * Respects prefers-reduced-motion: if reduced motion is requested,
 * renders instantly without animation or translation.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.5,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = direction === "up" ? 18 : direction === "down" ? -18 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
