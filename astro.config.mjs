import { defineConfig } from "astro/config";

const normalizeBase = (value) => {
  if (!value) return "/";
  const trimmed = value.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
};

const repositoryOwner = process.env.GITHUB_REPOSITORY_OWNER;
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrgPagesRepo =
  repositoryOwner &&
  repositoryName &&
  repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;

const derivedSite =
  process.env.SITE_URL ??
  (repositoryOwner ? `https://${repositoryOwner}.github.io` : "https://example.github.io");

const derivedBase =
  process.env.BASE_PATH ??
  (repositoryName && !isUserOrOrgPagesRepo ? repositoryName : "");

export default defineConfig({
  output: "static",
  site: derivedSite,
  base: normalizeBase(derivedBase)
});
