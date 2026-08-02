import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const STORY_LINES = [
  "When I was younger, I dreamed of becoming an Army Officer.",
  "I gave everything I had to that dream.",
  "Three attempts.",
  "Three failures.",
  "For a while, I believed those interviews had decided my future.",
  "They hadn't.",
  "Life quietly redirected me toward technology.",
  "At first, I didn't even know how to build a simple HTML page.",
  "I copied templates because I didn't know where to begin.",
  "Years later, I was leading projects, helping teams grow, and building products I could never have imagined back then.",
  "Looking back, I don't think my story is about changing careers.",
  "I think it's about discovering that sometimes the life we never planned becomes the one we're most grateful for.",
  "HOME exists to share that journey.",
  "Maybe somewhere along the way, you'll recognize a part of your own.",
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
          <FadeIn>
            <Heading variant="section" as="h2">
              One Minute Story
            </Heading>

            <div className="mt-8 space-y-5">
              {STORY_LINES.map((line) => (
                <Paragraph key={line} constrained={false}>
                  {line}
                </Paragraph>
              ))}
            </div>

            <Button href="/becoming" variant="text" className="mt-10">
              Continue Reading →
            </Button>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
