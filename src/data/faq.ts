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
    question: "How does the free 7-day test work?",
    answer:
      "Send us your website. We review it honestly, implement a small, focused update (such as your homepage hero, order button or mobile menu), and track one agreed number for 7 days (such as order clicks, call taps or reservations). If it helps, you can continue with a full redesign. If not, you owe us nothing.",
  },
  {
    question: "Do I owe anything after the test?",
    answer: "No.",
  },
  {
    question: "What do you measure?",
    answer: "One agreed number, such as order clicks, call taps or reservations.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "No. We measure one agreed number and show you the data so you can decide.",
  },
];
