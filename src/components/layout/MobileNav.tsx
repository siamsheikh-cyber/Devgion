"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Container } from "./Container";
import { cn } from "@/lib/utils";
import type { NavLink as NavLinkType } from "@/types";
import { ButtonShine } from "@/components/ui/ButtonShine";

interface MobileNavProps {
  nav: readonly NavLinkType[] | NavLinkType[];
}

export function MobileNav({ nav }: MobileNavProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isFirstRender = useRef(true);

  // Close mobile menu when navigating to a new route
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const id = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(id);
  }, [pathname]);

  // Synchronize data-menu-open attribute on the header element
  useEffect(() => {
    const header = document.getElementById("site-header");
    if (header) {
      if (menuOpen) {
        header.setAttribute("data-menu-open", "true");
      } else {
        header.removeAttribute("data-menu-open");
      }
    }
  }, [menuOpen]);

  return (
    <>
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

      {menuOpen && (
        <div
          id="mobile-menu"
          className="absolute inset-x-0 top-16 border-t border-border bg-background/95 backdrop-blur-md shadow-lg md:hidden"
        >
          <Container as="nav" aria-label="Mobile navigation">
            <ul className="flex flex-col py-4" role="list">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      pathname === link.href
                        ? "bg-primary/10 text-primary font-semibold"
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
                  onClick={() => setMenuOpen(false)}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/25"
                >
                  <ButtonShine />
                  <span>Get a Free Audit</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </li>
            </ul>
          </Container>
        </div>
      )}
    </>
  );
}
