import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { Paragraph } from "@/components/typography/Paragraph";
import { getVolumeReadingTime, type Volume } from "@/lib/notebook";

/** The Notebook's book cover — a volume introducing itself before handing
 *  the reader its table of contents, per "design it as a book... Volume
 *  01 / The Beginning / 20 Notes / Estimated Reading Time / Short
 *  Editorial Introduction / Continue Reading." Centered at the same
 *  680px width as Becoming's reading column — matching it exactly, not
 *  just approximately, so the page doesn't drift out of alignment with
 *  NoteList below it at wide viewports. */
export function VolumeHero({ volume }: { volume: Volume }) {
  const totalMinutes = getVolumeReadingTime(volume);
  const firstNote = volume.notes[0];

  return (
    <Section as="header" spacing="lg">
      <Container>
        <FadeIn onScroll={false} className="mx-auto max-w-[680px]">
          <SiteHeader current="notebook" className="mb-8" />
          <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
            Volume {String(volume.number).padStart(2, "0")}
          </p>
          <h1 className="mt-4 font-heading text-[32px] leading-[1.25] font-normal text-foreground md:text-[40px]">
            {volume.title}
          </h1>
          {/* Existing Notebook editorial line, promoted from
              content/notebook/README.md — not new copy. */}
          <p className="mt-4 font-heading text-xl text-muted-foreground italic">
            Write to remember.
            <br />
            Never write to impress.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            {volume.notes.length} Notes
            {totalMinutes > 0 && <> &middot; {totalMinutes} min read</>}
          </p>
          {volume.description && (
            <Paragraph variant="lead" constrained={false} className="mt-8">
              {volume.description}
            </Paragraph>
          )}
          {/* Same source as above — used once, quietly, ahead of the CTA. */}
          <p className="mt-6 text-sm text-muted-foreground">
            None of them were written to teach. They were written to remember.
          </p>
          {firstNote && (
            <div className="mt-10">
              <Button
                href={`/notebook/${volume.slug}/${firstNote.slug}`}
                variant="primary"
                size="lg"
              >
                Continue Reading &rarr;
              </Button>
            </div>
          )}
        </FadeIn>
      </Container>
    </Section>
  );
}
