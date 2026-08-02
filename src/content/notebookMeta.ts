/**
 * Volume-level metadata that has no home in per-note frontmatter — the
 * title and short editorial introduction for each volume, quoted verbatim
 * from content/notebook/README.md rather than invented here. Mirrors how
 * chaptersMeta.ts holds Becoming metadata the manuscript files don't carry.
 */
export type VolumeMeta = {
  title: string;
  description: string;
};

export const VOLUME_META: Record<string, VolumeMeta> = {
  "volume-01": {
    title: "Where It All Started",
    description:
      "The first twenty notes. Curiosity. Failure. Starting over. Choosing IT. Leadership. Travel. Family. The moments that quietly changed everything.",
  },
};
