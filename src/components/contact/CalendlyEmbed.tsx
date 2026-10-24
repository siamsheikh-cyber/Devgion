"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";

export function CalendlyEmbed() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lazy load: Only activate when container enters or is near the viewport
  useEffect(() => {
    if (!containerRef.current || isVisible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "150px", // Preload slightly before the user scrolls directly onto it
      },
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  // Determine Calendly URL parameters matching current theme
  const isDark = mounted ? resolvedTheme === "dark" : false;
  const baseUrl = "https://calendly.com/devgionagency/30min";
  // Hex colors without '#' for Calendly URL query parameters
  const bgColor = isDark ? "131620" : "ffffff";
  const textColor = isDark ? "f1f5f9" : "0f172a";
  const primaryColor = "3d78fb"; // Devgion brand blue

  const calendlyUrl = `${baseUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=${bgColor}&text_color=${textColor}&primary_color=${primaryColor}`;

  // Load Calendly script and initialize the inline widget
  useEffect(() => {
    if (!isVisible) return;

    let isSubscribed = true;

    const initWidget = () => {
      if (!isSubscribed || !calendlyHostRef.current) return;
      const Calendly = (
        window as unknown as {
          Calendly?: {
            initInlineWidget: (opts: {
              url: string;
              parentElement: HTMLElement;
            }) => void;
          };
        }
      ).Calendly;

      if (Calendly && calendlyHostRef.current) {
        calendlyHostRef.current.innerHTML = "";
        Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: calendlyHostRef.current,
        });
        setIsLoaded(true);
      }
    };

    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`,
    );

    if (
      (window as unknown as { Calendly?: unknown }).Calendly &&
      calendlyHostRef.current
    ) {
      initWidget();
    } else if (existingScript) {
      existingScript.addEventListener("load", initWidget);
    } else {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }

    return () => {
      isSubscribed = false;
    };
  }, [isVisible, calendlyUrl]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[620px] w-full overflow-hidden rounded-2xl border border-border bg-card shadow-xs transition-colors"
    >
      {/* Fallback / Loading Skeleton state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <Calendar className="size-6" />
          </div>
          <h4 className="mt-4 font-heading text-base font-bold text-foreground">
            30-Minute Intro &amp; Discovery Call
          </h4>
          <p className="mt-1.5 max-w-xs text-xs text-muted-foreground">
            {isVisible
              ? "Loading booking calendar..."
              : "Calendar will load automatically when visible."}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <Loader2 className="size-4 animate-spin text-primary" />
            <span className="text-xs text-muted-foreground">Connecting...</span>
          </div>
          <a
            href="https://calendly.com/devgionagency/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <span>Open Calendly in a new tab</span>
            <ExternalLink className="size-3.5" />
          </a>
        </div>
      )}

      {/* Calendly Inline Widget Container */}
      <div
        ref={calendlyHostRef}
        className="w-full"
        style={{ minWidth: "320px", height: "660px" }}
      />
    </div>
  );
}
