# VIP SERVICE — Luxury Transfer Website

Dark-mode, high-conversion marketing site for "VIP SERVICE" (Roman Brinzík), an executive
passenger transfer operator serving Bratislava, Vienna, Budapest, and Prague corridors.

## Stack

- **Next.js 14** (App Router, `src/` directory), **TypeScript** (strict), **Tailwind CSS**
- **Framer Motion** for scroll-driven entrance animations and micro-interactions
- **Lucide React** for iconography
- Client-side i18n via a custom `LanguageContext` (no routing-based i18n; single route, locale
  switched client-side and persisted to `localStorage`)

## Architecture & Component Tree

```
src/
├── app/
│   ├── layout.tsx        Root layout: fonts, SEO metadata, JSON-LD (TaxiService +
│   │                     LimousineService), wraps children in <LanguageProvider>
│   ├── page.tsx           Assembles the single-page site (order = section order)
│   └── globals.css        Design tokens, scrollbar, selection, .text-gradient-gold,
│                          .section-container utility
├── components/
│   ├── Navbar.tsx              Floating blur header, smooth-scroll nav, language switcher,
│   │                          gold "Book Transfer" CTA, mobile drawer
│   ├── Hero.tsx                 #home — headline, trust markers, dual CTA, phone/WhatsApp chips
│   ├── Fleet.tsx                 #fleet — single-vehicle showcase: image/spec card + a
│   │                          6-item onboard-amenities grid with hover reveal
│   ├── Routes.tsx                #routes — fixed-rate corridor cards
│   ├── About.tsx                  #about — 4 trust pillars (discretion, punctuality,
│   │                          flight monitoring, meet & greet)
│   ├── BookingForm.tsx             #booking — corridor selector → date/time → passengers/
│   │                          luggage → contact → 1-tap WhatsApp dispatch link
│   ├── Footer.tsx                   #footer — company info, quick links, contact, legal notice
│   ├── FloatingWhatsApp.tsx          Fixed bottom-right pulsing WhatsApp quick-dispatch button
│   ├── LuxuryImagePlaceholder.tsx    Reusable image + CSS/SVG fallback (see below)
│   └── RevealSection.tsx             Shared scroll-entrance wrapper (framer-motion)
├── context/
│   └── LanguageContext.tsx    React context: locale state, localStorage persistence,
│                              browser-language auto-detect on first load
├── messages/
│   ├── en.ts / de.ts / sk.ts   Per-locale dictionaries, all typed against Messages
├── types/
│   └── messages.ts             `Messages` interface — the dictionary schema (single
│                              source of truth; every locale file must satisfy it)
└── lib/
    └── config.ts                Company contact details + `buildWhatsAppLink()` /
                                 `buildTelLink()` / `DIRECT_WHATSAPP_LINK`
```

Every section is a self-contained component pulling copy from `useLanguage().t`; `page.tsx`
only orders sections. Anchors (`#home`, `#fleet`, `#routes`, `#about`, `#booking`, `#footer`)
drive smooth-scroll navigation from the Navbar and Footer.

## Design Tokens

Defined in `tailwind.config.ts` (`theme.extend`):

| Token | Value | Usage |
|---|---|---|
| `obsidian` | `#050505` | Page background |
| `surface` | `#0F1117` | Card / panel background |
| `border` (DEFAULT) | `#1E2230` | Card borders, dividers |
| `gold` (DEFAULT) | `#D4AF37` | Primary accent, icons, links |
| `gold.dark` | `#C5A059` | Gradient endpoint |
| `slate.body` | `#94A3B8` | Body copy |
| white (`#FFFFFF`) | via `text-white` | Headings |

Custom utilities: `bg-gold-gradient` (135° gold sweep, used on primary CTAs),
`bg-mesh-gold` (radial gold glow, used behind Hero/About), `shadow-gold` /
`shadow-gold-lg` (soft gold glow shadows), `.text-gradient-gold` (gold gradient text
clip, used for price figures and logo mark), `.glass-panel` (frosted-glass card treatment:
`border-border/80` + `bg-surface/80` + `backdrop-blur-md` — the default surface for every
card/panel on the site, replacing flat `bg-surface`), `.focus-gold` (consistent keyboard
focus ring: `focus-visible:ring-2 ring-gold ring-offset-2 ring-offset-obsidian`, applied to
every interactive element site-wide).

Fonts: `Playfair Display` (`font-display`, headings) + `Inter` (`font-sans`, body),
loaded via `next/font/google` in `layout.tsx` and exposed as CSS vars
`--font-playfair` / `--font-inter`.

**Contrast verified** (WCAG): gold `#D4AF37` on obsidian `#050505` = 9.69:1, slate.body
`#94A3B8` on obsidian = 7.95:1, white on surface `#0F1117` = 18.87:1 — every text pairing
in the palette clears AAA (7:1), not just the AA minimum (4.5:1). No color changes were
needed; the original palette was already accessible.

## Motion Settings

- **Scroll entrances**: `RevealSection` (`src/components/RevealSection.tsx`) wraps section
  content, animating from `x: -50` (`direction="left"`) or `x: 50` (`direction="right"`) or
  `y: 40` (`direction="up"`, default) to `0`, `opacity 0 → 1`, `duration: 0.7`,
  `ease: [0.22, 1, 0.36, 1]`, `viewport: { once: true, margin: "-80px" }`. Sections alternate
  left/right per grid item using `idx % 2`. Grid-item stagger delay is `idx * 0.06` (Fleet
  amenities, Routes cards, About pillars) — tightened from an earlier `idx * 0.1` for a
  snappier, more premium reveal rhythm.
- **Micro-interactions**: card hover uses `whileHover={{ y: -6 }}` (Fleet/About) or
  `whileHover={{ scale: 1.02 }}` (Routes), plus CSS `transition-colors duration-200/300` /
  `hover:shadow-gold` for border-glow. Buttons use `hover:scale-105 active:scale-95` with
  `transition-transform` — the `active:scale-95` press state is applied to every clickable
  CTA/button/link site-wide for tactile feedback on click/tap.
- Hero's scroll-hint chevron loops with `animate={{ y: [0, 10, 0] }}`, `repeat: Infinity`.

### Reduced-motion support

Every animation on the site respects `prefers-reduced-motion`, on two layers:

1. **Framer Motion components** (`RevealSection`, `Hero`'s chevron loop) call
   `useReducedMotion()` and skip the transform/loop when the user has reduced motion
   enabled — content still fades in (opacity only) rather than never appearing.
2. **Raw CSS `animate-*` utilities** (the `LuxuryImagePlaceholder` shimmer sweep, the
   `FloatingWhatsApp` pulse ring) carry `motion-reduce:animate-none`.
3. A global fallback in `globals.css` clamps all animation/transition durations to
   `0.01ms` under `@media (prefers-reduced-motion: reduce)`, as a safety net for anything
   not explicitly guarded above.

### Accessibility & interaction polish

- **Focus visibility**: every button, link, and form control carries `.focus-gold` (or an
  inline `focus:ring-1 focus:ring-gold/40` on form inputs) — a 2px gold ring visible only
  on keyboard focus (`:focus-visible`), never on mouse click.
- **Cursor affordance**: all custom `<button>`/interactive `<div>` elements carry
  `cursor-pointer` explicitly (native `<button>` defaults to `cursor: default`, not
  `pointer`, in most browsers).
- **ARIA**: icon-only controls (language switcher, mobile menu toggle, WhatsApp icon links)
  carry `aria-label`; the language switcher and mobile menu also expose `aria-expanded`.
- **`tabular-nums`** on the Routes price figures keeps corridor cards visually aligned
  when locale-switching changes digit widths.
- **`text-balance`** on every major heading (`h1`/`h2`) prevents orphaned single words on
  the last line of wrapped headlines.

## i18n

- **Languages**: `en` (default), `de`, `sk` — see `src/types/messages.ts` for the `Locale`
  union and the full `Messages` schema every dictionary must implement.
- **LanguageContext** (`src/context/LanguageContext.tsx`): client component context provider.
  On mount, reads `localStorage["vip-service-locale"]`; if absent, falls back to
  `navigator.language` when it matches a supported locale, else `en`. `setLocale()` updates
  state, persists to `localStorage`, and sets `document.documentElement.lang`.
- **Usage**: any client component calls `const { t, locale, setLocale } = useLanguage()` and
  reads `t.<section>.<key>`. No dynamic routing (`/de`, `/sk`) — this is a single-page,
  client-switched i18n model by design (per spec).
- **Adding a locale**: add the code to `Locale` in `types/messages.ts`, create
  `src/messages/<code>.ts` implementing `Messages`, register it in `dictionaries` in
  `LanguageContext.tsx`, and add it to `SUPPORTED_LOCALES` + `LOCALE_LABELS` (Navbar).

## Contact Configuration

All company contact details live in `src/lib/config.ts` (`SITE_CONFIG`), the single source
of truth consumed by every touchpoint on the site:

| Field | Value |
|---|---|
| `phoneDisplay` | `+421 911 444 469` |
| `phoneE164` | `+421911444469` |
| `whatsappNumber` | `421911444469` |

- `buildTelLink()` returns `tel:+421911444469`, used by the Hero phone chip, Footer, and
  anywhere a direct dial link is needed.
- `buildWhatsAppLink(message)` URL-encodes an arbitrary message and returns a
  `https://wa.me/421911444469?text=...` link — used by `BookingForm.tsx` to dispatch the
  dynamically composed booking request (route, date, time, passengers, luggage, contact
  details, notes).
- `DIRECT_WHATSAPP_LINK` is a fixed pre-filled inquiry link
  (`https://wa.me/421911444469?text=Hello%20VIP%20Service,...`) used by every *quick-contact*
  touchpoint that isn't the booking form itself: the Navbar header WhatsApp icon, the Hero
  WhatsApp chip, the Footer WhatsApp link, and `FloatingWhatsApp.tsx` (the fixed
  bottom-right pulsing dispatch button rendered globally in `page.tsx`).

To update contact details site-wide, edit only `SITE_CONFIG` and `DIRECT_WHATSAPP_LINK` in
`src/lib/config.ts` — no component changes are needed.

## Image Fallback Strategy

`LuxuryImagePlaceholder` (`src/components/LuxuryImagePlaceholder.tsx`) is the only way
images are rendered on the site:

1. If an `src` prop is passed, it renders `next/image` with `fill` + `onError`.
2. If `src` is omitted, or the `<Image>` fires `onError` (broken/unreachable URL), it renders
   a CSS/SVG fallback: a `bg-mesh-gold` gradient panel, an animated shimmer sweep
   (`animate-shimmer` keyframe), a centered Lucide icon in a gold-ringed circle, and an
   optional uppercase label.
3. Because the current build passes **no external `src` values at all** (Fleet cards render
   icon-only placeholders), `next build` never depends on network image availability —
   it is 100% deterministic and cannot fail on missing/unreachable assets.
4. To add real photography later: pass `src="/vehicles/s-class.jpg"` (local `public/` asset,
   safest) or a remote URL registered in `next.config.mjs` `images.remotePatterns`. The
   placeholder remains as the loading/error fallback either way — no other code changes
   needed.

## SEO & Structured Data

`src/app/layout.tsx` exports `metadata` (title template, description, keywords, OpenGraph)
and injects a JSON-LD `<script type="application/ld+json">` with an `@graph` of one
`TaxiService` and one `LimousineService` entity, both carrying `areaServed` (Bratislava,
Vienna, Budapest, Prague), contact details, and founder info from `src/lib/config.ts`.

## WhatsApp Booking Dispatch

`src/lib/config.ts` exports `buildWhatsAppLink(message)` which URL-encodes a message and
returns a `https://wa.me/<number>?text=...` link. `BookingForm.tsx` composes the full form
state (route, date, time, passengers, luggage, name, phone, notes) into a formatted message
and binds it to the submit CTA's `href` — no backend/API route required; submission is a
plain outbound link opened in a new tab. The form is intentionally a single VIP standard
booking flow — it has no vehicle-class selector, since the site offers one Executive
vehicle rather than a fleet to choose from (see Vehicle Showcase below).

## Vehicle Showcase (Single Executive Vehicle)

`Fleet.tsx` (mounted at `#fleet`) presents one vehicle rather than a multi-car fleet grid:

- **Copy source**: `t.fleet` in `src/types/messages.ts` — `vehicleName`, `vehicleClass`,
  `passengers`, `luggage`, and an `amenities: { title, description }[]` array (6 entries)
  covering Executive Black Edition standard, leather interior & quiet cabin, high-speed
  Wi-Fi & charging, luggage capacity, privacy glass & climate zones, and complimentary
  chilled water. Every locale (`en`/`de`/`sk`) implements this schema; the section title
  translates to "Executive Vehicle & Onboard Experience" (EN), "Premium Fahrzeug & Komfort"
  (DE), "Prémiové Vozidlo & Komfort" (SK).
- **Layout**: a single `LuxuryImagePlaceholder` + spec card (name, class, passengers,
  luggage) on the left, and a responsive 2-column grid of the 6 amenity cards on the right,
  each with a Lucide icon (`Car`, `Armchair`, `Wifi`, `Briefcase`, `Snowflake`,
  `GlassWater`), alternating scroll-reveal directions and `whileHover={{ y: -6 }}` lift.
- To add a second vehicle in the future, `t.fleet` would need to change from a single
  object back to an array (as in the original multi-vehicle draft) — this is a deliberate,
  documented trade-off, not an oversight.

## Verification

```bash
npm run lint     # 0 warnings/errors
npm run build    # next build — must compile, typecheck, and prerender all routes statically
```

Both commands must pass before committing. The build produces a fully static `/` route
(no server-side data fetching), so it can be deployed to any static/edge Next.js host.
