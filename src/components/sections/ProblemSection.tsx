import { Clock, MousePointerClick, Smartphone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { ProblemPoint } from "@/types";

const iconMap = {
  Clock,
  MousePointerClick,
  Smartphone,
};

const heading = "Great food. Great reviews. A website that hides both.";

const points: ProblemPoint[] = [
  {
    title: "Hard-to-find menus & hours",
    description:
      "Guests cannot quickly find the menu and hours when deciding where to eat.",
    icon: "Clock",
  },
  {
    title: "Overlooked action buttons",
    description:
      "The order, reserve and call buttons are easy to miss, costing you direct business.",
    icon: "MousePointerClick",
  },
  {
    title: "Awkward on mobile phones",
    description:
      "The site is slow or awkward on a phone, where most restaurant visitors are looking.",
    icon: "Smartphone",
  },
];

export function ProblemSection() {
  return (
    <section
      aria-labelledby="problem-heading"
      className="py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <SectionLabel>The Problem</SectionLabel>
            <h2
              id="problem-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              {heading}
            </h2>
          </FadeIn>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, index) => {
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
