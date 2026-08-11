import { FadeIn } from "@/components/animations/FadeIn";
import { Divider } from "@/components/shared/Divider";
import { SiteHeader } from "@/components/shared/SiteHeader";

import type { Note, Volume } from "@/lib/notebook";

const STAGGER = 0.1;

/** Every note opens the same quiet way — the site header, a category
 *  eyebrow, the title, then chapter/volume/reading-time. Unlike every
 *  other SiteHeader usage, `current` is deliberately left unset here: a
 *  note is several clicks deep into the Notebook, not standing on its
 *  index, so "Notebook" should stay a real link back to it rather than
 *  render as unclickable "you are here" text. */
export function NoteHeader({ note, volume }: { note: Note; volume: Volume }) {
  return (
    <header>
      <FadeIn onScroll={false} distance={12} delay={STAGGER * 0}>
        <SiteHeader />
        <p className="mt-6 text-xs font-medium tracking-wide text-muted-foreground uppercase">
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
        <span>· Note {String(note.chapter).padStart(2, "0")}</span>
        {note.readingTime && <span>· {note.readingTime}</span>}
      </FadeIn>

      <FadeIn onScroll={false} distance={12} delay={STAGGER * 3} className="mt-8">
        <Divider />
      </FadeIn>
    </header>
  );
}
