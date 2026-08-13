import Image from "next/image";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

/**
 * Grouped rather than flattened — lines that belong to the same breath
 * stay close together; a new thought earns a larger gap. This is a
 * presentation-only structure: the copy itself is unchanged.
 */
const SUPPORTING_LINE_GROUPS = [
  ["This isn't a portfolio.", "It isn't a résumé."],
  [
    "It's the story of curiosity, unexpected turns, quiet failures, meaningful people, and the journey that shaped who I am today.",
  ],
  [
    "Some of it happened while I was moving forward.",
    "Some of it happened while I couldn't move at all.",
  ],
  [
    "I call this place HOME.",
    "Not because it's where I live, but because it holds the pieces of how I became who I am.",
  ],
  ["If you're looking for my work, you'll find it.", "But before that…"],
  ["I'd love to tell you the story behind it."],
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
        <FadeIn onScroll={false} duration={0.5} distance={16} className="mb-14 md:mb-20">
          <SiteHeader variant="minimal" />
        </FadeIn>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,640px)_500px] lg:gap-16">
          <div>
            <FadeIn onScroll={false} duration={0.5} distance={16}>
              <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                Home
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                A digital memoir by Bibek Sigdel
              </p>

              <Heading variant="hero" as="h1" className="mt-8">
                Life didn&rsquo;t go the way I planned.
                <br />
                Looking back, I&rsquo;m glad it didn&rsquo;t.
              </Heading>
            </FadeIn>

            <FadeIn
              onScroll={false}
              duration={0.7}
              distance={16}
              className="mt-12 space-y-7 md:mt-16"
            >
              {SUPPORTING_LINE_GROUPS.map((group) => (
                <div key={group[0]} className="space-y-1.5">
                  {group.map((line) => (
                    <Paragraph key={line} variant="lead" constrained={false}>
                      {line}
                    </Paragraph>
                  ))}
                </div>
              ))}
            </FadeIn>

            <FadeIn
              onScroll={false}
              duration={0.9}
              distance={16}
              className="mt-14 flex flex-col items-start gap-5 sm:flex-row sm:items-center md:mt-20"
            >
              <Button href="#quote" variant="primary" size="lg">
                Walk with me →
              </Button>
              <Button href="#chapters" variant="text" size="lg">
                Or jump into the stories
              </Button>
            </FadeIn>
          </div>

          {/* OPTION C — top-aligned; the photo's own negative space
           *  stands in for the Hero's top whitespace instead of adding a
           *  separate offset margin on top of it. */}
          <FadeIn onScroll={false} duration={0.9} delay={0.2} distance={16}>
            <Image
              src="/images/bibek/bibek-portrait.jpg"
              alt="Bibek Sigdel"
              width={1600}
              height={2000}
              priority
              sizes="(min-width: 1024px) 500px, (min-width: 768px) 400px, 320px"
              className="aspect-[4/5] w-full max-w-[320px] mx-auto object-cover md:max-w-[400px] lg:mx-0 lg:max-w-full"
            />
          </FadeIn>
        </div>
      </Container>
    </Section>
  );
}
