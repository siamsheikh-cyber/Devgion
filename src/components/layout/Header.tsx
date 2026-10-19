"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

/**
 * Site header with desktop navigation, mobile hamburger menu, and theme toggle.
 * Marked "use client" because it uses useState, usePathname, and scroll effects.
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Track whether this is the first render to avoid closing menu on initial mount
  const isFirstRender = useRef(true);

  // Add a subtle shadow/border when the user scrolls past the fold
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when the user navigates to a new route.
  // We skip the first render (isFirstRender) so the initial mount
  // doesn't trigger an unnecessary state update.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Schedule the state update outside the synchronous effect body
    // to satisfy the react-hooks/set-state-in-effect rule.
    const id = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "border-border shadow-sm" : "border-transparent",
      )}
    >
      <Container as="nav" className="flex h-16 items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="-ml-[25px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Devgion — home"
        >
          <Logo priority className="h-10 w-auto md:h-28" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1.5 md:flex" role="list">
          {siteConfig.nav.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
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
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right-side actions: CTA + theme toggle + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative hidden items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-primary via-indigo-600 to-accent px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/25 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
          >
            {/* Soft shine sweep */}
            <span
              className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
              aria-hidden="true"
            />
            <span>Get a free 7-day test</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <ThemeToggle />
          {/* Hamburger — mobile only */}
          <button
            id="mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-background md:hidden"
        >
          <Container as="nav" aria-label="Mobile navigation">
            <ul className="flex flex-col py-4" role="list">
              {siteConfig.nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "text-foreground/70 hover:bg-muted hover:text-foreground",
                    )}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-4 border-t border-border pt-4">
                <Link
                  href="/contact"
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary via-indigo-600 to-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/25"
                >
                  <span
                    className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                    aria-hidden="true"
                  />
                  <span>Get a free 7-day test</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
