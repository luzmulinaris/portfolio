# Luz Mulinaris — Portfolio

Bilingual (EN/ES) graphic-design portfolio for **Luz Mulinaris**, built with Astro,
React (islands), Tailwind CSS v4 and TypeScript, deployed to GitHub Pages.

🔗 **Live:** https://luzmulinaris.github.io/portfolio/

## Stack

| Concern        | Choice                                                        |
| -------------- | ------------------------------------------------------------- |
| Framework      | [Astro](https://astro.build) 6 (static output)                |
| Interactivity  | React 19 via Astro Islands                                    |
| Styling        | Tailwind CSS v4 (via `@tailwindcss/postcss`)                  |
| Language       | TypeScript (`strict`)                                         |
| Content        | Astro Content Collections (`projects` Markdown, `blog` MDX)   |
| i18n           | Astro i18n — `/en` (default) & `/es`                          |
| Fonts          | Big Shoulders Display + JetBrains Mono (`@fontsource`), Karmina Sans (Adobe Typekit) |
| Hosting        | GitHub Pages via GitHub Actions                               |

## Design tokens

- **Primary:** `#EE65A0` (pink) · **Secondary:** `#EDEADE` (cream) · ink `#161310`
- **Display / titles:** `Big Shoulders Display Variable` (heavy industrial grotesque)
- **Body:** `karmina-sans` (loaded from Adobe Typekit in `BaseLayout.astro`)
- **Labels / meta:** `JetBrains Mono`

All tokens live in [`src/styles/global.css`](src/styles/global.css) under Tailwind v4 `@theme`.

## Commands

```bash
npm install          # install dependencies
npm run dev          # dev server → http://localhost:4321/portfolio/
npm run build        # astro check + astro build → ./dist
npm run build:fast   # astro build only (no type-check)
npm run preview      # serve ./dist locally
```

> Local URLs are under the base path: open **`/portfolio/`** (with the trailing slash) — it redirects to `/portfolio/en/`.

## Project structure

```
src/
├─ components/
│  ├─ react/            # client islands: ScrollName, LeadReveal, MobileNav
│  ├─ sections/         # Hero, NameBand, WorkPreview, AboutTeaser, Experience…
│  ├─ Navbar.astro  Footer.astro  ProjectCard.astro  SectionLabel.astro  Marquee.astro
├─ content/
│  ├─ projects/*.md     # 13 projects, localized {en, es} frontmatter
│  └─ blog/{en,es}/*.mdx
├─ data/cv.ts           # bio, experience, education, skills, courses (bilingual)
├─ i18n/                # ui strings + helpers (localePath, alternatePath…)
├─ layouts/BaseLayout.astro
├─ pages/
│  ├─ index.astro       # → /portfolio/en/
│  ├─ 404.astro
│  └─ [lang]/           # index, about, work/[slug], blog/[slug]
├─ styles/global.css
└─ content.config.ts
public/
├─ projects/*.webp      # project covers + galleries (from the source PDF)
├─ images/              # portrait
└─ favicon.svg
```

## Editing content

- **Add a project:** create `src/content/projects/<slug>.md` (copy an existing one),
  drop its cover at `public/projects/<slug>.webp`, set `order`/`featured`.
- **Add a post:** create `src/content/blog/<lang>/<slug>.mdx` with `lang: en|es`.
- **CV / about:** edit [`src/data/cv.ts`](src/data/cv.ts).
- **UI labels:** edit [`src/i18n/ui.ts`](src/i18n/ui.ts) (keep `en` and `es` in sync).

## Deploy (GitHub Pages)

1. Push to the `main` branch of `github.com/luzmulinaris/portfolio`.
2. In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. The workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and deploys automatically.

`site` and `base` are configured in [`astro.config.mjs`](astro.config.mjs)
(`https://luzmulinaris.github.io` + `/portfolio`). If the repo is renamed, update `base`.
