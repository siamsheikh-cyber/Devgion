"use client";

/**
 * Accessibility skip-link — hidden visually until focused via keyboard.
 * Must be the very first focusable element in the DOM.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      Skip to content
    </a>
  );
}
