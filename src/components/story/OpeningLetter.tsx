import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { Signature } from "@/components/typography/Signature";

/** The first page of the book. Slow reading, no distractions. */
export function OpeningLetter() {
  return (
    <Section id="opening-letter" spacing="lg">
      <Container>
        <FadeIn className="mx-auto max-w-[720px]">
          <Heading variant="page" as="h2">
            Before We Begin&hellip;
          </Heading>

          <div className="mt-10 space-y-8">
            <Paragraph constrained={false}>Welcome.</Paragraph>
            <Paragraph constrained={false}>
              I&rsquo;m genuinely happy you&rsquo;re here.
            </Paragraph>
            <Paragraph constrained={false}>
              The internet has plenty of places where people list
              achievements, share polished highlights, or try to impress
              strangers.
            </Paragraph>
            <Paragraph constrained={false}>
              I wanted to build something different.
            </Paragraph>
            <Paragraph constrained={false}>
              This isn&rsquo;t a place where I tell you how successful I am.
            </Paragraph>
            <Paragraph constrained={false}>
              It&rsquo;s a place where I share how I became the person I am
              today.
            </Paragraph>
            <Paragraph constrained={false}>
              You&rsquo;ll find stories, small victories, moments that changed
              my perspective, and people who believed in me before I fully
              believed in myself.
            </Paragraph>
            <Paragraph constrained={false}>
              If you stay for a while, I hope you leave knowing me a little
              better.
            </Paragraph>
            <Paragraph constrained={false}>Welcome home.</Paragraph>
          </div>

          <Signature className="mt-12" />
        </FadeIn>
      </Container>
    </Section>
  );
}
