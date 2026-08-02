import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

/** A short, present-tense pause. Never an ending — only where it is right now. */
export function TodaySection() {
  return (
    <Section id="today" spacing="lg" aria-labelledby="today-heading">
      <Container>
        <div className="max-w-[720px] space-y-6">
          <FadeIn>
            <Heading id="today-heading" variant="section">
              Today
            </Heading>
            <div className="mt-6 space-y-6">
              <Paragraph constrained={false}>
                I&rsquo;m still learning. Still building. Still making
                mistakes. Still asking questions. Still becoming.
              </Paragraph>
              <Paragraph constrained={false}>
                Every project teaches something. Every conversation changes
                something. Every chapter opens another.
              </Paragraph>
              <Paragraph constrained={false}>
                I hope that&rsquo;s always true.
              </Paragraph>
            </div>
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
