import type { ProblemPoint, TestStep, WhyPoint, FaqItem } from "@/types";

export const heroData = {
  heading: "Websites That Fill Tables.",
  subheading:
    "We design and redesign restaurant and cafe websites so guests can find your menu, book a table and order in a few taps.",
  primaryCta: {
    label: "Get a free 7-day test",
    href: "/contact",
  },
  secondaryCta: {
    label: "See our work",
    href: "#work",
  },
  platformLine: "Squarespace · Wix · WordPress · Custom Next.js",
  proofLine: "18+ websites built.",
};

export const problemData = {
  heading: "Great food. Great reviews. A website that hides both.",
  points: [
    {
      title: "Hard-to-find menus & hours",
      description:
        "Guests cannot quickly find the menu and hours when deciding where to eat.",
      icon: "Clock",
    },
    {
      title: "Overlooked action buttons",
      description:
        "The order, reserve and call buttons are easy to miss, costing you direct business.",
      icon: "MousePointerClick",
    },
    {
      title: "Awkward on mobile phones",
      description:
        "The site is slow or awkward on a phone, where most restaurant visitors are looking.",
      icon: "Smartphone",
    },
  ] as ProblemPoint[],
};

export const servicesData = {
  heading: "What we do",
  services: [
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
  ],
};

export const howItWorksData = {
  heading: "Try it before you commit",
  subheading:
    "A risk-free way to see how a conversion-focused update impacts your direct restaurant guests.",
  steps: [
    {
      step: 1,
      title: "Send us your website",
      description:
        "Send us your website. We review it and tell you honestly if we see real problems worth fixing.",
    },
    {
      step: 2,
      title: "We make a focused update",
      description:
        "We make a small, focused update, such as your homepage hero, order button or mobile menu.",
    },
    {
      step: 3,
      title: "We track for 7 days",
      description:
        "We track one agreed number for 7 days, such as order clicks, call taps or reservations.",
    },
    {
      step: 4,
      title: "Decide with real data",
      description:
        "If it helps, you can continue with a full redesign. If not, you owe us nothing.",
    },
  ] as TestStep[],
};

export const whyUsData = {
  heading: "Why restaurants choose us",
  points: [
    {
      title: "Restaurants and cafes only",
      description:
        "Restaurants and cafes only, so we know what guests look for when they're hungry and ready to book.",
      icon: "Utensils",
    },
    {
      title: "Actions guests see first",
      description:
        "Every layout puts order, reserve and call actions where guests see them first.",
      icon: "CheckCircle2",
    },
    {
      title: "Mobile-first and fast",
      description:
        "Mobile-first and fast, ensuring zero friction for guests browsing on the go.",
      icon: "Zap",
    },
    {
      title: "Simple, honest process",
      description:
        "A simple, honest process with no lock-in. Clear communication from day one.",
      icon: "ShieldCheck",
    },
  ] as WhyPoint[],
};

export const faqData = {
  heading: "Frequently Asked Questions",
  subheading: "Everything you need to know about our work and the free 7-day test.",
  items: [
    {
      question: "Which platforms do you work on?",
      answer:
        "Squarespace, Wix, WordPress and custom Next.js.",
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
      answer:
        "One agreed number, such as order clicks, call taps or reservations.",
    },
    {
      question: "Do you guarantee results?",
      answer:
        "No. We measure one agreed number and show you the data so you can decide.",
    },
  ] as FaqItem[],
};

export const finalCtaData = {
  heading: "Send us your restaurant's website.",
  subheading: "We will tell you honestly what we would fix first.",
  buttonText: "Get a free 7-day test",
  buttonHref: "/contact",
};
