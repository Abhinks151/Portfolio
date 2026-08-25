# Portfolio Template — Gemini Project Context

## What This Is
A minimal, customizable React portfolio template. The sole purpose is to serve as a
clean starting base for a personal developer portfolio site. It is intentionally simple
and lightweight (built with React 18, Vite, and Tailwind CSS) so the owner can extend it without fighting the framework.

## Tech Stack
| Layer       | Tool                          | Notes                         |
|-------------|-------------------------------|-------------------------------|
| Bundler     | Vite 5                        | `pnpm dev` to start           |
| Runtime     | React 18                      | JSX, functional components    |
| Styling     | Tailwind CSS 3 (class-based)  | dark mode via `class` strategy |
| Routing     | react-router-dom v6           | BrowserRouter + HashLink      |
| Package mgr | pnpm                          | Use `pnpm`, never npm/yarn    |
| Fonts       | Inter & Monospace (Google Fonts) | Loaded in `index.html`     |
| Icons       | Font Awesome 6.6.0 (CDN)      | `fa-solid`, `fa-brands` prefixes |

## Project Structure
```
/
├── index.html              # Vite entry point (root, not /public)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx            # React 18 createRoot entry
    ├── App.jsx             # BrowserRouter wrapper
    ├── assets/
    │   └── css/
    │       ├── index.css   # Global styles and Tailwind directives
    │       ├── Navbar.css  # Navbar border active state
    │       └── Home.css    # Home page wave animation
    ├── info/
    │   └── Info.js         # ← ALL personal data/resumes/projects lives here
    ├── img/                # Static images (self.png + mock1-5.png)
    ├── hooks/
    │   └── useScrollObserver.js   # Intersection Observer hook for single-page Mode
    └── components/
        ├── BaseLayout.jsx  # Layout shell, footer, and dark mode class toggling
        ├── Navbar.jsx      # Header with brand identity, nav links, and resume CTA
        ├── MultiPageRoutes.jsx   # Multi-page mode router config
        ├── SinglePageRoutes.jsx  # Single-page mode scroll configuration
        ├── home/
        │   ├── Home.jsx    # Profile section featuring a waving hand animation
        │   ├── EmojiBullet.jsx
        │   ├── SocialIcon.jsx
        │   └── Toggler.jsx
        ├── about/
        │   ├── About.jsx   # Terminal card list for Intro, Skills, and Interests
        │   └── Terminal.jsx# Wrapper mimicking a macOS/UNIX command line interface
        ├── blog/
        │   └── Blog.jsx    # Terminal-styled technical blog directory
        ├── contact/
        │   └── Contact.jsx # Terminal-styled dynamic contact list
        └── portfolio/
            ├── Projects.jsx      # Flex/Grid block of project mockups
            ├── PortfolioBlock.jsx # Individual project mockup component with live link + code
            └── IconLink.jsx
```

## UI/UX & Design Guidelines

### 1. Navigation Shell & Brand Anchor (Header)
- **Visual Alignment**: The Navbar is split into three main anchors using flexbox:
  - **Left**: The user's first name, styled with the global text gradient.
  - **Center**: Lowercase navigation links list (`home`, `about`, `projects`, `blog`, `contact`).
  - **Right**: A prominent rounded pill gradient **Resume** CTA button alongside the Moon phase dark mode toggle.
- **Active Navigation Styles**: The active menu item gets configured with a gradient bottom border (`.nav-active` border-image) indicating the user's current section.

### 2. Terminal-Card GUI Pattern
- **Style Concept**: The `About`, `Blog`, and `Contact` sections adhere to a terminal command line theme.
- **Header**: Mimics a standard window with red/yellow/green circle buttons on a gray header bar (`bg-[#8c8c8c]`).
- **Body**: Uses a dark monospace command window (`bg-terminal`, `text-light`, `font-mono`) displaying interactive outputs resembling terminal commands (e.g., `john smith $ cat aboutjohn`).
- **Lists / Tags**: Sub-properties (like tech skill proficiencies or blog post tags) are represented block-style using custom transparent pills (`bg-white/10 px-2 py-0.5 rounded text-sm`).

### 3. Grid-Based Project Block (Mockups)
- **Visuals**: The `Projects` repository renders responsive grids (`grid grid-cols-1 md:grid-cols-2`).
- **Cards**: Project card modules use blurred/translucent dark blocks (`bg-white/5` with hover transitions) highlighting live link CTAs, mockup previews, and source code links.

### 4. Typography & Animations
- **Base Typography**: Clean Swiss sans-serif typography (`font-sans` with Google Inter).
- **Monospace Elements**: Custom code blocks / terminals use `font-mono` (`Courier New` or system monospaced stacks).
- **Interactive Micro-Animations**: Hover options apply gentle transitions (e.g. `hover:-translate-y-1` or `hover:opacity-70`). The waving hand icon `🤚` uses rotation keyframes in `Home.css` to continuously wave.

### 5. Dark Mode
- Driven strictly by standard Tailwind `dark:` utility styles.
- Whenever dark mode is activated, a `.dark` class gets appended to the root `<html>` element inside `BaseLayout.jsx`, changing colors immediately using Tailwind transitions.

---

## The One File You Edit to Customize Content
> **`src/info/Info.js`** — this is the single source of truth for all personal data.

It exports:
- `colors` — two-item array driving the accent gradient everywhere
- `singlePage` — `true` = single scrollable page, `false` = multi-page routing
- `info` — all personal content (name, bio, skills, socials, projects, resumeUrl)

**Do not** hardcode personal data in components. Always read from `Info.js`.

---

## Common Tasks

### Start dev server
```bash
pnpm dev
```

### Add a new project
Edit `src/info/Info.js` → add to the `projects` array:
```js
{ title: 'My Project', live: 'https://...', source: 'https://github.com/...', image: mockX }
```

### Switch to single-page mode
In `src/info/Info.js` set:
```js
export const singlePage = true
```

### Change accent colors
In `src/info/Info.js` update the `colors` array:
```js
export const colors = ['#f97316', '#f97316']
```

---

## What NOT to Do
- Do not create `.ts` / `.tsx` files — TypeScript is not configured.
- Do not import from `node_modules` packages that are not in `package.json`.
- Do not use `npm` or `yarn` — use `pnpm` exclusively.
- Do not add `@mui/material`, `@emotion/*`, or `sass` back.
- Do not put personal/content data inside component files.
