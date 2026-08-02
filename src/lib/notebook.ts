import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { VOLUME_META } from "@/content/notebookMeta";

const NOTEBOOK_DIR = path.join(process.cwd(), "content", "notebook");
const CONTINUE_READING_MARKER = "### Continue Reading";

export type Note = {
  slug: string;
  volumeSlug: string;
  volumeNumber: number;
  chapter: number;
  title: string;
  category: string;
  /** Memory | Reflection | Observation | Closing, as authored — kept loose
   *  since it's only ever used for a light presentational hint. */
  type: string;
  readingTime: string;
  dateApprox?: string;
  tags: string[];
  mood: string[];
  featured: boolean;
  content: string;
};

export type Volume = {
  slug: string;
  number: number;
  title: string;
  description: string;
  notes: Note[];
};

/** Every note ends with a hand-written "### Continue Reading / ← / →"
 *  footer in the manuscript itself. We build our own Previous/Next UI from
 *  real chapter order, so that footer is stripped rather than rendered
 *  twice. Notes written before this convention (e.g. the first) simply
 *  have no footer to strip. */
function stripContinueReadingFooter(content: string): string {
  const markerIndex = content.lastIndexOf(CONTINUE_READING_MARKER);
  if (markerIndex === -1) return content.trim();
  return content
    .slice(0, markerIndex)
    .replace(/\n?-{3,}\s*$/, "")
    .trim();
}

function getVolumeFolders(): string[] {
  if (!fs.existsSync(NOTEBOOK_DIR)) return [];
  return fs
    .readdirSync(NOTEBOOK_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && /^volume_\d+$/.test(entry.name))
    .map((entry) => entry.name)
    .sort();
}

function volumeNumberFromFolder(folder: string): number {
  return Number(folder.match(/^volume_(\d+)$/)?.[1] ?? 0);
}

function volumeSlugFromNumber(number: number): string {
  return `volume-${String(number).padStart(2, "0")}`;
}

/** Chapter number and slug both derive from the filename (e.g.
 *  "001_the_old_nokia.md" → chapter 1, "the-old-nokia") rather than
 *  frontmatter, since the very first note predates that frontmatter
 *  convention and omits both fields. */
function parseFilename(filename: string): { chapter: number; slug: string } | null {
  const match = filename.match(/^(\d+)_(.+)\.md$/);
  if (!match) return null;
  return { chapter: Number(match[1]), slug: match[2].replace(/_/g, "-") };
}

function getNoteFilenames(folder: string): string[] {
  const dir = path.join(NOTEBOOK_DIR, folder);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((filename) => filename.endsWith(".md") && filename !== "README.md");
}

/** Returns null for drafts or malformed files (missing title/category/type,
 *  or an empty stub like volume_02's placeholder) rather than throwing. */
function loadNote(folder: string, filename: string): Note | null {
  const parsed = parseFilename(filename);
  if (!parsed) return null;

  const raw = fs.readFileSync(path.join(NOTEBOOK_DIR, folder, filename), "utf8");
  const { data, content } = matter(raw);

  if (!data.title || !data.category || !data.type || !content.trim()) return null;

  const volumeNumber = volumeNumberFromFolder(folder);

  return {
    slug: parsed.slug,
    volumeSlug: volumeSlugFromNumber(volumeNumber),
    volumeNumber,
    chapter: parsed.chapter,
    title: data.title,
    category: data.category,
    type: data.type,
    readingTime: String(data.readingTime ?? ""),
    dateApprox: data.dateApprox ? String(data.dateApprox) : undefined,
    tags: Array.isArray(data.tags) ? data.tags : [],
    mood: Array.isArray(data.mood) ? data.mood : [],
    featured: Boolean(data.featured),
    content: stripContinueReadingFooter(content),
  };
}

/** Volumes with zero valid notes (a not-yet-written future volume, or a
 *  stub placeholder) never appear — no special-casing needed as the
 *  notebook grows. */
export function getAllVolumes(): Volume[] {
  return getVolumeFolders()
    .map((folder) => {
      const number = volumeNumberFromFolder(folder);
      const slug = volumeSlugFromNumber(number);
      const notes = getNoteFilenames(folder)
        .map((filename) => loadNote(folder, filename))
        .filter((note): note is Note => note !== null)
        .sort((a, b) => a.chapter - b.chapter);
      const meta = VOLUME_META[slug];

      return {
        slug,
        number,
        title: meta?.title ?? `Volume ${String(number).padStart(2, "0")}`,
        description: meta?.description ?? "",
        notes,
      };
    })
    .filter((volume) => volume.notes.length > 0)
    .sort((a, b) => a.number - b.number);
}

export function getVolumeBySlug(slug: string): Volume | undefined {
  return getAllVolumes().find((volume) => volume.slug === slug);
}

export function getNoteBySlug(volumeSlug: string, noteSlug: string): Note | undefined {
  return getVolumeBySlug(volumeSlug)?.notes.find((note) => note.slug === noteSlug);
}

export function getAdjacentNotes(
  volumeSlug: string,
  chapter: number
): { previous?: Note; next?: Note } {
  const volume = getVolumeBySlug(volumeSlug);
  if (!volume) return {};
  const index = volume.notes.findIndex((note) => note.chapter === chapter);
  if (index === -1) return {};
  return {
    previous: index > 0 ? volume.notes[index - 1] : undefined,
    next: index < volume.notes.length - 1 ? volume.notes[index + 1] : undefined,
  };
}

export function getAllNoteParams(): { volume: string; slug: string }[] {
  return getAllVolumes().flatMap((volume) =>
    volume.notes.map((note) => ({ volume: volume.slug, slug: note.slug }))
  );
}

/** Sums each note's authored "N min" reading time into a volume total. */
export function getVolumeReadingTime(volume: Volume): number {
  return volume.notes.reduce((total, note) => {
    const minutes = Number(note.readingTime.match(/\d+/)?.[0] ?? 0);
    return total + minutes;
  }, 0);
}
