"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
  RotateCcw,
} from "lucide-react";
import { ButtonShine } from "@/components/ui/ButtonShine";

const SERVICE_OPTIONS = [
  "Website Design & Redesign",
  "Local SEO",
  "Branding & Graphics",
  "Video",
  "Other",
] as const;

type ServiceType = (typeof SERVICE_OPTIONS)[number];

interface FormState {
  name: string;
  email: string;
  service: ServiceType | "";
  website: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  website?: string;
  message?: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  service: "Website Design & Redesign",
  website: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    } else if (formData.name.trim().length > 100) {
      newErrors.name = "Name cannot exceed 100 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (formData.website.trim()) {
      const urlPattern =
        /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(\/.*)?$/;
      if (!urlPattern.test(formData.website.trim())) {
        newErrors.website =
          "Please enter a valid URL (e.g. https://your-restaurant-site.com).";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please write a message.";
    } else if (formData.message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error for field on change
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!validate()) {
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          data.error || "Failed to submit your message. Please try again.",
        );
      }

      setStatus("success");
      setFormData(initialFormState);
      setErrors({});
    } catch (err: unknown) {
      setStatus("error");
      const message =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message.";
      setErrorMessage(message);
    }
  };

  return (
    <div className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8 lg:p-10 transition-colors">
      <div className="mb-6 border-b border-border/70 pb-6">
        <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Send Us a Message
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Fill out the details below and we&apos;ll get back to you within 24 hours.
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          aria-live="polite"
          className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in-95 duration-300"
        >
          <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-500 ring-8 ring-emerald-500/5">
            <CheckCircle2 className="size-8" />
          </div>

          <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
            Message Sent Successfully!
          </h3>

          <p className="mt-2.5 max-w-md text-sm text-muted-foreground sm:text-base leading-relaxed">
            Thank you for reaching out. We have received your enquiry and sent a
            confirmation to your email. Our team will review your details and
            reply within <strong>24 hours</strong>.
          </p>

          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <RotateCcw className="size-4" />
            <span>Send Another Message</span>
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          {/* Global Error Banner */}
          {status === "error" && errorMessage && (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive"
            >
              <AlertCircle className="size-5 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Unable to send message</p>
                <p className="mt-0.5 text-xs sm:text-sm text-destructive/90 leading-relaxed">
                  {errorMessage}
                </p>
                <p className="mt-1 text-xs">
                  You can also email us directly at{" "}
                  <a
                    href="mailto:devgionagency@gmail.com"
                    className="font-medium underline hover:opacity-80"
                  >
                    devgionagency@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Name <span className="text-destructive">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className={`w-full rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.name
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.name && (
              <p
                id="name-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="size-3.5" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@yourrestaurant.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className={`w-full rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.email
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.email && (
              <p
                id="email-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="size-3.5" />
                <span>{errors.email}</span>
              </p>
            )}
          </div>

          {/* Service Field */}
          <div>
            <label
              htmlFor="service"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Service <span className="text-destructive">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
                className={`w-full appearance-none rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground transition-all duration-200 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  errors.service
                    ? "border-destructive focus:border-destructive"
                    : "border-border focus:border-primary"
                }`}
              >
                {SERVICE_OPTIONS.map((service) => (
                  <option
                    key={service}
                    value={service}
                    className="bg-card text-foreground"
                  >
                    {service}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-muted-foreground">
                <svg
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
            {errors.service && (
              <p
                id="service-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="size-3.5" />
                <span>{errors.service}</span>
              </p>
            )}
          </div>

          {/* Website URL Field */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="website"
                className="text-sm font-semibold text-foreground"
              >
                Website URL
              </label>
              <span className="text-xs text-muted-foreground">Optional</span>
            </div>
            <input
              id="website"
              name="website"
              type="text"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://your-restaurant-site.com"
              aria-invalid={!!errors.website}
              aria-describedby={errors.website ? "website-error" : undefined}
              className={`w-full rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.website
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.website && (
              <p
                id="website-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="size-3.5" />
                <span>{errors.website}</span>
              </p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-semibold text-foreground"
            >
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your restaurant, what you are looking to achieve, or any specific questions you have..."
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className={`w-full resize-none rounded-xl border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-200 focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                errors.message
                  ? "border-destructive focus:border-destructive"
                  : "border-border focus:border-primary"
              }`}
            />
            {errors.message && (
              <p
                id="message-error"
                className="mt-1.5 flex items-center gap-1.5 text-xs text-destructive"
              >
                <AlertCircle className="size-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[#3D78FB] to-[#7555EE] px-7 py-3.5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.01] active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              <ButtonShine />
              {status === "submitting" ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
