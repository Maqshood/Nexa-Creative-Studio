# Nexa Creative Studio — Digital Agency Website

> **AI Website Generation Assignment**  
> Developed for **InAmigos Foundation**  
> Brand: **Nexa Creative Studio** — *"We turn bold ideas into digital experiences."*

---

## 1. Project Overview

**Nexa Creative Studio** is a complete, production-quality, responsive website built for a fictional contemporary digital agency. It showcases how modern AI-assisted engineering and high-end UI/UX craft unite to produce an editorial digital presence inspired by award-winning portfolio websites.

The project incorporates generous whitespace, strong typographic hierarchy, asymmetrical editorial grids, subtle micro-interactions, responsive touch-first drawer navigation, accessible client-side form validation, and deep-dive case study modal previews.

---

## 2. Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom `@theme` brand tokens
- **Typography**: Plus Jakarta Sans & Inter via Google Fonts
- **Iconography**: [Lucide React](https://lucide.dev/) + Optimized inline SVGs for social channels
- **Animations & Transitions**: CSS transitions, subtle hover micro-interactions, and accessible `prefers-reduced-motion` compliance
- **Architecture**: Modular, reusable component architecture with separated mock data models

---

## 3. Brand Identity & Visual System

- **Primary Background**: Warm Off-White (`#F8F7F4`)
- **Primary Text**: Near-Black Ink (`#171717`)
- **Accent Color**: Vivid Cobalt Blue (`#4F46E5`) / Hover (`#4338CA`)
- **Secondary Background**: Soft Lavender (`#EEECFF`)
- **Muted Text**: Charcoal Gray (`#666666`)
- **Cards**: Pure White (`#FFFFFF`) with subtle border lines (`rgba(23, 23, 23, 0.08)`)

### Typography
- **Headings**: *Plus Jakarta Sans* (bold modern sans-serif with tight negative letter tracking `-0.03em`)
- **Body Content**: *Inter* & *Plus Jakarta Sans* (highly legible, accessible line-height `1.6`)

---

## 4. Website Sections & Features

| Section | Description | Key Features |
| :--- | :--- | :--- |
| **Navigation Bar** | Sticky header with brand wordmark and quick links | Active section tracking, smooth scroll, mobile drawer with backdrop blur, keyboard ESC close |
| **Hero Section** | High-impact editorial headline and visual composition | *"Good Ideas Deserve Exceptional Digital Experiences"*, trust badge, dual CTAs (*Explore Our Work*, *Start a Project*), floating craft badges |
| **About Us** | Two-column editorial studio introduction | *"Small Studio. Big Thinking."*, studio approach, 3 core principles (*Creativity*, *Collaboration*, *Clarity*) |
| **Services** | 4-card discipline overview | Web Design, Web Development, Brand Identity, Digital Strategy; interactive expandable deliverables |
| **Selected Work** | Fictional showcase portfolio with varied editorial grids | *Forma Living* (Furniture e-commerce), *Luma Skincare* (Clean beauty), *Northstar Finance* (Fintech platform); interactive Case Study modal with challenge & solution breakdown |
| **Our Process** | 4-step chronological timeline | *01 Discover*, *02 Define*, *03 Design & Build*, *04 Launch & Improve*; milestone deliverables |
| **Why Choose Us** | Honest studio advantages | Design that serves a purpose, cross-device responsiveness, clear communication, performance & usability (no fabricated stats) |
| **Testimonials** | Illustrative client feedback | 2 clearly labeled sample feedback cards with transparent demonstration disclaimers |
| **Contact Section** | Clean inquiry intake form | Full name, email, project type pills, message textarea; client-side validation, accessible error announcements, zero fake promises |
| **Footer** | Clean concluding section | Wordmark, brand mission, navigation, capability links, social links, back-to-top smooth scroll, copyright & InAmigos credit |

---

## 5. Getting Started Locally

### Prerequisites
- Node.js (v18.0.0 or higher recommended, tested on Node v24)
- npm (v9.0.0 or higher)

### Installation
Clone or navigate to the workspace directory:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build & Preview
To create and verify an optimized production bundle:

```bash
# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 6. Deployment to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com/):

### Option A: Via Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B: Via Vercel Web Dashboard
1. Push this repository to GitHub or GitLab.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel automatically detects the Vite framework preset:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**.

---

## 7. Accessibility & Code Quality

- **Semantic HTML**: Built with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Skip Link**: Includes keyboard skip-to-content mechanism (`SkipLink.jsx`).
- **Form Accessibility**: All inputs feature linked `<label>` tags, `aria-required`, `aria-invalid`, and `aria-describedby` error associations.
- **Focus Indicators**: Clear cobalt ring indicators on keyboard focus.
- **Reduced Motion**: Respects `prefers-reduced-motion` settings for users sensitive to animations.
- **Resilient Fallbacks**: Images utilize `ImageWithFallback.jsx` to gracefully handle network dropouts with matching brand placeholders.
- **Zero Console Errors**: Verified in live browser subagent runs with zero warnings or runtime exceptions.

---

## 8. Illustrative Concept Disclosure

All portfolio projects (*Forma Living*, *Luma Skincare*, *Northstar Finance*), client quotes, and studio location references are conceptual designs created strictly for the InAmigos Foundation AI Website Generation evaluation. No claims of verified client engagements or false backend transmissions are made.
