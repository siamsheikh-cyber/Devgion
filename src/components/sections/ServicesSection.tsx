import { Layout, Search, Film, CheckCircle } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const iconMap = {
  Layout,
  Search,
  Film,
};

interface ServiceCard {
  category: string;
  title: string;
  badge: string;
  description: string;
  features: string[];
  icon: keyof typeof iconMap;
}

const heading = "";

const serviceCards: ServiceCard[] = [
  {
    category: "Main",
    title: "Website Design & Redesign",
    badge: "Core Service",
    description:
      "Website design and redesign, on Squarespace, Wix, WordPress or custom Next.js, built around getting guests to order, book and call.",
    features: [
      "Squarespace, Wix, WordPress or custom Next.js",
      "Conversion-focused layouts for orders & bookings",
      "Lightning-fast mobile performance",
      "Streamlined menu & online reservation paths",
    ],
    icon: "Layout",
  },
  {
    category: "Growth",
    title: "Local SEO",
    badge: "Visibility",
    description:
      "Local SEO, including Google Business Profile and on-page basics to help hungry locals find your tables first.",
    features: [
      "Google Business Profile optimization",
      "On-page restaurant SEO & structured data",
      "Local keyword & neighbourhood targeting",
      "Menu indexing & Google Maps alignment",
    ],
    icon: "Search",
  },
  {
    category: "Extras",
    title: "Branding, Graphics & Video",
    badge: "Add-ons",
    description:
      "Branding and graphics, video production to give your restaurant a polished, cohesive visual presence.",
    features: [
      "Visual identity & brand styling",
      "Digital menu graphics & promotional assets",
      "Hero food & atmosphere video integration",
      "Print & social media collateral",
    ],
    icon: "Film",
  },
];

export function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="py-12 sm:py-18">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
            <h2
              id="services-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              What
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5"> we do</span>
            </h2>
          </FadeIn>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {serviceCards.map((service, index) => {
            const Icon = iconMap[service.icon] || Layout;
            const isMain = service.category === "Main";

            return (
              <FadeIn key={service.title} delay={index * 0.12}>
                <div
                  className={cn(
                    "relative flex h-full flex-col justify-between rounded-2xl border p-7 shadow-xs transition-all duration-300",
                    isMain
                      ? "border-primary/50 bg-gradient-to-b from-primary/5 via-card to-card shadow-lg shadow-primary/5"
                      : "border-border bg-card hover:border-primary/30",
                  )}
                >
                  <div>
                    {/* Header: badge + icon */}
                    <div className="flex items-center justify-between">
                      <span
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                          isMain
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground",
                        )}
                      >
                        {service.badge}
                      </span>
                      <div
                        className={cn(
                          "flex size-10 items-center justify-center rounded-xl",
                          isMain
                            ? "bg-primary/15 text-primary"
                            : "bg-muted text-muted-foreground",
                        )}
                      >
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="mt-6 space-y-2.5 border-t border-border/60 pt-6" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-foreground/90 sm:text-sm">
                          <CheckCircle className="size-4 shrink-0 text-primary mt-0.5" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-border/60 pt-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      Category: <strong className="text-foreground">{service.category}</strong>
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
