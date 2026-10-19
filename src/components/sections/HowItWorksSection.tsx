import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { howItWorksData } from "@/data/homepage";

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="dot-grid-bg border-y border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
              Risk-Free Evaluation
            </span>
            <h2
              id="how-it-works-heading"
              className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {howItWorksData.heading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {howItWorksData.subheading}
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorksData.steps.map((step, index) => (
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
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <span>Claim your free 7-day test</span>
            <ArrowRight className="size-4" />
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
