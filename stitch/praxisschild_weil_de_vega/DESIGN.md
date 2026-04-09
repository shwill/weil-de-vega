# Praxisschild — Hausarztpraxis Dr. Caroline Weil de Vega

## Brand Identity

A family doctor's practice in Offenburg, Germany. Dr. Caroline Weil de Vega is a Fachärztin für Allgemeinmedizin (board-certified general practitioner). She describes herself as 'well-grounded, no-fluff, reluctant to overshow herself.' The website is NOT a marketing vehicle — it is a quiet, searchable place for contact information. Nothing more.

## Design Philosophy: 'Praxisschild / Analogue Paper'

Think of an elevated printed practice card — the kind of small, grounded, timeless printed matter you'd find hand-lettered on a Hausarztpraxis door. Not editorial, not fashionable, not 'designy.' The OPPOSITE of a SaaS landing page, marketing site, or tech-startup minimalism.

Reference words: **grounded · still · printed · honest · unhurried · quiet · warm-neutral · letterpress · newspaper column**

Anti-references (NEVER do): medical stock photos, cool hospital blue, bold hero sections, CTA-driven marketing, gradients, drop shadows, animated scroll reveals, rounded cards, colored backgrounds other than cream, Playfair Display, icons, tech-startup minimalism, hero images, team photos, testimonials, newsletter signups, social media links, cookie banners at top, language switchers, search bars, breadcrumbs, navigation menus.

## Color Usage

Five working colors. **That is all.** No other colors anywhere.

- **Paper (Cream #F5F1E8)**: The single page background. Warm, near-white, faintly yellowed like old paper. The whole page sits flat on this color.
- **Paper Sunk (Cream #EEE8D8)**: An OPTIONAL slightly darker shade, to be used at most ONCE on the page to give one section (Sprechzeiten) a subtle 'recessed' feel. A variant of each home screen will be requested WITH and WITHOUT this band so we can compare.
- **Ink (Near-black #1A1613)**: Primary text color. Warm near-black with a brown undertone, never pure black.
- **Ink Muted (Warm gray #6B6258)**: Secondary text, labels, footnotes, muted captions.
- **Oxblood (Deep wine #6B1E2D)**: The single accent color. Used ONLY for: (1) a short 64×2px rule directly under the practice name H1, (2) the small filled circle that indicates live 'open/closed' status, (3) link color, (4) the single 'Jetzt anrufen' pill button background. Nothing else is oxblood.
- **Hairline (Muted cream #D9D0BE)**: 1px rules between sections, nothing else. These rules should feel like printing rules on a letterpress card, not like web dividers.

## The 'No Decoration' Rule

**Explicit instruction:** The ENTIRE PAGE has a single-ornament budget. The ONE decorative element permitted is a short 64px × 2px horizontal oxblood rule directly under the practice name H1. Nothing else is decorative.

- NO drop shadows. Anywhere.
- NO gradients. Anywhere.
- NO rounded corners EXCEPT on the single 'Jetzt anrufen' pill button (which is fully rounded, border-radius 999px).
- NO icons. The ONLY non-text glyph on the entire site is a small filled circle (●) for the open/closed status indicator.
- NO illustrations, photos, stock imagery, avatars, team pictures.
- NO hero sections with background images.
- NO decorative backgrounds, patterns, or textures.
- NO cards with borders or backgrounds.
- NO color-filled sections (except the single optional paper-sunk band variant).

## Typography: Printed Practice Card

- **Display (Practice name ONLY)**: Newsreader, used at a single large display size for the H1 'Dr. Caroline Weil de Vega.' This is the one moment of typographic weight on the entire page. Calm, modern serif with editorial warmth. Medium weight (500), grounded rather than expressive.
- **Body**: Inter, at a comfortable reading size (17px body). Line-height 1.55. Very legible, including for elderly patients.
- **Section labels** ('SPRECHZEITEN', 'KONTAKT', 'STANDORT'): Inter, uppercase, letter-spaced (~0.14em), small size (~14-15px), muted color. Feel like labels on a printed card, not like marketing headlines.
- **Labels for data rows** ('Telefon', 'Fax', 'E-Mail', 'Adresse'): Inter medium, muted color, small size.
- **Footnotes**: Inter italic, muted color, small size.
- **Tabular numerals** on the opening-hours table (columns must line up mechanically).
- **No italics anywhere** except the single 'Hausbesuche' cell in the Thursday row and the footnote below the table.

## Layout Principles

- **Narrow content column**: Approximately 640px max width, centered horizontally. The whole site should feel like a newspaper column or a printed card, NOT a full-width web page.
- **Generous vertical whitespace** between sections (~96-128px on desktop, ~64px on mobile).
- **Hairline rules between sections**, flush to the 640px content column, 1px, `--hairline` color.
- **No top navigation, no menu, no header bar.** The first section ('Praxis-Titel') is just content — practice name at the top of the page with no nav above it.
- **Single vertical scroll** — all content on one page.
- **8px vertical rhythm** for all paddings and margins.

## Page Structure (Home)

All pages share the same typography and colors. The home page has these sections in order, separated by hairline rules:

1. **Praxis-Titel** — H1 practice name (Newsreader large), 64x2px oxblood rule directly under it, 'Fachärztin für Allgemeinmedizin' in muted body, 'Am Waldbach 5 · 77654 Offenburg' in muted body with letter-spacing.
2. **Sprechzeiten** — Small uppercase label 'SPRECHZEITEN', live status line with oxblood dot ('● Jetzt geöffnet · bis 19:00'), a two-column hours table with tabular numerals (Mo-Fr only, no Sa/So), and an italic muted footnote: 'Donnerstag Vormittag: Hausbesuche und Sprechzeiten nach Vereinbarung.'
3. **Kontakt** — Small uppercase label 'KONTAKT', four labeled rows (Telefon / Fax / E-Mail / Adresse — label left in muted small sans, value right in ink, phone and email in oxblood), and one pill-shaped CTA 'Jetzt anrufen' (oxblood bg, cream text, fully rounded).
4. **Standort** — Small uppercase label 'STANDORT', a consent card that is NOT a live map (consent card with text 'Die Karte wird von Google geladen. Beim Anzeigen werden Daten an Google übertragen.' and a small 'Karte laden' button, 16:9 aspect ratio, 1px hairline border).
5. **Footer** — Small muted text: '© 2026 Hausarztpraxis Dr. Caroline Weil de Vega · Impressum · Datenschutz' with Impressum and Datenschutz as oxblood links.

## Practice Data (Locked — use these exact values)

- **Practice name**: Hausarztpraxis Dr. Caroline Weil de Vega
- **Doctor**: Dr. Caroline Weil de Vega
- **Title**: Fachärztin für Allgemeinmedizin
- **Address**: Am Waldbach 5, 77654 Offenburg
- **Telefon**: 0781 / 948 00 11
- **Fax**: 0781 / 970 507 12
- **E-Mail**: Praxis.WeilDeVega@gmx.de
- **Kammer**: Landesärztekammer Baden-Württemberg
- **Aufsicht**: Kassenärztliche Vereinigung Baden-Württemberg

**Sprechzeiten (exact):**
- Mo: 08:00–12:00 / 16:00–19:00
- Di: 08:00–12:00 / —
- Mi: 08:00–12:00 / —
- Do: Hausbesuche (italic) / 15:00–18:00
- Fr: 08:00–12:00 / —
- Sa/So: OMITTED from the rendered table (not shown).

## Do's and Don'ts

### Do:
- **Do** make the whole page feel like a still, grounded printed card.
- **Do** use the narrow 640px content column everywhere.
- **Do** use hairline rules as section dividers, flush to the content column.
- **Do** use generous vertical whitespace between sections.
- **Do** use tabular numerals on the hours table.
- **Do** use a single large serif moment (the practice name) and sans everywhere else.
- **Do** render the Google Maps section as a CONSENT CARD with a 'Karte laden' button, NOT as a live map embed.

### Don't:
- **Don't** add a top navigation bar or menu. The first element on the page is the practice name H1, nothing above it.
- **Don't** add a hero image, background image, or any imagery.
- **Don't** add icons next to anything (except the one status dot).
- **Don't** use cards with borders, rounded corners, or shadows for the content sections. The sections sit flat on the paper background, separated only by hairline rules.
- **Don't** add a language switcher, search bar, or breadcrumbs.
- **Don't** add a cookie banner at the top of the page.
- **Don't** add testimonials, social media, newsletter signups, or any marketing elements.
- **Don't** add a team or 'About' section.
- **Don't** add a services grid or tiles. This is a doctor's practice but we are deliberately NOT listing services on the home page.
- **Don't** use blue. This is a warm cream/ink/oxblood palette, never medical blue.
- **Don't** use drop shadows or any form of elevation. The entire page is flat.

## Language

German only. All text must be in German. No language switcher.