import { getCollection, getEntry, type CollectionEntry } from "astro:content";

const resolveEntrySlug = (
  entry: CollectionEntry<"events" | "initiatives" | "reports" | "gallery" | "pages">
) => {
  if ("slug" in entry.data && typeof entry.data.slug === "string") return entry.data.slug;
  if ("slug" in entry && typeof entry.slug === "string") return entry.slug;
  return entry.id;
};

export const getSiteSettings = async () => {
  const entry = await getEntry("settings", "site");

  if (!entry) {
    throw new Error("Missing site settings entry at src/content/settings/site.json");
  }

  return entry.data;
};

export const getPublicEvents = async () =>
  (await getCollection("events", ({ data }) => data.public)).sort(
    (a, b) => b.data.startDate.getTime() - a.data.startDate.getTime()
  );

export const getPublicInitiatives = async () =>
  (await getCollection("initiatives")).sort((a, b) =>
    Number(b.data.featured) - Number(a.data.featured) || a.data.title.localeCompare(b.data.title)
  );

export const getPublicReports = async () =>
  (await getCollection("reports")).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

export const getPublicGalleryAlbums = async () =>
  (await getCollection("gallery", ({ data }) => data.approvedForPublic)).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

export const getInstagramFeed = async () => {
  const entries = await getCollection("instagram");
  return entries[0];
};

export const getPublicTeam = async () =>
  (await getCollection("team", ({ data }) => data.isPublic && data.consentConfirmed)).sort(
    (a, b) => a.data.displayOrder - b.data.displayOrder
  );

export const findBySlug = <T extends CollectionEntry<"events" | "initiatives" | "reports" | "gallery">>(
  entries: T[],
  slug: string | undefined
) => entries.find((entry) => resolveEntrySlug(entry) === slug);

export const pickFeatured = <T extends { data: { slug: string } }>(
  entries: T[],
  slugs: string[]
) => slugs
  .map((slug) =>
    entries.find((entry) => resolveEntrySlug(entry as CollectionEntry<"events" | "initiatives" | "reports">) === slug)
  )
  .filter(Boolean) as T[];

export const getPageEntry = async (slug: string) => {
  const entries = await getCollection("pages");
  const page = entries.find((entry) => resolveEntrySlug(entry) === slug);

  if (!page) {
    throw new Error(`Missing page content for ${slug}`);
  }

  return page;
};

export const getRelatedEvent = (
  events: CollectionEntry<"events">[],
  slug?: string
) => events.find((event) => resolveEntrySlug(event) === slug);
