"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

interface TestimonialsSliderProps {
  testimonials: TestimonialItem[];
}

export function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const gap = 24; // 24px gap between cards

  // Dynamically measure container width on mount and resize
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleResize = () => {
      setContainerWidth(container.offsetWidth);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Determine number of visible cards based on container width
  let visibleCards = 1;
  if (containerWidth >= 1024) {
    visibleCards = 3;
  } else if (containerWidth >= 640) {
    visibleCards = 2;
  }

  // Calculate card width to perfectly fill container width including gaps
  const cardWidth =
    containerWidth > 0
      ? Math.floor((containerWidth - (visibleCards - 1) * gap) / visibleCards)
      : 320;

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  // Keep index within bounds if window expands
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Autoplay with gentle 5-second interval, paused on hover/touch
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, maxIndex]);

  const totalDots = maxIndex + 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }}
      aria-label="Testimonials slider (use left and right arrows to navigate)"
    >
      {/* Outer viewport with top/bottom padding to allow hover shadows without clipping */}
      <div className="overflow-hidden py-3 -my-3 px-1 -mx-1">
        <motion.div
          className="flex items-stretch select-none cursor-grab active:cursor-grabbing"
          style={{ gap: `${gap}px` }}
          animate={{
            x: -currentIndex * (cardWidth + gap),
          }}
          transition={
            shouldReduceMotion
              ? { duration: 0.01 }
              : {
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1], // Fluid, luxury easeOutExpo curve
                }
          }
          drag="x"
          dragConstraints={{
            left: -maxIndex * (cardWidth + gap),
            right: 0,
          }}
          dragElastic={0.12}
          onDragEnd={(_, info) => {
            const swipeThreshold = 45;
            const velocityThreshold = 200;
            if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
              handleNext();
            } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
              handlePrev();
            }
          }}
        >
          {testimonials.map((item) => (
            <div
              key={item.name}
              style={{
                width: cardWidth > 0 ? `${cardWidth}px` : "100%",
              }}
              className="shrink-0 flex flex-col"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-xs transition-[border-color,box-shadow,transform] duration-300 ease-out hover:border-primary/40 hover:shadow-lg hover:shadow-primary/40">
                <div>
                  {/* 5-Star Rating Display */}
                  <div
                    className="flex items-center gap-1 text-[#22D3EE]"
                    aria-label={`${item.rating} out of 5 stars`}
                  >
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-[#22D3EE] text-[#22D3EE]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mt-4 text-sm sm:text-base leading-relaxed text-foreground/90">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="mt-6 flex items-center gap-3.5 pt-4 border-t border-border/60">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={44}
                    height={44}
                    className="size-11 shrink-0 rounded-full border border-border/80 object-cover shadow-xs"
                    draggable={false}
                  />
                  <div className="min-w-0">
                    <p className="font-heading text-sm font-bold text-foreground">
                      {item.name}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Slider Controls: Prev Button, Indicators, Next Button */}
      <div className="mt-8 flex items-center justify-between sm:justify-center sm:gap-6">
        {/* Previous Button */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="group inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground backdrop-blur-xs shadow-xs transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronLeft className="size-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
        </button>

        {/* Indicator Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalDots }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-400 ease-out rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                currentIndex === index
                  ? "w-7 h-2 bg-gradient-to-r from-[#25CCEF] to-accent shadow-xs"
                  : "size-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonial"
          className="group inline-flex size-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground backdrop-blur-xs shadow-xs transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <ChevronRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  );
}
