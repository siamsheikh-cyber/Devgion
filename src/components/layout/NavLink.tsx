"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  label: string;
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isActive
          ? "text-primary font-semibold"
          : "text-foreground/75 hover:text-foreground hover:bg-muted/60",
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && (
        <span
          className="absolute inset-0 -z-10 rounded-full border border-primary/20 bg-primary/10 shadow-xs"
          aria-hidden="true"
        />
      )}
      {label}
    </Link>
  );
}
