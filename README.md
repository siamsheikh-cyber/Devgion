# Devgion

> **Websites That Fill Tables** — a web studio that designs and redesigns websites for restaurants and cafes.

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and Motion.

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### 1. Clone and install
```bash
git clone <repo-url>
cd devgion
npm install
```

### 2. Set environment variables
```bash
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_SITE_URL to your domain
```

### 3. Run the dev server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start the dev server with Turbopack |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run format` | Format all files with Prettier |

---

## Folder Structure

```
src/
  app/
    layout.tsx              Root layout (fonts, theme, metadata, JSON-LD)
    page.tsx                Homepage (placeholder → build next)
    services/page.tsx       Services page
    work/page.tsx           Portfolio page
    about/page.tsx          About page
    contact/page.tsx        Contact / free design update CTA page
    not-found.tsx           Custom 404
    error.tsx               Global error boundary
    loading.tsx             Global loading UI
    sitemap.ts              /sitemap.xml generator
    robots.ts               /robots.txt generator
    manifest.ts             Web app manifest
    opengraph-image.tsx     Default OG image (1200×630)
  components/
    layout/                 Header, Footer, Container, SkipLink, ThemeToggle
    sections/               Homepage sections (empty — build here next)
    seo/                    JsonLd component
    ui/                     Button, Badge
  config/
    site.ts                 ← Edit site name, URL, nav, social, contact here
  data/
    services.ts             ← Edit service list here
    projects.ts             ← Edit portfolio projects here
  lib/
    metadata.ts             buildMetadata() helper
    utils.ts                cn() and small utilities
  types/
    index.ts                Shared TypeScript types
public/
  images/                   Add project images here
```

---

## Editing Content

| What to change | Where |
|----------------|-------|
| Site name, URL, nav links | [`src/config/site.ts`](src/config/site.ts) |
| Services list | [`src/data/services.ts`](src/data/services.ts) |
| Portfolio projects | [`src/data/projects.ts`](src/data/projects.ts) |
| Color palette | [`src/app/globals.css`](src/app/globals.css) — CSS variables in `:root` / `.dark` |
| Fonts | [`src/app/layout.tsx`](src/app/layout.tsx) — `next/font` imports |

---

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full production URL (e.g. `https://devgion.com`) — used for sitemap, robots, metadata |

---

## Tech Stack

| Package | Purpose |
|---------|---------|
| Next.js 16 (App Router) | Framework |
| React 19 | UI |
| TypeScript (strict) | Type safety |
| Tailwind CSS v4 | Styling |
| next-themes | Dark/light mode |
| motion | Animations (from `motion/react`) |
| clsx + tailwind-merge | Class utilities |
| lucide-react | Icons |
| zod | Validation (contact form) |
| prettier + prettier-plugin-tailwindcss | Code formatting |

---

## Decisions Pending

- [ ] **Domain** — confirm production domain for `NEXT_PUBLIC_SITE_URL`
- [ ] **Brand color** — current primary is indigo (`#6366f1`); update in `globals.css`
- [ ] **Fonts** — currently Inter (body) + Plus Jakarta Sans (headings); swap if needed
- [ ] **Social links** — add real URLs in `config/site.ts`
- [ ] **Contact email** — confirm in `config/site.ts`
- [ ] **OG image** — current placeholder; design real version once brand is finalized
- [ ] **Icons / PWA** — generate real 192×512 icons for `manifest.ts`
# Devgion
