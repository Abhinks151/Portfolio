# Project Guard — Read This First

> This file is a **definition-first guard**. Before taking any action, an AI agent
> working on this project must read and internalize these definitions and constraints.

---

## 1. Project Identity
This is a **personal portfolio template** built to be minimal and hackable.
Its goal is to be a clean base — not an over-engineered framework.
Every decision should favor simplicity and readability over cleverness.

## 2. Authoritative Source of Truth
| What                    | Where                          |
|-------------------------|--------------------------------|
| All personal/content data | `src/info/Info.js`            |
| Global styles / Tailwind  | `src/index.css`               |
| Dark mode state           | `src/components/BaseLayout.jsx` |
| App entry point           | `src/main.jsx`                |
| Vite config               | `vite.config.js`              |
| Full project context      | `gemini.md` ← read this too   |

**When in doubt about where something lives, check `gemini.md` first.**

## 3. Hard Constraints (Never Violate)

| ❌ Forbidden                              | ✅ Required instead                   |
|------------------------------------------|---------------------------------------|
| Using `npm` or `yarn`                    | Use `pnpm`                            |
| Adding `@mui/material` or `@emotion`     | Use Tailwind CSS utility classes      |
| Adding `sass` / writing `.scss` files    | Write plain `.css` files              |
| Creating `.ts` or `.tsx` files           | Keep `.jsx` / `.js`                   |
| Hardcoding content in components         | Put data in `src/info/Info.js`        |
| Using inline styles for theme toggling   | Use `dark:` Tailwind variants         |
| `ReactDOM.render()` (React 17 API)       | Use `ReactDOM.createRoot()` (React 18)|
| Using `moment.js`                        | Use native `Date` or `date-fns`       |

## 4. File Extension Convention
```
Component (has JSX)      → .jsx
Data / hooks (no JSX)    → .js
Styles                   → .css  (Tailwind utilities first; .css only for what Tailwind can't express)
```

## 5. Before Making Any Change, Ask:
1. **Is this content or structure?** Content → `Info.js`. Structure → component.
2. **Can Tailwind express this?** If yes, use a utility class. If no, add a `.css` file.
3. **Does this add complexity?** If so, is that complexity justified by a concrete need?
4. **Will the user have to edit more than `Info.js` to customize this?** If yes, reconsider.

## 6. Preferred Patterns

### Adding a skill / hobby / social / project
→ Edit `src/info/Info.js` only. No component changes needed.

### Adding a new page
1. `src/components/pagename/PageName.jsx`
2. Route in `MultiPageRoutes.jsx`
3. Nav entry in `Navbar.jsx` `links` array

### Dark mode in a component
```jsx
// Use Tailwind dark: variants — never check darkMode prop in leaf components
<p className="text-dark dark:text-light">...</p>
```

## 7. What "Simple" Means Here
- One file to customize content (`Info.js`)
- No build-time TypeScript checks
- No state management library
- No CSS-in-JS
- No component library
- A new developer should be able to read the entire codebase in under 30 minutes
