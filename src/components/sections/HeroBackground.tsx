"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HeroBackground() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute inset-0 -z-20 h-full w-full overflow-hidden pointer-events-none"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
      aria-hidden="true"
    >
      <motion.div
        className="relative h-full w-full will-change-transform"
        style={{
          width: "100%",
          height: "100%",
          transformOrigin: "center center",
        }}
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
          className="object-cover object-center pointer-events-none select-none"
          style={{
            objectFit: "cover",
            objectPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </motion.div>
    </div>
  );
}
