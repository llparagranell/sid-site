# DevGrowth Solutions — design contract

Read this before touching any component. It is the contract every section is built against.
Tokens live in `src/index.css` (`@theme`). `tailwind.config.js` no longer exists — do not recreate it.

## 1. Who this is for

DevGrowth Solutions is a small product-engineering studio (Jabalpur, India) that builds MVPs for
founders and growing businesses: web, mobile, AI, cloud, e-commerce, custom software. The site's
single job: make a founder feel "these people ship real products" and book a call.

Voice: confident, plain, specific. Short sentences. No hype words ("dominate", "world-class",
"cutting-edge"), no exclamation marks, no emoji. The brand line "Develop. Grow. Dominate." may
appear once as a signature, never as body copy.

## 2. Visual direction (what we borrowed, and from where)

- **Resend** — pitch-black band, serif display headline, one 3D object (the cube) on the right.
- **Tibicle** — rotating word in the headline, logo strip + stats band, tabbed tech stack, dark work strip.
- **WorldQuant Foundry** — uppercase/mono labels, scroll-choreographed reveals, audience-segmented CTAs.
- **Nina Creative** — diagonal watermark text, letter-spaced word reveal, services as a few big category words.
- **GQ "Extraordinary Lab"** — hairline "blueprint" wireframe aesthetic, short preloader, chaptered (I / II / III) structure.

The page alternates **dark bands** and **light bands**. Contrast between bands does the work —
inside a band everything is quiet: hairlines, one accent, lots of air.

## 3. Tokens (Tailwind class names)

| Role | Light band | Dark band |
|---|---|---|
| Ground | `bg-paper` (#f4f4f8) | `bg-ink` (#0b0b14) |
| Raised surface | `bg-surface` (#fff) | `bg-ink-2` (#151520) |
| Hover / deeper | `bg-accent-soft` | `bg-ink-3` (#22223a) |
| Primary text | `text-ink` | `text-paper` |
| Secondary text | `text-muted` (#6b6e86) | `text-muted-dark` (#9a9cb5) |
| Hairline | `border-line` (#dcdde8) | `border-line-dark` (#26263a) |
| Accent | `bg-accent` / `text-accent` (#4f46e5) | `text-accent-bright` (#8b85ff) |
| Accent hover | `bg-accent-deep` | `bg-accent-bright` |

Shortcuts: `band-dark` = `bg-ink text-paper`; `band-light` = `bg-paper text-ink`.
Never hard-code hex or `white/…` opacity colors in components — use the tokens above
(`bg-paper/5` and `border-paper/10` on dark are fine when you need a translucent fill).

## 4. Type

| Role | Class | Notes |
|---|---|---|
| Display (H1, H2) | `type-display` | Instrument Serif 400, tracking −0.02em, leading 0.95. **Never** combine with `font-bold`/`font-black` — the face has no bold. Italic `<em>` for the emphasised word. |
| H1 size | `text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem]` | |
| H2 size | `text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem]` | `SectionHeading` already does this. |
| H3 / card titles | `font-sans text-xl md:text-2xl font-semibold tracking-tight` | Outfit |
| Body | `text-base md:text-lg leading-relaxed` | Outfit 400. Secondary copy in `text-muted` / `text-muted-dark`. |
| Eyebrow / labels / tags | `type-eyebrow` | JetBrains Mono 11px, uppercase, tracking .16em. |
| Numbers (stats, indices) | `type-mono` | tabular numerals. |

Keep running text ≤ ~60ch (`max-w-[56ch]`). Headings get `text-wrap: balance` via `type-display`.

## 5. Layout & spacing

- Section: `<section className="band-light section-pad">` (or `band-dark`). `section-pad` = py-24/32/40.
- Column: `<Container>` = max 1280px, px-6 / md:px-10 / lg:px-14. Import from `src/components/ui/Container`.
- Use flex/grid + `gap`; no stacked margins between siblings.
- Radii: cards `rounded-2xl` (16px) max; pills `rounded-full`. **No** `rounded-[40px]`+ blobs.
- Hairline dividers (`border-t border-line`) structure content — not background grids.
- Mobile first. Check 390px and 1440px. No horizontal scroll ever; wide rows scroll inside their own `overflow-x-auto` container.

## 6. Motion

- Use `Reveal` / `Stagger` from `src/components/motion/Reveal.jsx` (fade-up 24px, 0.7s, ease [0.22,1,0.36,1], once, margin −80px). `EASE`, `VIEWPORT`, `staggerChild` live in `src/components/motion/constants.js`. One reveal per block — not per word, not per icon.
- Hover: `translate` ≤ 4px or a color change. Scale ≤ 1.02. No glow blobs, no `blur-3xl` orbs.
- **No** infinite floating icons, no pulsing, no random durations. A marquee is the only allowed infinite animation.
- Respect reduced motion: framer-motion is wrapped in `<MotionConfig reducedMotion="user">` at the root; CSS animations are killed by a global media query. Anything using `requestAnimationFrame`/WebGL must check `matchMedia("(prefers-reduced-motion: reduce)")` itself.
- Smooth scrolling is Lenis. To scroll to an anchor use `scrollToTarget("#contact")` from `src/lib/scroll.js` — not `scrollIntoView`.

## 7. Shared primitives (use them; don't fork them)

```
src/components/ui/Container.jsx        <Container className>…</Container>
src/components/ui/Eyebrow.jsx          <Eyebrow tone="light|dark">Label</Eyebrow>
src/components/ui/SectionHeading.jsx   <SectionHeading eyebrow title={<>Ship <em>faster</em>.</>} lede tone align size="md|lg" />
src/components/ui/Button.jsx           <Button variant="primary|accent|ghost" tone="light|dark" arrow to|href|onClick>Label</Button>
src/components/motion/Reveal.jsx       <Reveal>, <Stagger>
src/components/motion/constants.js     EASE, VIEWPORT, staggerParent(), staggerChild
src/lib/scroll.js                      scrollToTarget(selectorOrEl), scrollToTop()
src/lib/cx.js                          cx("a", cond && "b")
```

## 8. Accessibility & quality bar

- Every `<button>` has `type`. Icon-only controls have `aria-label`. Decorative SVG/icons get `aria-hidden="true"`.
- Images have real `alt`. Contrast ≥ 4.5:1 for text (muted-on-paper and muted-dark-on-ink both pass).
- Keyboard: anything interactive is reachable and shows `:focus-visible` (global ring is provided).
- No `key={index}` when items have stable ids/titles.
- Zero ESLint errors: run `npx eslint <your files>` before returning.
- No console errors or warnings in the browser.

## 9. Ownership rules for parallel work

- Edit **only** the files assigned to you. Create new files only under the paths you were given.
- Do **not** edit `src/index.css`, `src/pages/Home.jsx`, `src/App.jsx`, `index.html`, `package.json`.
  If you need a token, a global style, a dependency, or a change in Home/App, put it in your return
  value under `integrationNotes` and the integrator will apply it.
- Keep default export names and props exactly as specified in your task so the integrator can wire you in blind.
- Delete dead code you replace inside your own files. Don't leave commented-out blocks.
