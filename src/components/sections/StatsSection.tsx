import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { StatCounter } from "@/components/ui/StatCounter";
import { cn } from "@/lib/utils";

/**
 * Single-use stats content directly inside the section component.
 */
const stats = [
  {
    value: 24,
    suffix: "",
    label: "Websites built",
  },
  {
    value: 4,
    suffix: "",
    label: "Platforms we build on",
  },
  {
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    value: 24,
    suffix: "h",
    label: "Reply time",
  },
];

/**
 * Glass-like stats panel in the style of devniq.com.
 * Server Component with server-rendered numbers and text.
 * Only the count-up animation leaf is client-side.
 */
export function StatsSection() {
  return (
    <section aria-label="Key statistics" className="py-15 sm:py-15 lg:py-15">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/75 p-5 shadow-lg shadow-primary/5 backdrop-blur-md dark:border-border/60 dark:bg-card/50 sm:p-5 lg:p-6">
            {/* Ambient soft glow on left (brand blue) */}
            <div
              className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[var(--brand-from)]/25 blur-3xl"
              aria-hidden="true"
            />
            {/* Ambient soft glow on right (brand purple) */}
            <div
              className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 h-56 w-56 rounded-full bg-[var(--brand-to)]/25 blur-3xl"
              aria-hidden="true"
            />
            {/* Soft ambient gradient wash across panel edges 
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,_color-mix(in_srgb,var(--brand-from)_10%,transparent)_0%,transparent_50%),radial-gradient(ellipse_at_right,_color-mix(in_srgb,var(--brand-to)_10%,transparent)_0%,transparent_50%)]"
              aria-hidden="true"
            />*/}

            {/* 4 Stats Grid: 2x2 on mobile, 4 in one row on desktop */}
            <div className="relative z-10 grid grid-cols-2 divide-y divide-border/50 sm:divide-y-0 lg:grid-cols-4 lg:divide-x lg:divide-y-0 lg:divide-border/60">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "flex flex-col items-center justify-center p-4 text-center sm:p-6",
                    index % 2 === 0 ? "border-r border-border/50 lg:border-r-0" : "",
                  )}
                >
                  <div className="font-heading text-4xl font-extrabold tracking-tight leading-normal pb-1 sm:text-4xl sm:leading-normal sm:pb-2 lg:text-5xl lg:leading-normal bg-gradient-to-r from-[#25CCEF]/80 to-[var(--brand-to)] bg-clip-text text-transparent">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
