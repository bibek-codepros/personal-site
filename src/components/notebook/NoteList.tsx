import Link from "next/link";

import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import type { Volume } from "@/lib/notebook";

/** A table of contents, not a card grid — per "Then display all chapters
 *  beautifully. Think of Kindle. Apple Books. Medium. Not Notion." Centered
 *  at the same 680px width as Becoming's reading column, matching it
 *  exactly rather than the wider default Container size — otherwise this
 *  list and VolumeHero above it drift out of alignment at wide viewports. */
export function NoteList({ volume }: { volume: Volume }) {
  return (
    <Section spacing="md">
      <Container>
        <h2 className="mx-auto max-w-[680px] font-heading text-2xl text-foreground">
          Contents
        </h2>
        <StaggerGroup
          as="ol"
          className="mx-auto mt-8 max-w-[680px] divide-y divide-border"
        >
          {volume.notes.map((note) => (
            <StaggerItem as="li" key={note.slug} className="list-none">
              <Link
                href={`/notebook/${volume.slug}/${note.slug}`}
                className="group flex flex-col gap-1 rounded-sm py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
              >
                <span className="flex min-w-0 items-baseline gap-4">
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {String(note.chapter).padStart(2, "0")}
                  </span>
                  <span className="font-heading text-lg text-foreground transition-opacity group-hover:opacity-70">
                    {note.title}
                  </span>
                </span>
                {note.readingTime && (
                  <span className="pl-9 text-xs text-muted-foreground sm:shrink-0 sm:pl-0">
                    {note.readingTime}
                  </span>
                )}
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
