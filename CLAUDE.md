# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Rebuild Tailwind CSS** (run after any HTML class changes):
```bash
npx tailwindcss -i assets/css/input.css -o assets/css/tailwind.css
```

Watch mode for active development:
```bash
npx tailwindcss -i assets/css/input.css -o assets/css/tailwind.css --watch
```

**Utility scripts** (run from project root):
```bash
node rewrite-layout.js   # Regenerates the 7 service sections in index.html from its embedded JS data array
node switch-icons.js     # Replaces Remix Icon tags with inline Lucide SVGs (one-time migration helper)
```

There are no tests and no linter configured.

## Architecture

Static single-page marketing website (Spanish) for a beauty salon/spa. No backend, no bundler, no framework — HTML, vanilla JS, and Tailwind CSS.

### Content pipeline

**Service sections are code-generated.** `rewrite-layout.js` contains a hardcoded `services` array (7 entries: Barbería, Uñas, Faciales, Depilación, Armonización Facial, Lashista & Cejas, Alaciados & Keratina). Running the script rebuilds those sections in `index.html` via regex replacement. To add or change a service's prices, description, or benefits, edit the array in `rewrite-layout.js` and re-run it — do not edit those sections directly in `index.html`.

Other sections (navbar, hero, promotions grid, contact, footer) live only in `index.html` and must be edited there directly.

### CSS pipeline

`assets/css/input.css` (2-line entry point) → Tailwind CLI → `assets/css/tailwind.css` (committed, auto-generated). Custom components and overrides go in `assets/css/styles.css`. Font-face declarations are in `assets/css/fonts.css`.

`tailwind.config.js` defines the design tokens:
- **Colors:** `gold` (#C9A84C + light/dark variants), `dark` (#0A0A0A / card / surface / border), `warm` (gray / light / white)
- **Fonts:** `heading` = Cormorant Garamond (serif), `body` = DM Sans (sans-serif)

Always rebuild `tailwind.css` after adding new Tailwind utility classes to HTML.

### JS layer (`assets/js/main.js`)

Plain script, no modules, runs on `DOMContentLoaded`. Five independent features:

| Feature | Key selectors |
|---|---|
| Mobile drawer | `#menu-toggle`, `#menu-close`, `#mobile-drawer`, `#mobile-overlay` |
| Navbar scroll | `.navbar` → adds `.scrolled` class at >60px scroll |
| Scroll reveal | `.reveal`, `.reveal-left`, `.reveal-right` — IntersectionObserver, one-time animation |
| FAQ accordion | `.faq-item` / `.faq-question` / `.faq-answer` — one-open-at-a-time |
| Promo filter | `.promo-filter-btn` + `.promo-card[data-category]` — show/hide by category |

Global `window.openWhatsApp(service)` pre-fills a WhatsApp message to +52 777 159 4874. Every price card calls this function.

### Icons

All icons are inline SVGs embedded directly in HTML with classes `inline-icon` or `section-icon`. `switch-icons.js` is a one-time migration tool that reads from `node_modules/lucide-static/icons/`. Remix Icon references may still exist in sections not yet migrated.
