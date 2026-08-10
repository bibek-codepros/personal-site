import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup } from "@/components/animations/StaggerGroup";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

import { ChapterCard } from "./ChapterCard";
import { HOME_CHAPTERS } from "./chaptersData";

/** Six emotional chapters, not a résumé timeline. Each opens the full story. */
export function ChapterCardsSection() {
  return (
    <Section id="chapters" spacing="lg" aria-labelledby="chapters-heading">
      <Container>
        <FadeIn className="mx-auto max-w-[720px]">
          <Heading id="chapters-heading" variant="section">
            Every chapter changed me differently.
          </Heading>
          <Paragraph constrained={false} className="mt-6">
            Click one. Take your time.
          </Paragraph>
        </FadeIn>

        <StaggerGroup
          as="ul"
          className="mt-20 grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:mt-24 lg:grid-cols-3"
        >
          {HOME_CHAPTERS.map((chapter, index) => {
            // A chapter count that doesn't divide evenly leaves one card
            // alone on the last row — center it there instead of letting
            // it strand itself on the left like a broken grid.
            const isTrailingOrphan =
              index === HOME_CHAPTERS.length - 1 &&
              HOME_CHAPTERS.length % 3 !== 0 &&
              HOME_CHAPTERS.length % 2 !== 0;
            return (
              <ChapterCard
                key={chapter.number}
                {...chapter}
                className={
                  isTrailingOrphan
                    ? "sm:col-span-2 sm:max-w-[280px] sm:mx-auto lg:col-span-3"
                    : undefined
                }
              />
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
