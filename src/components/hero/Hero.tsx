import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { DeskIllustration } from "@/components/story/DeskIllustration";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

const SUPPORTING_LINES = [
  "This isn't a portfolio.",
  "It isn't a résumé.",
  "It's the story of curiosity, unexpected turns, quiet failures, meaningful people, and the journey that shaped who I am today.",
  "If you're looking for my work, you'll find it.",
  "But before that…",
  "I'd love to tell you the story behind it.",
];

/** The front door. Philosophy before profession — curiosity, not credentials. */
export function Hero() {
  return (
    <Section
      as="header"
      spacing="lg"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="hero-ambient pointer-events-none absolute inset-0 -z-10 opacity-50 [background:radial-gradient(640px_420px_at_28%_22%,var(--card)_0%,transparent_70%)]"
      />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[minmax(0,640px)_auto] lg:gap-20">
          <div>
            <FadeIn onScroll={false} duration={0.5} distance={16}>
              <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Home
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A digital memoir by Bibek Sigdel
              </p>

              <Heading variant="hero" as="h1" className="mt-6">
                Life didn&rsquo;t go the way I planned.
                <br />
                Looking back, I&rsquo;m glad it didn&rsquo;t.
              </Heading>
            </FadeIn>

            <FadeIn
              onScroll={false}
              duration={0.7}
              distance={16}
              className="mt-10 space-y-4"
            >
              {SUPPORTING_LINES.map((line) => (
                <Paragraph key={line} variant="lead" constrained={false}>
                  {line}
                </Paragraph>
              ))}
            </FadeIn>

            <FadeIn
              onScroll={false}
              duration={0.9}
              distance={16}
              className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            >
              <Button href="#quote" variant="primary" size="lg">
                Walk with me →
              </Button>
              <Button href="#chapters" variant="text" size="lg">
                Or jump into the stories
              </Button>
            </FadeIn>
          </div>

          <FadeIn
            onScroll={false}
            duration={0.9}
            delay={0.2}
            distance={16}
            className="hidden w-[320px] lg:block"
          >
            <DeskIllustration />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
