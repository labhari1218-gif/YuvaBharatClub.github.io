# Codex Implementation Prompt

Paste this into Codex after providing the repo and the planning docs.

```text
You are implementing the official website for Yuva Bharat Club using Astro + GitHub Pages.

Read these files first and treat them as source of truth:
1. PROJECT-BRIEF.md
2. AGENTS.md
3. README.md

Project goals:
- Build a modern, mobile-first, accessible public website for Yuva Bharat Club.
- Keep the site privacy-safe and do not expose raw chat content, phone numbers, internal planning messages, or controversial/political internal material.
- Use the club logo colors and build a strong, clean visual identity.
- Support English as the main language and allow selective Hindi support where content is explicitly provided.
- Make content easy to maintain for future student teams.

Technical requirements:
- Astro v5
- Static site output
- GitHub Pages deployment using the official Astro GitHub Action
- Astro content collections for structured content
- No CMS in v1
- Content stored in Markdown/JSON/YAML
- Strong schema validation using `src/content.config.ts`

Build requirements:
- Create the project structure described in PROJECT-BRIEF.md
- Add pages: Home, About, Events, Event Detail, Initiatives, Gallery, Reports, Team, Join, Contact, 404
- Build reusable components for hero, cards, galleries, CTAs, and section headings
- Create an editable settings collection/file for site-wide content and links
- Seed the repo with safe placeholder content based on the brief
- Add clean responsive styling using the specified brand palette
- Use the official logo in the header, footer, and hero where appropriate
- Keep the design modern and calm, not poster-like or cluttered
- Optimize for good Lighthouse performance and accessibility

Content rules:
- Public-safe only
- No raw WhatsApp text
- No personal phone numbers
- No internal approval chain details
- No unapproved political/controversial topics
- No random asset dumping
- No fake claims or invented history

Repo/documentation requirements:
- Update README.md to match the built project
- Preserve and respect AGENTS.md instructions
- Keep PROJECT-BRIEF.md unchanged unless implementation requires a clearly justified addendum
- Add comments only where they improve maintainability
- Keep naming clear and future-student-friendly

Before finishing:
- verify all routes build
- verify the deploy workflow is present
- verify images/links use the right path strategy for GitHub Pages
- verify homepage clearly explains what Yuva Bharat Club is in the first screen
- verify the site feels coherent in both desktop and mobile
```
