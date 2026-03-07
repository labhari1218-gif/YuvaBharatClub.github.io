export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Team", href: "/team" },
  { label: "Join", href: "/join" }
] as const;

const isExternal = (value: string) =>
  /^(https?:)?\/\//.test(value) ||
  value.startsWith("mailto:") ||
  value.startsWith("tel:") ||
  value.startsWith("#");

export const withBase = (path = "/") => {
  if (isExternal(path)) return path;
  const base = import.meta.env.BASE_URL;
  const trimmed = path.replace(/^\/+|\/+$/g, "");
  return trimmed ? `${base}${trimmed}/` : base;
};

export const assetUrl = (path: string) => {
  if (!path || isExternal(path)) return path;
  const base = import.meta.env.BASE_URL;
  return `${base}${path.replace(/^\/+/, "")}`;
};

export const normalizePathname = (pathname: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  let normalized = pathname;

  if (base && base !== "/" && normalized.startsWith(base)) {
    normalized = normalized.slice(base.length) || "/";
  }

  normalized = normalized.replace(/\/+$/, "") || "/";
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
};

export const isCurrentPath = (currentPath: string, targetPath: string) =>
  normalizePathname(currentPath) === normalizePathname(targetPath);

export const toAbsoluteUrl = (path: string, site?: URL) => {
  if (!path) return path;
  if (isExternal(path)) return path;
  const origin = site ?? new URL("https://example.github.io");
  return new URL(assetUrl(path), origin).toString();
};

export const isPlaceholderValue = (value?: string) => {
  if (!value) return true;
  const normalized = value.trim().toLowerCase();
  return (
    !normalized ||
    normalized.includes("example.com") ||
    normalized.includes(".example") ||
    normalized.includes("replace-with")
  );
};

export const isPublicLink = (value?: string) => !!value && !isPlaceholderValue(value);

export const isPublicEmail = (value?: string) =>
  !!value &&
  !isPlaceholderValue(value) &&
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
