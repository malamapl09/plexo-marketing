# Plexo — Retail Operations, Perfected

Plexo is a SaaS platform for retail chains to manage tasks, audits, training, campaigns, and compliance across every store from a single dashboard. This repository contains the **marketing website** — a static, single-page scrollable landing site built with Next.js.

**Live domain:** [plexoapp.com](https://plexoapp.com) (pending deployment)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Brand Identity](#brand-identity)
- [Page Sections](#page-sections)
- [Components Reference](#components-reference)
- [Pricing Tiers](#pricing-tiers)
- [Deployment](#deployment)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Plexo is a productized version of an internal retail operations platform, built to serve any retail chain — not just one. The marketing site is designed to:

- Communicate the product value proposition clearly
- Showcase the 9 core modules (tasks, audits, campaigns, training, etc.)
- Convert visitors to free trial signups or sales conversations
- Present pricing transparently with a Starter / Professional / Enterprise model

This is a **standalone repository**, independent from the Plexo application codebase. It is a pure marketing site with no backend — contact forms use `mailto:` links (with plans to integrate Formspree or Resend later).

---

## Tech Stack

| Layer       | Technology                  |
| ----------- | --------------------------- |
| Framework   | Next.js 14 (App Router)     |
| Language    | TypeScript                  |
| Styling     | Tailwind CSS 3.4            |
| Font        | Inter (Google Fonts CDN)    |
| Deployment  | Vercel (static export)      |
| Backend     | None (static site)          |

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
│   └── logo.svg                    # Plexo wordmark + geometric icon
├── src/
│   └── app/
│       ├── globals.css             # Tailwind directives, Inter font import, base styles
│       ├── layout.tsx              # Root layout with metadata (title, description, keywords)
│       ├── page.tsx                # Main page — composes all section components
│       └── components/
│           ├── Header.tsx          # Sticky navigation bar with mobile menu
│           ├── Hero.tsx            # Hero headline, CTAs, dashboard mockup
│           ├── Problem.tsx         # Pain points section (dark theme)
│           ├── Features.tsx        # 3x3 grid of 9 core modules
│           ├── HowItWorks.tsx      # 3-step onboarding flow
│           ├── MobileShowcase.tsx  # Mobile app showcase with phone mockup
│           ├── Pricing.tsx         # 3 pricing tiers with annual/monthly toggle
│           ├── FAQ.tsx             # 7-item expandable accordion
│           ├── CTABanner.tsx       # Full-width CTA with gradient background
│           └── Footer.tsx          # Footer with link columns and social icons
├── tailwind.config.ts              # Brand color tokens and font families
├── next.config.mjs                 # Next.js configuration
├── postcss.config.mjs              # PostCSS config for Tailwind
├── tsconfig.json                   # TypeScript configuration
└── package.json                    # Dependencies and scripts
```

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

### Logo

The logo (`public/logo.svg`) is a text-based "Plexo" wordmark paired with a geometric icon of three interlocking nodes (indigo, violet, and emerald) connected by lines — representing connected operations across stores.

### Tone of Voice

Professional, confident, no-nonsense. Tagline: **"Your stores, perfectly in sync."**

---

## Page Sections

The site is a single-page scrollable landing with the following sections in order:

### 1. Header (sticky)
Persistent top navigation with the Plexo logo, anchor links (Features, How It Works, Pricing, FAQ), a "Log In" text link, and a "Start Free Trial" CTA button. Collapses to a hamburger menu on mobile.

### 2. Hero
- **Headline:** "Retail Operations, Perfected."
- **Subheadline:** "The all-in-one platform to manage tasks, audits, training, and campaigns across every store."
- **CTAs:** "Start Free Trial" (primary) + "Book a Demo" (secondary, mailto)
- **Visual:** A CSS-rendered dashboard mockup inside a laptop frame with a floating phone mockup showing notification cards. Dashboard shows stat cards (Active Tasks, Compliance %, Open Audits, Campaigns), a bar chart, and compliance progress bars.

### 3. Problem Statement
Dark-themed section (`bg-slate-900`) highlighting three pain points retail ops teams face:
- Disconnected tools
- Zero visibility
- Manual follow-ups

Each pain point is presented as a card with an icon, title, and description.

### 4. Features Grid
3x3 responsive grid showcasing the 9 core Plexo modules:
1. Tasks & Assignments
2. Checklists & SOPs
3. Store Audits & Inspections
4. Campaign Execution
5. Training & LMS
6. Corrective Actions (CAPA)
7. Gamification & Leaderboards
8. Visual Merchandising / Planograms
9. Issue Tracking

Each card has an icon that transitions to white-on-indigo on hover.

### 5. How It Works
Three-step horizontal flow with connector lines between steps:
1. Set up your stores and teams
2. Assign tasks, checklists, and campaigns
3. Track compliance in real-time from anywhere

### 6. Mobile App Showcase
Split layout: text on the left with a feature checklist (offline support, photo capture, push notifications), and a detailed phone mockup on the right showing a task list UI with a floating "Task Completed" notification card.

### 7. Pricing
Three tiers with an annual/monthly toggle:
- **Starter** — $3/user/month ($2.40 annual)
- **Professional** — $6/user/month ($4.80 annual) — marked "Most Popular"
- **Enterprise** — Custom pricing

The Professional tier is visually elevated with a border, shadow, and "Most Popular" badge. All plans include a 14-day free trial with no credit card required.

### 8. FAQ
Seven expandable accordion items covering: onboarding time, offline support, template customization, support tiers, free trial details, integrations, and pricing model.

### 9. CTA Banner
Full-width indigo section with decorative gradient blobs, a headline ("Ready to streamline your operations?"), and two CTAs: "Start Free Trial" and "Talk to Sales".

### 10. Footer
Four-column layout: brand description, Product links, Company links, Legal links. Includes Twitter/X and LinkedIn social icons, and a dynamic copyright year.

---

## Components Reference

All components live in `src/app/components/`. Three components are client components (use `"use client"`):

| Component          | Client? | Interactive Feature                          |
| ------------------ | ------- | -------------------------------------------- |
| `Header.tsx`       | Yes     | Mobile hamburger menu toggle                 |
| `Hero.tsx`         | No      | Static                                       |
| `Problem.tsx`      | No      | Static                                       |
| `Features.tsx`     | No      | CSS hover effects only                       |
| `HowItWorks.tsx`   | No      | Static                                       |
| `MobileShowcase.tsx`| No     | Static                                       |
| `Pricing.tsx`      | Yes     | Annual/monthly billing toggle                |
| `FAQ.tsx`          | Yes     | Accordion expand/collapse                    |
| `CTABanner.tsx`    | No      | Static                                       |
| `Footer.tsx`       | No      | Static                                       |

---

## Pricing Tiers

| Feature                    | Starter ($3) | Professional ($6) | Enterprise (Custom) |
| -------------------------- | :----------: | :----------------: | :-----------------: |
| Tasks & Assignments        | Yes          | Yes                | Yes                 |
| Checklists & SOPs          | Yes          | Yes                | Yes                 |
| Issue Tracking             | Yes          | Yes                | Yes                 |
| Mobile App                 | Yes          | Yes                | Yes                 |
| Store Audits               | 50/month     | 200/month          | Unlimited           |
| Campaign Execution         | -            | Yes                | Yes                 |
| Training & LMS             | -            | Yes                | Yes                 |
| Corrective Actions (CAPA)  | -            | Yes                | Yes                 |
| Gamification               | -            | Yes                | Yes                 |
| Visual Merchandising       | -            | Yes                | Yes                 |
| SSO / SAML                 | -            | -                  | Yes                 |
| API Access                 | -            | -                  | Yes                 |
| Dedicated Support          | -            | -                  | Yes                 |
| SLA Guarantee              | -            | -                  | Yes                 |
| Annual Discount            | 20%          | 20%                | Custom              |

---

## Deployment

### Vercel (recommended)

1. Push this repository to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js — no configuration needed
4. Set the custom domain to `plexoapp.com`

### Static Export (alternative)

Add to `next.config.mjs`:

```js
const nextConfig = {
  output: 'export',
};
```

Then run `npm run build` — the static site will be generated in the `out/` directory, deployable to any static host (Netlify, Cloudflare Pages, S3 + CloudFront, etc.).

---

## Configuration

### Environment Variables

No environment variables are required. This is a fully static site.

### Key Configuration Files

- **`tailwind.config.ts`** — Brand colors, font families, and content paths for Tailwind purging
- **`next.config.mjs`** — Next.js settings (currently default; add `output: 'export'` for static builds)
- **`src/app/layout.tsx`** — SEO metadata (title, description, keywords)
- **`src/app/globals.css`** — Google Fonts import, smooth scrolling, base typography

### Modifying Content

All marketing copy is co-located in the component files. To update:

- **Hero text** — `src/app/components/Hero.tsx`
- **Feature descriptions** — `src/app/components/Features.tsx` (edit the `features` array)
- **Pricing** — `src/app/components/Pricing.tsx` (edit the `tiers` array)
- **FAQ items** — `src/app/components/FAQ.tsx` (edit the `faqs` array)
- **Navigation links** — `src/app/components/Header.tsx` (edit the `navLinks` array)
- **Footer links** — `src/app/components/Footer.tsx` (edit the `footerLinks` array)

---

## Contributing

1. Create a feature branch from `main`
2. Make your changes
3. Run `npm run lint` and `npm run build` to verify
4. Open a pull request

---

## License

Proprietary. All rights reserved.
