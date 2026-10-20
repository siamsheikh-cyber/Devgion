import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";
import { HeaderBackground } from "./HeaderBackground";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { siteConfig } from "@/config/site";
import { ButtonShine } from "@/components/ui/ButtonShine";

/**
 * Site header — Server Component.
 * Content (logo, nav links, CTA) is server-rendered HTML.
 * Scroll reactivity and mobile drawer are isolated to small client components.
 */
export function Header() {
  return (
    <header
      id="site-header"
      className="group sticky top-0 z-50 w-full"
    >
      {/* Scroll-reactive background layer */}
      <HeaderBackground />

      <Container as="nav" className="flex h-16 items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link
          href="/"
          className="-ml-[5px] inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Devgion — home"
        >
          <Logo priority className="h-10 w-auto md:h-20" />
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-1.5 md:flex" role="list">
          {siteConfig.nav.map((link) => (
            <li key={link.href}>
              <NavLink href={link.href} label={link.label} />
            </li>
          ))}
        </ul>

        {/* Right-side actions: theme toggle + CTA + mobile hamburger */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group relative hidden items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/25 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:inline-flex"
          >
            <ButtonShine />
            <span>Get a Free Audit</span>
            <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>

          {/* Mobile hamburger menu & drawer */}
          <MobileNav nav={siteConfig.nav} />
        </div>
      </Container>
    </header>
  );
}
