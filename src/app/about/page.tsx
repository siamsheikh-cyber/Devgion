import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Utensils,
  Globe,
  Layers,
  Laptop,
  CheckCircle2,
  FileCode2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ButtonShine } from "@/components/ui/ButtonShine";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "About — Restaurant & Cafe Web Specialists",
  description:
    "Learn about Devgion: a small remote team focused exclusively on web design, development, and SEO for restaurants and cafes worldwide. 24 sites built with an honest, no lock-in process.",
  path: "/about",
});

const steps = [
  {
    step: "01",
    title: "We listen first",
    description:
      "We look at your situation, your site if you have one, and what you are trying to achieve. No assumptions, no templates.",
  },
  {
    step: "02",
    title: "We tell you the truth",
    description:
      "We say plainly what we think would help and what would not. If we are not the right fit, we will tell you that too.",
  },
  {
    step: "03",
    title: "We agree before we start",
    description:
      "Scope, price and timeline are agreed upfront. Nothing starts until you are comfortable with the plan.",
  },
  {
    step: "04",
    title: "We deliver and stay honest",
    description:
      "We build, launch and check in. If something is not right, we fix it. No chasing, no excuses.",
  },
];

const platforms = [
  {
    name: "Squarespace",
    badge: "Owner-Friendly",
    description:
      "Ideal for restaurants that want simple daily menu updates, clean boutique aesthetics, and built-in event calendar management.",
    icon: Laptop,
  },
  {
    name: "Wix Studio",
    badge: "Flexible & Visual",
    description:
      "Great for vibrant cafe layouts, integrated table bookings, and visual promotional banners that staff can edit on the fly.",
    icon: Layers,
  },
  {
    name: "WordPress",
    badge: "Deep Customization",
    description:
      "Perfect for established venues needing multi-location menus, custom booking integrations, and complete database ownership.",
    icon: Globe,
  },
  {
    name: "Custom Next.js",
    badge: "Maximum Speed",
    description:
      "Engineered for high-volume dining brands that require near-instant mobile load times, bespoke delivery flows, and custom interactive features.",
    icon: FileCode2,
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <section
        aria-labelledby="about-hero-heading"
        className="pt-12 pb-16 sm:pt-16 sm:pb-20"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <SectionLabel>About Devgion</SectionLabel>

              <h1
                id="about-hero-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
              >
                Websites built around how hungry guests{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  actually decide.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
                Devgion is a small, specialized team working across design,
                development, SEO, branding, and video. We focus on one single
                niche: helping independent restaurants and cafes worldwide fill
                tables and make ordering effortless.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  <ButtonShine />
                  <span>Get in Touch</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/work"
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-card/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-xs transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span>See Our Work</span>
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Key Quick Facts Bar */}
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border/60 pt-8 sm:grid-cols-3">
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    24
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Hospitality sites built
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    100%
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Restaurants & cafes only
                  </p>
                </div>
                <div className="col-span-2 text-center sm:col-span-1">
                  <p className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    Global
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                    Remote with owners worldwide
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 2. Our Belief */}
      <section
        aria-labelledby="belief-heading"
        className="py-12 sm:py-18 bg-muted/20"
      >
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-center">
                <SectionLabel>Our Core Belief</SectionLabel>
                <h2
                  id="belief-heading"
                  className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
                >
                  Why a &ldquo;pretty&rdquo; website is{" "}
                  <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                    never enough.
                  </span>
                </h2>
              </div>

              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Most restaurant websites look completely fine at first glance.
                  They have glossy photos, tasteful typography, and subtle
                  animations. But when a hungry guest visits on a busy Friday
                  evening from a phone while standing on the sidewalk, the
                  experience falls apart. The menu is an unreadable PDF that
                  demands pinching and zooming, the opening hours are buried
                  at the bottom of a footer, and booking a table requires four
                  different taps.
                </p>

                <p>
                  A restaurant website fails when it fights how diners make
                  decisions. Guests rarely visit to admire web design trends.
                  They visit with intent: they want to see what you serve, check
                  if you have a table available tonight, or find where to click
                  for takeout before they lose patience and switch to a
                  third-party delivery app.
                </p>

                <p>
                  We believe great restaurant web design gets out of the way.
                  When page load times are instantaneous, prices and dietary
                  labels are clear at a glance, and reservation buttons are
                  impossible to miss, guests feel confident. Everything we design
                  and build begins and ends with that straightforward truth.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 3. How We Work */}
      <section
        aria-labelledby="how-we-work-heading"
        className="py-12 sm:py-18"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <SectionLabel>How We Work</SectionLabel>
              <h2
                id="how-we-work-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                Simple,{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  honest,
                </span>{" "}
                no surprises.
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Every project starts the same way &mdash; with a straight
                conversation about what you actually need.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
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
                      <span>Transparent &amp; clear</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. Why Restaurants Only */}
      <section
        aria-labelledby="niche-heading"
        className="py-12 sm:py-18 bg-muted/10"
      >
        <Container>
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <div className="text-center">
                <SectionLabel>Deliberate Focus</SectionLabel>
                <h2
                  id="niche-heading"
                  className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
                >
                  Restaurants and cafes only.{" "}
                  <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                    By choice.
                  </span>
                </h2>
              </div>

              <div className="mt-8 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  Generalist web agencies build for an accounting firm on Monday,
                  a dental clinic on Wednesday, and a restaurant on Friday. As a
                  result, they never master the unique realities of hospitality.
                </p>
                <p>
                  They don&apos;t know what a Friday dinner rush looks like from the
                  kitchen&apos;s perspective, why third-party commission fees on
                  delivery eat away your profits, or how a slow-loading dessert
                  photo causes mobile diners to leave for a competitor down the
                  street.
                </p>
                <p>
                  Focusing solely on food and beverage is not a limitation—it is
                  our greatest advantage. We know what diners search for on
                  smartphones, what builds trust in seconds, and what turns a
                  casual visitor into a loyal regular.
                </p>
              </div>

              {/* 2 Feature Cards */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Utensils className="size-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    24 Hospitality Sites Built
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    From busy Italian trattorias and artisan bakeries to BBQ
                    smokehouse joints and craft cocktail lounges.
                  </p>
                </div>

                <div className="rounded-2xl border border-border bg-card p-6 shadow-xs">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Globe className="size-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                    Remote Worldwide Support
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    We collaborate directly with independent restaurateurs
                    across time zones, working around your kitchen schedules.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* 5. The Platforms */}
      <section
        aria-labelledby="platforms-heading"
        className="py-12 sm:py-18"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <SectionLabel>Technology &amp; Tools</SectionLabel>
              <h2
                id="platforms-heading"
                className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                The right platform for{" "}
                <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                  your kitchen.
                </span>
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                We select each platform based on your team&apos;s daily workflow and
                update habits, never our personal preference or a locked-in
                system.
              </p>
            </FadeIn>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <FadeIn key={platform.name} delay={index * 0.1}>
                  <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="size-5" />
                        </div>
                        <span className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                          {platform.badge}
                        </span>
                      </div>

                      <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                        {platform.name}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border/60 pt-3 text-xs text-muted-foreground">
                      <span>Tailored to your needs</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. Final CTA */}
      <section
        aria-labelledby="about-cta-heading"
        className="py-12 sm:py-18"
      >
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-card to-card px-6 py-16 sm:px-12 sm:py-20 md:px-16 text-center shadow-xl">
              {/* Ambient background blur */}
              <div
                className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
                aria-hidden="true"
              />

              <div className="mx-auto max-w-2xl">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  <Sparkles className="size-3.5" />
                  <span>Honest Feedback · No Lock-in</span>
                </span>

                <h2
                  id="about-cta-heading"
                  className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
                >
                  Let&apos;s talk about your restaurant&apos;s{" "}
                  <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                    website.
                  </span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Tell us what you serve, what is frustrating you about your
                  current website, and what you want to achieve. We&apos;ll give you
                  plain, honest advice with zero sales pressure.
                </p>

                <div className="mt-8 flex justify-center">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <ButtonShine />
                    <span>Get in Touch</span>
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  Squarespace · Wix · WordPress · Custom Next.js · Remote Worldwide
                </p>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  );
}
