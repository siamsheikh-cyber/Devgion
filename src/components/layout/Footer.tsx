import Link from "next/link";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { siteConfig } from "@/config/site";

/**
 * Site footer — server component.
 * Renders link groups from siteConfig, social links, and copyright.
 */
/** Copyright year — update this each January. */
const CURRENT_YEAR = 2025; // TODO: automate annual update

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Devgion — home"
            >
              <Logo className="h-10 w-auto md:h-28" />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline} — conversion-focused websites for restaurants
              and cafes.
            </p>
            {/* Social links */}
            <div className="mt-4 flex gap-3">
              {Object.entries(siteConfig.social).map(([platform, href]) => (
                <a
                  key={platform}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Devgion on ${platform}`}
                  className="text-sm capitalize text-muted-foreground transition-colors hover:text-foreground"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {siteConfig.footerLinks.map((group) => (
            <div key={group.heading}>
              <h3 className="text-sm font-semibold text-foreground">
                {group.heading}
              </h3>
              <ul className="mt-3 space-y-2" role="list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {CURRENT_YEAR} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed &amp; built by{" "}
            <span className="font-medium text-foreground">Devgion</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
