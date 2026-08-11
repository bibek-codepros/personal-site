import { FadeIn } from "@/components/animations/FadeIn";
import { MOTION } from "@/components/animations/variants";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

/**
 * Grouped into beats rather than one flat list — each group is a single
 * breath of the story, with a larger pause between beats. Presentation
 * only: every line of copy is unchanged.
 */
const STORY_LINE_GROUPS = [
  [
    "When I was younger, I dreamed of becoming an Army Officer.",
    "I gave everything I had to that dream.",
  ],
  ["Three attempts.", "Three failures."],
  [
    "For a while, I believed those interviews had decided my future.",
    "They hadn't.",
  ],
  [
    "Life quietly redirected me toward technology.",
    "At first, I didn't even know how to build a simple HTML page.",
    "I copied templates because I didn't know where to begin.",
  ],
  [
    "Years later, I was leading projects, helping teams grow, and building products I could never have imagined back then.",
  ],
  [
    "Looking back, I don't think my story is about changing careers.",
    "I think it's about discovering that sometimes the life we never planned becomes the one we're most grateful for.",
  ],
  [
    "This place exists to share that journey.",
    "Maybe somewhere along the way, you'll recognize a part of your own.",
  ],
];

/**
 * Lets a visitor understand the whole story in about a minute — without
 * reading like a biography.
 */
export function OneMinuteStorySection() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="mx-auto max-w-[720px]">
          <FadeIn distance={MOTION.land.distance} duration={MOTION.land.duration}>
            <Heading variant="section" as="h2">
              One Minute Story
            </Heading>

            <div className="mt-10 space-y-7 md:mt-12 md:space-y-9">
              {STORY_LINE_GROUPS.map((group) => (
                <div key={group[0]} className="space-y-2">
                  {group.map((line) => (
                    <Paragraph key={line} constrained={false}>
                      {line}
                    </Paragraph>
                  ))}
                </div>
              ))}
            </div>

            <Button href="/becoming" variant="text" className="mt-12 md:mt-14">
              Continue Reading →
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
