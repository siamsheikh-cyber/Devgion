import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

const heading = "Frequently Asked Questions";
const subheading = "Everything you need to know about our work and the free 7-day test.";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="py-15 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>Clear &amp; Transparent</SectionLabel>
            <h2
              id="faq-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {heading}
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              {subheading}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="mx-auto mt-12 max-w-3xl">
          <Accordion items={faqItems} />
        </FadeIn>
      </Container>
    </section>
  );
}
