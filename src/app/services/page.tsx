import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Palette,
  Laptop,
  Layers,
  Globe,
  FileCode2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonShine } from "@/components/ui/ButtonShine";
import { CtaSection } from "@/components/sections/CtaSection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services — Restaurant & Cafe Web Solutions",
  description:
    "Explore Devgion's restaurant and cafe web design, redesign, local SEO, and visual asset services. Conversion-focused layouts engineered to fill tables.",
  path: "/services",
});

const mainBenefits = [
  {
    title: "Instant mobile menu access",
    description:
      "Fast-loading, readable menus with zero pinch-to-zoom PDF clunkiness. Guests find your dishes, prices, and dietary tags in seconds.",
  },
  {
    title: "Obvious booking & order actions",
    description:
      "Prominent reserve, order, and call buttons placed right where mobile thumbs naturally rest, eliminating drop-offs.",
  },
  {
    title: "Authentic atmosphere match",
    description:
      "Typography, color palettes, and imagery that reflect the true mood of your dining room rather than a generic template.",
  },
  {
    title: "Clean code & fast speeds",
    description:
      "Optimized performance so hungry diners browsing on weak cellular connections don't bounce to third-party delivery apps.",
  },
];

const platformBadges = [
  {
    name: "Squarespace",
    role: "Easy Owner Updates",
    icon: Laptop,
  },
  {
    name: "Wix Studio",
    role: "Visual Cafe Layouts",
    icon: Layers,
  },
  {
    name: "WordPress",
    role: "Multi-Location Flexibility",
    icon: Globe,
  },
  {
    name: "Custom Next.js",
    role: "Maximum Speed & Flow",
    icon: FileCode2,
  },
];

const startSteps = [
  {
    step: "01",
    title: "Send us your site",
    description:
      "Share a link to your current website or tell us what you have in mind. We review your mobile experience, menu flow, and booking clarity.",
  },
  {
    step: "02",
    title: "We give you an honest assessment",
    description:
      "We tell you plainly what is working, where guests are leaving, and exactly what we would fix first. No technical jargon, no sales pressure.",
  },
  {
    step: "03",
    title: "We agree on the first fix",
    description:
      "We agree on a single, focused improvement—such as a faster mobile menu or seamless reservation flow—and build it for you to see firsthand.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Page Header */}
      <section
        aria-labelledby="services-header-heading"
        className="pt-12 pb-16 sm:pt-16 sm:pb-20"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <SectionLabel>What We Do</SectionLabel>

              <h1
                id="services-header-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Web design and growth for{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  restaurants &amp; cafes.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                Everything we build is engineered around one goal: helping dining
                spots turn online visitors into guests at your tables. From
                frictionless mobile websites to local search visibility, here is
                how we help.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 2. Main Service: Website Design & Redesign */}
      <section
        aria-labelledby="main-service-heading"
        className="py-12 sm:py-18 bg-muted/20"
      >
        <Container>
          <FadeIn>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-12 items-center">
                {/* Left Side: Content & Benefits */}
                <div className="lg:col-span-7">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    Core Service
                  </span>

                  <h2
                    id="main-service-heading"
                    className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl md:text-4xl"
                  >
                    Website design &amp; redesign{" "}
                    <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                      built for conversions.
                    </span>
                  </h2>

                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    Most restaurant websites look fine on a computer but break down
                    when hungry diners visit from a phone. We build fast,
                    mobile-first websites engineered so guests find your menu,
                    book a table, or place an order in seconds.
                  </p>

                  <div className="mt-8 space-y-4">
                    {mainBenefits.map((benefit) => (
                      <div key={benefit.title} className="flex items-start gap-3">
                        <CheckCircle2 className="size-5 shrink-0 text-primary mt-0.5" />
                        <div>
                          <p className="text-sm font-bold text-foreground">
                            {benefit.title}
                          </p>
                          <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 text-xs text-muted-foreground">
                    Available across Squarespace, Wix Studio, WordPress, or
                    custom Next.js tailored to your team&apos;s workflow.
                  </p>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    >
                      <ButtonShine />
                      <span>Get a Free 7-Day Test</span>
                      <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Platform Visual Card */}
                <div className="lg:col-span-5">
                  <div className="rounded-2xl border border-border/80 bg-muted/40 p-6 sm:p-7 shadow-xs">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Supported Platforms
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-foreground">
                      The right tool for your staff
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      We never lock you into a proprietary system. We build on the
                      platform that makes updates simplest for you:
                    </p>

                    <div className="mt-6 space-y-3">
                      {platformBadges.map((platform) => {
                        const Icon = platform.icon;
                        return (
                          <div
                            key={platform.name}
                            className="flex items-center justify-between rounded-xl border border-border/70 bg-card p-3.5 shadow-xs"
                          >
                            <div className="flex items-center gap-3">
                              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon className="size-4" />
                              </div>
                              <span className="font-heading text-sm font-bold text-foreground">
                                {platform.name}
                              </span>
                            </div>
                            <span className="text-[11px] font-medium text-muted-foreground">
                              {platform.role}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-4 text-center">
                      <p className="text-[11px] text-muted-foreground">
                        Selected based on your needs, not our preference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* 3. Secondary Services in One Row */}
      <section
        aria-labelledby="secondary-services-heading"
        className="py-12 sm:py-18"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <SectionLabel>Also Available</SectionLabel>
              <h2
                id="secondary-services-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
              >
                Growth services &amp;{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  creative extras.
                </span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Complementary services to help local diners find your restaurant
                first and tell your culinary story online.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {/* Card 1: Local SEO */}
            <FadeIn delay={0.1}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin className="size-5" />
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    Local SEO &amp; Google Profile
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Ensure nearby diners searching for dinner, lunch, or coffee in
                    your neighborhood find your restaurant first on Google Maps
                    and local search results.
                  </p>

                  <div className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>Google Business Profile optimization &amp; categories</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>Menu schema &amp; local dining structured data</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>Consistent address, phone, and hours citations</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-2 text-xs font-medium text-primary">
                  Available alongside website projects
                </div>
              </div>
            </FadeIn>

            {/* Card 2: Branding & Video */}
            <FadeIn delay={0.2}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
                <div>
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Palette className="size-5" />
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
                    Branding, Graphics &amp; Video
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Cohesive visual assets to match your new website. From digital
                    menu typography and social graphics to short ambiance video
                    clips showcasing your kitchen and food.
                  </p>

                  <div className="mt-6 space-y-2 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>Digital menu formatting &amp; custom typography</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>Social media launch banners &amp; promo assets</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-primary" />
                      <span>Short-form dining room and kitchen video clips</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-2 text-xs font-medium text-primary">
                  Available as add-on creative support
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 4. How We Start Section */}
      <section
        aria-labelledby="how-we-start-heading"
        className="py-12 sm:py-18 bg-muted/10"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <SectionLabel>Getting Started</SectionLabel>
              <h2
                id="how-we-start-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
              >
                A simple, zero-risk{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  starting point.
                </span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                No long sales calls, no commitments, and no upfront cost. Here is
                how we begin:
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {startSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-primary">
                        STEP {step.step}
                      </span>
                      <span className="size-2 rounded-full bg-primary/40" />
                    </div>

                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-3">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="size-3.5 text-emerald-500" />
                      <span>Zero obligation</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Final CTA Box */}
      <CtaSection
        heading={
          <>
            Not sure where to{" "}
            <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
              start?
            </span>
          </>
        }
        subheading="Send us your restaurant's website for an honest, plain-English assessment. We'll tell you what we would fix first with zero pitch and zero pressure."
        buttonText="Get a Free Assessment"
      />
    </div>
  );
}
