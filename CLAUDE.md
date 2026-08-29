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
│   ├── Hero.tsx                 #home — looping background video, headline, trust markers,
│   │                          animated telemetry stats, dual CTA, phone/WhatsApp chips
│   ├── Fleet.tsx                 #fleet — single-vehicle showcase: exterior + interior
│   │                          image cards, spec sheet, and a 6-item onboard-amenities grid
│   ├── Routes.tsx                #routes — fixed-rate corridor cards with destination thumbnails
│   ├── About.tsx                  #about — 4 trust pillars over an atmospheric photo backdrop
│   │                          (discretion, punctuality, flight monitoring, meet & greet)
│   ├── BookingForm.tsx             #booking — corridor selector → date/time → passengers/
│   │                          luggage → contact → 1-tap WhatsApp dispatch link
│   ├── Footer.tsx                   #footer — company info, quick links, contact, legal notice
│   ├── FloatingWhatsApp.tsx          Fixed bottom-right pulsing WhatsApp quick-dispatch button
│   ├── LuxuryImagePlaceholder.tsx    Reusable image + CSS/SVG fallback (see below)
│   ├── RevealSection.tsx             Shared scroll-entrance wrapper (framer-motion)
│   ├── TiltCard.tsx                  Pointer-driven 3D tilt wrapper (see Immersive UI below)
│   ├── MetricCounter.tsx             Scroll-triggered count-up number (see Telemetry below)
│   ├── RoutePathSVG.tsx              Mini corridor-line SVG with hover pulse (Routes cards)
│   ├── MouseSpotlight.tsx            Cursor-tracking ambient radial glow, used in Hero
│   ├── CarSilhouette.tsx             Inline-SVG cinematic sedan silhouette, used in Hero
│   ├── LuxuryBadge.tsx               Glowing metallic-gold pill tag ("Executive Class", ...)
│   ├── CabinHotspots.tsx             Interactive feature hotspots over the Fleet vehicle image
│   └── GrainOverlay.tsx              Fixed, site-wide film-grain texture (static, no motion)
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
`shadow-gold-lg` (soft gold glow shadows), `.text-gradient-gold` (metallic gold gradient
text clip — `#FDE68A → #FACC15 → #D97706`, used for the Hero headline, price figures, and
badge text), `.glass-panel` (frosted-glass card treatment: `border-border/80` +
`bg-surface/80` + `backdrop-blur-md` — the standard surface for static cards), `.glass-deep`
(a moodier variant — `bg-gradient-to-b from-[#141721]/80 to-[#0A0C10]/90` +
`border-white/[0.08]` + `backdrop-blur-xl` — used specifically inside `TiltCard` for the
flagship 3D-hover cards), `.glow-gold-hover` (adds the gold border-beam +
`shadow-[0_0_30px_rgba(212,175,55,0.15)]` glow on `:hover`, applied by `TiltCard`),
`.focus-gold` (consistent keyboard focus ring: `focus-visible:ring-2 ring-gold
ring-offset-2 ring-offset-obsidian`, applied to every interactive element site-wide),
`.grain-overlay` (SVG `feTurbulence` noise texture, tiled, used by `GrainOverlay`).

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

### Legal entity disclosure

`src/lib/config.ts` also exports `LEGAL_ENTITY` — the statutory registration details
required on Slovak commercial websites (company name, registered address, IČO, DIČ).
Rendered in `Footer.tsx`'s legal column as a plain `<address>` block, always in the same
raw form regardless of locale (`t.footer.licensed` above it is translated; the entity facts
below it are not — a company registration number doesn't translate). Update only
`LEGAL_ENTITY` in `config.ts` to change these details site-wide.

## Image Fallback Strategy

Two components render images, and both follow the same contract: try a real photo — in
**any common format**, tried in turn — and fall back to a CSS/SVG treatment only once every
format candidate fails. Never a broken image icon, never a build failure.

- **`src/lib/image.ts`** is the shared piece: `IMAGE_EXTENSIONS = ["webp", "avif", "jpg",
  "jpeg", "png"]` and `candidateSrc(base, index)`. Every image-rendering component takes a
  `srcBase` prop — a path **without** an extension, e.g.
  `/images/fleet/vehicle-exterior` — and cycles through `IMAGE_EXTENSIONS` on each
  `onError`, remounting the `<Image>` (`key={currentSrc}`) so the browser retries against
  the next candidate. Drop a file in as `.webp`, `.avif`, `.jpg`, `.jpeg`, or `.png` under
  that same base name and it's picked up automatically — no code change, no need to know
  in advance which format the asset will arrive in.
- **`LuxuryImagePlaceholder`** (`src/components/LuxuryImagePlaceholder.tsx`): the general
  card-image component. If `srcBase` is passed, renders `next/image` with `fill` + the
  extension-cycling `onError` above. Once all candidates are exhausted (or `srcBase` is
  omitted), it renders a `bg-mesh-gold` gradient panel, an animated shimmer sweep
  (`animate-shimmer`, `motion-reduce:animate-none` guarded), a centered Lucide icon in a
  gold-ringed circle, and an optional uppercase label.
- **`About.tsx`**'s atmospheric backdrop is a one-off `next/image` + local extension-cycling
  `useState` (not worth its own component for a single full-bleed usage) — once exhausted it
  simply doesn't render, leaving the existing `bg-gold/5 blur` glow as the backdrop.

All paths point to **local `public/` files only** — no remote URLs, no `next.config.mjs`
`images.remotePatterns` needed. Because every reference is a plain string (not a build-time
`import`), `next build` never depends on whether any candidate file actually exists: a
missing file 404s at *request* time and the next candidate (or the CSS/SVG fallback) engages,
exactly like a broken remote URL would.

### Real photography asset spec

| Base path (any of `.webp`/`.avif`/`.jpg`/`.jpeg`/`.png`) | Used by | Aspect | Suggested dimensions | Files currently in `public/` |
|---|---|---|---|---|
| `public/images/hero/hero-executive-mercedes` | `Hero.tsx` `<video poster>` (still frame shown before the video decodes, and if it 404s) | 900:320 (~2.8:1) | ~2400 × 1350 | `.webp` |
| `public/images/fleet/vehicle-exterior` | `Fleet.tsx` exterior card | 4:3 | ~1600 × 1200 | `.jpg` (1600 × 1066) |
| `public/images/fleet/vehicle-interior` | `Fleet.tsx` interior card (carries `CabinHotspots`) | 4:3 | ~1600 × 1200 | `.jpg` (1200 × 896) |
| `public/images/routes/route-vienna-airport` | `Routes.tsx` item 0 | 1:1 | ~400 × 400 | `.jpg` (400 × 400) |
| `public/images/routes/route-vienna-city` | `Routes.tsx` item 1 | 1:1 | ~400 × 400 | `.jpg` (400 × 400) |
| `public/images/routes/route-budapest` | `Routes.tsx` item 2 | 1:1 | ~400 × 400 | `.jpg` (400 × 400) |
| `public/images/routes/route-prague` | `Routes.tsx` item 3 | 1:1 | ~400 × 400 | `.jpg` (400 × 400) |
| `public/images/about/about-atmosphere` | `About.tsx` backdrop | 16:9 | ~1920 × 1080 | `.png` (1920 × 1081) |

**History**: the first upload had all 8 files named with a `.webp` extension while actually
being JPEG/PNG content (verified via `file --mime-type`) — a real defect, since a
mismatched extension serves an incorrect `Content-Type` header on the raw static path
(bypassing the `next/image` optimizer, which transcodes correctly regardless of source
extension). Rather than re-fix extensions by hand every time a new format gets uploaded,
`srcBase` + `IMAGE_EXTENSIONS` cycling was introduced so **any** of the five formats works
under the same base filename going forward.

Route thumbnails are matched to `t.routes.items` **by array index**, not by parsing the
localized city name (`ROUTE_IMAGES[idx]` in `Routes.tsx`) — the four corridors are the same
across all three locales, only their labels translate, so index order is a stable key.

`CabinHotspots` (Nappa Leather / Acoustic Glass / Climate Control / High-Speed Wi-Fi) was
moved from the exterior card onto the new interior card — those are cabin features, so they
now annotate the cabin photo instead of the exterior shot, which is the more sensible
pairing.

To drop in real photography: place files at the exact paths above — no code changes
needed, the components already reference them.

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
- **Layout**: two stacked `LuxuryImagePlaceholder` cards on the left — exterior (with the
  spec sheet: name, class, passengers, luggage) and interior (carrying `CabinHotspots`) —
  and a responsive 2-column grid of the 6 amenity cards on the right, each with a Lucide
  icon (`Car`, `Armchair`, `Wifi`, `Briefcase`, `Snowflake`,
  `GlassWater`), alternating scroll-reveal directions and `whileHover={{ y: -6 }}` lift.
- To add a second vehicle in the future, `t.fleet` would need to change from a single
  object back to an array (as in the original multi-vehicle draft) — this is a deliberate,
  documented trade-off, not an oversight.

## Immersive UI Layer

A set of small, composable components lift the site from flat cards to a layered, cinematic
feel. All of them are reduced-motion-safe and add zero external asset dependencies (in
keeping with the Image Fallback Strategy's "zero broken builds" guarantee — no Unsplash/CDN
photography is used anywhere on the site).

- **`TiltCard.tsx`**: wraps card content in a pointer-driven 3D tilt. `useMotionValue` +
  `useSpring` track the cursor position within the card's bounding box on `onMouseMove`,
  mapped via `useTransform` to `rotateX`/`rotateY` (±10° by default, `maxTilt` prop to
  override — Routes cards use `6°` for a subtler effect on wide cards), plus
  `whileHover={{ scale: 1.02 }}` and the `.glow-gold-hover` border-beam glow. Under
  `useReducedMotion()`, the rotation transform is skipped entirely (no `style` override is
  applied) — only the scale/glow still respond to hover. Used by the Fleet amenity cards,
  Routes corridor cards, and About trust pillars (all now render on `.glass-deep` instead
  of `.glass-panel`).
- **`MouseSpotlight.tsx`**: an absolutely-positioned, `pointer-events-none` radial gradient
  layered into the Hero background. A `window` `mousemove` listener updates spring-smoothed
  motion values, converted to `%` position via `useTransform` and composed into a
  `radial-gradient(...)` string with `useMotionTemplate` (values must be passed as motion
  values, not `.get()` snapshots, to stay reactive — a mistake to watch for when extending
  this). Under `useReducedMotion()`, no listener is attached; a static centered glow renders
  instead — the atmosphere stays, only the tracking is removed.
- **Hero background video**: `Hero.tsx` renders a full-bleed `<video autoPlay muted loop
  playsInline>` (`public/images/hero/hero.mp4`) behind the content, with `poster` set to the
  static `hero-executive-mercedes` image so there's a real frame visible before the video
  decodes. A `videoFailed` state (set by the video's `onError`) unmounts the `<video>`
  entirely if the file 404s, falling back to the `bg-mesh-gold` gradient + ambient glow blobs
  that already render underneath — no broken video icon, no code change needed to swap the
  clip. Two stacked gradient overlays (`bg-gradient-to-r` left-heavy, `bg-gradient-to-t`
  bottom-heavy) darken the footage exactly where the headline/CTAs and the trust-marker row
  sit, so text stays legible without a blur pass dulling the footage. A `useEffect` pauses
  the video on its poster frame under `useReducedMotion()` instead of autoplaying.
- **`.gold-sheen`** (`globals.css`): a reusable utility for primary CTAs — a diagonal
  highlight (`::after`, `linear-gradient` diagonal band) that sweeps from off-canvas-left to
  off-canvas-right on `:hover` via a `transform: translateX` transition. Needs `relative
  overflow-hidden` on the button (which the class provides) and the button's text wrapped in
  a `<span className="relative z-10">` so it renders above the sweep. Applied to the Hero
  primary CTA, the Navbar "Book Transfer" button, and the BookingForm submit button. No
  reduced-motion guard needed — the global `transition-duration: 0.01ms` fallback in
  `globals.css` already clamps it to an instant, imperceptible sweep.
- **`LuxuryBadge.tsx`**: small glowing pill tags (gold border, `.text-gradient-gold` label,
  soft `shadow-[0_0_20px_rgba(212,175,55,0.12)]`). Used in the Hero ("Executive Class",
  "24/7 Private Dispatch", "Flight Tracked") and above the vehicle name in Fleet
  ("Executive Class"). **Design decision**: badge labels are kept in English across all
  three locales — the same treatment as the "VIP SERVICE" wordmark — rather than added to
  the `Messages` schema, since these read as brand marks rather than translatable UI copy.
- **`CabinHotspots.tsx`**: an overlay of four positioned hotspot buttons on the Fleet
  vehicle image ("Nappa Leather", "Acoustic Glass", "Climate Control", "High-Speed Wi-Fi" —
  same English-brand-mark decision as `LuxuryBadge`). Each hotspot is a real `<button>`
  (keyboard-focusable, `aria-label` includes both the label and description, `aria-expanded`
  reflects popover state) that opens a `.glass-deep` detail popover on hover, focus, *or*
  tap/click — click-to-toggle is the touch-device fallback since hover alone isn't
  reachable there. The pulsing ring cue carries `motion-reduce:animate-none`; the popover's
  Framer Motion enter/exit is duration-reduced (not skipped) under `useReducedMotion()` so
  screen readers relying on visible state changes still get one. `popoverPosition` per
  hotspot follows its vertical position (upper-half points open the popover downward,
  lower-half points open it upward) so the popover always has room within the card instead
  of spilling past its edge. The Fleet interior card's outer wrapper does **not** carry
  `overflow-hidden` (unlike the exterior card) — `LuxuryImagePlaceholder` already clips its
  own image internally, and an outer `overflow-hidden` was silently clipping hotspot
  popovers that render outside the image bounds.
- **`GrainOverlay.tsx`**: a single `fixed inset-0` div with the `.grain-overlay` SVG
  noise texture, `opacity-20`, `mix-blend-overlay`, `pointer-events-none`, mounted once in
  `layout.tsx` above `<LanguageProvider>` so it covers the whole site rather than just Hero.
  Purely static (no animation), so it needs no reduced-motion guard.
- **Hero headline**: now rendered with `.text-gradient-gold` (metallic gold clip) instead of
  plain white, per the "high-end luxury typography" brief. Section `<h2>` headings elsewhere
  on the site were deliberately **left white** rather than also gold-clipped — full-page
  gold text would fight the existing gold-restraint principle (gold reserved for accents,
  prices, and the flagship headline) and reduce scan-ability across five sections. This is a
  documented trade-off, not an oversight.

## Telemetry, Metrics & Cabin HUD

A small set of data-flavored components reinforce the "cinematic, high-tech" brief beyond
pure visual polish — animated numbers and route/cabin spec readouts styled like a HUD.

- **`MetricCounter.tsx`**: scroll-triggered count-up. Uses Framer Motion's `useInView`
  (`once: true, margin: "-80px"`) to trigger a `requestAnimationFrame` loop that eases
  (cubic-out) from `0` to a `target` prop over `duration` seconds (default `1.6`), formatted
  with `decimals`/`prefix`/`suffix` props and `tabular-nums` so digit width doesn't jitter
  mid-count. Under `useReducedMotion()` it jumps straight to `target` — no animation loop
  runs at all. Driven by `t.hero.metrics` (`Messages["hero"]["metrics"]`, an array of
  `{ target, decimals, prefix, suffix, label }`): the three stats named in the brief —
  `99.8%` On-Time Punctuality, `24/7` VIP Dispatch, `€0` Flight Delay Surcharge — rendered in
  a new stat row in `Hero.tsx` below the existing trust-marker row. The `24/7` and `€0`
  entries still animate (counting 0→24 and staying at 0 respectively) for rhythm consistency
  with the punctuality counter, even though the numeric motion is minimal/absent for those two.
- **Route corridor telemetry** (`Routes.tsx`): each corridor card now shows the existing
  duration alongside a `distanceKm` figure (`Messages["routes"]["items"][n]["distanceKm"]`,
  e.g. `"60 km"`) using a `Route` (lucide) icon, plus a `RoutePathSVG` mini corridor-line
  underneath. The fixed-rate price is rendered as an interactive pill `<button>` (gold border/
  bg-tint, `hover:scale-105`) that scrolls to `#booking` on click rather than a static price
  label.
- **`RoutePathSVG.tsx`**: a small decorative `viewBox="0 0 120 24"` SVG — a faint static
  curve plus a gold dashed overlay that's `opacity-0` by default and animates
  (`group-hover:[animation:dash_1.4s_linear_infinite]`, using the `dash` keyframe added to
  `tailwind.config.ts` — animates `strokeDashoffset`) when the parent `TiltCard` (which
  carries `group`) is hovered, reading as a pulse traveling along the corridor line.
- **Cabin HUD gauges** (`CabinHotspots.tsx`): each hotspot now carries a `gauge: number`
  (0–100) field alongside its label/description. The popover renders a thin horizontal bar
  (`bg-gold-gradient` fill, width set inline from `gauge`) plus the numeric `gauge%` — a
  HUD-style spec readout rather than plain text, e.g. Nappa Leather 98%, Climate Control 100%.
- **3D tilt on the vehicle showcase**: the Fleet exterior and interior vehicle cards (not
  just the amenity cards) are now wrapped in `TiltCard` (`maxTilt={4}`, gentler than the
  amenity cards' default since these are larger panels) — the "Cabin Experience" module gets
  the same pointer-driven tilt physics as the rest of the site's primary interactive cards.

## Verification

```bash
npm run lint     # 0 warnings/errors
npm run build    # next build — must compile, typecheck, and prerender all routes statically
```

Both commands must pass before committing. The build produces a fully static `/` route
(no server-side data fetching), so it can be deployed to any static/edge Next.js host.
