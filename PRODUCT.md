# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pet owners who have just discovered Bidou — typically through the Google Play Store listing or a shared link. They arrive on the landing page to evaluate whether the app is worth downloading. They care about understanding what the app does, how it looks, and whether it fits the way they relate to their pet.

## Product Purpose

Bidou is an all-in-one pet companion app. It lets pet owners track their pet's health records, daily activities, vet contacts, and memories in a single warm, well-designed mobile app. The landing page's job is to convince a curious visitor to download the app — it earns the tap on "Télécharger sur Google Play."

## Positioning

Bidou brings together health records, activity tracking, vet contact management, and personal pet memories in one place. Unlike single-purpose trackers (health-only or memory-only), it covers the full emotional and practical scope of being a pet owner — all inside a cohesive, beautiful experience.

## Operating Context

- Visitors arrive from Google Play Store links, social shares, and word of mouth.
- The landing page is a marketing surface: one page, one CTA (download on Google Play).
- The app itself is an Android application; this project is its web landing page only.

## Capabilities and Constraints

- Static single-page HTML landing page (no backend, no auth).
- Served via a local dev server (currently `npx serve` on port 5173).
- Uses Tailwind CSS via CDN, Material Symbols Outlined, and Plus Jakarta Sans font.
- App screenshots and icons are hosted locally in `images/` to avoid Google CDN rate limits.
- No build step; plain HTML/CSS/JS only.

## Brand Commitments

- **Name:** Bidou Companion
- **Language:** French — all copy is in French and must remain so.
- **Palette:** Material Design 3 warm terracotta system. Primary `#a43d10`, primary-container `#f57848`, surface `#fff8f5`. This palette is locked and must not be replaced.
- **Typography:** Plus Jakarta Sans across all text.
- **Icons:** Material Symbols Outlined (Google Fonts).
- **Favicon and app icon:** `images/img1.png` — the official Google Play Store icon.

## Evidence on Hand

- Full landing page: `index.html` (direct copy of the Stitch reference design).
- Stitch reference: `.stitch/designs/landing.html` and `.stitch/designs/landing.png`.
- DESIGN.md with full Material Design 3 color token set: `bidou-landing/DESIGN.md`.
- App icon (512×512 PNG): `images/img1.png`.
- Secondary image: `images/img2.png`.

## Product Principles

1. **Warmth over utility** — Every design decision should feel personal and emotionally resonant, not clinical or transactional.
2. **One clear action** — The entire page exists to earn a single tap: download on Google Play. Everything supports that.
3. **French-first** — Language, tone, and copy are in French. Warmth and clarity in French outrank brevity in English.
4. **Brand fidelity** — The terracotta Material Design 3 palette and Plus Jakarta Sans are non-negotiable; never substitute them.
5. **No fabrication** — Do not invent testimonials, statistics, or claims not already present in the reference design.
