import { Utensils, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { WhyPoint } from "@/types";

const iconMap = {
  Utensils,
  CheckCircle2,
  Zap,
  ShieldCheck,
};

const heading = "";

const points: WhyPoint[] = [
  {
    title: "Restaurants and cafes only",
    description:
      "Restaurants and cafes only, so we know what guests look for when they're hungry and ready to book.",
    icon: "Utensils",
  },
  {
    title: "Actions guests see first",
    description:
      "Every layout puts order, reserve and call actions where guests see them first.",
    icon: "CheckCircle2",
  },
  {
    title: "Mobile-first and fast",
    description:
      "Mobile-first and fast, ensuring zero friction for guests browsing on the go.",
    icon: "Zap",
  },
  {
    title: "Simple, honest process",
    description:
      "A simple, honest process with no lock-in. Clear communication from day one.",
    icon: "ShieldCheck",
  },
];

export function WhyUsSection() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="py-15 sm:py-28"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>The Devgion Advantage</SectionLabel>
            <h2
              id="why-us-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Why restaurants
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5"> choose us</span>
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => {
            const Icon = iconMap[point.icon as keyof typeof iconMap] || Utensils;
            return (
              <FadeIn key={point.title} delay={index * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
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
