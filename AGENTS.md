# AGENTS.md

## Mission
Build and maintain a modern, privacy-safe, bilingual-aware public website for **Yuva Bharat Club** using **Astro + GitHub Pages**.

The site should feel:
- student-led
- active
- trustworthy
- modern
- easy to maintain by future student teams

---

## Source-of-truth order
When making decisions, follow this order:

1. `PROJECT-BRIEF.md`
2. `AGENTS.md`
3. `README.md`
4. approved content inside `src/content/`
5. design tokens and existing components

Do not treat WhatsApp chats or raw uploads as direct publishable content.

---

## Non-negotiable public-content rules
Never publish:
- raw WhatsApp messages
- personal phone numbers
- internal-only discussions
- deleted-message context
- private coordination details
- controversial or political internal material
- unapproved photos
- member data without consent
- invented history, fabricated metrics, or fake testimonials

Only publish:
- approved public summaries
- approved event details
- consented team information
- verified public links
- approved media

---

## Tone and brand rules
Use a tone that is:
- warm
- clear
- respectful
- youthful
- grounded
- non-corporate

Do not make the site sound:
- robotic
- government-brochure-like
- overly political
- slogan-heavy
- cluttered

Brand feel:
- thoughtful youth action
- civic energy without partisanship
- campus-first, community-aware

---

## Bilingual rules
Primary language:
- English

Secondary language:
- Hindi, only where explicitly provided or strategically useful

Good bilingual use cases:
- hero support line
- short section labels
- selected event titles
- footer microcopy
- cultural/contextual emphasis

Avoid:
- duplicating the entire site in two languages unless there is full editorial capacity
- mixing Hindi and English randomly in the same sentence unless intentional

Use proper Devanagari rendering and spacing.

---

## Design rules

### Palette
- Saffron: `#DF7813`
- Green: `#237D3F`
- Navy: `#013B69`
- Off-white: `#F7F5EF`
- Soft gray: `#CFD4DB`

### Visual constraints
- modern, clean layout
- generous whitespace
- strong typography
- simple cards
- restrained gradients
- subtle patriotic cues only
- no noisy poster aesthetic

### Avoid
- overusing tricolor motifs
- giant flag graphics everywhere
- busy shadows
- too many fonts
- stock-photo-heavy hero sections
- carousel dependence for key content

---

## UX rules
The homepage must answer these within the first screen:
1. What is Yuva Bharat Club?
2. Who is it for?
3. What can I do here?

All major pages should have:
- clear heading
- short intro
- visible CTA or next step
- mobile-first layout

Navigation should stay simple:
- Home
- About
- Events
- Initiatives
- Gallery
- Reports
- Team
- Join

---

## Technical rules
- Use **Astro v5**
- Use **static output**
- Use **GitHub Pages** deployment
- Use **Astro content collections**
- Use **schema validation** in `src/content.config.ts`
- Use content files for editable material
- Keep code modular and future-student-friendly

Do not add a CMS in v1.

---

## Content architecture rules
Preferred collections:
- settings
- pages
- events
- initiatives
- reports
- gallery
- team

Editable site-wide content should live outside hardcoded components whenever practical.

Do not hardcode:
- contact email
- social links
- hero copy
- homepage featured slugs
- footer text

---

## File and naming rules
Use clean, predictable names.

Examples:
- `national-youth-day-2026.md`
- `youth-solution-assembly.md`
- `core-team-2026.md`
- `site.json`

Image naming:
- lowercase
- hyphen-separated
- descriptive

Example:
- `national-youth-day-group-photo-01.webp`

---

## Accessibility rules
- semantic HTML first
- keyboard-accessible navigation
- visible focus states
- alt text for every meaningful image
- sufficient color contrast
- no text embedded in images when avoidable
- reduced-motion-safe interactions

---

## Performance rules
- optimize images
- prefer WebP or optimized PNG/JPEG as appropriate
- avoid heavy client-side JS
- use Astro islands only when needed
- keep Lighthouse performance strong
- keep layout shifts minimal

---

## GitHub Pages rules
Support both deployment modes:
1. project pages with `base`
2. org/user/custom-domain deployment without `base`

Paths must be implementation-safe.
Do not assume root-relative URLs will always work without checking config.

Deployment workflow must use the official Astro GitHub Pages action pattern.

---

## Team and privacy rules
Only public-facing team data should appear on the site.

If a team member does not clearly have public-display consent:
- do not add photo
- do not add personal details
- do not add private contact info

Use official club email as the main public contact unless a public role account is explicitly approved.

---

## What success looks like
A good implementation:
- clearly explains the club
- looks polished on mobile and desktop
- is easy to update
- avoids sensitive content
- showcases approved events and reports
- feels like a real student organization site, not a template dump

---

## Definition of done
Before considering any major implementation task complete, confirm:
- pages build successfully
- no broken internal links
- no placeholder lorem ipsum remains
- no sensitive data is exposed
- content collections validate
- homepage messaging is clear
- brand colors are applied consistently
- mobile navigation works
- GitHub Pages deployment config exists
- README reflects actual project state

---

## If requirements conflict
Prioritize:
1. privacy and public safety
2. clarity of mission
3. maintainability
4. accessibility
5. visual polish
