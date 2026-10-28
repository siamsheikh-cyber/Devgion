import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Container } from "@/components/layout/Container";
import Image from "next/image";
import { HeroBackground } from "@/components/sections/HeroBackground";
import { HeroScrollIndicator } from "@/components/sections/HeroScrollIndicator";
import { ButtonShine } from "@/components/ui/ButtonShine";

const clientAvatars = [
  { src: "/images/clients/client-1.webp", alt: "Restaurant client 1" },
  { src: "/images/clients/client-2.webp", alt: "Restaurant client 2" },
  { src: "/images/clients/client-3.webp", alt: "Restaurant client 3" },
  { src: "/images/clients/client-4.webp", alt: "Restaurant client 4" },
];

export function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate -mt-16 flex min-h-svh w-full flex-col overflow-hidden bg-background pt-16"
      style={{ width: "100%", overflow: "hidden" }}
    >
      {/* ============================================================
          FULL-BLEED BACKGROUND IMAGE (Client animation component)
          ============================================================ */}
      <HeroBackground />

      {/* ============================================================
          OVERLAY STACK
          1. Left-to-right: dark on left (readable), lighter on right
          2. Bottom fade to blend into page background
          Both layers respect light & dark modes via opacity tuning
          ============================================================ */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        {/* Primary directional overlay — darkest on left, lighter on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/99 via-background/80 to-background/20 dark:from-background/99 dark:via-background/95 dark:to-background/30" />
        {/* Bottom fade so the section blends into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
        {/* Subtle top vignette */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background/60 to-transparent" />
      </div>

      {/* ============================================================
          CONTENT — Server-rendered plain HTML
          ============================================================ */}
      <Container className="relative my-auto py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl xl:max-w-3xl">
          {/* Heading: single h1 with real spaces */}
          <h1
            id="hero-heading"
            className="font-heading text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.08] sm:leading-[1.08]"
          >
            We Design Or Redesign{" "}
            <span className="box-decoration-clone bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent pb-0.5">
              Restaurant Websites
            </span>{" "}
            To Bring In More Orders & Bookings.
          </h1>

          {/* Subheading */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg sm:leading-relaxed">
            We combine beautiful design with how people make decisions, so guests find your menu, trust what they see, and order or book in a few taps.
          </p>

          {/* Two Action Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            {/* Primary Gradient Button with Shine Sweep + Nudge Arrow */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ButtonShine />
              <span>Get a Free 3-Day Design Update</span>
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Ghost Button with Glowing Border on Hover */}
            <a
              href="#work"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-xs transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:text-primary hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <ButtonShine variant="secondary" />
              <span>See our work</span>
              <ChevronDown className="size-4 text-muted-foreground transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-primary" />
            </a>
          </div>

          {/* Proof Line: Overlapping Avatars + Trust Copy */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden">
              {clientAvatars.map((client) => (
                <Image
                  key={client.src}
                  src={client.src}
                  alt={client.alt}
                  width={32}
                  height={32}
                  className="inline-block size-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-sm font-medium text-muted-foreground">
              Trusted by restaurant and cafe owners
            </p>
          </div>
        </div>
      </Container>

      {/* ============================================================
          SCROLL INDICATOR (Client component with scroll-based opacity)
          ============================================================ */}
      <HeroScrollIndicator />
    </section>
  );
}
