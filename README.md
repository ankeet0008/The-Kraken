# 🐙 THE KRAKEN — Special Operations Training

> **Tier 1 Special Operations Training. Push beyond human limits.**

A high-performance, cinematic website built for **Kraken Special Operations Training** — featuring immersive scroll animations, full-screen video sections, and a tactical military aesthetic.

---

## ✨ Features

- **Cinematic Hero Section** — Full-screen video background with animated overlays and zoom-in reveal effect
- **Stacking Scroll Animations** — Sections slide up and stack over one another using GSAP `ScrollTrigger` for a smooth, layered parallax experience
- **Preloader** — A branded loading sequence to set the tone before the site reveals
- **Training Programs** — Three dedicated training tiers (Basic, Intermediate, Elite) with detailed breakdowns
- **Contact Section** — Integrated contact form for inquiries
- **Responsive Navbar** — Smooth navigation with anchor links to each section
- **Parallax Text Effects** — Large background text elements with subtle parallax movement for depth
- **Close-up Gallery Video** — Supporting video gallery component for supplementary media

---

## 🛠 Tech Stack

| Category       | Technology                                                                 |
| -------------- | -------------------------------------------------------------------------- |
| **Framework**  | [Next.js 16](https://nextjs.org/) (App Router)                            |
| **Language**   | [TypeScript](https://www.typescriptlang.org/)                             |
| **Styling**    | [Tailwind CSS v4](https://tailwindcss.com/)                               |
| **Animations** | [GSAP](https://gsap.com/) + [Framer Motion](https://www.framer.com/motion/) |
| **Fonts**      | [Space Mono](https://fonts.google.com/specimen/Space+Mono) · [Rajdhani](https://fonts.google.com/specimen/Rajdhani) (via `next/font`) |
| **Runtime**    | [React 19](https://react.dev/)                                            |

---

## 📁 Project Structure

```
the-kraken/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Home page — assembles all sections
│   ├── globals.css         # Global styles
│   ├── about/              # About page route
│   ├── contact/            # Contact page route
│   └── programs/           # Programs page route
├── components/
│   ├── Navbar.tsx           # Top navigation bar
│   ├── Preloader.tsx        # Animated loading screen
│   ├── HeroSectionVideo.tsx # Full-screen hero with video background
│   ├── AboutSection.tsx     # About / mission statement section
│   ├── ScrollSections.tsx   # GSAP-powered stacking scroll container
│   ├── BasicTraining.tsx    # Basic training tier
│   ├── IntermediateTraining.tsx  # Intermediate training tier
│   ├── EliteTraining.tsx    # Elite training tier
│   ├── ProgramsSection.tsx  # Combined programs overview
│   ├── TrainingPage.tsx     # Individual training detail page
│   ├── PricingTiers.tsx     # Pricing cards component
│   ├── ContactSection.tsx   # Contact form & info
│   ├── CloseupGalleryVideo.tsx  # Video gallery component
│   └── Footer.tsx           # Site footer
├── data/
│   └── droneData.ts         # Drone / stat data for hero section
├── public/
│   ├── marine.jpg           # Hero background image
│   └── videos/
│       ├── hero/            # Hero section video assets
│       └── closeups/        # Gallery video assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **yarn**, **pnpm**, or **bun**

### Installation

```bash
# Clone the repository
git clone https://github.com/ankeet0008/the-kraken.git
cd the-kraken

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

---

## 🎨 Design Philosophy

The site draws inspiration from tactical / military aesthetics:

- **Dark palette** — Matte blacks, dark grays, and high-contrast white text
- **Monospace typography** — Space Mono for a utilitarian, heads-up-display feel
- **Cinematic motion** — GSAP-driven scroll animations create a layered, immersive experience where each section slides up to cover the previous one
- **Full-bleed media** — Hero video and imagery fill the viewport for maximum impact
- **Minimal UI chrome** — Clean lines, no unnecessary decoration

---

## 📜 Available Scripts

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the development server       |
| `npm run build` | Create an optimized production build |
| `npm start`     | Serve the production build         |
| `npm run lint`  | Run ESLint checks                  |

---

## 📄 License

This project is private and not licensed for redistribution.

---

<p align="center">
  <strong>KRAKEN</strong> — <em>Forged in fire. Built for war.</em>
</p>
