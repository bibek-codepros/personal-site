import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { CHAPTERS_META, type ChapterMeta, type MemoryBlockConfig, type TextRange } from "@/content/chaptersMeta";

const STORIES_DIR = path.join(process.cwd(), "content", "stories");
const WORDS_PER_MINUTE = 220;

export type BodySegment =
  | { type: "markdown"; content: string }
  | { type: "memory"; content: string; title: string; location?: string }
  | { type: "pullQuote"; content: string };

export type Chapter = ChapterMeta & {
  /** The reading flow, pre-split around any memory-block / pull-quote
   *  markers. The manuscript's own title heading and final reflection
   *  section are excluded (rendered separately by ChapterHero /
   *  ReflectionBlock). */
  bodySegments: BodySegment[];
  /** Markdown for the reflection — everything after the manuscript's
   *  final `---` divider. Never invented; always the author's own words. */
  reflection: string;
  /** Rounded-up minutes at ~220 words per minute. */
  readingTime: number;
};

function stripLeadingHeading(markdown: string): string {
  return markdown.replace(/^\s*#\s+.+?\n+/, "");
}

/** Everything after the manuscript's LAST `---` divider is the reflection. */
function splitReflection(markdown: string): { body: string; reflection: string } {
  const lines = markdown.split("\n");
  const dividerIndices: number[] = [];
  lines.forEach((line, i) => {
    if (line.trim() === "---") dividerIndices.push(i);
  });

  if (dividerIndices.length === 0) {
    return { body: markdown.trim(), reflection: "" };
  }

  const lastDivider = dividerIndices[dividerIndices.length - 1];
  return {
    body: lines.slice(0, lastDivider).join("\n").trim(),
    reflection: lines.slice(lastDivider + 1).join("\n").trim(),
  };
}

type SpecialRange = TextRange & (
  | { kind: "memory"; title: string; location?: string }
  | { kind: "pullQuote" }
);

/**
 * Splits the body around every configured memory-block and pull-quote
 * range, in the order they actually appear in the manuscript (not config
 * order) — markers only locate text; they never alter a single word.
 */
function splitSpecialRanges(markdown: string, ranges: SpecialRange[]): BodySegment[] {
  const located = ranges
    .map((range) => {
      const startIdx = markdown.indexOf(range.startMarker);
      if (startIdx === -1) return null;
      const endMarkerIdx = markdown.indexOf(range.endMarker, startIdx);
      if (endMarkerIdx === -1) return null;
      const endIdx = endMarkerIdx + range.endMarker.length;
      return { ...range, startIdx, endIdx };
    })
    .filter((r): r is NonNullable<typeof r> => r !== null)
    .sort((a, b) => a.startIdx - b.startIdx);

  const segments: BodySegment[] = [];
  let cursor = 0;

  for (const range of located) {
    const before = markdown.slice(cursor, range.startIdx).trim();
    const content = markdown.slice(range.startIdx, range.endIdx).trim();
    if (before) segments.push({ type: "markdown", content: before });

    if (range.kind === "memory") {
      segments.push({ type: "memory", content, title: range.title, location: range.location });
    } else {
      segments.push({ type: "pullQuote", content });
    }

    cursor = range.endIdx;
  }

  const remaining = markdown.slice(cursor).trim();
  if (remaining) segments.push({ type: "markdown", content: remaining });

  return segments;
}

function toSpecialRanges(memoryBlocks: MemoryBlockConfig[] = [], pullQuote?: TextRange): SpecialRange[] {
  const ranges: SpecialRange[] = memoryBlocks.map((block) => ({
    kind: "memory",
    startMarker: block.startMarker,
    endMarker: block.endMarker,
    title: block.title,
    location: block.location,
  }));

  if (pullQuote) {
    ranges.push({ kind: "pullQuote", startMarker: pullQuote.startMarker, endMarker: pullQuote.endMarker });
  }

  return ranges;
}

function countWords(markdown: string): number {
  return markdown
    .replace(/[#*_>`-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
}

function loadChapter(meta: ChapterMeta): Chapter {
  const filePath = path.join(STORIES_DIR, meta.filename);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // Frontmatter, if a future chapter file includes it, overrides the
  // application-level registry — never the other way around.
  const merged: ChapterMeta = {
    ...meta,
    title: data.title ?? meta.title,
    subtitle: data.subtitle ?? meta.subtitle,
    number: data.chapter ?? meta.number,
  };

  const withoutHeading = stripLeadingHeading(content);
  const { body, reflection } = splitReflection(withoutHeading);
  const bodySegments = splitSpecialRanges(body, toSpecialRanges(meta.memoryBlocks, meta.pullQuote));
  const readingTime = Math.max(1, Math.round(countWords(content) / WORDS_PER_MINUTE));

  return { ...merged, bodySegments, reflection, readingTime };
}

export function getAllChapters(): Chapter[] {
  return [...CHAPTERS_META].sort((a, b) => a.number - b.number).map(loadChapter);
}

export function getChapterBySlug(slug: string): Chapter | undefined {
  const meta = CHAPTERS_META.find((chapter) => chapter.slug === slug);
  return meta ? loadChapter(meta) : undefined;
}

export function getChapterSlugs(): string[] {
  return CHAPTERS_META.map((chapter) => chapter.slug);
}

export function getFirstChapterSlug(): string {
  return CHAPTERS_META[0].slug;
}
