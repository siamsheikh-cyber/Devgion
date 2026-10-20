import { cn } from "@/lib/utils";

export interface ButtonShineProps {
  /**
   * "default": soft white shine band for primary gradient buttons.
   * "secondary": tinted shine band visible on light and dark outlined / secondary surfaces.
   */
  variant?: "default" | "secondary";
  className?: string;
}

/**
 * Reusable button shine sweep overlay.
 * Pure CSS keyframes animation activated on button hover and focus-visible.
 * Renders as a lightweight Server Component with pointer-events: none and aria-hidden.
 */
export function ButtonShine({
  variant = "default",
  className,
}: ButtonShineProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "btn-shine",
        variant === "secondary" && "btn-shine-secondary",
        className,
      )}
    />
  );
}
