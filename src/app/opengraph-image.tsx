import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Default Open Graph image generated at build time via Next.js ImageResponse.
 * Individual pages can override this by exporting their own opengraph-image.tsx.
 *
 * TODO: Replace the placeholder design with the real brand colors and logo.
 */
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0d0f17 0%, #1a1d2e 100%)",
          fontFamily: "sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo / brand mark */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "800",
            color: "#ffffff",
            letterSpacing: "-2px",
            display: "flex",
          }}
        >
          Devgion
          <span style={{ color: "#818cf8" }}>.</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            marginTop: "20px",
            fontSize: "28px",
            color: "#a1a9c4",
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {siteConfig.tagline}
        </div>

        {/* Sub-description */}
        <div
          style={{
            marginTop: "16px",
            fontSize: "18px",
            color: "#6b7595",
            textAlign: "center",
            maxWidth: "700px",
          }}
        >
          Website design &amp; SEO for restaurants and cafes
        </div>

        {/* Bottom accent line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "4px",
            background: "linear-gradient(90deg, #6366f1, #818cf8)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
