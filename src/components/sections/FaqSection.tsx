import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Accordion } from "@/components/ui/Accordion";
import { faqData } from "@/data/homepage";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="dot-grid-bg py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary">
              Clear & Transparent
            </span>
            <h2
              id="faq-heading"
              className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {faqData.heading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {faqData.subheading}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqData.items} />
        </FadeIn>
      </Container>
    </section>
  );
}
