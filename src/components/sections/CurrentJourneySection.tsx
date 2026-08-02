import {
  Compass,
  GraduationCap,
  Hammer,
  Heart,
  Microscope,
  Sparkles,
} from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

import { HighlightArea } from "./HighlightArea";

const VALUES = [
  {
    title: "Learning",
    description:
      "Every day I try to leave knowing a little more than I did yesterday.",
    icon: GraduationCap,
  },
  {
    title: "Building",
    description:
      "Helping create products, businesses, and ideas that solve real problems.",
    icon: Hammer,
  },
  {
    title: "Leading",
    description:
      "Supporting people, making decisions, and learning that leadership begins with listening.",
    icon: Compass,
  },
  {
    title: "Research",
    description: "Still curious. Still reading. Still asking questions.",
    icon: Microscope,
  },
  {
    title: "Family",
    description:
      "Success means very little if I can't share it with the people I love.",
    icon: Heart,
  },
  {
    title: "Life",
    description:
      "Trying to make fewer assumptions. Trying to make better decisions. Trying to become a little better every day.",
    icon: Sparkles,
  },
] as const;

/** What's quietly occupying his days right now — values, not job titles. */
export function CurrentJourneySection() {
  return (
    <Section spacing="lg" aria-labelledby="current-journey-heading">
      <Container>
        <div className="max-w-[720px]">
          <FadeIn>
            <Heading id="current-journey-heading" variant="section">
              What I&rsquo;m Building Today
            </Heading>
            <Paragraph constrained={false} className="mt-6">
              My story isn&rsquo;t finished. These are the things quietly
              occupying my days.
            </Paragraph>
          </FadeIn>
        </div>

        <FadeIn className="mt-16 grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value) => (
            <HighlightArea
              key={value.title}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </FadeIn>
      </Container>
    </Section>
  );
}
