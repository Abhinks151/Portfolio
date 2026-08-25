# Portfolio Template — Gemini Project Context

## What This Is
A minimal, customizable React portfolio template. The sole purpose is to serve as a
clean starting base for a personal developer portfolio site. It is intentionally simple
so the owner can extend it without fighting the framework.

## Tech Stack
| Layer       | Tool                          | Notes                         |
|-------------|-------------------------------|-------------------------------|
| Bundler     | Vite 5                        | `pnpm dev` to start           |
| Runtime     | React 18                      | JSX, functional components    |
| Styling     | Tailwind CSS 3 (class-based)  | dark mode via `class` strategy |
| Routing     | react-router-dom v6           | BrowserRouter + HashLink      |
| Package mgr | pnpm                          | Use `pnpm`, never npm/yarn    |
| Fonts       | Inter (Google Fonts)          | Loaded in `index.html`        |
| Icons       | Font Awesome 4.7 (CDN)        | Loaded in `index.html`        |

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
    ├── index.css           # Tailwind directives + base resets
    ├── info/
    │   └── Info.js         # ← ALL personal data lives here (no JSX)
    ├── img/                # Static images (self.png + mock1-5.png)
    ├── hooks/
    │   └── useScrollObserver.js   # Intersection Observer hook
    └── components/
        ├── BaseLayout.jsx  # Dark mode state, layout shell, footer
        ├── Navbar.jsx      # Nav links + dark mode toggle
        ├── Navbar.css      # Only for gradient border-image (can't be a utility)
        ├── MultiPageRoutes.jsx
        ├── SinglePageRoutes.jsx
        ├── home/
        │   ├── Home.jsx
        │   ├── Home.css    # Wave keyframe animation only
        │   ├── EmojiBullet.jsx
        │   ├── SocialIcon.jsx
        │   └── Toggler.jsx
        ├── about/
        │   ├── About.jsx
        │   └── Terminal.jsx
        └── portfolio/
            ├── Portfolio.jsx
            ├── PortfolioBlock.jsx
            └── IconLink.jsx
```

## The One File You Edit to Customize Content
> **`src/info/Info.js`** — this is the single source of truth for all personal data.

It exports:
- `colors` — two-item array driving the accent gradient everywhere
- `singlePage` — `true` = single scrollable page, `false` = multi-page routing
- `info` — all personal content (name, bio, skills, socials, portfolio projects)

**Do not** hardcode personal data in components. Always read from `Info.js`.

## Conventions
- **File extensions**: Components → `.jsx`; pure data/hooks → `.js`; styles → `.css`
- **Styling**: Tailwind utility classes first. Add a `.css` file only when CSS cannot be
  expressed as a utility (e.g., `border-image-source` gradients, custom keyframes).
- **Dark mode**: Driven by the `dark` class on `<html>`. Set in `BaseLayout.jsx`.
  Use `dark:` Tailwind variants in components. Do not use inline style for theme toggling.
- **No MUI / emotion / SCSS / sass** — these have been removed. Do not add them back.
- **No `moment.js`** — use native `Date` or `date-fns` if date formatting is ever needed.
- **Images**: Place in `src/img/`. Import them in `Info.js`, not directly in components.

## Common Tasks

### Start dev server
```bash
pnpm dev
```

### Add a new portfolio project
Edit `src/info/Info.js` → add to the `portfolio` array:
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
export const colors = ['rgb(0,200,255)', 'rgb(200,100,255)']
```
Use https://gradientgenerator.paytonpierce.dev/ to pick a pair.

### Add a new page/route
1. Create `src/components/mypage/MyPage.jsx`
2. Add a route to `MultiPageRoutes.jsx`
3. Add a link entry to the `links` array in `Navbar.jsx`

## What NOT to Do
- Do not create `.ts` / `.tsx` files — TypeScript is not configured
- Do not import from `node_modules` packages that are not in `package.json`
- Do not use `npm` or `yarn` — use `pnpm` exclusively
- Do not add `@mui/material`, `@emotion/*`, or `sass` back
- Do not put personal/content data inside component files
