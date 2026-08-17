import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/animations/FadeIn";
import { NoteHeader } from "@/components/notebook/NoteHeader";
import { NoteNavigation } from "@/components/notebook/NoteNavigation";
import { NoteRenderer } from "@/components/notebook/NoteRenderer";
import { NOTE_VISUALS } from "@/content/notebookVisuals";
import {
  getAdjacentNotes,
  getAllNoteParams,
  getNoteBySlug,
  getVolumeBySlug,
} from "@/lib/notebook";
import { pageMetadata } from "@/lib/site";
import { cn } from "@/lib/utils";

type NotePageProps = {
  params: Promise<{ volume: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllNoteParams();
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { volume: volumeSlug, slug } = await params;
  const note = getNoteBySlug(volumeSlug, slug);
  if (!note) return {};

  const title = `${note.title} — Notebook | Bibek Sigdel`;
  // No note currently has its own excerpt or description in frontmatter,
  // so the title is the only existing text honest to fall back to here.
  const description = note.title;

  return {
    title,
    description,
    ...pageMetadata({ title, description, path: `/notebook/${volumeSlug}/${slug}` }),
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { volume: volumeSlug, slug } = await params;
  const volume = getVolumeBySlug(volumeSlug);
  const note = volume ? getNoteBySlug(volumeSlug, slug) : undefined;
  if (!volume || !note) notFound();

  const { previous, next } = getAdjacentNotes(volumeSlug, note.chapter);
  const noteVisual = NOTE_VISUALS[note.slug];

  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24">
      <NoteHeader note={note} volume={volume} />

      {noteVisual && (
        <FadeIn
          onScroll={false}
          delay={0.3}
          className={cn("mt-10 max-w-[240px]", noteVisual.className)}
        >
          <noteVisual.Component />
        </FadeIn>
      )}

      <FadeIn onScroll={false} delay={0.35} className="mt-12">
        <NoteRenderer note={note} />
      </FadeIn>

      <NoteNavigation volumeSlug={volume.slug} previous={previous} next={next} />
    </div>
  );
}
