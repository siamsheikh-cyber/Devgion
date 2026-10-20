"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
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
  );
}
