# AMAYA ESTATES — Master Design System (Haute Indian Luxury Real Estate)

Created using **ui-ux-pro-max** & **design-system** skills guidelines.

---

## 1. Brand Identity & Creative Direction

- **Brand Name**: AMAYA ESTATES (अमाया)
- **Ethos**: Unconstrained, pure architectural stewardship for India's foremost ultra-high-net-worth families, industrialists, and global NRIs.
- **Visual Aesthetic**: Architectural Digest / Sotheby's International Realty caliber. High-fashion architectural luxury, zero tacky AI glowing neon gradients, deep obsidian velvet surfaces, crisp hairlines, and authentic Indian cultural integrity (RERA certification, Vastu Shastra geometry, ₹ Crores / $ Millions duality).

---

## 2. Token Architecture (Three-Layer System)

### Layer 1: Primitive Tokens (Raw Palette)
- **Obsidian Onyx**:
  - `--color-obsidian-950: #07090E`
  - `--color-obsidian-900: #0A0D14` (Page Canvas Base)
  - `--color-obsidian-850: #0E121B`
- **Charcoal Slate**:
  - `--color-charcoal-800: #131824` (Card Base)
  - `--color-charcoal-700: #1A2232`
- **Champagne Bronze / Imperial Gold**:
  - `--color-gold-200: #F3E5C8`
  - `--color-gold-300: #E5D0A1`
  - `--color-gold-400: #D4B673` (Primary Gold Accent)
  - `--color-gold-500: #C5A059`
  - `--color-gold-600: #A8813B`
- **Limestone & Warm Ivory**:
  - `--color-ivory-50: #FAF8F5` (Primary Headings)
  - `--color-ivory-100: #F4EFE6`
  - `--color-pearl-400: #B8B0A2` (Readable Body Copy)
  - `--color-pearl-500: #8E8679` (Metadata & Footnotes)
- **Statutory Emerald (RERA & Vastu Assurance)**:
  - `--color-emerald-400: #34D399`
  - `--color-emerald-500: #10B981`

### Layer 2: Semantic Tokens
- `--surface-canvas`: `#0A0D14`
- `--surface-card`: `#131824`
- `--surface-panel`: `rgba(14, 18, 27, 0.88)`
- `--border-hairline`: `rgba(255, 255, 255, 0.08)`
- `--border-gold-subtle`: `rgba(197, 160, 89, 0.16)`
- `--border-gold-medium`: `rgba(197, 160, 89, 0.35)`
- `--text-primary`: `#FAF8F5`
- `--text-secondary`: `#B8B0A2`
- `--text-muted`: `#8E8679`

### Layer 3: Component Specifications
- **`.luxury-card`**: Solid charcoal slate background, 1px gold/hairline border, no AI radial glow blobs, subtle physical drop-shadow.
- **`.luxury-panel`**: Polished translucent glass with backdrop blur, fine hairline border.
- **`.gold-gradient-btn`**: Solid Champagne Bronze finish with subtle top bevel, dark contrast text (`#07090E`), letter-spacing `0.14em`.
- **`.gold-outline-btn`**: Hairline bronze border, subtle hover tint.
- **`.metadata-pill`**: Discreet architectural tag in monospace with 1px border.

---

## 3. Typography Hierarchy

| Role | Font Family | Weight | Purpose |
| :--- | :--- | :--- | :--- |
| **Display Headings** | `Cormorant Garamond`, Georgia, serif | 300, 400, 600, Italic | Editorial monumentality, property titles, hero headlines |
| **Brand Crest** | `Cinzel`, serif | 600, 700 | Monogram roundel, brand logo, section roman numerals |
| **Body & UI** | `Plus Jakarta Sans`, sans-serif | 400, 500, 600 | High-contrast long-form readability, navigation, form inputs |
| **Data & Financials** | System Monospace (Tabular) | 500, 700 | RERA codes, ₹ Crores / SF carpet area, Vastu scores |

---

## 4. Anti-Patterns Eliminated (Why it no longer looks "AI-Generated")

1. **Eliminated Blurry Radial Blobs**: Removed `hero-warm-glow`, `teak-glow`, and `amber-glow` that created muddy, hazy backgrounds. Replaced with crisp architectural hairlines and subtle geometric grid alignment.
2. **Replaced Generic System Serif**: Eliminated dated default `Georgia` in favor of high-fashion Google Fonts `Cormorant Garamond` and `Cinzel`.
3. **Replaced Rainbow Glow Buttons**: Replaced neon animated button gradients with precision-machined Champagne Bronze physical buttons.
4. **Authentic Institutional Layout**: Redesigned market insights into the **Amaya Prime Index (APRLI Q1 2026)** rather than a generic crypto-style glowing widget.
5. **Authentic Indian Due Diligence**: Integrated real State RERA license formats (MahaRERA, HRERA, Karnataka RERA), 30-year revenue search badges (Cyril Amarchand Mangaldas), Vastu Shastra directional quadrants (Ishanya, Nairutya, Brahmasthan), and ₹ Crores / $ Millions duality.

---

## 5. Multi-Page Verification Matrix

- `/`: Homepage with 3D procedural WebGL villa, architectural bento grid, market index, senior partners.
- `/properties`: Comprehensive filterable luxury catalog by city, typology, and carpet area.
- `/properties/[id]`: Deep architectural dossier with 8K photography, Vastu report, technical specs, and instant PDF dossier generation.
- `/nri-services`: Cross-border family office desk covering FEMA regulations, RBI LRS protocols, and overseas private offices (Dubai, London, Singapore, Silicon Valley).
- `/about`: The Amaya Quarter-Century heritage story, 5 Pillars of Trust, and ₹14,000+ Cr audited transaction track record.
- `/contact`: Confidential HNI client desk with budget selectors, transit logistics (Mercedes S-Class, Speedboat, Helipad), and direct WhatsApp link.
- `/_not-found`: Bespoke 404 luxury recovery screen.

