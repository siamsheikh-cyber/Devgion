import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Accordion } from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";

const subheading = "Everything you need to know about our work and the free 7-day test.";

export function FaqSection() {
  return (
    <section aria-labelledby="faq-heading" className="py-12 sm:py-18">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>Clear &amp; Transparent</SectionLabel>
            <h2
              id="faq-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              Frequently Asked
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5"> Questions</span>
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
