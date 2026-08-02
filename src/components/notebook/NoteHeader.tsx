import Link from "next/link";

import { FadeIn } from "@/components/animations/FadeIn";
import { Divider } from "@/components/shared/Divider";

import type { Note, Volume } from "@/lib/notebook";

const STAGGER = 0.1;

/** Every note opens the same quiet way — a link back to the Notebook,
 *  a category eyebrow, the title, then chapter/volume/reading-time. */
export function NoteHeader({ note, volume }: { note: Note; volume: Volume }) {
  return (
    <header>
      <FadeIn onScroll={false} distance={12} delay={STAGGER * 0}>
        <Link
          href="/notebook"
          className="rounded-sm text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          Notebook
        </Link>
        <p className="mt-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {note.category}
        </p>
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 1} className="mt-4">
        <h1 className="font-heading text-[28px] leading-[1.25] font-normal text-foreground md:text-[34px]">
          {note.title}
        </h1>
      </FadeIn>

      <FadeIn
        onScroll={false}
        distance={12}
        delay={STAGGER * 2}
        className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground"
      >
        <span>Volume {String(volume.number).padStart(2, "0")}</span>
        <span>
          · Chapter {String(note.chapter).padStart(2, "0")} of{" "}
          {String(volume.notes.length).padStart(2, "0")}
        </span>
        {note.readingTime && <span>· {note.readingTime}</span>}
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 3} className="mt-8">
        <Divider />
      </FadeIn>
    </header>
  );
}
