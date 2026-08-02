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
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HOME_CHAPTERS.map((chapter) => (
            <ChapterCard key={chapter.number} {...chapter} />
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}
