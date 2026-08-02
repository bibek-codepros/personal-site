import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Paragraph } from "@/components/typography/Paragraph";
import { getVolumeReadingTime, type Volume } from "@/lib/notebook";

/** The Notebook's book cover — a volume introducing itself before handing
 *  the reader its table of contents, per "design it as a book... Volume
 *  01 / The Beginning / 20 Notes / Estimated Reading Time / Short
 *  Editorial Introduction / Continue Reading." */
export function VolumeHero({ volume }: { volume: Volume }) {
  const totalMinutes = getVolumeReadingTime(volume);
  const firstNote = volume.notes[0];

  return (
    <Section as="header" spacing="lg">
      <Container>
        <FadeIn onScroll={false} className="max-w-[680px]">
          <p className="text-xs font-medium tracking-[0.15em] text-muted-foreground uppercase">
            Volume {String(volume.number).padStart(2, "0")}
          </p>
          <h1 className="mt-4 font-heading text-[32px] leading-[1.25] font-normal text-foreground md:text-[40px]">
            {volume.title}
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            {volume.notes.length} Notes
            {totalMinutes > 0 && <> &middot; {totalMinutes} min read</>}
          </p>
          {volume.description && (
            <Paragraph variant="lead" constrained={false} className="mt-8">
              {volume.description}
            </Paragraph>
          )}
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
