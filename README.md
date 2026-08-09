# Arin Vale — UI/UX Portfolio

A dark, animated, cinematic UI/UX designer portfolio built with React, Tailwind CSS, and Framer Motion.

## Stack
- React 19 + Vite
- Tailwind CSS
- Framer Motion (page load sequence, scroll reveals, hover/magnetic interactions)
- Lenis (smooth scrolling)
- Lucide React (icons)

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> /dist
npm run preview   # preview the production build
```

## Structure
```
src/
  components/
    Loader.jsx          # page load animation
    CursorFollower.jsx  # custom cursor + magnetic hover state
    Magnetic.jsx         # reusable magnetic-button wrapper
    RevealText.jsx        # scroll-triggered text reveal
    Navbar.jsx
    Hero.jsx
    Projects.jsx
    About.jsx
    Projects.jsx
    CaseStudy.jsx         # full case-study anatomy (duplicate per project)
    Skills.jsx
    DesignSystem.jsx
    Testimonials.jsx
    Experience.jsx
    Achievements.jsx
    Contact.jsx
    Footer.jsx
  lib/
    useSmoothScroll.js   # Lenis smooth-scroll hook
  index.css               # design tokens, glass/aurora utilities
```

## Customize
- Swap the placeholder name/portrait block in `Hero.jsx` with your real photo.
- Edit copy and project data directly inside each component (`PROJECTS`, `STAGES`, `TIMELINE`, etc. arrays).
- Colors, fonts and spacing tokens live in `tailwind.config.js` and `src/index.css`.
- To give each project its own full case-study page, duplicate `CaseStudy.jsx` per project and wire up routing (e.g. `react-router-dom`).

## Deploy
Works out of the box on Vercel, Netlify, or GitHub Pages — just point the build command to `npm run build` and the output directory to `dist`.
