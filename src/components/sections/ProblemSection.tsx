import { Clock, MousePointerClick, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { problemData } from "@/data/homepage";

const iconMap = {
  Clock,
  MousePointerClick,
  Smartphone,
};

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="dot-grid-bg border-y border-border/60 bg-muted/30 py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
              The Problem
            </span>
            <h2
              id="problem-heading"
              className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              {problemData.heading}
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problemData.points.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] || Clock;
            return (
              <FadeIn key={point.title} delay={index * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-colors hover:border-primary/40">
                  <div>
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-destructive">
                    <span className="size-1.5 rounded-full bg-destructive" />
                    <span>Losing potential diners</span>
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
