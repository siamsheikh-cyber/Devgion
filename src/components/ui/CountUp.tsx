"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

/**
 * Animated counter that counts from 0 up to `to` when it enters the viewport.
 * If reduced motion is requested, instantly displays the final number.
 */
export function CountUp({
  to,
  duration = 1.2,
  suffix = "",
  className,
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      const id = requestAnimationFrame(() => setCount(to));
      return () => cancelAnimationFrame(id);
    }

    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      // Ease out cubic: 1 - Math.pow(1 - progress, 3)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * to));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, to, duration, shouldReduceMotion]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}
