# Yuva Bharat Club Website Project Brief

## Document purpose

This document is the implementation-ready planning brief for the Yuva Bharat Club website. It is written so Codex, maintainers, and student editors can use the same source of truth before building the site.

This brief is based on:
- review of the uploaded Yuva Bharat Club WhatsApp export as internal research input
- the uploaded club logo
- current official Astro, GitHub Pages, Decap CMS, and Codex documentation
- inspiration from real student/youth/community websites

---

## 0. Research summary from the uploaded WhatsApp chat

### What the internal material shows
The WhatsApp export suggests that Yuva Bharat Club is a student-led campus club at IISER Bhopal that already operates through:
- event planning and execution
- youth-focused discussion and public speaking activities
- reporting and documentation
- social media promotion
- student coordination across logistics, content, photography, and outreach
- interest in building a stronger public identity, including a website

### Public-safe themes found repeatedly
These are suitable to translate into public website content:
- student leadership and responsibility
- National Youth Day programming
- speech competitions and youth dialogue formats
- Youth Solution Assembly style discussions
- documentation, reports, and event highlights
- campus engagement and community participation
- showcase of past events, goals, and future plans
- media, photography, posters, and public communication
- team-based work and volunteer opportunities

### Things that must stay out of the public website
The chat also contains content that should **not** be published:
- raw WhatsApp messages
- personal phone numbers
- internal approval discussions
- incomplete internal disagreements
- politically sensitive or controversial material
- unapproved references to outside political/public figures or topics
- copied social posts unless explicitly approved
- attendance sheets and informal member data
- internal planning confusion, delays, or deleted-message context

### Public positioning inferred from the chat
The safest and strongest public framing is:

**Yuva Bharat Club is a student-led campus platform at IISER Bhopal focused on youth leadership, dialogue, events, cultural and civic participation, and meaningful campus engagement.**

That framing matches the useful public parts of the chat while avoiding controversy.

---

## A. Identity summary

### What this organization really is
Yuva Bharat Club is best presented as a student-led campus club that creates spaces for ideas, dialogue, participation, and youth-led action at IISER Bhopal.

It is not best presented as a political outlet. It is best presented as:
- youth leadership platform
- campus community initiative
- event and dialogue organizer
- student participation and volunteering hub
- place for thoughtful, constructive, nation-minded youth engagement

### Main mission
To create meaningful campus opportunities where students can participate, lead, discuss, organize, communicate, and contribute through events, initiatives, and youth-centered programs.

### Main audience
Primary:
- current IISER Bhopal students
- interested club members
- potential volunteers
- event participants

Secondary:
- faculty advisors and institute stakeholders
- collaborators and campus bodies
- prospective student members
- alumni or supporters who want to understand the club

### Key themes
- youth leadership
- student initiative
- dialogue and ideas
- service-minded participation
- event culture
- scientific temperament and thoughtful discussion
- cultural and civic energy
- team-based action
- documentation and public reporting

### Public-facing value proposition
**A student-led platform at IISER Bhopal for youth leadership, campus participation, events, dialogue, and community-driven action.**

### Brand positioning line
**Thoughtful youth action on campus.**
Optional Hindi support line:
**युवा ऊर्जा, संवाद और सहभागिता का मंच।**

---

## Similar websites and patterns worth borrowing

These are inspiration references only. Do not copy layout or wording directly.

### 1. National Service Scheme (NSS)
Useful pattern:
- clear public-service framing
- visible news/report rhythm
- institutional trust and simple structure

Why it matters for YBC:
- YBC also benefits from a mission-first presentation and a clean archive of activities and reports.

### 2. Indian Youth Forum
Useful pattern:
- impact counters
- strong “Join” call to action
- youth empowerment language

Why it matters for YBC:
- the homepage should quickly show activity, participation, and invitation.

### 3. Young Indians (Yi)
Useful pattern:
- mission broken into clear pillars
- future-facing, leadership-oriented storytelling

Why it matters for YBC:
- YBC should present 3–4 clear focus pillars instead of a vague description.

### 4. Indian Students’ Association at ASU
Useful pattern:
- concise “who we are” statement
- service + leadership + community message

Why it matters for YBC:
- it shows how an Indian student organization can feel welcoming and practical without becoming cluttered.

### 5. Event Gallery style university pages
Useful pattern:
- visual proof of activity
- structured gallery and impact stats

Why it matters for YBC:
- the club already appears highly event-driven, so visuals should carry a lot of trust.

### 6. IMT student associations page
Useful pattern:
- clear committee/function descriptions
- operational teams shown in public language

Why it matters for YBC:
- YBC can present “Media”, “Events”, “Documentation”, and “Outreach” as public-friendly working areas without exposing internal chat structure.

---

## B. Website recommendation

### Best tech stack
**Astro + GitHub Pages + Astro Content Collections + Markdown/JSON content files**

### Why this stack fits
This is the best fit because YBC appears to need:
- a fast public website
- low hosting cost
- long-term maintainability by students
- strong content structure
- simple event/report publishing
- easy GitHub-based deployment
- good performance on mobile connections

Astro is particularly well-suited because the site is content-heavy, not app-heavy. The official Astro docs recommend using the `create astro` CLI to start a project and provide an official GitHub Action for GitHub Pages deployment. Astro’s content collections also give typed, structured content for events, team, reports, and pages.

### Hosting recommendation
**GitHub Pages** is a strong default for v1 because it is free, reliable for static sites, and integrates cleanly with GitHub Actions.

### CMS recommendation
**Do not add a CMS in v1.**

Instead, use:
- Astro content collections
- well-structured Markdown files
- a small JSON or YAML settings file
- GitHub’s web editor for non-technical edits
- a short editor guide

### Why not Decap CMS in v1
Decap CMS is powerful, and its docs confirm that it works as a Git-based UI for static sites. But easy editor authentication often depends on Netlify Identity and Git Gateway or another separate auth setup. That adds extra moving parts for a student-run club.

For YBC, the simplest stable setup is:
1. GitHub Pages for hosting
2. Markdown/YAML content
3. GitHub web editing
4. a very clear editor workflow

### When to add a CMS later
Only add Decap CMS in phase 2 if:
- multiple non-technical editors need in-browser content editing regularly
- the club cannot sustain GitHub-based editing
- someone is willing to manage auth setup properly

### Final stack decision
**Recommended stack: Astro + GitHub Pages, no CMS in v1, content collections + GitHub editing workflow.**

---

## C. Information architecture

## Recommended top navigation
1. Home
2. About
3. Events
4. Initiatives
5. Gallery
6. Reports
7. Team
8. Join / Contact

Optional utility items:
- Instagram
- Email
- Language toggle or language-aware content labels

## Main pages

### 1. Home
Purpose:
- explain the club instantly
- show proof of activity
- invite participation

### 2. About
Purpose:
- club story
- mission
- focus pillars
- how the club works

### 3. Events
Purpose:
- upcoming events
- past events archive
- event detail pages

### 4. Initiatives
Purpose:
- larger recurring ideas or themes
- dialogue, screenings, youth assemblies, public engagement projects

### 5. Gallery
Purpose:
- visual archive of approved images
- event-wise albums

### 6. Reports
Purpose:
- public PDF reports, event summaries, recap pages, press mentions if approved

### 7. Team
Purpose:
- public-facing core team only
- roles, working areas, and optional photos with consent

### 8. Join / Contact
Purpose:
- volunteer pathway
- collaboration pathway
- public contact information
- approved external links

## Homepage section order
1. Hero
2. Quick value proposition
3. Focus pillars
4. Featured upcoming or recent event
5. Past highlights
6. Gallery preview
7. Reports / publications preview
8. Team preview
9. Join / volunteer CTA
10. Footer with official links

## What should be public
- mission
- approved team roles
- approved event details
- public forms
- public reports
- approved photos
- official contact email
- approved social links

## What should stay private
- chats
- phone numbers
- personal introductions unless consented
- faculty/internal approvals
- internal budgets
- planning friction
- drafts not approved for publication
- controversial or political discussion items unless formally approved and reframed for public use

---

## D. Content model

## Required content types

### 1. siteSettings
Purpose:
Global editable site data.

Fields:
- siteTitle
- shortTitle
- siteDescription
- campusName
- email
- instagramUrl
- linkedinUrl
- youtubeUrl
- githubUrl
- heroTaglineEn
- heroTaglineHi
- joinUrl
- footerText
- seoImage
- defaultLocale
- supportedLocales
- announcementBar
- registrationLinks

### 2. pages
Purpose:
Static pages like About, Join, Privacy.

Fields:
- title
- slug
- description
- intro
- body
- seoTitle
- seoDescription
- optionalHindiExcerpt

### 3. events
Purpose:
Upcoming and past event entries.

Fields:
- title
- titleHi (optional)
- slug
- status (upcoming / past / archived)
- startDate
- endDate
- venue
- summary
- summaryHi (optional)
- description
- coverImage
- posterImage
- galleryImages
- registrationUrl
- reportUrl
- tags
- featured
- partnerNames
- accessibilityNotes
- public

### 4. initiatives
Purpose:
Recurring or thematic club work.

Fields:
- title
- slug
- oneLine
- description
- focusArea
- coverImage
- links
- publicStatus
- featured

### 5. team
Purpose:
Public-facing core team and approved coordinators.

Fields:
- name
- role
- workingArea
- batch (optional)
- shortBio
- photo
- emailOrSocial (optional)
- displayOrder
- isPublic
- consentConfirmed

### 6. reports
Purpose:
Public documents and summaries.

Fields:
- title
- slug
- date
- eventRef
- abstract
- pdfUrl
- coverImage
- pressLinks
- tags
- featured

### 7. gallery
Purpose:
Albums instead of a loose image dump.

Fields:
- title
- slug
- date
- eventRef
- coverImage
- images
- altTextSet
- photographerCredit
- approvedForPublic

### 8. testimonials or member voices
Optional in phase 2.

Fields:
- name
- roleOrBatch
- quote
- photo
- language
- approvedForPublic

## Which content should be editable by non-technical users
- events
- initiatives
- reports
- gallery albums
- team entries
- homepage featured selections
- site settings like contact links and hero text

## Which content should remain code-owned
- layouts
- components
- design tokens
- route generation
- schema definitions
- search/indexing logic
- deployment workflow
- analytics scripts
- performance settings

---

## E. Design direction

## Logo-based color palette
Derived from the uploaded logo:

- **Saffron:** `#DF7813`
- **Green:** `#237D3F`
- **Navy:** `#013B69`
- **Warm off-white:** `#F7F5EF`
- **Soft neutral gray:** `#CFD4DB`

## Visual style
- modern, respectful, confident
- student-led, not bureaucratic
- energetic, not noisy
- patriotic in visual warmth, not in a heavy-handed or partisan way
- clean cards, strong typography, generous spacing
- photo-led storytelling for event proof

## UI mood
The site should feel like:
- a credible student organization
- active and welcoming
- thoughtful and grounded
- Indian in spirit, but contemporary in execution

## Typography direction
Recommended:
- English UI/body: **Inter** or **Manrope**
- Hindi support copy: **Noto Sans Devanagari**
- Headings: keep the same family or use a very restrained secondary face

Do not use ornamental “patriotic” fonts.

## Motion and interaction
- subtle fade/slide reveals
- no excessive animation
- smooth hover states
- gallery interactions should remain fast and simple

## How the site should feel to a first-time visitor
A first-time visitor should think:
- this club is active
- this club is student-led
- this club does real things on campus
- I understand what it stands for
- I know how to join or follow it

## Brand motifs to use carefully
Good:
- gentle tricolor accents
- subtle wave patterns inspired by the logo flag
- leaf/laurel-inspired dividers if used minimally
- clean iconography

Avoid:
- overusing the national flag motif
- heavy gradients everywhere
- cliché patriotic stock imagery
- crowded banners and poster-style pages

---

## F. Copywriting

## Homepage hero text
### Primary version
**Yuva Bharat Club**
Student-led initiatives, dialogue, and campus action at IISER Bhopal.

### Support line
Build ideas. Lead events. Participate with purpose.

### Optional Hindi support line
**युवा ऊर्जा, संवाद और सार्थक सहभागिता का मंच।**

### CTA buttons
- Explore Events
- Join the Club

## Mission section text
Yuva Bharat Club is a student-led platform at IISER Bhopal that brings students together through events, dialogue, initiatives, and collaborative action. The club aims to create meaningful opportunities for leadership, participation, and thoughtful engagement on campus.

## About section text
At its core, Yuva Bharat Club is about participation with purpose. From discussions and youth-centered assemblies to event coordination, public speaking, documentation, and campus outreach, the club creates spaces where students can contribute, learn, and lead together.

## Focus pillars
### 1. Dialogue
Thoughtful conversations, discussions, and youth-centered forums.

### 2. Participation
Events, volunteering, public engagement, and campus collaboration.

### 3. Leadership
Student-led planning, ownership, teamwork, and execution.

### 4. Documentation
Reports, highlights, visual archives, and institutional memory.

## Events section blurb
Explore upcoming and past Yuva Bharat Club events, from campus discussions and competitions to screenings, celebrations, and collaborative initiatives.

## Initiatives section blurb
Discover the club’s recurring ideas and long-term themes, built around youth participation, community spirit, and meaningful student engagement.

## Reports section blurb
Read approved event summaries, public reports, and selected documentation that showcase the club’s work and learning.

## Team section blurb
Meet the students who help organize, document, design, coordinate, and move Yuva Bharat Club forward.

## Join CTA
Want to contribute, volunteer, design, document, organize, or help run events?

**Join Yuva Bharat Club**
Bring your energy, ideas, and skills to the team.

## Suggested bilingual touches
Use bilingual text only in selected places:
- hero support line
- mission strip
- selected event titles if officially bilingual
- footer microcopy
- occasional section dividers or quotes

Do not duplicate the whole site in two languages unless the club is ready to maintain it.

---

## G. Media plan

## Upload first
These assets should be collected first because they will shape the quality of the first version:

1. Final high-resolution logo
2. Transparent PNG or SVG version of logo
3. 8–15 approved event photos from National Youth Day activities
4. 5–10 approved general team / club activity photos
5. Any approved posters worth archiving
6. Any approved PDF reports
7. Official club email and social handles
8. Team photos only from members who consent
9. Any press clipping or public mention approved for reuse
10. Any existing brand guidelines, if available

## What can wait until later
- full historical archive
- every poster ever created
- long report archive
- videos
- alumni content
- testimonials
- detailed member profiles
- multilingual expansion

## Best media usage by area
### Hero
- one strong, approved group/event image
- or a clean logo-led hero if photography is not ready

### Events
- event cover image + poster + gallery strip

### Gallery
- organized by album, not random dump

### Team
- only opt-in headshots or well-cropped group images

### Reports
- report cover + PDF link + summary card

## Media rules
- only approved public photos
- avoid blurry screenshots from chats
- use descriptive file names
- compress images
- include alt text
- keep consistent aspect ratios

---

## H. CMS / editor workflow

## Best workflow for non-technical users
### Recommended v1 workflow
Use GitHub itself as the editing surface.

Editors update:
- Markdown files for events/pages/reports
- JSON/YAML settings
- image files in a clear assets folder

### Why this works
- zero extra hosting/auth complexity
- version history is preserved
- rollback is easy
- Codex can maintain structure
- student turnover is easier to manage with docs

## Editing model
### Simple roles
- **Maintainer:** approves merges and manages structure
- **Content editor:** adds or updates event/report/team files
- **Media editor:** uploads optimized approved images
- **Reviewer:** checks privacy, spelling, and approvals

## What should move out of hardcoded files
Move these into editable content/settings files:
- hero text
- about intro
- focus pillars
- contact info
- social links
- homepage featured event selection
- homepage featured gallery selection
- join link
- footer text
- announcement text

## Editor safety checklist
Before publishing:
- confirm photo approval
- confirm all names are approved for public display
- remove all phone numbers
- remove internal-only comments
- avoid political or controversial framing
- check bilingual copy for spelling
- verify links, forms, and PDFs

---

## I. Codex implementation plan

## Exact repo/file changes Codex should make

### 1. Initialize or refactor the Astro project
- use Astro v5
- configure for static output
- configure GitHub Pages deployment
- add `site` and `base` properly depending on repo type

### 2. Create clean project structure
Recommended structure:

```text
/
├── public/
│   ├── favicon.svg
│   ├── logo/
│   ├── images/
│   │   ├── events/
│   │   ├── gallery/
│   │   ├── team/
│   │   └── brand/
│   └── reports/
├── src/
│   ├── components/
│   │   ├── common/
│   │   ├── home/
│   │   ├── events/
│   │   ├── team/
│   │   └── ui/
│   ├── content/
│   │   ├── pages/
│   │   ├── events/
│   │   ├── initiatives/
│   │   ├── reports/
│   │   ├── gallery/
│   │   ├── team/
│   │   └── settings/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── events/
│   │   ├── initiatives/
│   │   ├── gallery/
│   │   ├── reports/
│   │   ├── team.astro
│   │   ├── join.astro
│   │   ├── contact.astro
│   │   └── 404.astro
│   ├── styles/
│   └── content.config.ts
├── .github/
│   └── workflows/
│       └── deploy.yml
├── AGENTS.md
├── README.md
├── PROJECT-BRIEF.md
└── astro.config.mjs
```

### 3. Add Astro content collections
Collections to define:
- settings
- pages
- events
- initiatives
- reports
- gallery
- team

### 4. Add schema validation
Use Zod schemas in `src/content.config.ts` so content errors are caught early.

### 5. Build reusable layouts/components
Components needed:
- site header
- footer
- hero
- section heading
- event card
- report card
- team card
- pillar grid
- gallery grid
- CTA banner
- language-aware inline label component

### 6. Add a light bilingual strategy
Do not build a full i18n system in v1 unless required.
Instead:
- allow optional Hindi support fields in content
- render Hindi only where supplied
- keep primary navigation and full page structure in English
- support Devanagari fonts cleanly

### 7. Add homepage composition
Homepage should pull from:
- settings collection
- featured event
- featured reports
- focus pillars
- latest gallery previews
- join CTA

### 8. Add routes
Required routes:
- `/`
- `/about`
- `/events`
- `/events/[slug]`
- `/initiatives`
- `/initiatives/[slug]`
- `/gallery`
- `/gallery/[slug]`
- `/reports`
- `/reports/[slug]`
- `/team`
- `/join`
- `/contact`

### 9. Add privacy-safe sample content
Seed with:
- approved placeholder content
- no personal numbers
- no raw chat text
- no political or controversial source material

### 10. Add GitHub Pages deployment
- official Astro GitHub Action
- repo settings should use GitHub Actions as source
- support optional custom domain later

## Suggested settings file
Use a single editable settings data file:
`src/content/settings/site.json`

Suggested keys:
- siteTitle
- shortTitle
- description
- email
- instagram
- linkedin
- heroTitle
- heroSubtitle
- heroSubtitleHi
- focusPillars
- featuredEventSlug
- featuredReportSlugs
- joinFormUrl
- navLinks
- footerLinks

## Suggested content collections / schemas
### events schema
- title: string
- titleHi: string optional
- summary: string
- summaryHi: string optional
- startDate: date
- endDate: date optional
- venue: string
- coverImage: image
- posterImage: image optional
- galleryImages: array optional
- registrationUrl: string optional
- reportUrl: string optional
- tags: array
- featured: boolean default false
- public: boolean default true

### team schema
- name: string
- role: string
- workingArea: string
- shortBio: string
- photo: image optional
- displayOrder: number
- isPublic: boolean default true
- consentConfirmed: boolean

### reports schema
- title: string
- date: date
- abstract: string
- pdfUrl: string optional
- coverImage: image optional
- featured: boolean default false

---

## J. Deliverables

## README structure
1. Project overview
2. Why Astro + GitHub Pages
3. Local development
4. Content editing
5. Deployment
6. Project structure
7. Maintainer notes

## AGENTS.md guidance
Must include:
- source-of-truth order
- privacy rules
- bilingual rules
- design rules
- content modeling rules
- deployment constraints
- definition of done

## Editor guide outline
1. How to add an event
2. How to update team entries
3. How to upload images
4. How to feature an event on the homepage
5. What never to publish
6. How to preview changes
7. How to ask for approval

## Launch checklist
- logo finalized
- site metadata set
- homepage copy approved
- at least 3 event entries ready
- at least 1 report entry ready
- team data consent checked
- gallery images optimized
- GitHub Pages workflow working
- HTTPS enabled
- 404 page present
- social links verified
- mobile layout checked
- alt text added
- privacy pass completed

---

## Recommended public homepage structure in detail

## Hero
- logo
- title
- one-sentence description
- primary CTA to events
- secondary CTA to join
- optional Hindi support line

## Focus strip
Show 3 to 4 mini-pillars:
- Dialogue
- Participation
- Leadership
- Documentation

## Featured event
Highlight the strongest recent or upcoming event with:
- image
- short summary
- date
- button

## Highlights section
3 cards:
- recent event
- report/publication
- initiative

## Gallery preview
- 6-image grid
- button to full gallery

## Team preview
- 4 to 6 visible public-facing leaders/coordinators only

## Join section
- volunteering
- design
- reporting
- logistics
- public speaking
- media

## Footer
- official email
- Instagram
- campus/institute reference
- quick links
- privacy note

---

## Recommended content pillars for YBC

1. **Youth Leadership**
2. **Campus Participation**
3. **Dialogue & Ideas**
4. **Events & Documentation**

These pillars are broad enough to stay relevant even when events change.

---

## Suggested sample navigation labels with Hindi support

Primary nav:
- Home
- About
- Events
- Initiatives
- Gallery
- Reports
- Team
- Join

Optional microcopy:
- **साथ चलें / Join Us**
- **हमारी पहल / Our Initiatives**
- **कार्यक्रम / Events**

Keep Hindi selective and intentional.

---

## Public-safe team structure suggestion

Instead of exposing internal responsibilities exactly as seen in chat, present:

- Faculty Advisors
- Student Coordinators
- Events & Logistics
- Media & Design
- Documentation & Reports
- Outreach & Participation

This keeps the real structure recognizable but public-facing.

---

## Recommended page priorities for v1

### Must-have in v1
- Home
- About
- Events list + event detail
- Reports list
- Team
- Join / Contact

### Good to have in v1
- Initiatives
- Gallery

### Can wait for v2
- search
- newsletter
- archive filters
- multi-language full mode
- CMS dashboard
- member portal
- private docs area

---

## Recommendation on repo naming

### Best option
Create a dedicated GitHub org or account for the club and use:
- repo: `yuvabharatclub.github.io`

Benefit:
- cleaner root URL
- easier branding
- less configuration friction

### Fallback
Use a normal repo such as:
- `yuva-bharat-club`

Then configure Astro `base` for project pages.

---

## Final recommendation

Build **version 1** as a clean, bilingual-aware, privacy-safe Astro site on GitHub Pages with:
- strong homepage
- events
- reports
- team
- join/contact
- gallery if assets are ready

Do **not** try to publish everything at once.
Do **not** use raw WhatsApp material as website content.
Do **not** overbuild the tech stack.

The best first release is:
**focused, fast, trustworthy, and easy for next year’s students to maintain.**

---

## First 5 actions to take next

1. Approve the public positioning and homepage mission statement.
2. Collect approved assets: logo, 10–15 event photos, social links, public report PDFs.
3. Decide the repo model: dedicated GitHub org site or normal project repo.
4. Confirm the first public pages: Home, About, Events, Reports, Team, Join.
5. Give Codex this brief plus AGENTS.md and README.md, then ask it to scaffold the Astro project and content structure.

---

## Codex implementation prompt

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

---

## Sources consulted for planning

### Official technical references
- Astro install docs
- Astro GitHub Pages deployment docs
- Astro content collections docs
- GitHub Pages quickstart and HTTPS docs
- Decap CMS overview and backend/auth docs
- OpenAI Codex official docs and Codex plan/help article

### Inspiration references
- National Service Scheme
- Indian Youth Forum
- Young Indians
- Indian Students’ Association at ASU
- University event gallery pattern reference
- IMT student associations reference

Use these sources for pattern recognition only, never for direct copying.


## Appendix: reference links

### Official documentation
- Astro install: https://docs.astro.build/en/install-and-setup/
- Astro GitHub Pages deployment: https://docs.astro.build/en/guides/deploy/github/
- Astro content collections: https://docs.astro.build/en/guides/content-collections/
- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart
- GitHub Pages HTTPS: https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
- Decap CMS overview: https://decapcms.org/docs/intro/
- Decap CMS backend/auth notes: https://decapcms.org/docs/choosing-a-backend/
- Codex with ChatGPT plans: https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan
- Codex product docs: https://developers.openai.com/codex/

### Inspiration websites
- National Service Scheme: https://nss.gov.in/
- Indian Youth Forum: https://indianyouthforum.org/
- Young Indians: https://youngindians.net/about-us/
- Indian Students’ Association at ASU: https://sundevilcentral.eoss.asu.edu/isaasu/home/
- Event gallery pattern reference: https://www.auindia.ac.in/information/media/event-gallery
- IMT student associations reference: https://www.imt.edu/student-life/student-associations-dcp/
