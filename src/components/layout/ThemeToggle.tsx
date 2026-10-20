"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

/**
 * Light/dark theme toggle button.
 * Uses next-themes under the hood; only renders the icon for the *opposite* theme.
 * "use client" is required because useTheme reads from context.
 */
export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      id="theme-toggle"
      type="button"
      aria-label={
        resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"
      }
      onClick={toggleTheme}
      className={cn(
        "rounded-full p-2 text-foreground/70 transition-colors bg-transparent/40 border-[0.5px] border-gray-300 dark:border-gray-200/50 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className,
      )}
    >
      {/* Sun shown in dark mode (to switch to light), Moon shown in light mode (to switch to dark) */}
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" aria-hidden="true" />
      ) : (
        <Moon className="size-5" aria-hidden="true" />
      )}
    </button>
  );
}
