# Hausarztpraxis Dr. Caroline Weil de Vega — Design Brief

**Date:** 2026-04-09
**Status:** Draft for review
**Purpose:** Brief for Stitch to generate visual layout and design system. A separate implementation spec will be written **after** the Stitch export using Stitch's layout decisions as source of truth.

## 1. Context

Dr. Caroline Weil de Vega is a Fachärztin für Allgemeinmedizin in Offenburg. An initial homepage draft exists at `github.com/shwill/am-waldbach-5-online-hub` — a Vite + React + TypeScript + Tailwind + shadcn/ui scaffold that looks generic (Playfair + Inter + cool medical blue), ships with a development ThemeSwitcher FAB, has orphaned content components, and is full of placeholder contact data. The draft will be heavily refactored based on the Stitch output; this brief exists so Stitch has enough context to propose a real design.

## 2. Who Caro is

**One line:** Well-grounded, no-fluff. Reluctant to represent herself.

The site is not a marketing vehicle. Caro does not want to be on it — no photo, no bio, no philosophy, no "welcome message." She describes the website as "a place to have contact information available and searchable." The job of this site is to let a patient find the phone number, the hours, and the address — and leave. Every design decision should be filtered through: *does this serve that job, or does it make Caro "overshow"?*

## 3. Goals & non-goals

**Goals**
- One static page a patient can open, scan in 10 seconds, and close with the info they needed
- Live "open now / closed now" status so patients don't call into a closed practice
- Legal compliance (Impressum + Datenschutz as sub-routes)
- GDPR-conscious: no third-party requests before user consent
- Usable by elderly patients — high contrast, generous type, simple phone/email taps
- Hosted as a static build on GitHub Pages
- A design language distinct from every other generic German Arztpraxis template

**Non-goals**
- Online booking (Doctolib/Samedi/jameda)
- Patient portal, forms, logins
- Photos of Caro, the team, or the practice interior
- Services marketing copy
- Personal bio, philosophy, or welcome text
- Multi-language support (German only)
- Analytics, tracking, telemetry of any kind
- CMS / editable content — copy hard-coded in source

## 4. Practice data (locked, source of truth)

| Field | Value |
|---|---|
| Practice name | Hausarztpraxis Dr. Caroline Weil de Vega |
| Doctor | Dr. Caroline Weil de Vega |
| Title | Fachärztin für Allgemeinmedizin |
| Address | Am Waldbach 5, 77654 Offenburg |
| Telefon | 0781 / 948 00 11 |
| Fax | 0781 / 970 507 12 |
| E-Mail | Praxis.WeilDeVega@gmx.de |
| Kammer | Landesärztekammer Baden-Württemberg |
| Aufsicht | Kassenärztliche Vereinigung Baden-Württemberg |

**Sprechzeiten**

| Tag | Vormittag | Nachmittag |
|---|---|---|
| Mo | 08:00–12:00 | 16:00–19:00 |
| Di | 08:00–12:00 | — |
| Mi | 08:00–12:00 | — |
| Do | Hausbesuche & n.V. | 15:00–18:00 |
| Fr | 08:00–12:00 | — |

Saturday and Sunday are omitted from the table. The open/closed status indicator handles weekends implicitly.

Footnote to be shown near the table: *"Donnerstag Vormittag: Hausbesuche und Sprechzeiten nach Vereinbarung."*

## 5. Information architecture

Single page, vertical scroll. Five sections in this order:

1. **Praxis-Titel** — practice name, "Fachärztin für Allgemeinmedizin", address line. (Note for Stitch: this is the content block at the top of the page, *not* a top navigation bar. The page has no nav.)
2. **Sprechzeiten** — live open/closed status + weekday hours table + Thursday footnote
3. **Kontakt** — Telefon, Fax, E-Mail, Adresse + a single "Jetzt anrufen" call-to-action
4. **Standort** — Google Maps iframe behind a GDPR consent gate ("Karte laden")
5. **Footer** — © line, Impressum link, Datenschutz link

Plus two sub-routes reached only from the footer:
- `/impressum`
- `/datenschutz`

No top navigation, no menu, no header bar. The page fits in roughly one desktop scroll.

## 6. Design language

### 6.1 Mood

**"Praxisschild / analogue paper."** Think of an elevated printed practice card — the kind of small, quiet, grounded printed matter that feels timeless and honest. Not editorial, not fashionable, not "designy." The opposite of a SaaS landing page.

Reference words: *grounded · still · printed · honest · unhurried · quiet · warm-neutral*

Anti-references: *medical stock photo · cool hospital blue · bold hero · CTA-driven marketing · gradient · drop shadow · animated scroll reveal · Playfair Display · tech-startup minimalism*

### 6.2 Color

A small, warm palette of six tokens. All other colors are out of bounds.

| Role | Suggested hex | Usage |
|---|---|---|
| Paper (background) | `#F5F1E8` | page background, warm cream |
| Paper sunk (optional alt band) | `#EEE8D8` | **Stitch to decide** whether to use this as a subtle background shift on one section (e.g. Sprechzeiten) for rhythm, or to keep the page flat on a single cream |
| Ink | `#1A1613` | primary text — near-black with a warm undertone |
| Ink muted | `#6B6258` | secondary text, labels, footnotes |
| Oxblood | `#6B1E2D` | the single accent — live open-status dot, the rule under the practice name, links, the phone CTA |
| Hairline | `#D9D0BE` | 1px rules between sections |

No gradients. No drop shadows. No blue at all. The oxblood is used sparingly — it is the only chromatic moment on the page and should feel like a signature, not a highlight color.

### 6.3 Typography

Two families, both **self-hosted** as woff2 files. Never hotlinked from Google Fonts or Adobe Fonts (DSGVO).

- **Display serif** (practice name only): **Fraunces** (variable, SIL OFL, from the official [undercasetype/Fraunces](https://github.com/undercasetype/Fraunces) repo). A modern high-contrast serif, tuned to feel grounded rather than expressive. Starting axis settings: `opsz=144, wght=500, SOFT=0, WONK=0` — Stitch may adjust but should stay on the grounded end.
- **Body sans**: **Inter Tight** (variable, SIL OFL, from [rsms/inter](https://github.com/rsms/inter)). Neutral, tight, legible at small sizes.

Fallback stack: system serif / system sans.

Typographic feel notes for Stitch:
- The practice name is the only display-size element on the page — one moment of typographic weight and nothing else
- Section labels (Sprechzeiten / Kontakt / Standort) should feel like **labels on a printed card** rather than marketing headlines — small, calm, possibly letter-spaced uppercase sans
- Tabular numerals required on the hours table so the columns line up
- No italics except the "Hausbesuche" cell in Thursday and the footnote

### 6.4 Rhythm & decoration

- **One ornament budget:** the page gets **exactly one non-text visual element** — a short oxblood hairline rule directly under the practice name. Nothing else decorative.
- **Hairline rules** (1px, `--hairline`) separate sections. They should feel like printing rules, not dividers.
- **No shadows.** Anywhere.
- **No rounded corners** except on the single "Jetzt anrufen" pill CTA.
- **No icons.** The only non-text glyph is a small filled circle (`●`) for the open/closed status. If Stitch needs to mark the phone / fax / email rows, prefer text labels ("Telefon", "Fax", "E-Mail") over icons.
- **Narrow content column.** Think newspaper column, not full-width hero. The whole site should feel like a printed card, not a web app.

### 6.5 Things Stitch should figure out

Deliberately left open for Stitch to propose — these are layout-level decisions that belong to the visual phase, not this brief:

- Whether to use the optional **paper-sunk band** on Sprechzeiten (or any other section) vs. keeping the whole page flat on `--paper`. **Show at least one variant with the sunk band** so we can evaluate.
- Exact typographic scale (H1 size, body size, label size, scale between mobile and desktop)
- Exact vertical spacing / section padding
- How the hours table is structured visually (rows, columns, label placement)
- How the contact rows are structured visually (labeled grid, inline, stacked)
- Placement and treatment of the phone CTA button
- How the map consent card looks (border treatment, typography of the notice)
- Where hairline rules go, how long they are, and how they relate to the content column
- Mobile adaptation — how the above compresses at narrow widths

## 7. Technical constraints for Stitch

These aren't visual decisions but they shape what is buildable:

- Output target: **static HTML/CSS/JS** built by Vite, hosted on GitHub Pages. No server, no DB, no runtime API.
- **No hotlinked fonts or assets.** Everything self-hosted in `/public/`.
- **No third-party JS loaded before user consent.** Specifically, the Google Maps iframe must sit behind a consent gate until the user clicks "Karte laden".
- **No cookies. No localStorage.** The consent flag is ephemeral per page load.
- **No analytics or tracking** of any kind.
- **No React runtime libraries beyond React itself, react-router-dom, and Tailwind.** No `@tanstack/react-query`, no `sonner`, no `tailwindcss-animate`, no Framer Motion.

## 8. What we're asking Stitch to produce

A design system + screen mockups, as a Stitch project:

1. **Design system** (`caro-praxisschild` or similar): colors (the 6 tokens above), typography (Fraunces + Inter Tight), and a spacing scale Stitch proposes on our behalf.
2. **Screen 1 — Home (desktop)**: the full one-page layout with all 5 sections (Praxis-Titel, Sprechzeiten, Kontakt, Standort, Footer).
3. **Screen 2 — Home (mobile)**: the same content reflowed for a narrow viewport.
4. **Screen 3 — Impressum (desktop)**: how a legal sub-page looks within the same system (a reference for Datenschutz).
5. **Variant for evaluation**: one version of Screen 1 **with** the paper-sunk band on Sprechzeiten, one version **without**, so we can see both and decide.

Stitch output is then **exported** and becomes the visual source of truth. The subsequent implementation spec will reference the Stitch export for concrete values (sizes, spacing, alignment).

## 9. Post-Stitch: next steps

After the Stitch export is in:

1. Evaluate the variants (paper-sunk band vs. flat) and pick one.
2. Write an **implementation spec** (`2026-04-XX-caro-homepage-implementation.md`) that translates the Stitch design into a concrete React + Tailwind build plan:
   - Refactor scope against the existing `shwill/am-waldbach-5-online-hub` draft (delete ThemeSwitcher, orphaned components, 4 demo themes, ~45 unused shadcn primitives)
   - Concrete design tokens in `src/index.css`
   - Component breakdown (`PracticeHeader`, `Sprechzeiten`, `Kontakt`, `LocationMap`, `Footer`)
   - `useOpenStatus` hook spec with test cases (Mo 09:00 open, Mo 12:30 closed, Do 10:00 house-calls, etc.)
   - GitHub Pages build + deploy workflow
   - Self-hosted font acquisition plan (download Fraunces + Inter Tight woff2 into `/public/fonts/` with OFL.txt files)
3. Run writing-plans to break implementation into bite-sized tasks.
4. Implement.

## 10. Success criteria

A patient lands on the site and within **10 seconds** can:
1. See that this is Dr. Caroline Weil de Vega's practice and that she is a Fachärztin für Allgemeinmedizin.
2. See whether the practice is open right now.
3. Find the phone number and tap to call.
4. Find the address and open routing to it.

Nothing else. If the design adds anything beyond that, it is working against Caro's "no fluff" stance.
