import { Utensils, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { whyUsData } from "@/data/homepage";

const iconMap = {
  Utensils,
  CheckCircle2,
  Zap,
  ShieldCheck,
};

export function WhyUsSection() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="border-y border-border/60 bg-muted/20 py-20 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
              The Devgion Advantage
            </span>
            <h2
              id="why-us-heading"
              className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {whyUsData.heading}
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyUsData.points.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] || Utensils;
            return (
              <FadeIn key={point.title} delay={index * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-primary/40">
                  <div>
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>

                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {point.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border/60 pt-3">
                    <span className="text-xs font-medium text-primary">
                      Built for conversions
                    </span>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
