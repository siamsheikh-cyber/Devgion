"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Lock, RefreshCw } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export interface BrowserFrameProps {
  url?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  priority?: boolean;
  aspectRatio?: "16/10" | "16/9" | "4/3";
  className?: string;
}

/**
 * Premium macOS-style browser window mockup frame.
 * Displays an image file inside the device chrome with stable aspect ratio to strictly prevent Cumulative Layout Shift (CLS).
 *
 * IMAGE DROP SPEC:
 * Directory: /public/images/
 * Dimensions: 1440 x 900 px (16:10 aspect ratio)
 */
export function BrowserFrame({
  url = "https://example.com",
  imageSrc,
  imageAlt = "Website preview",
  priority = false,
  aspectRatio = "16/10",
  className,
}: BrowserFrameProps) {
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card/90 shadow-2xl backdrop-blur-xs transition-all duration-300",
        "hover:border-primary/50 hover:shadow-primary/10",
        className,
      )}
    >
      {/* Top window chrome bar */}
      <div className="flex h-10 items-center justify-between border-b border-border/80 bg-muted/60 px-4 text-xs select-none">
        {/* macOS window control dots */}
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-rose-500/80 transition-opacity group-hover:opacity-100" />
          <span className="size-2.5 rounded-full bg-amber-500/80 transition-opacity group-hover:opacity-100" />
          <span className="size-2.5 rounded-full bg-emerald-500/80 transition-opacity group-hover:opacity-100" />
        </div>

        {/* Address bar pill */}
        <div className="mx-2 flex max-w-[280px] flex-1 items-center justify-center gap-1.5 rounded-md border border-border/80 bg-background/90 px-3 py-1 text-muted-foreground shadow-xs sm:max-w-[340px]">
          <Lock className="size-3 text-emerald-500" aria-hidden="true" />
          <span className="truncate font-mono text-[11px] font-medium text-foreground/80">
            {displayUrl}
          </span>
        </div>

        {/* Browser action icons */}
        <div className="flex items-center gap-2 text-muted-foreground" aria-hidden="true">
          <RefreshCw className="size-3 transition-transform duration-500 group-hover:rotate-180" />
        </div>
      </div>

      {/* Frame content with stable aspect ratio */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted/20",
          aspectRatio === "16/10" && "aspect-[16/10]",
          aspectRatio === "16/9" && "aspect-video",
          aspectRatio === "4/3" && "aspect-[4/3]",
        )}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="h-full w-full bg-muted/20" />
        )}
      </div>
    </div>
  );
}

export interface PhoneFrameProps {
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  priority?: boolean;
}

/**
 * Mobile phone mockup frame with speaker bar and touch actions.
 * Displays a mobile screenshot with stable 390x844 aspect ratio.
 *
 * IMAGE DROP SPEC:
 * Directory: /public/images/
 * Dimensions: 390 x 844 px
 */
export function PhoneFrame({
  imageSrc,
  imageAlt = "Mobile preview",
  className,
  priority = false,
}: PhoneFrameProps) {
  return (
    <div
      className={cn(
        "relative mx-auto flex w-[210px] sm:w-[230px] flex-col overflow-hidden rounded-[36px] border-4 border-foreground/20 bg-background shadow-2xl backdrop-blur-xs transition-all duration-300",
        "hover:border-primary/40 hover:shadow-primary/10",
        className,
      )}
      style={{ aspectRatio: "390 / 844" }}
    >
      {/* Top phone notch / dynamic island */}
      <div className="pointer-events-none absolute top-2.5 inset-x-0 z-30 flex justify-center" aria-hidden="true">
        <div className="h-3.5 w-16 rounded-full bg-foreground/30" />
      </div>

      {/* Screen area with stable aspect ratio */}
      <div className="relative h-full w-full overflow-hidden bg-muted/20">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 210px, 230px"
            className="object-cover object-top"
          />
        ) : (
          <div className="h-full w-full bg-muted/20" />
        )}
      </div>
    </div>
  );
}

/**
 * Composite hero mockup showing desktop browser + overlapping mobile phone
 * with gentle floating/parallax motion.
 * Image paths and alt text are loaded from projects data.
 */
export function HeroMultiDeviceFrame() {
  const shouldReduceMotion = useReducedMotion();
  const heroProject = projects.find((p) => p.slug === "restaurant-website") || projects[0];

  return (
    <div className="relative mx-auto w-full max-w-2xl lg:max-w-none">
      {/* Soft radial glow in brand colors behind mockups */}
      <div
        className="pointer-events-none absolute -top-16 -left-10 right-0 bottom-0 -z-10 bg-radial from-primary/30 via-indigo-600/15 to-transparent blur-3xl opacity-80"
        aria-hidden="true"
      />

      {/* Main desktop browser window with gentle floating motion */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              y: [0, -7, 0],
            }
        }
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full"
      >
        <BrowserFrame
          url={heroProject.liveUrl || "https://vmvcatering.com.au"}
          title={heroProject.title}
          aspectRatio="16/10"
          priority={true}
          imageSrc={heroProject.desktopImage}
          imageAlt={heroProject.desktopImageAlt}
          className="shadow-2xl"
        />
      </motion.div>

      {/* Overlapping mobile phone mockup with counter-phase floating motion */}
      <motion.div
        animate={
          shouldReduceMotion
            ? undefined
            : {
              y: [0, 8, 0],
            }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -bottom-8 -right-3 z-20 hidden w-[190px] drop-shadow-2xl sm:block md:-right-6 md:w-[210px] lg:-right-4"
        aria-hidden="true"
      >
        <PhoneFrame
          imageSrc={heroProject.mobileImage}
          imageAlt={heroProject.mobileImageAlt}
          priority={true}
        />
      </motion.div>
    </div>
  );
}
