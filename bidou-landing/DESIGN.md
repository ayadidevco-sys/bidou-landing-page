---
name: Modern Pet Boutique Companion
colors:
  surface: '#fff8f5'
  surface-dim: '#e4d8d1'
  surface-bright: '#fff8f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fef1ea'
  surface-container: '#f8ece5'
  surface-container-high: '#f2e6df'
  surface-container-highest: '#ece0da'
  on-surface: '#201a17'
  on-surface-variant: '#57423b'
  inverse-surface: '#362f2b'
  inverse-on-surface: '#fbeee8'
  outline: '#8b7269'
  outline-variant: '#dec0b6'
  surface-tint: '#a43d10'
  primary: '#a43d10'
  on-primary: '#ffffff'
  primary-container: '#f57848'
  on-primary-container: '#611d00'
  inverse-primary: '#ffb59b'
  secondary: '#605c6d'
  on-secondary: '#ffffff'
  secondary-container: '#e6dff4'
  on-secondary-container: '#666273'
  tertiary: '#5a6149'
  on-tertiary: '#ffffff'
  tertiary-container: '#98a084'
  on-tertiary-container: '#303722'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#812900'
  secondary-fixed: '#e6dff4'
  secondary-fixed-dim: '#cac3d8'
  on-secondary-fixed: '#1c1a28'
  on-secondary-fixed-variant: '#484455'
  tertiary-fixed: '#dee6c7'
  tertiary-fixed-dim: '#c2caac'
  on-tertiary-fixed: '#171e0b'
  on-tertiary-fixed-variant: '#424a33'
  background: '#fff8f5'
  on-background: '#201a17'
  surface-variant: '#ece0da'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.03em
  stat-numeric:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '800'
    lineHeight: 32px
    letterSpacing: -0.03em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1rem
  margin: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style

This design system expresses a refined, warm, and highly tactile aesthetic tailored to premium pet parenting. Blending modern boutique editorial polish with gentle, welcoming Material 3 physical ergonomics, the interface elevates routine dog care into an emotionally resonant, joyful ritual.

### Emotional Palette & Persona
- **Warm & Reassuring:** Cream bases and espresso typography banish clinical coldness; interactions feel like a calm home environment.
- **Tactile & Responsive:** Surfaces possess subtle, rounded depth, inviting touch with generous tap targets (minimum 48dp) and soft elastic feedback.
- **Thoughtfully Playful:** Functional pastel surface accents (peach, lavender, pistachio) bring delight to activity logs, habit loops, and biometric tracking without feeling childlike or noisy.
- **Editorial Clarity:** High-contrast, expressive headlines paired with calm, highly legible data points respect the user's attention during busy walks, vet visits, and feeding times.

## Colors

The color architecture is built strictly for high-clarity daylight visibility, emotional warmth, and contextual signaling.

### Functional Roles & Contexts
- **Primary Brand (`#F57848` - Terracotta Orange):** Reserved for primary interactive elements, crucial status indicators, active state toggles, and hero action buttons. Always paired with crisp white text (`#FFFFFF`) for contrast compliance.
- **Canvas (`#FFF8F0` - Warm Cream):** The global canvas background. Provides a soft, warm environment that reduces eye strain compared to pure sterile white.
- **Surface White (`#FFFFFF`):** High-priority cards, floating sheets, modal dialogs, and elevated inputs resting atop the cream canvas.
- **Neutral Foreground (`#29231F` - Dark Espresso):** High-contrast text, icons, and active outlines. Avoids stark pitch black in favor of deep roasted warmth.
- **Pale Peach Surface (`#FFE4D5`):** Indoor activities, feeding schedules, medication alerts, and soft warm status backgrounds.
- **Soft Lavender Surface (`#ECE5FA`):** Physiological tracking (elimination, digestive rhythm, hygiene), sleep intervals, and playful secondary metric tags.
- **Pale Pistachio Surface (`#E6EECF`):** Successful completion badges, outdoor walk logs, training milestones, and optimal health status indicators.
- **Structural Stroke (`rgba(41, 35, 31, 0.08)`): Used sparingly to define boundary edges between subtle stacked tone surfaces where elevation shadows are deliberately omitted.

## Typography

Typography relies on **Plus Jakarta Sans** across all levels, marrying geometric precision with organic warmth.

### Editorial & Quantitative Guidelines
- **French Typographical Hierarchy:** Titles employ sentence-case capitalization with generous line heights to accommodate accents and ascenders (e.g., *« Bonjour, Bidou ! »*, *« 8 mois • Cavalier King Charles »*).
- **Stat & Biometric Figures:** Use `stat-numeric` with open tabular figures (`tnum`) for tracking weight (e.g., *7,4 kg*), walk distances (*2,8 km*), and routine timers.
- **Hierarchy Separation:** Pair `headline-lg-mobile` or `headline-md` directly with muted `body-md` secondary copy in espresso at 70% opacity (`rgba(41, 35, 31, 0.70)`) to maintain clean visual breathing room.

## Layout & Spacing

The layout is built for fluid touch ergonomics on handheld mobile devices, prioritizing single-hand thumb navigation in bottom zones.

### Grid Model & Adaptive Behavior
- **Mobile Grid (Primary):** 4-column fluid layout with an outer canvas screen margin of `1.25rem` (20dp) and column gutters of `1rem` (16dp).
- **Edge Distances:** Floating elements, FABs, and action bars observe a safe bottom margin of at least `1.5rem` (24dp) plus device system bar insets.
- **Rhythm & Grouping:**
  - Micro-gaps between label and value: `space-xs` (4dp) or `space-sm` (8dp).
  - Internal card padding: `space-md` (16dp) to `space-lg` (24dp).
  - Vertical section stack spacing: `space-lg` (24dp) to `space-xl` (32dp) to separate distinct routines (e.g., *Sorties*, *Nutrition*, *Santé*).

## Elevation & Depth

This system intentionally rejects muddy, heavy drop shadows in favor of tonal layering and soft ambient depth.

### Tonal Hierarchy
- **Level 0 (Canvas):** `#FFF8F0` Warm Cream background. All base views stem here.
- **Level 1 (Structural Cards & Modules):** Pure `#FFFFFF` surfaces layered directly over Level 0, framed with a hairline border: `1dp solid rgba(41, 35, 31, 0.08)`.
- **Level 2 (Active & Contextual Blocks):** Tinted pastel plates (`#FFE4D5`, `#ECE5FA`, `#E6EECF`) nested inside Level 1 cards to differentiate data types without adding borders or elevation changes.
- **Level 3 (Floating Sheets & Navigation Bars):** `#FFFFFF` with an ambient, warm diffusion: `box-shadow: 0px 8px 24px rgba(41, 35, 31, 0.06)`. Keeps persistent controls softly decoupled from underlying scrolling cards.

## Shapes

The shape system adopts hyper-tactile, pill-forward roundness to create an approachable, gentle silhouette across every surface.

### Corner Radii Architecture
- **Major Surfaces & Master Cards:** 24dp to 32dp (`rounded-xl` and above) creating soft, friendly visual anchors.
- **Interactive Tiles & Activity Pickers:** 20dp to 24dp for comfortable finger landing zones.
- **Pills & Chips:** Fully rounded radius (`9999px`) for action buttons, status tags, segment filters, and modal grab indicators.
- **Nested Inner Containers:** Nested sub-surfaces scale down their radius by 8dp relative to their parent container (e.g., an internal tag inside a 24dp card uses a 16dp radius) to preserve concentric visual harmony.

## Components

### Buttons
- **Primary Action (CTA):** Full pill (`rounded-full`), minimum height of 52dp. Solid `#F57848` fill with bold `#FFFFFF` text. Micro-interaction: scales down to 0.98 on press with an immediate tactile feedback response.
- **Secondary Action:** Pill-shaped, `#FFFFFF` background with `1.5dp solid rgba(41, 35, 31, 0.12)` stroke and `#29231F` text.
- **Tonal Activity Buttons:** Pill-shaped, using contextual pastel backgrounds (`#FFE4D5`, `#ECE5FA`, `#E6EECF`) with `#29231F` label for low-friction, multi-option event logging.

### Chips & Filters
- **Status Chips:** Pill containers with height 32dp, horizontal padding `space-md` (16dp). Inactive states use `#FFFFFF` with a faint border. Active states swap to `#29231F` background with `#FFF8F0` text, or filled contextual pastels matching the category.

### Cards & Modules
- **Overview Dog Profile Card:** 32dp corner radius. Crisp `#FFFFFF` surface with micro-stroke (`rgba(41, 35, 31, 0.08)`). Houses dog avatar, name (*« Bidou »*), age, breed, and quick action chips.
- **Routine Metric Tiles:** 24dp corner radius. Colored surfaces assigned by metric:
  - *Sortie / Balade:* `#E6EECF` (Pistachio)
  - *Besoins / Digestion:* `#ECE5FA` (Lavender)
  - *Repas & Friandises:* `#FFE4D5` (Peach)
  - *Santé / Vétérinaire:* `#FFFFFF` with primary brand badge.

### Lists & Activity Rows
- **List Items:** Enclosed in white card containers. Separators use `rgba(41, 35, 31, 0.05)`.
- **Row Anatomy:** Left-aligned 44dp circular avatar/icon container (tinted pastel), middle two-line text (bold title + muted timestamp/detail), right-aligned quantitative value or status chevron.

### Form Inputs & Selectors
- **Input Fields:** 52dp height, 20dp corner radius, filled with `#FFFFFF` against canvas or `#FFF8F0` inside white modal sheets. Border uses default `1dp solid rgba(41, 35, 31, 0.12)`, transitioning to `2dp solid #F57848` on focus.
- **Checkboxes & Radios:** 24dp circular selectors. Selected state fills with `#F57848` holding a white checkmark or center pip.