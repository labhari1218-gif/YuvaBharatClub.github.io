import { mkdir, readdir, rm, writeFile } from "node:fs/promises";

const USERNAME = "yuvabharat_iiserb";
const PROFILE_URL = `https://www.instagram.com/${USERNAME}/`;
const API_URL = `https://www.instagram.com/api/v1/feed/user/${USERNAME}/username/`;
const OUTPUT_PATH = new URL("../src/content/instagram/yuvabharat-iiserb.json", import.meta.url);
const IMAGE_DIR = new URL("../public/images/instagram/", import.meta.url);

const headers = {
  "User-Agent": "Mozilla/5.0",
  "X-IG-App-ID": "936619743392459",
  Referer: PROFILE_URL,
  Accept: "*/*"
};

const getCookieHeader = (response) =>
  response.headers
    .getSetCookie()
    .map((cookie) => cookie.split(";", 1)[0])
    .join("; ");

const truncate = (value, maxLength) => {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
};

const getExcerpt = (caption) => {
  const normalized = caption.replace(/\s+/g, " ").trim();
  if (!normalized) return "Instagram post from Yuva Bharat Club.";
  return truncate(normalized, 180);
};

const getFileExtension = (response, fallbackUrl) => {
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("image/jpeg")) return "jpg";
  if (contentType.includes("image/webp")) return "webp";
  if (contentType.includes("image/png")) return "png";

  const pathname = new URL(fallbackUrl).pathname;
  const match = pathname.match(/\.([a-zA-Z0-9]+)$/);
  const extension = match?.[1]?.toLowerCase();
  if (extension === "png" || extension === "webp" || extension === "jpg" || extension === "jpeg") {
    return extension === "jpeg" ? "jpg" : extension;
  }

  return "jpg";
};

const getMediaType = (mediaType) => {
  if (mediaType === 8) return "carousel";
  if (mediaType === 2) return "video";
  return "image";
};

const getCoverImage = (item) => {
  const primaryMedia = item.carousel_media?.[0] ?? item;
  return (
    primaryMedia.image_versions2?.candidates?.[0]?.url ??
    item.image_versions2?.candidates?.[0]?.url ??
    item.thumbnail_url ??
    ""
  );
};

const downloadCoverImage = async (remoteUrl, shortcode, date) => {
  const response = await fetch(remoteUrl, {
    headers: {
      ...headers,
      Referer: PROFILE_URL
    }
  });

  if (!response.ok) {
    throw new Error(`Image download failed for ${shortcode}: ${response.status} ${response.statusText}`);
  }

  const extension = getFileExtension(response, remoteUrl);
  const fileName = `${date.slice(0, 10)}-${shortcode}.${extension}`;
  const outputPath = new URL(fileName, IMAGE_DIR);
  const buffer = Buffer.from(await response.arrayBuffer());
  await writeFile(outputPath, buffer);
  return `/images/instagram/${fileName}`;
};

const removeStaleImages = async (posts) => {
  const expected = new Set(posts.map((post) => post.coverImage.split("/").pop()).filter(Boolean));
  const files = await readdir(IMAGE_DIR, { withFileTypes: true });

  await Promise.all(
    files
      .filter((file) => file.isFile() && !expected.has(file.name))
      .map((file) => rm(new URL(file.name, IMAGE_DIR)))
  );
};

const mapPost = async (item) => {
  const caption = item.caption?.text?.trim() ?? "";
  const excerpt = getExcerpt(caption);
  const timestamp = item.taken_at ? item.taken_at * 1000 : item.device_timestamp;
  const date = new Date(timestamp).toISOString();
  const remoteCoverImage = getCoverImage(item);
  const localCoverImage = remoteCoverImage
    ? await downloadCoverImage(remoteCoverImage, item.code, date)
    : "";

  return {
    id: String(item.pk),
    shortcode: item.code,
    permalink: `https://www.instagram.com/p/${item.code}/`,
    date,
    caption,
    excerpt,
    coverImage: localCoverImage,
    altText: item.accessibility_caption ?? excerpt,
    mediaType: getMediaType(item.media_type),
    likeCount: typeof item.like_count === "number" ? item.like_count : null,
    commentCount: typeof item.comment_count === "number" ? item.comment_count : null
  };
};

const fetchJson = async (url, cookieHeader) => {
  const response = await fetch(url, {
    headers: {
      ...headers,
      cookie: cookieHeader
    }
  });

  if (!response.ok) {
    throw new Error(`Instagram request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

const profileResponse = await fetch(PROFILE_URL, { headers });

if (!profileResponse.ok) {
  throw new Error(`Failed to load Instagram profile: ${profileResponse.status} ${profileResponse.statusText}`);
}

const cookieHeader = getCookieHeader(profileResponse);
const posts = [];
const seen = new Set();
let nextMaxId = null;

await mkdir(IMAGE_DIR, { recursive: true });

while (true) {
  const url = new URL(API_URL);
  url.searchParams.set("count", "12");
  if (nextMaxId) url.searchParams.set("max_id", nextMaxId);

  const data = await fetchJson(url, cookieHeader);

  for (const item of data.items ?? []) {
    if (!item?.pk || seen.has(item.pk)) continue;
    seen.add(item.pk);
    posts.push(await mapPost(item));
  }

  if (!data.more_available || !data.next_max_id) break;
  nextMaxId = data.next_max_id;
}

const output = {
  username: USERNAME,
  profileUrl: PROFILE_URL,
  fetchedAt: new Date().toISOString(),
  posts
};

await mkdir(new URL("../src/content/instagram/", import.meta.url), { recursive: true });
await removeStaleImages(posts);
await writeFile(OUTPUT_PATH, `${JSON.stringify(output, null, 2)}\n`);

console.log(`Saved ${posts.length} Instagram posts to ${OUTPUT_PATH.pathname}`);
