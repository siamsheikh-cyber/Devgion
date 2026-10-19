import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

/**
 * Responsive brand logo that switches between light and dark variants seamlessly.
 *
 * Implements:
 * 1. Zero CLS (layout shift) by enforcing intrinsic aspect ratio.
 * 2. Zero FOUC / theme flash on page load by using CSS-based display rules
 *    tied to the `dark` class injected by next-themes before initial paint.
 * 3. High visual sharpness via Next.js Image with responsive srcset.
 * 4. Blends cleanly onto light & dark header backgrounds via multiply/screen blend modes.
 */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <span
      className={cn(
        "relative inline-flex items-center aspect-[1408/768] overflow-hidden select-none",
        className,
      )}
    >
      {/* Light theme logo: visible in light mode, hidden in dark mode */}
      <Image
        src={siteConfig.logo.light}
        alt={siteConfig.name}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        priority={priority}
        className="block h-full w-auto object-contain mix-blend-multiply dark:hidden"
      />
      {/* Dark theme logo: hidden in light mode, visible in dark mode */}
      <Image
        src={siteConfig.logo.dark}
        alt={siteConfig.name}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        priority={priority}
        className="hidden h-full w-auto object-contain dark:block dark:mix-blend-screen"
      />
    </span>
  );
}
