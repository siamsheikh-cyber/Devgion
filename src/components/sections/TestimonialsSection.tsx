import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TestimonialsSlider, type TestimonialItem } from "./TestimonialsSlider";

/**
 * Placeholder testimonial reviews.
 * Kept in this component file for easy replacement with real client quotes.
 */
const testimonials: TestimonialItem[] = [
  {
    quote:
      "Guests used to struggle finding our menu and hours on mobile. After the redesign, visitors find our specials instantly and our weekend table reservations have become noticeably smoother.",
    name: "Marco R. (Placeholder)",
    role: "Italian Trattoria Owner, Brooklyn",
    avatar: "/images/testimonials/testimonial-1.webp",
    rating: 5,
  },
  {
    quote:
      "The website loads immediately and matches the cozy feel of our cafe in person. Having our takeout ordering link front and center made a big difference for our weekday morning rush.",
    name: "Sarah L. (Placeholder)",
    role: "Cafe & Bakery Founder, Austin",
    avatar: "/images/testimonials/testimonial-2.webp",
    rating: 5,
  },
  {
    quote:
      "Devgion was straightforward from day one with zero fluff. They understood the dinner rush and built a clean site that makes calling and booking effortless for both new guests and regulars.",
    name: "David K. (Placeholder)",
    role: "Bistro & Wine Bar Manager, Chicago",
    avatar: "/images/testimonials/testimonial-3.webp",
    rating: 5,
  },
  {
    quote:
      "We saw a noticeable jump in direct online takeout orders within weeks. Our customers love how clear the dietary tags and photos look on their phones.",
    name: "Elena M. (Placeholder)",
    role: "Artisan Pizzeria Owner, Portland",
    avatar: "/images/testimonials/testimonial-4.webp",
    rating: 5,
  },
  {
    quote:
      "Booking private dining and patio events used to take dozens of back-and-forth emails. Now guests submit all their details through the new form in under a minute.",
    name: "Carlos T. (Placeholder)",
    role: "Tapas & Cocktail Lounge, Miami",
    avatar: "/images/testimonials/testimonial-5.webp",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-15 sm:py-28"
    >
      <Container>
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <SectionLabel>Client Feedback</SectionLabel>
            <h2
              id="testimonials-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              What Restaurant Owners{" "}
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                Say About Us
              </span>
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Real feedback from dining spots we&apos;ve helped modernize online.
            </p>
          </FadeIn>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-14">
          <FadeIn delay={0.12} direction="up">
            <TestimonialsSlider testimonials={testimonials} />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

