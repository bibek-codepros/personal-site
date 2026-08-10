import { FadeIn } from "@/components/animations/FadeIn";
import { MOTION } from "@/components/animations/variants";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

import { HighlightArea } from "./HighlightArea";

const VALUES = [
  {
    number: "01",
    title: "Learning",
    description:
      "Every day I try to leave knowing a little more than I did yesterday.",
  },
  {
    number: "02",
    title: "Building",
    description:
      "Helping create products, businesses, and ideas that solve real problems.",
  },
  {
    number: "03",
    title: "Leading",
    description:
      "Supporting people, making decisions, and learning that leadership begins with listening.",
  },
  {
    number: "04",
    title: "Research",
    description: "Still curious. Still reading. Still asking questions.",
  },
  {
    number: "05",
    title: "Family",
    description:
      "Success means very little if I can't share it with the people I love.",
  },
  {
    number: "06",
    title: "Life",
    description:
      "Trying to make fewer assumptions. Trying to make better decisions. Trying to become a little better every day.",
  },
] as const;

/** Today's own quiet chapter — numbered like the others, not a values grid. */
export function CurrentJourneySection() {
  return (
    <Section
      spacing="lg"
      background="secondary"
      aria-labelledby="current-journey-heading"
    >
      <Container>
        <div className="max-w-[720px]">
          <FadeIn distance={MOTION.pause.distance} duration={MOTION.pause.duration}>
            <Heading id="current-journey-heading" variant="section">
              What I&rsquo;m Building Today
            </Heading>
            <Paragraph constrained={false} className="mt-6">
              My story isn&rsquo;t finished. These are the things quietly
              occupying my days.
            </Paragraph>
          </FadeIn>
        </div>

        <FadeIn
          distance={MOTION.pause.distance}
          duration={MOTION.pause.duration}
          className="mt-20 grid grid-cols-1 gap-x-16 gap-y-16 md:mt-24 md:grid-cols-2"
        >
          {VALUES.map((value) => (
            <HighlightArea
              key={value.title}
              number={value.number}
              title={value.title}
              description={value.description}
            />
          ))}
        </FadeIn>
      </Container>
    </Section>
  );
}
