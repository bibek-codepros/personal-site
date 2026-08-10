import type { MetadataRoute } from "next";

import { getAllVolumes } from "@/lib/notebook";
import { SITE_URL } from "@/lib/site";
import { getChapterSlugs } from "@/lib/stories";

/** Every real, public route — built from the same data the routes
 *  themselves are generated from, so this never drifts out of sync as
 *  chapters or notes are added. */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/becoming", "/notebook", "/contact"].map((path) => ({
    url: `${SITE_URL}${path}`,
  }));

  const chapterRoutes = getChapterSlugs().map((slug) => ({
    url: `${SITE_URL}/becoming/${slug}`,
  }));

  const noteRoutes = getAllVolumes().flatMap((volume) =>
    volume.notes.map((note) => ({
      url: `${SITE_URL}/notebook/${volume.slug}/${note.slug}`,
    }))
  );

  return [...staticRoutes, ...chapterRoutes, ...noteRoutes];
}
