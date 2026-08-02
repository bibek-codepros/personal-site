import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FadeIn } from "@/components/animations/FadeIn";
import { NoteHeader } from "@/components/notebook/NoteHeader";
import { NoteNavigation } from "@/components/notebook/NoteNavigation";
import { NoteRenderer } from "@/components/notebook/NoteRenderer";
import {
  getAdjacentNotes,
  getAllNoteParams,
  getNoteBySlug,
  getVolumeBySlug,
} from "@/lib/notebook";

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

  return {
    title: `${note.title} — Notebook | Bibek Sigdel`,
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { volume: volumeSlug, slug } = await params;
  const volume = getVolumeBySlug(volumeSlug);
  const note = volume ? getNoteBySlug(volumeSlug, slug) : undefined;
  if (!volume || !note) notFound();

  const { previous, next } = getAdjacentNotes(volumeSlug, note.chapter);

  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24">
      <NoteHeader note={note} volume={volume} />

      <FadeIn onScroll={false} delay={0.35} className="mt-12">
        <NoteRenderer note={note} />
      </FadeIn>

      <NoteNavigation volumeSlug={volume.slug} previous={previous} next={next} />
    </div>
  );
}
