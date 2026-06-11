# Sauma Website — Upgrade Roadmap

A prioritized list of design and content upgrades to make the site feel like a high-legitimacy tech company (Palantir / Apple / Linear / Vercel style).

Check off items as they're completed.

---

## Tier 1 — Highest Impact (Do These First)

- [x] **Premium font** — Replace `system-ui` with [Inter](https://rsms.me/inter/) or Geist via Google Fonts or self-hosted. One import in `index.css`. Single biggest trust signal.

- [x] **Ambient gradient orbs** — Slow-moving blurred color blobs (purple/indigo) floating behind hero and other sections. Pure CSS `radial-gradient` + `blur`. Like Linear, Vercel, Stripe.

- [x] **Scroll-triggered section reveals** — Every section fades + slides up as it enters the viewport. `framer-motion` is already installed (`whileInView`, `viewport: { once: true }`).

- [x] **Gradient accent text** — Purple-to-blue CSS gradient on key headline words (e.g. "Autonomous AI systems" or the typewriter cycling text).

---

## Tier 2 — Authority Signals

- [ ] **Stats/metrics row** — Horizontal strip of animated number counters. Example: `500+ Clients`, `3.2M Calls Handled`, `99.9% Uptime`. Big numbers signal scale and legitimacy.

- [ ] **Rewrite the copy** — Language needs to match the design. Replace soft/salesy phrasing with authoritative, precise language.
  - "We handle your marketing" → "Autonomous systems that run your operations."
  - "Get started today" → "Deploy in 48 hours."
  - Industry card descriptions should sound like capability statements, not pitches.

- [ ] **Hero UI mockup** — Add a floating product screenshot, dashboard UI, or phone mockup below/beside the headline text. What Apple, Linear, and Vercel all do. Makes the product feel real and tangible.

- [ ] **Industry card icon overhaul** — Remove clipart/emoji-style icons. Replace with large numbered labels (`01`, `02`, `03`) or clean line-art icons. More editorial, less template.

- [ ] **Sticky "Book a Call" CTA in navbar** — A glowing or gradient-bordered button always visible in the navbar. Should stand out from the nav links.

---

## Tier 3 — Polish & Refinement

- [ ] **Testimonials → static editorial grid** — Replace the carousel/slider with a 3-column quote grid (like a magazine layout). Real headshots if available. Carousels feel dated; grids feel curated.

- [ ] **Noise texture overlay** — 2–3% opacity SVG grain/noise filter layered over the dark background. Adds depth and makes it feel less flat and digital. Very subtle.

- [ ] **FAQ upgrade** — Clean accordion with smooth open/close animation. Minimal styling — no boxes, just a divider line between items. Copy should be direct and confident.

- [ ] **Section heading style** — Tighten `letter-spacing` on all `h2` headings (`-0.02em` to `-0.04em`). Add a subtle overline label above each section (`WHAT WE DO`, `RESULTS`, `INDUSTRIES`) in small caps + muted color.

- [ ] **Button upgrades** — Primary CTAs should have a gradient fill or a sharp glow `box-shadow` on hover. Secondary buttons should be ghost/outline only. No generic blue buttons.

- [ ] **Footer statement** — Add a large, bold closing line above the footer links: something like `"The future of your business runs on Sauma."` Makes the page feel complete.

---

## Already Completed

- [x] Dark theme globally (`#09090b` background, `#fafafa` text)
- [x] Video background in homepage hero
- [x] TextType typewriter effect in hero heading
- [x] Navbar: white logo, white text, glass blur on scroll
- [x] Industry cards: BorderGlow hover effect (dark surface)
- [x] CTA section: animated Beams background (homepage only)
- [x] LogoLoop replacing both logo scrollers (physics-based animation)
- [x] Footer: dark theme, white logo
- [x] All section backgrounds converted to dark

---

## Notes

- Keep animations subtle — fast and purposeful, not decorative
- Every section should have one clear focal point
- White space is a premium signal — don't fill every pixel
- The copy rewrites will have more impact than any visual change
