# Yuva Bharat Club Website

Public-facing Astro site for **Yuva Bharat Club**, designed for GitHub Pages deployment and long-term student maintainability.

The project is built from the planning brief in this repo and intentionally keeps content privacy-safe. It uses structured content collections, English-first copy with selective Hindi support, and placeholder media where final approved assets are not yet ready.

## Stack

- Astro v5
- static output
- Astro content collections
- plain CSS with design tokens
- GitHub Pages deployment via GitHub Actions

## Local development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

## Content editing

Editable content lives in `src/content/`:

- `settings/site.json`: site-wide text, social links, featured home content
- `pages/*.md`: about, join, contact copy
- `events/*.md`: event summaries and event detail content
- `initiatives/*.md`: recurring themes and program pages
- `reports/*.md`: public report summaries and optional PDF references
- `gallery/*.json`: album metadata and alt text
- `team/*.json`: approved public-facing team entries

Keep these rules intact:

- no raw WhatsApp messages
- no personal phone numbers
- no internal approval notes
- no unapproved photos
- no invented claims, history, or metrics

## GitHub Pages configuration

The site reads deployment settings from environment variables:

- `SITE_URL`: full site URL, for example `https://org.github.io`
- `BASE_PATH`: optional repo subpath for project pages, for example `yuva-bharat-club-site`

If those variables are not provided during GitHub Actions deployment, the project derives sensible defaults from the repository metadata:

- `SITE_URL` defaults to `https://<owner>.github.io`
- `BASE_PATH` defaults to the repo name for project pages
- `BASE_PATH` defaults to empty for a matching `owner.github.io` repo

Examples:

- root/custom-domain deployment: leave `BASE_PATH` empty
- project pages deployment: set `BASE_PATH` to the repo name

The included workflow is at `.github/workflows/deploy.yml`.

## Project structure

```text
public/
  logo/
  images/
  reports/
src/
  components/
  content/
  layouts/
  lib/
  pages/
  styles/
  content.config.ts
```

## Maintainer checklist

Before publishing content changes, verify:

- names and photos are approved for public display
- all links are correct
- no private data appears anywhere in the diff
- alt text is present for meaningful images
- placeholder handles and emails are replaced with approved public ones when available
- `npm run build` passes locally

## Planning docs

These repo-root files remain the source of truth for scope and content boundaries:

- `PROJECT-BRIEF.md`
- `AGENTS.md`
- `CODEX-IMPLEMENTATION-PROMPT.md`
