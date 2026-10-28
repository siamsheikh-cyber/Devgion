import type { FaqItem } from "@/types";

/**
 * FAQ items used in two places:
 *   1. FaqSection – rendered as an accordion on the homepage
 *   2. app/page.tsx – serialised into FAQPage JSON-LD structured data
 *
 * Keep here so one edit updates both.
 */
export const faqItems: FaqItem[] = [
  {
    question: "Which platforms do you work on?",
    answer: "Squarespace, Wix, WordPress and custom Next.js.",
  },
  {
    question: "How does the free 3-day design update work?",
    answer:
      "Send us your website. We choose one page together—like your homepage—and give it a focused design update. After 3 days, we share what we changed and why over WhatsApp or email. If you love the new look, we can continue with the full project. If not, you owe us nothing.",
  },
  {
    question: "Do I owe anything after the 3 days?",
    answer: "No. If you decide not to continue, you owe us nothing.",
  },
  {
    question: "Which page do you update?",
    answer:
      "We update one page of your site—typically the homepage, since that is where most guests decide whether to view the menu, book a table, or order.",
  },
  {
    question: "How do you share what you changed?",
    answer:
      "After 3 days, we send you a clear walkthrough over WhatsApp or email explaining each change and the thinking behind it. You review everything on your own time with zero pressure.",
  },
];
