# Plexo — Retail Operations, Perfected

Plexo is a SaaS platform for retail chains to manage tasks, audits, training, campaigns, and compliance across every store from a single dashboard. This repository contains the **marketing website** — a static Next.js site with a scrollable landing page, dedicated feature pages, lead generation tools, and legal pages.

**Live site:** [plexoapp.com](https://plexoapp.com)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Internationalization (i18n)](#internationalization-i18n)
- [Brand Identity](#brand-identity)
- [Page Sections](#page-sections)
- [Feature Pages](#feature-pages)
- [Lead Generation](#lead-generation)
- [Legal Pages](#legal-pages)
- [Components Reference](#components-reference)
- [Pricing Model](#pricing-model)
- [SEO](#seo)
- [Analytics](#analytics)
- [Animations](#animations)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Plexo is a productized version of an internal retail operations platform, built to serve any retail chain. The marketing site is designed to:

- Communicate the product value proposition clearly
- Showcase the 9 core modules (tasks, audits, campaigns, training, etc.)
- Provide dedicated feature pages with mockups and detailed capabilities
- Convert visitors to sales conversations via a demo-driven model
- Capture leads through a contact form and ROI calculator
- Serve English and Spanish audiences with full localization

This is a **standalone repository**, independent from the Plexo application codebase. Contact forms submit to [Formspree](https://formspree.io) — no custom backend required.

---

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Framework   | Next.js 14 (App Router)             |
| Language    | TypeScript                          |
| Styling     | Tailwind CSS 3.4                    |
| i18n        | next-intl 4.x                       |
| Font        | Inter (Google Fonts CDN)            |
| Forms       | Formspree                           |
| Analytics   | Vercel Analytics                    |
| Deployment  | Vercel                              |
| Backend     | None (static site)                  |

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install dependencies

```bash
cd ~/plexo-marketing
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Run the production build locally

```bash
npm run build && npm run start
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
plexo-marketing/
├── public/
│   ├── logo.svg                         # Plexo wordmark + geometric icon
│   ├── favicon.svg                      # Favicon (3 Plexo nodes)
│   └── robots.txt                       # Search engine crawler directives
├── messages/
│   ├── en.json                          # English translations (~745 keys)
│   └── es.json                          # Spanish translations (~745 keys)
├── src/
│   ├── i18n/
│   │   ├── routing.ts                   # Locale config (en/es, prefix: as-needed)
│   │   ├── request.ts                   # Request-scoped locale + message loading
│   │   └── navigation.ts               # Locale-aware Link, useRouter, usePathname
│   ├── lib/
│   │   └── seo.ts                       # hreflang + canonical URL helper
│   ├── middleware.ts                     # next-intl locale detection and routing
│   └── app/
│       ├── globals.css                  # Tailwind directives, Inter font import, base styles
│       ├── layout.tsx                   # Bare root layout (passes children to [locale])
│       ├── not-found.tsx                # Global 404 fallback
│       ├── sitemap.ts                   # Bilingual XML sitemap (30 URLs, 15 pages × 2 locales)
│       ├── opengraph-image.tsx          # Auto-generated OG image (1200x630)
│       ├── components/
│       │   ├── Header.tsx               # Sticky nav with mobile menu and language switcher
│       │   ├── Hero.tsx                 # Hero headline, CTAs, dashboard mockup
│       │   ├── Problem.tsx              # Pain points section (dark theme)
│       │   ├── Features.tsx             # 3x3 grid of 9 core modules (links to feature pages)
│       │   ├── HowItWorks.tsx           # 3-step onboarding flow
│       │   ├── MobileShowcase.tsx       # Mobile app showcase with phone mockup
│       │   ├── Pricing.tsx              # Demo-driven pricing section
│       │   ├── FAQ.tsx                  # 7-item expandable accordion
│       │   ├── CTABanner.tsx            # Full-width CTA with gradient background
│       │   ├── Footer.tsx               # Footer with link columns and contact email
│       │   ├── FeaturePageLayout.tsx     # Shared layout for all feature detail pages
│       │   ├── LanguageSwitcher.tsx      # EN/ES toggle button
│       │   └── AnimateIn.tsx            # Scroll animation wrapper (Intersection Observer)
│       └── [locale]/
│           ├── layout.tsx               # Locale layout: <html lang>, metadata, JSON-LD, provider
│           ├── page.tsx                 # Landing page — composes all section components
│           ├── not-found.tsx            # Localized 404 page
│           ├── demo/
│           │   ├── layout.tsx           # Metadata wrapper (demo is a client component)
│           │   └── page.tsx             # Contact / demo booking form (Formspree)
│           ├── roi-calculator/
│           │   ├── layout.tsx           # Metadata wrapper (calculator is a client component)
│           │   └── page.tsx             # Interactive ROI calculator with email capture
│           ├── features/
│           │   ├── tasks/page.tsx
│           │   ├── checklists/page.tsx
│           │   ├── audits/page.tsx
│           │   ├── campaigns/page.tsx
│           │   ├── training/page.tsx
│           │   ├── corrective-actions/page.tsx
│           │   ├── gamification/page.tsx
│           │   ├── visual-merchandising/page.tsx
│           │   └── issue-tracking/page.tsx
│           ├── privacy/page.tsx         # Privacy Policy
│           ├── terms/page.tsx           # Terms of Service
│           └── cookies/page.tsx         # Cookie Policy
├── tailwind.config.ts                   # Brand color tokens and font families
├── next.config.mjs                      # Next.js config wrapped with createNextIntlPlugin
├── postcss.config.mjs                   # PostCSS config for Tailwind
├── tsconfig.json                        # TypeScript configuration
└── package.json                         # Dependencies and scripts
```

---

## Internationalization (i18n)

The site supports English and Spanish using [next-intl](https://next-intl.dev/).

### URL Structure

| Locale  | Example URL                                |
| ------- | ------------------------------------------ |
| English | `plexoapp.com/features/tasks` (no prefix)  |
| Spanish | `plexoapp.com/es/features/tasks`           |

English is the default locale — no `/en/` prefix. Spanish pages live under `/es/`. Visiting `/en/features/tasks` redirects to `/features/tasks`.

### Architecture

- **`src/i18n/routing.ts`** — Defines locales (`en`, `es`), default (`en`), and prefix mode (`as-needed`)
- **`src/i18n/request.ts`** — Loads the correct `messages/{locale}.json` per request
- **`src/i18n/navigation.ts`** — Exports locale-aware `Link`, `useRouter`, `usePathname`, `redirect`
- **`src/middleware.ts`** — Detects locale from URL and routes accordingly
- **`next.config.mjs`** — Wrapped with `createNextIntlPlugin`

### Translation Files

All text lives in `messages/en.json` and `messages/es.json` (~745 keys each), organized by component namespace:

```
{
  "Header": { "features": "Features", ... },
  "Hero": { "headline": "Retail Operations, Perfected.", ... },
  "FeaturesTasksPage": { "metaTitle": "...", "cap1Title": "...", ... },
  "ROICalculatorPage": { "badge": "ROI Calculator", ... },
  "Metadata": { "homeTitle": "...", "jsonLdDescription": "...", ... },
  ...
}
```

### Using Translations

| Context               | API                                                      |
| --------------------- | -------------------------------------------------------- |
| Server components     | `const t = await getTranslations("Namespace")`           |
| Client components     | `const t = useTranslations("Namespace")`                 |
| Shared components     | Use `useTranslations` (works in both contexts)           |
| Metadata              | `generateMetadata()` with `getTranslations`              |
| Links                 | `import { Link } from "@/i18n/navigation"`               |
| Current locale        | `useLocale()` from `next-intl`                           |

Client component pages (demo, ROI calculator) use a `layout.tsx` wrapper in their directory to handle server-side metadata via `generateMetadata()`.

Every server page/layout calls `setRequestLocale(locale)` for static generation.

### Language Switcher

`LanguageSwitcher.tsx` renders a button showing "ES" or "EN" in the Header (desktop and mobile). Clicking it calls `router.replace(pathname, { locale: nextLocale })` to switch languages while preserving the current page.

### Adding a New Locale

1. Add the locale code to `src/i18n/routing.ts` `locales` array
2. Create `messages/{locale}.json` with all keys translated
3. Run `npm run build` to verify

---

## Brand Identity

### Color Palette

| Role            | Color                                     | Hex       |
| --------------- | ----------------------------------------- | --------- |
| Primary         | Deep Indigo                               | `#4F46E5` |
| Primary Hover   | Indigo 700                                | `#4338CA` |
| Accent          | Electric Violet                           | `#7C3AED` |
| CTA / Success   | Emerald Green                             | `#10B981` |
| Background      | White                                     | `#FFFFFF` |
| Alt Background  | Slate 50                                  | `#F8FAFC` |
| Dark Background | Slate 900                                 | `#0F172A` |
| Body Text       | Slate 800                                 | `#1E293B` |
| Muted Text      | Slate 600                                 | `#475569` |

### Typography

- **Headings:** Inter (loaded via Google Fonts CDN) — weights 400–900
- **Body:** System sans-serif stack (`system-ui, -apple-system, sans-serif`)

### Logo & Favicon

The logo (`public/logo.svg`) is a text-based "Plexo" wordmark paired with a geometric icon of three interlocking nodes (indigo, violet, and emerald) connected by lines — representing connected operations across stores. The favicon (`public/favicon.svg`) uses the same three nodes without the wordmark.

### Tone of Voice

Professional, confident, no-nonsense. Tagline: **"Your stores, perfectly in sync."**

---

## Page Sections

The landing page (`/`) is a single-page scrollable layout with scroll-triggered animations on each section:

### 1. Header (sticky)
Persistent top navigation with the Plexo logo, anchor links (Features, How It Works, Pricing, FAQ), a language switcher (EN/ES), and a "Book a Demo" CTA button linking to `/demo`. Collapses to a hamburger menu on mobile with the same controls. Logo always links back to the homepage.

### 2. Hero
- **Headline:** "Retail Operations, Perfected."
- **Subheadline:** "The all-in-one platform to manage tasks, audits, training, and campaigns across every store."
- **CTAs:** "Book a Demo" (primary, links to `/demo`) + "See What's Included" (secondary, scrolls to pricing)
- **Visual:** A CSS-rendered dashboard mockup inside a laptop frame with a floating phone mockup showing notification cards.

### 3. Problem Statement
Dark-themed section (`bg-slate-900`) highlighting three pain points retail ops teams face: disconnected tools, zero visibility, and manual follow-ups. Each pain point is presented as a card with an icon, title, and description.

### 4. Features Grid
3x3 responsive grid showcasing the 9 core Plexo modules. Each card links to a dedicated feature page (`/features/{slug}`). Cards have an icon that transitions to white-on-indigo on hover, plus a "Learn more" arrow.

### 5. How It Works
Three-step horizontal flow with connector lines: (1) Set up your stores and teams, (2) Assign tasks, checklists, and campaigns, (3) Track compliance in real-time from anywhere.

### 6. Mobile App Showcase
Split layout: text on the left with a feature checklist (offline support, photo capture, push notifications), and a detailed phone mockup on the right showing a task list UI with a floating notification card.

### 7. Pricing
Demo-driven model with three value pillars (all modules included, native mobile apps, tailored to your chain), a central CTA card for "Book a Demo" / "Request Pricing" (both link to `/demo`), and a 15-item capabilities checklist.

### 8. FAQ
Seven expandable accordion items covering: onboarding time, offline support, template customization, support, pricing model, integrations, and getting started.

### 9. CTA Banner
Full-width indigo section with decorative gradient blobs and two CTAs linking to `/demo`.

### 10. Footer
Three-column layout: brand description, Product links (Features, Pricing, How It Works), and Legal links (Privacy Policy, Terms of Service, Cookie Policy). Includes a contact email link and a dynamic copyright year.

---

## Feature Pages

Each of the 9 modules has a dedicated page at `/features/{slug}` built with the shared `FeaturePageLayout` component. Each page includes:

- **Hero** — Badge label, title, subtitle, and "See It in Action" CTA (links to `/demo`)
- **Dashboard Mockup** — CSS-rendered mockup inside a browser frame showing module-specific UI
- **Key Capabilities** — 2x2 grid of 4 capabilities with icons and descriptions
- **Mobile Mockup** (optional) — Phone frame showing the module's mobile experience
- **CTA** — Bottom banner with "Book a Demo" (links to `/demo`) and "Explore All Features" links

| Module                   | Route                            |
| ------------------------ | -------------------------------- |
| Tasks & Assignments      | `/features/tasks`                |
| Checklists & SOPs        | `/features/checklists`           |
| Store Audits             | `/features/audits`               |
| Campaign Execution       | `/features/campaigns`            |
| Training & LMS           | `/features/training`             |
| Corrective Actions       | `/features/corrective-actions`   |
| Gamification             | `/features/gamification`         |
| Visual Merchandising     | `/features/visual-merchandising` |
| Issue Tracking           | `/features/issue-tracking`       |

---

## Lead Generation

### Demo Booking Form (`/demo`)

A Formspree-powered contact form for visitors to request a personalized demo. Fields:

| Field            | Type       | Required |
| ---------------- | ---------- | -------- |
| Full Name        | Text       | Yes      |
| Work Email       | Email      | Yes      |
| Company Name     | Text       | Yes      |
| Number of Stores | Select     | No       |
| Message          | Textarea   | No       |

Features:
- Client-side validation with per-field error messages
- Loading spinner during submission
- Success state with personalized thank-you message
- Error state with retry (form data preserved)
- Trust signals (data safety, 24h response, no commitment)
- Privacy policy link in footer

All "Book a Demo" and "Request Pricing" CTAs across the entire site link to this page.

### ROI Calculator (`/roi-calculator`)

An interactive calculator that estimates time and cost savings for prospective customers:

**Inputs** (sliders + number fields):
- Number of stores (1–500, default 25)
- Team members per store (1–100, default 15)
- Hours spent weekly on manual operations per store (1–40, default 10)
- Average hourly labor cost ($10–$100, default $25)

**Outputs** (displayed as result cards):
- Weekly hours saved (stores × hours × 0.6 efficiency gain)
- Monthly cost savings (weekly hours × hourly cost × 4.33)
- Annual cost savings (monthly × 12)
- Time to ROI: "Under 30 days"

Includes a live preview during input and an email capture form to send a personalized report (also via Formspree). Results page links to `/demo` as a CTA.

### Formspree Configuration

Both forms submit to Formspree endpoint `https://formspree.io/f/mvzbredr`. To change the endpoint, update the `FORMSPREE_URL` constant in:
- `src/app/[locale]/demo/page.tsx`
- `src/app/[locale]/roi-calculator/page.tsx`

---

## Legal Pages

Three legal pages are accessible from the footer, available in both locales:

| Page            | English Route | Spanish Route    |
| --------------- | ------------- | ---------------- |
| Privacy Policy  | `/privacy`    | `/es/privacy`    |
| Terms of Service| `/terms`      | `/es/terms`      |
| Cookie Policy   | `/cookies`    | `/es/cookies`    |

Each page includes Header and Footer navigation for consistent site experience.

---

## Components Reference

All components live in `src/app/components/`. Components use `useTranslations` or `getTranslations` from next-intl for all display text.

| Component              | Client? | i18n API           | Purpose                                        |
| ---------------------- | ------- | ------------------ | ---------------------------------------------- |
| `Header.tsx`           | Yes     | `useTranslations`  | Sticky nav with mobile menu + language switcher |
| `Hero.tsx`             | No      | `getTranslations`  | Hero section with CSS mockups                   |
| `Problem.tsx`          | No      | `getTranslations`  | Pain points cards                               |
| `Features.tsx`         | No      | `getTranslations`  | Module grid with links to feature pages         |
| `HowItWorks.tsx`       | No      | `getTranslations`  | 3-step onboarding flow                          |
| `MobileShowcase.tsx`   | No      | `getTranslations`  | Phone mockup showcase                           |
| `Pricing.tsx`          | No      | `getTranslations`  | Demo-driven pricing section                     |
| `FAQ.tsx`              | Yes     | `useTranslations`  | Accordion expand/collapse                       |
| `CTABanner.tsx`        | No      | `getTranslations`  | Full-width CTA banner                           |
| `Footer.tsx`           | No      | `useTranslations`  | Site footer with links and contact email        |
| `FeaturePageLayout.tsx`| No      | Props from caller  | Shared layout for feature detail pages          |
| `LanguageSwitcher.tsx` | Yes     | `useLocale`        | EN/ES toggle button                             |
| `AnimateIn.tsx`        | Yes     | None               | Scroll-triggered fade-in/slide-up animation     |

Page-level client components:
- `[locale]/demo/page.tsx` — Contact form with Formspree integration
- `[locale]/roi-calculator/page.tsx` — Interactive ROI calculator with email capture

---

## Pricing Model

Plexo uses a **demo-driven, custom pricing model**. There are no public price tiers. The pricing section showcases the platform's value and drives visitors to book a demo or request a personalized proposal.

**Rationale:** Every retail chain has different needs (store count, team size, modules required). Custom pricing allows tailored proposals and higher-value conversations.

**All plans include:**
- Tasks & Assignments
- Checklists & SOPs
- Store Audits & Inspections
- Campaign Execution
- Training & LMS
- Corrective Actions (CAPA)
- Gamification & Leaderboards
- Visual Merchandising
- Issue Tracking
- Native Mobile App (iOS & Android)
- Real-time Dashboard & Analytics
- SSO / SAML Authentication
- API Access & Integrations
- Dedicated Account Manager
- Custom Onboarding & Training

---

## SEO

The site includes a comprehensive SEO setup:

### Meta Tags
Configured in `src/app/[locale]/layout.tsx` via `generateMetadata()`:
- Localized title and description per locale
- Open Graph tags (`og:title`, `og:description`, `og:url`, `og:type`, `og:site_name`, `og:image`)
- Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- Self-referential canonical URL per locale (English pages canonicalize to `/path`, Spanish to `/es/path`)

### hreflang Tags
Every page includes `<link rel="alternate" hreflang="en/es">` via the `getAlternates()` helper in `src/lib/seo.ts`. This helper generates:
- Self-referential `canonical` based on the current locale
- `languages.en` and `languages.es` alternate links

### Open Graph Image
Auto-generated at build time via `src/app/opengraph-image.tsx` using Next.js `ImageResponse` API. Produces a 1200x630 PNG with Plexo branding, tagline, and URL.

### Sitemap
Bilingual XML sitemap generated from `src/app/sitemap.ts`. Covers 15 pages × 2 locales = 30 URLs. Each entry includes `alternates.languages` pointing to both locale versions:
- Homepage (priority 1, weekly)
- Demo page (priority 0.9, monthly)
- 9 feature pages (priority 0.8, monthly)
- ROI calculator (priority 0.7, monthly)
- 3 legal pages (priority 0.3, yearly)

Accessible at [plexoapp.com/sitemap.xml](https://plexoapp.com/sitemap.xml).

### robots.txt
Static file at `public/robots.txt`. Allows all crawlers and points to the sitemap.

### Structured Data (JSON-LD)
Embedded in `src/app/[locale]/layout.tsx` as a `SoftwareApplication` schema with localized content:
- Application name, URL, category, and translated description
- Publisher organization with logo
- Translated offer details (custom pricing)

### Heading Structure
- Single `<h1>` per page
- Proper `<h2>` hierarchy for sections
- All images have `alt` text
- Semantic HTML throughout

---

## Analytics

The site uses **Vercel Analytics** (`@vercel/analytics`) for privacy-friendly, zero-config page view tracking. The `<Analytics />` component is included in `src/app/[locale]/layout.tsx` and activates automatically on Vercel deployments.

View analytics at: [vercel.com/dashboard](https://vercel.com) → Project → Analytics tab.

---

## Animations

Landing page sections use scroll-triggered animations via the `AnimateIn` component (`src/app/components/AnimateIn.tsx`). Implementation:

- **Technique:** CSS transitions + Intersection Observer API
- **Effect:** Fade-in with slide-up (opacity 0 → 1, translateY 8px → 0)
- **Duration:** 700ms ease-out
- **Trigger:** When 15% of the element enters the viewport
- **Optional delay:** Configurable via `delay` prop (milliseconds)
- **Dependencies:** None — zero additional bundle size
- **Behavior:** Each section animates once and stays visible

The Hero section is excluded from animation (renders immediately) for fast perceived load time.

---

## Deployment

### Vercel (current)

The site is deployed to Vercel with auto-deploy on push to `main`:

1. Push to the GitHub repository
2. Vercel auto-builds and deploys
3. Custom domain `plexoapp.com` and `www.plexoapp.com` are configured
4. DNS: A record pointing to `76.76.21.21`

### Static Export (alternative)

Static export (`output: 'export'`) is **not compatible** with the current setup because next-intl middleware requires a server runtime for locale detection and routing. If static export is needed, you would need to switch to a prefix-based locale strategy without middleware. See the [next-intl static export docs](https://next-intl.dev/docs/getting-started/app-router/without-i18n-routing).

---

## Configuration

### Environment Variables

No environment variables are required. Formspree handles form submissions; no custom backend needed.

### Key Configuration Files

- **`tailwind.config.ts`** — Brand colors, font families, and content paths for Tailwind purging
- **`next.config.mjs`** — Next.js config wrapped with `createNextIntlPlugin`
- **`src/i18n/routing.ts`** — Locale list, default locale, prefix mode
- **`src/i18n/request.ts`** — Per-request locale resolution and message loading
- **`src/middleware.ts`** — Locale detection and URL routing
- **`src/app/[locale]/layout.tsx`** — SEO metadata, OG tags, JSON-LD, `NextIntlClientProvider`, Analytics
- **`src/app/sitemap.ts`** — Bilingual sitemap configuration (add new pages here)
- **`src/app/opengraph-image.tsx`** — OG image design (edit branding/text here)
- **`src/lib/seo.ts`** — hreflang and canonical URL helper
- **`public/robots.txt`** — Crawler directives
- **`src/app/globals.css`** — Google Fonts import, smooth scrolling, base typography

### Modifying Content

All marketing copy lives in the translation files `messages/en.json` and `messages/es.json`, organized by component namespace. To update text:

1. Find the namespace for the component (e.g., `"Hero"`, `"FAQ"`, `"FeaturesTasksPage"`)
2. Edit the key in both `messages/en.json` and `messages/es.json`
3. Run `npm run build` to verify no missing keys

Structural changes (adding fields, changing layout, updating icons) are still in the component files:

- **Feature pages** — `src/app/[locale]/features/{slug}/page.tsx`
- **Demo form** — `src/app/[locale]/demo/page.tsx` (fields, validation, Formspree endpoint)
- **ROI calculator** — `src/app/[locale]/roi-calculator/page.tsx` (inputs, formulas, Formspree endpoint)
- **Formspree endpoint** — Update `FORMSPREE_URL` in `demo/page.tsx` and `roi-calculator/page.tsx`

---

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm run build` to verify
4. Open a pull request

---

## License

Proprietary. All rights reserved.
