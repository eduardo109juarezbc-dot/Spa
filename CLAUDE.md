# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start Vite dev server at http://localhost:5173
npm run build    # Production build → dist/
npm run preview  # Serve the production build locally
```

There are no tests and no linter configured.

## Architecture

React 19 + Vite 6 SPA (Spanish) for a beauty salon/spa. Styling with Tailwind CSS v4 via `@tailwindcss/vite` plugin (uses `@import "tailwindcss"` syntax in `src/index.css`, NOT `@tailwind base/components/utilities`).

### Public assets

`vite.config.js` sets `publicDir: 'assets'`, so:
- `assets/img/*.jpeg` → served at `/img/...`
- `assets/fonts/*.woff` → served at `/fonts/...`

All `<img src>` and `url('/fonts/...')` references use these public paths.

### Data layer (`src/data/`)

All content lives in plain JS files — edit here to change prices, promos, hours, etc:

| File | Contents |
|---|---|
| `services.js` | 7 services (Barbería, Uñas, Faciales, Depilación, Armonización, Lashista, Keratina) with prices, benefits, promos |
| `promos.js` | 22 promo cards + `categoryLabels` map |
| `gallery.js` | 18 gallery images with alt text |
| `whyUs.js` | 6 "why us" feature cards with Lucide icon names |
| `contact.js` | Hours, address, phone, social links |

**Important shape difference:** the `depilacion` service uses `blocks: [{subtitle, prices[]}]` instead of the flat `prices[]` that the other 6 services use. `ServiceSection.jsx` handles both.

Services with a `promos` field (barberia, faciales, armonizacion) render a `<PromoStrip>` inside their section.

### Component tree

```
App.jsx  ← mounts IntersectionObserver for .reveal/.reveal-left/.reveal-right
├── layout/Navbar.jsx       ← scroll detection (useState/useEffect), mobile drawer
├── sections/Hero.jsx       ← canvas particle animation (useEffect + requestAnimationFrame)
├── sections/ServicesGrid.jsx
├── sections/ServiceSection.jsx  × 7  ← renders PriceCard + PromoStrip
├── sections/Promotions.jsx      ← filterable grid (useState), renders PromoCard
├── sections/WhyUs.jsx
├── sections/Gallery.jsx
├── sections/Contact.jsx
├── layout/Footer.jsx
└── ui/WhatsAppFAB.jsx
```

### Design tokens (`tailwind.config.js`)

- **Colors:** `gold` (#C9A84C + light/dark), `dark` (#0A0A0A / card / surface / border), `warm` (gray / light / white)
- **Fonts:** `heading` = Cormorant Garamond, `body` = DM Sans

Custom CSS classes and animations live in `src/index.css`. The `--logo-size` CSS variable (default `74px`) controls the navbar logo size.

### WhatsApp integration

`src/utils/whatsapp.js` exports `waUrl(service)` and `WA_GENERAL`. Every price and promo card links to WhatsApp with a pre-filled message. Phone: `527771594874`.

### Scroll reveal

`App.jsx` creates one `IntersectionObserver` on mount that adds `.visible` to any `.reveal`, `.reveal-left`, or `.reveal-right` element when it enters the viewport. Elements start at `opacity: 0` (defined in `src/index.css`) and animate in once. **Do not add `reveal` classes to dynamically filtered/toggled elements** — they will stay invisible after the initial observer pass.
