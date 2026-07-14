# SEO Standard — Abril Digital Co.

This document records the technical SEO / metadata / accessibility baseline
implemented for this project. It's meant to double as the **SEO checklist
template for future client projects** built on this same starter.

Stack: Vite + React 19 (client-rendered SPA, no SSR). Some techniques below
are chosen specifically to fit that constraint — see notes inline.

---

## 1. Domain configuration (read this first)

Everything domain-dependent (canonical URL, Open Graph/Twitter URLs, JSON-LD
`url`, `robots.txt`, `sitemap.xml`) is driven by a **single env variable**:

```
VITE_SITE_URL=https://www.abrildigital.co
```

- Set in [`.env`](.env) (committed, since it's a public placeholder, not a
  secret). [`.env.example`](.env.example) documents the variable.
- To point the site at a real/different domain: **edit that one line**, then
  rebuild. Nothing else needs to change.
- `index.html` uses Vite's built-in `%VITE_SITE_URL%` HTML env-replacement
  for the four domain-dependent tags (canonical, `og:url`, `og:image`,
  `twitter:image`).
- `robots.txt` and `sitemap.xml` are **generated at build time** by a small
  plugin in [`vite.config.js`](vite.config.js) (`seoFilesPlugin`) that reads
  the same env var — they don't exist as static files in `public/`, they're
  emitted into `dist/` on every `npm run build`.
- `src/data/site.js` reads the same var via `import.meta.env.VITE_SITE_URL`
  for anything needed at runtime in React (currently: JSON-LD).

## 2. Metadata (`index.html`)

Added: unique `<title>`, meta `description`, meta `keywords`, `author`,
`theme-color`, `viewport` (already present), canonical URL, and fixed
`<html lang="en">` → `<html lang="es">` (the site is entirely in Spanish —
this was wrong before and matters for both screen readers and search engines
identifying the page language).

## 3. Open Graph + Twitter Cards

Full OG tag set (`og:type`, `og:title`, `og:description`, `og:url`,
`og:image` + width/height/alt, `og:site_name`, `og:locale`) and Twitter Card
tags (`summary_large_image` + title/description/image) are in `index.html`.

**`public/og-image.jpg`** (1200×630) is a generated placeholder — dark
background matching the site's CTA/nav color, brand mark + wordmark. It's
referenced via `%VITE_SITE_URL%/og-image.jpg` so replacing it later is just:
drop a new 1200×630 image at `public/og-image.jpg` with the same filename.

`twitter:site` / `twitter:creator` were **not** added — there's no real
Twitter/X handle yet (see §13).

## 4. Favicon / manifest

All generated from the existing `public/favicon.svg` brand mark (no new
artwork/branding introduced):

- `favicon.svg` (existing, primary)
- `favicon-16x16.png`, `favicon-32x32.png` (PNG fallback for browsers/OS
  contexts that don't support SVG favicons)
- `apple-touch-icon.png` (180×180)
- `icon-192.png`, `icon-512.png` (manifest icons)
- `public/site.webmanifest` — name, short_name, theme/background color,
  icons array. Linked via `<link rel="manifest">`.

## 5. `robots.txt`

Generated at build time (see §1). Content:

```
User-agent: *
Allow: /

Sitemap: https://www.abrildigital.co/sitemap.xml
```

## 6. `sitemap.xml`

Generated at build time (see §1). Contains a single `<url>` entry for the
homepage — this is a one-page SPA, so the in-page anchors (`#servicios`,
`#proyectos`, etc.) are correctly **not** listed as separate sitemap
entries (they aren't distinct crawlable documents per Google's guidelines).
If real separate pages are added later, extend `seoFilesPlugin` in
`vite.config.js` with more `<url>` entries.

## 7. Structured data (JSON-LD)

`src/components/seo/StructuredData.jsx` renders a `schema.org/Organization`
JSON-LD script, reading from `src/data/site.js` and `src/data/contact.js` —
edit those two files and the structured data updates automatically.

Included: `name`, `url`, `logo`, `image`, `description`, `email`,
`telephone`, `contactPoint`.

**Intentionally omitted** (per "don't hardcode fake information"):
- `sameAs` (social profile links) — only included once `site.js`'s
  `social` object has real URLs in it. Currently all empty → omitted.
- `address` — only included once **both** `streetAddress` and
  `addressLocality` are filled in on `site.js`. The `addressCountry: "CO"`
  default alone does not trigger it (a bug I caught and fixed during
  review — an earlier version emitted an address block with mostly empty
  fields, which is exactly the kind of fake-looking data to avoid).

## 8. Semantic HTML

- `Navbar` now renders `<header>` wrapping a `<nav aria-label="Navegación
  principal">` (was a bare `<nav>` with no header landmark).
- `Footer`'s link list is wrapped in `<nav aria-label="Enlaces del pie de
  página">`.
- All page sections render as `<section>` (via the existing `Section`
  component's `as="section"` default) with `id` anchors.
- Added `<main id="main-content">` wrapping all page sections in `App.jsx`.
- Service cards (`ServiceCard.jsx`) already used `<article>` — correct,
  left as-is.
- **Exactly one `<h1>`** (the Hero title). Every section heading below it is
  `<h2>`, card/subsection titles are `<h3>` — verified with a full grep
  across `src/` for heading levels, no skipped levels anywhere.

## 9. Accessibility

- **Skip link**: "Saltar al contenido principal" — first focusable element
  on the page, jumps to `#main-content`. Implemented as a dedicated
  `.skip-link` CSS class in `src/index.css` (not Tailwind's `sr-only` +
  `not-sr-only` combo — see the note in §14 about why).
- **`aria-label`s** added to every WhatsApp/email CTA button/link across the
  site (Navbar, Hero, CTA section, Pricing cards, Footer email), stating
  what happens and that it opens a new tab, e.g. *"Agenda una asesoría
  gratuita por WhatsApp (se abre en una pestaña nueva)"*. Visible button
  text is marked `aria-hidden` where a fuller `aria-label` supersedes it, to
  avoid double-announcement by screen readers.
- **Focus-visible states**: `Button.jsx` now has a
  `focus-visible:outline focus-visible:outline-2 …` ring in the site's
  existing blue-600 accent color, so keyboard users always get a visible
  focus indicator (previously relied on the browser's unstyled default,
  which does work but isn't guaranteed consistent cross-browser).
- **Reduced motion**: the new AccentStroke shine animation is disabled
  under `@media (prefers-reduced-motion: reduce)`.
- **Color contrast**: reviewed. One borderline pair (`text-stone-500` on
  white, ~4.6:1) is pre-existing site-wide design, not something introduced
  by this pass — left unchanged since the brief was "don't change visual
  design," but flagged here for awareness if it ever needs tightening.
- **`<html lang="es">`** fixed (was `en` — see §2).

## 10. Images

Every `<img>` in the codebase now has: descriptive `alt`, `width`/`height`
(intrinsic pixel dimensions, prevents layout shift even though CSS often
overrides the rendered size), `decoding="async"`, and the correct loading
strategy:

- **Above-the-fold** (inside the Hero's mockup demo — `MiniHero.jsx`,
  `MiniCard.jsx`/`MiniSection.jsx`): `loading="eager"`. The main hero mockup
  image additionally has `fetchPriority="high"` since it's the most likely
  LCP (Largest Contentful Paint) element.
- **Below-the-fold** (`Portfolio.jsx` — the case-study card and its 3-image
  gallery): `loading="lazy"`.

**Also fixed a real bug while auditing this**: four image files
(`coffee-espresso`, `coffee-latte`, `coffee-cheesecake`,
`coffee-cheesecake2`) were saved with a **`.png` extension but are actually
AVIF-encoded** (confirmed via file signature — `ftypavif`). This "worked"
by accident because Chrome sniffs image bytes regardless of the declared
extension, but it's fragile: some CDNs/hosts serve `Content-Type` purely
from file extension, which would send `image/png` for bytes that are
actually AVIF and could break rendering in stricter browsers or break
image-optimization pipelines. Renamed all four to `.avif` and updated their
imports in `Portfolio.jsx` and `MiniSection.jsx`.

The Hero/Portfolio image (`coffee-hero.png`, originally a 1.85 MB
uncompressed PNG) had already been re-encoded as an optimized JPEG
(~122 KB) in an earlier pass of this project — noted here for completeness
since it's part of the same "images" story.

## 11. Performance

- Image loading strategy + compression: see §10.
- No custom web fonts are loaded (the site uses the system font stack via
  Tailwind's default), so there's nothing to preload/optimize there.
- `width`/`height` on every image reduces cumulative layout shift (CLS).
- Production bundle (as of this pass): ~215 KB JS / ~67 KB gzip, ~28 KB CSS
  / ~6 KB gzip. No unused dependencies — `sharp` was used twice during this
  session purely to generate static image assets (icons, OG image, and to
  read AVIF/JPEG intrinsic dimensions) and was **removed** immediately after
  each use (`npm uninstall sharp`) — it is not a project dependency.
- No client-side data fetching, timers, or subscriptions exist, so there's
  no unnecessary re-render surface to optimize.

## 12. Design changes made in this same session (not SEO, but related)

Per an explicit separate request in the same conversation (not part of the
"don't change visual design" SEO constraint):
- A subtle traveling "shine" animation was added along the decorative
  `AccentStroke` SVG path (Hero and CTA sections), respecting
  `prefers-reduced-motion`.
- The "Proceso" section was redesigned from a 4-column grid into a
  connected timeline (vertical on mobile, horizontal with a connecting line
  on desktop).

## 13. What still needs manual setup after deployment

- **Real domain**: update `VITE_SITE_URL` in `.env` once the site is live
  on its real domain (currently a placeholder: `https://www.abrildigital.co`).
- **Google Search Console**: verify the domain and submit
  `https://<domain>/sitemap.xml` once deployed.
- **Google Analytics / any analytics**: not installed — none was requested,
  and adding a tracking script wasn't part of this SEO pass. Add a
  measurement ID if/when analytics is wanted.
- **Business address**: `src/data/site.js` → `address` object is present
  but empty. Fill in `streetAddress` + `addressLocality` (at minimum) once
  there's a real registered address, and it will automatically start
  appearing in the JSON-LD (see §7) — no other code changes needed.
- **Social profile links**: `src/data/site.js` → `social` object
  (Instagram/Facebook/LinkedIn/TikTok/Twitter) is empty. Fill in real URLs
  and they'll automatically appear in JSON-LD `sameAs`.
- **Twitter/X handle**: add `twitter:site` / `twitter:creator` meta tags in
  `index.html` once a real handle exists.
- **Real OG image**: `public/og-image.jpg` is a generated placeholder.
  Swap in a professionally designed 1200×630 image with the same filename.
- **Business email/phone**: already wired to real values
  (`aaronaabril@gmail.com`, WhatsApp `+57 324 243 9723`) as given during
  this session — update `src/data/contact.js` if these ever change.
- **Lighthouse / PageSpeed Insights**: run a real audit once deployed to a
  production URL — the review in this document is a manual, reasoned audit
  (file sizes, markup, meta tags, image strategy), not an actual Lighthouse
  run, since that requires a deployed URL or a full Chrome automation
  environment this session didn't have reliable access to. Based on what
  was implemented, there's no known blocker to hitting the target scores
  (Performance 90+, Accessibility 95+, Best Practices 100, SEO 100), but it
  should be confirmed for real once live.

## 14. Notable bugs found and fixed during this pass

Worth recording since they're the kind of subtle issue that could recur in
future projects built on this template:

1. **JSON-LD fake-address bug**: the initial `hasAddress` check considered
   the `address` object "present" if *any* field was truthy — but
   `addressCountry` always defaults to `"CO"`, so it always evaluated true
   and emitted a `PostalAddress` with mostly blank fields. Fixed to require
   both `streetAddress` and `addressLocality`, and to strip empty fields
   from whatever's left. See §7.
2. **Tailwind same-property class collision**: `focus:not-sr-only
   focus:fixed` on the skip link — both utilities set the `position`
   property under the same `:focus` specificity, so which one "wins" isn't
   guaranteed by class order in the `className` string (Tailwind resolves
   ties by generated stylesheet order, not source order). Rewrote as a
   plain `.skip-link` / `.skip-link:focus` CSS rule in `index.css` instead
   of composing colliding utilities. This is the same class of bug as an
   earlier one found in this project's `Button.jsx` (a `secondary` variant
   button had its background/text color silently overridden by a
   conflicting custom `className`, rendering invisible white-on-white
   text) — worth remembering as a pattern to watch for: **never compose two
   Tailwind utilities that target the same CSS property at the same
   variant/specificity level and expect a predictable winner.**
