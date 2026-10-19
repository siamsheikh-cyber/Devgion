"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  className?: string;
}

/**
 * Accessible WAI-ARIA accordion for FAQs.
 * Complies with accessibility guidelines:
 * - Proper aria-expanded, aria-controls, aria-labelledby
 * - Keyboard navigation (Enter, Space, Tab)
 * - Smooth height animation respecting prefers-reduced-motion
 */
export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  // Store array of open indices (first item open by default for immediate preview)
  const [openIndices, setOpenIndices] = useState<number[]>([0]);
  const shouldReduceMotion = useReducedMotion();

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className={cn("divide-y divide-border rounded-xl border border-border bg-card/60 shadow-xs", className)}>
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const headerId = `faq-header-${index}`;
        const panelId = `faq-panel-${index}`;

        return (
          <div key={item.question} className="overflow-hidden">
            <h3>
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleIndex(index)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-semibold text-foreground transition-colors",
                  "hover:bg-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset",
                  isOpen && "text-primary",
                )}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full border border-border bg-muted/60 text-muted-foreground transition-transform duration-200",
                    isOpen && "rotate-180 border-primary/30 bg-primary/10 text-primary",
                  )}
                  aria-hidden="true"
                >
                  <ChevronDown className="size-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={headerId}
                  initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { height: "auto", opacity: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.25, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
