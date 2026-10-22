"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive cursor spotlight for project cards.
 *
 * Tracks the mouse position inside the parent card element and sets
 * the `--mx` and `--my` CSS custom properties on that card.
 * Renders a soft radial glow overlay placed above the card background
 * and behind card content.
 */
export function ProjectCardSpotlight() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const card = overlay.parentElement as HTMLElement | null;
    if (!card) return;

    let isInside = false;
    let rafId: number | null = null;
    let latestX = 0;
    let latestY = 0;

    const updatePosition = () => {
      rafId = null;
      card.style.setProperty("--mx", `${latestX}px`);
      card.style.setProperty("--my", `${latestY}px`);
    };

    const handlePointerEnter = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isInside = true;
      const rect = card.getBoundingClientRect();
      latestX = e.clientX - rect.left;
      latestY = e.clientY - rect.top;
      card.style.setProperty("--mx", `${latestX}px`);
      card.style.setProperty("--my", `${latestY}px`);
      overlay.style.opacity = "1";
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      if (!isInside) {
        isInside = true;
        overlay.style.opacity = "1";
      }
      const rect = card.getBoundingClientRect();
      latestX = e.clientX - rect.left;
      latestY = e.clientY - rect.top;
      if (rafId === null) {
        rafId = requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerLeave = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      isInside = false;
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
      overlay.style.opacity = "0";
    };

    card.addEventListener("pointerenter", handlePointerEnter);
    card.addEventListener("pointermove", handlePointerMove);
    card.addEventListener("pointerleave", handlePointerLeave);
    card.addEventListener("pointercancel", handlePointerLeave);

    return () => {
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      card.removeEventListener("pointerenter", handlePointerEnter);
      card.removeEventListener("pointermove", handlePointerMove);
      card.removeEventListener("pointerleave", handlePointerLeave);
      card.removeEventListener("pointercancel", handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 ease-out [--glow-color:hsl(var(--primary)/0.12)] dark:[--glow-color:hsl(var(--primary)/0.18)]"
      style={{
        background:
          "radial-gradient(400px circle at var(--mx, -9999px) var(--my, -9999px), var(--glow-color, hsl(var(--primary) / 0.12)) 0%, transparent 80%)",
      }}
    />
  );
}
