"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Passive scroll-reactive background for the site header.
 * - Fully transparent at top of page (window.scrollY <= 10).
 * - Smoothly fades in semi-transparent background with backdrop blur
 *   and subtle bottom border when scrolled past 10px.
 * - Stays solid when mobile menu is open.
 * - Respects prefers-reduced-motion.
 */
export function HeaderBackground() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 transition-all duration-300 ease-out motion-reduce:transition-none",
        "border-b",
        scrolled
          ? "border-border/60 bg-background/80 backdrop-blur-md shadow-xs opacity-100"
          : "border-transparent bg-transparent opacity-0",
        "group-data-[menu-open=true]:opacity-100 group-data-[menu-open=true]:bg-background/95 group-data-[menu-open=true]:backdrop-blur-md group-data-[menu-open=true]:border-border",
      )}
    />
  );
}
