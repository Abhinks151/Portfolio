# Portfolio Template

A clean, minimal React portfolio template — built to be customized quickly and extended easily.
All personal content lives in a single file. No digging through components.

---

## Tech Stack

| Layer        | Tool                        |
|--------------|-----------------------------|
| Bundler      | [Vite 5](https://vitejs.dev) |
| UI           | [React 18](https://react.dev) |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com) |
| Routing      | [React Router v6](https://reactrouter.com) |
| Package Mgr  | [pnpm](https://pnpm.io)     |
| Icons        | Font Awesome 4.7 (CDN)      |
| Fonts        | Inter — Google Fonts        |

---

## Project Structure

```
/
├── index.html                  # Vite HTML entry (root level)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── gemini.md                   # AI assistant project context
├── .agent/
│   └── guard.md                # Definition-first AI guard
└── src/
    ├── main.jsx                # React 18 entry (createRoot)
    ├── App.jsx                 # BrowserRouter wrapper
    ├── assets/
    │   └── css/
    │       ├── index.css       # Global styles and Tailwind directives
    │       ├── Navbar.css      # Navbar active state gradient border
    │       └── Home.css        # Home page wave animation
    ├── info/
    │   └── Info.js             # ← Edit this to customize your portfolio
    ├── img/                    # Static images (self portrait + project mocks)
    ├── hooks/
    │   └── useScrollObserver.js
    └── components/
        ├── BaseLayout.jsx      # Dark mode state, layout shell, footer
        ├── Navbar.jsx
        ├── MultiPageRoutes.jsx
        ├── SinglePageRoutes.jsx
        ├── home/
        │   ├── Home.jsx
        │   ├── EmojiBullet.jsx
        │   ├── SocialIcon.jsx
        │   └── Toggler.jsx
        ├── about/
        │   ├── About.jsx
        │   └── Terminal.jsx    # Terminal-style bio/skills display
        └── portfolio/
            ├── Projects.jsx
            ├── PortfolioBlock.jsx
            └── IconLink.jsx
```

---

## Customization

**Everything you need to edit is in one file: `src/info/Info.js`**

- `colors` — accent gradient (used on your name, avatar background, and nav)
- `singlePage` — `true` for a scrollable single page, `false` for multi-page routing
- `info` — your name, bio, position, socials, skills, hobbies, and portfolio projects

To add a project, append to the `portfolio` array and drop the image in `src/img/`.

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

## Credits

Original template concept by [Payton Pierce](https://paytonpierce.dev).  
Rebuilt and maintained by **Abhin** — migrated to Vite, pnpm, Tailwind CSS, and React 18.
