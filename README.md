# N7 — Digital Banking Landing Page

A responsive, pixel-accurate frontend implementation of the **N7 fintech landing page** design assignment. Built with Next.js 14, Tailwind CSS, and Framer Motion.

---

## Live Demo

> Replace with your deployed URL after publishing to Vercel.

**Demo:** `https://your-project.vercel.app`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org/) (App Router) | React framework, routing, image optimization |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling & responsive layout |
| [Framer Motion 11](https://www.framer.com/motion/) | Scroll reveals, hero animations, carousel |
| [Lucide React](https://lucide.dev/) | UI icons (nav, arrows, checkmarks) |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe components |
| [Vercel](https://vercel.com/) | Recommended deployment platform |

---

## Features

- **Component-driven architecture** — reusable UI primitives (`Button`, `PhoneMockup`, `CtaBanner`, etc.) and section-based page blocks
- **Responsive design** — mobile-first layout; desktop (`lg+`) matches Figma breakpoints
- **Scroll animations** — shared motion variants with `prefers-reduced-motion` support
- **Optimized images** — Next.js `<Image />` for hero, laptops, and phone mockups
- **Accessible markup** — semantic HTML, aria labels, keyboard-friendly nav

---

## Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** — [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** / **pnpm**
- **Git** — [Download](https://git-scm.com/)

Check your versions:

```bash
node -v    # should be v18.0.0 or higher
npm -v
git -v
```

---

## Local Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/n7-assignment.git
cd n7-assignment
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in browser

Visit [http://localhost:3000](http://localhost:3000)

The page hot-reloads when you edit files in `src/`.

---

## Production Build

```bash
# Create an optimized production build
npm run build

# Run the production server locally
npm start
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Generate production build |
| `npm start` | Serve production build |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
n7-assignment/
├── public/
│   └── images/
│       ├── hero-rectangle-tilted.png   # Hero visual composite
│       ├── aml-laptop.svg              # Dashboard — AML mockup
│       ├── ckyc-laptop.svg             # Dashboard — CKYC mockup
│       ├── phone-toni-home.png         # Digital Banking phone
│       ├── phone-analytics.png         # Mobile Features — analytics
│       ├── phone-profile.png           # Mobile Features — profile
│       ├── solutions/                  # Solution card icons
│       └── symbols/                    # Marquee, curves, insight grid
│
├── src/
│   ├── app/
│   │   ├── icon.png          # Browser tab favicon (app icon)
│   │   ├── globals.css       # Tailwind + custom utilities
│   │   ├── layout.tsx        # Root layout & metadata
│   │   └── page.tsx          # Landing page assembly
│   │
│   ├── components/
│   │   ├── layout/           # Navbar, Footer, Marquee
│   │   ├── sections/         # Hero, Solutions, Dashboard, etc.
│   │   └── ui/               # Button, PhoneMockup, InsightCard, …
│   │
│   ├── hooks/                # useScrollDirection, useWindowSize
│   ├── lib/                  # motion.ts, utils.ts
│   └── types/                # Shared TypeScript types
│
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── README.md
```

---

## Page Section Order

The landing page follows the Figma layout:

1. **Navbar**
2. **Hero** + Trusted By partners
3. **Solutions**
4. **Dashboard Preview** (AML & CKYC laptops)
5. **Dark CTA** (CB7 banner)
6. **Marquee** ticker
7. **Light section** — Digital Banking, Mobile Features, N7 CTA
8. **Insights**
9. **Case Studies**
10. **Footer**

---

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `background` | `#070A13` | Main page background |
| `brand-blue` | `#1E50FF` | Primary buttons & links |
| `brand-cyan` | `#00E5FF` / `#00B4FD` | Accents, gradients |
| `light-section` | `#F0F7FF` | Digital Banking / Mobile blocks |

Defined in `tailwind.config.ts` and `src/app/globals.css`.

---

## Figma Reference

**Design file:** [N7 Figma Design](https://www.figma.com/design/ktuyhOppLLgLFCZwzQCOBk/N7?node-id=24-3468)

---

## Deploy to Vercel

1. Push your code to GitHub (see steps below).
2. Go to [vercel.com/new](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel auto-detects Next.js — click **Deploy**.
5. Copy the live URL and update the **Live Demo** section above.

---

## Push to GitHub

### First-time setup

```bash
# Navigate to project folder
cd n7-assignment

# Stage all files
git add .

# Commit
git commit -m "Add N7 fintech landing page"

# Add your GitHub remote (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git push -u origin master
```

> If your default branch is `main`, use:
> ```bash
> git branch -M main
> git push -u origin main
> ```

### Subsequent updates

```bash
git add .
git commit -m "Describe your changes"
git push
```

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 👨‍💻 Developer

**Divyansh Agrawal**
- GitHub: [@MrDivyanshAgrawal](https://github.com/MrDivyanshAgrawal)
- LinkedIn: [Divyansh Agrawal](https://www.linkedin.com/in/divyansh-agrawal-673420257)

---

## License

This project was created as a frontend design assignment submission.
