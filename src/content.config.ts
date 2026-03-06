import { defineCollection, z } from "astro:content";

const settings = defineCollection({
  type: "data",
  schema: z.object({
    siteTitle: z.string(),
    shortTitle: z.string(),
    siteDescription: z.string(),
    campusName: z.string(),
    email: z.string(),
    instagramUrl: z.string().optional(),
    linkedinUrl: z.string().optional(),
    youtubeUrl: z.string().optional(),
    githubUrl: z.string().optional(),
    heroTaglineEn: z.string(),
    heroTaglineHi: z.string().optional(),
    joinUrl: z.string().optional(),
    footerText: z.string(),
    seoImage: z.string(),
    defaultLocale: z.literal("en"),
    supportedLocales: z.array(z.string()),
    announcementBar: z
      .object({
        enabled: z.boolean(),
        text: z.string(),
        href: z.string().optional()
      })
      .optional(),
    registrationLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .optional(),
    focusPillars: z.array(
      z.object({
        title: z.string(),
        description: z.string()
      })
    ),
    homepage: z.object({
      featuredEventSlug: z.string().optional(),
      featuredReportSlugs: z.array(z.string()),
      featuredGallerySlugs: z.array(z.string())
    })
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    intro: z.string(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    optionalHindiExcerpt: z.string().optional()
  })
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    titleHi: z.string().optional(),
    status: z.enum(["upcoming", "past", "archived"]),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    venue: z.string(),
    summary: z.string(),
    summaryHi: z.string().optional(),
    coverImage: z.string(),
    posterImage: z.string().optional(),
    galleryImages: z.array(z.string()).optional(),
    registrationUrl: z.string().optional(),
    reportUrl: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    partnerNames: z.array(z.string()).optional(),
    accessibilityNotes: z.string().optional(),
    public: z.boolean().default(true)
  })
});

const initiatives = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    oneLine: z.string(),
    description: z.string(),
    focusArea: z.string(),
    coverImage: z.string(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .optional(),
    publicStatus: z.enum(["active", "seasonal", "archived"]),
    featured: z.boolean().default(false)
  })
});

const reports = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    eventRef: z.string().optional(),
    abstract: z.string(),
    pdfUrl: z.string().optional(),
    coverImage: z.string().optional(),
    pressLinks: z
      .array(
        z.object({
          label: z.string(),
          href: z.string()
        })
      )
      .optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false)
  })
});

const gallery = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    date: z.coerce.date(),
    eventRef: z.string().optional(),
    coverImage: z.string(),
    images: z.array(z.string()),
    altTextSet: z.array(z.string()),
    photographerCredit: z.string().optional(),
    approvedForPublic: z.boolean().default(false)
  })
});

const team = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    workingArea: z.string(),
    batch: z.string().optional(),
    shortBio: z.string(),
    photo: z.string().optional(),
    emailOrSocial: z.string().optional(),
    displayOrder: z.number(),
    isPublic: z.boolean().default(true),
    consentConfirmed: z.boolean()
  })
});

export const collections = {
  settings,
  pages,
  events,
  initiatives,
  reports,
  gallery,
  team
};
