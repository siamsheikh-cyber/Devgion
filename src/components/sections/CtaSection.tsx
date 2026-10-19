import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { finalCtaData } from "@/data/homepage";

export function CtaSection() {
  return (
    <section aria-labelledby="cta-heading" className="dot-grid-bg py-20 sm:py-28">
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
                <span>Zero Risk · No Lock-in</span>
              </span>

              <h2
                id="cta-heading"
                className="mt-6 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
              >
                {finalCtaData.heading}
              </h2>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {finalCtaData.subheading}
              </p>

              <div className="mt-8 flex justify-center">
                <Link
                  href={finalCtaData.buttonHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-lg transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/25 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span>{finalCtaData.buttonText}</span>
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                Squarespace · Wix · WordPress · Custom Next.js
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
