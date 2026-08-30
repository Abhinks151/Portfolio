# Portfolio Template

A clean, minimal React portfolio template — built to be customized quickly and extended easily.
All personal content lives in a single file. No digging through components.

---

## Tech Stack

| Layer        | Tool                        |
|--------------|------------------------------|
| Bundler      | [Vite 5](https://vitejs.dev) |
| UI           | [React 18](https://react.dev) |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com) |
| Routing      | [React Router v6](https://reactrouter.com) |
| Package Mgr  | [pnpm](https://pnpm.io)     |
| Icons        | Font Awesome 6.6.0 (CDN)    |
| Fonts        | Inter — Google Fonts        |

---

## Features

- **Terminal-themed UI** — About, Projects, Blog, Contact, and 404 pages all share a unified macOS-style terminal card aesthetic
- **Single file customization** — all personal content (`name`, `bio`, `skills`, `socials`, `projects`, `education`) lives in `src/info/Info.js`
- **Dual layout modes** — toggle between a scrollable single page or multi-page routing with one config flag
- **Dark mode** — persistent dark/light toggle stored in `localStorage`
- **Project modals** — multi-tab (About / Tech Stack / Architecture) terminal overlay for featured projects
- **Tiered project grid** — separate featured (`main`) and mini (`mini`) project grids inside the terminal
- **404 page** — terminal-styled Not Found page with a typewriter animation and a direct link back to home
- **Education section** — terminal block inside About for professional training and academic background

---

## Project Structure

```
/
├── index.html                  # Vite HTML entry (root level)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── vercel.json                 # SPA rewrite rule for Vercel deployment
├── gemini.md                   # AI assistant project context
└── src/
    ├── main.jsx                # React 18 entry (createRoot)
    ├── App.jsx                 # BrowserRouter wrapper
    ├── info/
    │   └── Info.js             # ★ Single source of truth for all personal data
    ├── assets/
    │   ├── css/
    │   │   ├── index.css       # Global styles and Tailwind directives
    │   │   ├── Navbar.css      # Navbar active state gradient border
    │   │   └── Home.css        # Home page wave animation
    │   ├── img/                # Static images (self portrait + project screenshots)
    │   └── pdfs/               # Resume PDF
    ├── hooks/
    │   └── useScrollObserver.js # Intersection Observer hook for single-page mode
    └── components/
        ├── BaseLayout.jsx      # Dark mode state, layout shell, footer
        ├── Navbar.jsx          # Brand identity, nav links, dark mode toggle, resume CTA
        ├── MultiPageRoutes.jsx # Multi-page router (includes * wildcard → NotFound)
        ├── SinglePageRoutes.jsx# Single-page scroll configuration
        ├── NotFound.jsx        # 404 page — terminal-themed with typewriter + home link
        ├── home/
        │   ├── Home.jsx        # Profile section with waving hand animation
        │   ├── EmojiBullet.jsx
        │   ├── SocialIcon.jsx
        │   └── Toggler.jsx     # Dark mode icon toggle
        ├── about/
        │   ├── About.jsx       # Terminal sections: Intro, Skills, Hobbies, Education
        │   └── Terminal.jsx    # Shared terminal chrome component (used everywhere)
        ├── blog/
        │   └── Blog.jsx        # Terminal-styled blog directory (posts coming soon)
        ├── contact/
        │   └── Contact.jsx     # Terminal-styled dynamic contact list
        └── portfolio/
            ├── Projects.jsx        # Terminal card with featured + mini project grids
            ├── MainProjectCard.jsx # Large card for featured projects
            ├── MiniProjectCard.jsx # Compact card for mini/learning projects
            ├── ProjectModal.jsx    # Multi-tab terminal modal overlay
            ├── parseInline.js      # Inline **bold** / `code` markup parser
            ├── RichText.jsx        # React renderer for parsed inline markup
            └── IconLink.jsx
```

---

## Customization

**Everything you need to edit is in one file: `src/info/Info.js`**

| Export | Purpose |
|---|---|
| `colors` | Two-item array driving the accent gradient everywhere |
| `singlePage` | `true` = scrollable single page · `false` = multi-page routing |
| `info` | All personal content — name, bio, position, socials, skills, hobbies, education, projects |

### Add a project

Append to `projects.main` (featured) or `projects.mini` (compact) inside `Info.js`:

```js
{
  title: 'My Project',
  tagline: 'One-line description.',
  image: mockX,               // import your image at the top of Info.js
  links: [{ label: 'GitHub', url: 'https://github.com/...' }],
  description: `Details with **bold** or \`code\`.`,
  techStack: { frontend: [], backend: [], others: [] },
  architecture: `Architecture details.`,
}
```

### Switch layout mode

```js
// src/info/Info.js
export const singlePage = true   // single scrollable page
export const singlePage = false  // multi-page routing (default)
```

### Change accent color

```js
export const colors = ['#f97316', '#f97316']
```

---

## Installation

> **Prerequisite:** [pnpm](https://pnpm.io/installation) must be installed.

```bash
# 1. Clone the repository
git clone https://github.com/Abhinks151/Portfolio.git
cd Portfolio

# 2. Install dependencies
pnpm install

# 3. Start the development server
pnpm dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
pnpm build
```

Output is written to `dist/`. Preview the production build locally with:

```bash
pnpm preview
```

---

## Deployment

The project includes a `vercel.json` with a SPA rewrite rule so that multi-page routes (e.g. `/about`, `/projects`) are handled correctly on Vercel without returning 404s from the CDN. A 404 _within_ the app (unknown routes) is handled by the React Router catch-all and renders the terminal-styled 404 page.

---

## Credits

Original template concept by [Payton Pierce](https://paytonpierce.dev).  
Rebuilt and maintained by **Abhin** — migrated to Vite, pnpm, Tailwind CSS, and React 18.
