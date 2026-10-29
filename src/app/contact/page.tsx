import type { Metadata } from "next";
import { CalendarClock } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/contact/ContactForm";
import { CalendlyEmbed } from "@/components/contact/CalendlyEmbed";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact & Booking",
  description:
    "Get in touch with Devgion or book a free 30-minute intro call. Claim your free 3-day restaurant website design update with zero obligation.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col py-8 sm:py-12">
      {/* Page Header */}
      <section aria-labelledby="contact-heading" className="pt-6 pb-10 sm:pt-10 sm:pb-14">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel>Contact &amp; Booking</SectionLabel>

            <h1
              id="contact-heading"
              className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Let&apos;s build your{" "}
              <span className="box-decoration-clone bg-gradient-to-r from-[#25CCEF] to-accent bg-clip-text text-transparent pb-0.5">
                restaurant&apos;s growth.
              </span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Book a free 30-minute intro call or send us a message below to request your free
              3-day design update. We will review your current site and respond within 24 hours.
            </p>
          </div>

          {/* Two-column on desktop (left: contact info + form, right: Calendly), stacked on mobile */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 items-start">
            {/* Left Column: Contact Details card (heading, email, address in one card), then Contact Form */}
            <div className="order-1 space-y-6">
              {/* Single card containing Contact Details heading, email, and address sharing one background */}
              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-xs transition-colors">
                <h2 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                  Contact Details
                </h2>

                <div className="mt-4 space-y-4 border-t border-border/60 pt-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:devgionagency@gmail.com"
                      className="mt-0.5 inline-block font-medium text-foreground hover:text-primary transition-colors underline underline-offset-4"
                    >
                      devgionagency@gmail.com
                    </a>
                  </div>

                  <div className="border-t border-border/60 pt-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Address
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">
                      Tongi, Gazipur, Bangladesh
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <ContactForm />
            </div>

            {/* Right Column: Calendly embed */}
            <div className="order-2">
              <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm transition-colors">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <CalendarClock className="size-5" />
                  </div>
                  <div>
                    <h2 className="font-heading text-lg font-bold text-foreground sm:text-xl">
                      Book a Free Strategy Call
                    </h2>
                    <p className="text-xs text-muted-foreground">
                      Pick a time on our calendar for a 30-minute discovery chat.
                    </p>
                  </div>
                </div>

                {/* Lazy-loaded Calendly Embed with light/dark theme awareness */}
                <CalendlyEmbed />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
