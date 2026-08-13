/**
 * HOME's production domain — the single source of truth. The root layout's
 * `metadataBase` uses this so every page's relative canonical/OG URLs
 * resolve against it; `robots.ts` and `sitemap.ts` import it directly
 * since those need a fully-qualified URL rather than something
 * `metadataBase` can resolve for them.
 */
export const SITE_URL = "https://itsbibek.com";

const SITE_NAME = "HOME";

/**
 * The one shared social-preview image, used identically across every
 * page's `openGraph`/`twitter` metadata. Personal narrative sites don't
 * need a different share image per page — one considered image, applied
 * consistently, matches the rest of HOME's restraint better than a
 * generated-per-page approach would.
 */
export const SITE_IMAGE = {
  url: "/bibek-sigdel.png",
  width: 1200,
  height: 630,
  alt: "Bibek Sigdel — HOME, a digital memoir",
};

/**
 * Next.js does not deep-merge a page's `openGraph`/`twitter` with the root
 * layout's — a page-level override replaces them entirely, field for
 * field. So every page that wants its own title/description here also has
 * to re-state `siteName`/`type`/`card`, or silently lose them. This is
 * that shared shape, built from nothing but the page's own already-existing
 * title, description, and path — no new copy.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website" as const,
      images: [SITE_IMAGE],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [SITE_IMAGE.url],
    },
  };
}
