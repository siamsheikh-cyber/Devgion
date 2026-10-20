import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonShine } from "@/components/ui/ButtonShine";
import type { TestStep } from "@/types";

const heading = "Try it before you commit";
const subheading =
  "A risk-free way to see how a conversion-focused update impacts your direct restaurant guests.";

const steps: TestStep[] = [
  {
    step: 1,
    title: "Send us your website",
    description:
      "Send us your website. We review it and tell you honestly if we see real problems worth fixing.",
  },
  {
    step: 2,
    title: "We make a focused update",
    description:
      "We make a small, focused update, such as your homepage hero, order button or mobile menu.",
  },
  {
    step: 3,
    title: "We track for 7 days",
    description:
      "We track one agreed number for 7 days, such as order clicks, call taps or reservations.",
  },
  {
    step: 4,
    title: "Decide with real data",
    description:
      "If it helps, you can continue with a full redesign. If not, you owe us nothing.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="py-15 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>Risk-Free Evaluation</SectionLabel>
            <h2
              id="how-it-works-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {subheading}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <FadeIn key={step.step} delay={index * 0.1}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-primary/40">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-primary">
                      STEP 0{step.step}
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
                    <span>No upfront commitment</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Action prompt */}
        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-sm bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <ButtonShine />
            <span>Get a Free Audit</span>
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
