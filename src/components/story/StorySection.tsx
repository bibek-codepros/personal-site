import type { ReactNode } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { DURATION } from "@/components/animations/variants";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { StoryImage } from "@/components/shared/StoryImage";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { QuoteBlock } from "@/components/typography/QuoteBlock";
import { cn } from "@/lib/utils";

type StoryImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

type StorySectionProps = {
  id?: string;
  heading: string;
  intro?: string;
  subheading?: string;
  paragraphs: string[];
  quote?: { text: string; author?: string };
  image?: StoryImageData;
  /** A monochrome line-art fallback for when no real photograph exists yet. */
  illustration?: ReactNode;
  imagePosition?: "left" | "right";
  cta?: { label: string; href: string };
  background?: "transparent" | "primary" | "secondary" | "card";
};

/**
 * A reusable narrative block — heading, paragraphs, an optional quote and
 * image. Used for both "The Place That Believed In Me" and "Window Seat".
 */
export function StorySection({
  id,
  heading,
  intro,
  subheading,
  paragraphs,
  quote,
  image,
  illustration,
  imagePosition = "right",
  cta,
  background = "transparent",
}: StorySectionProps) {
  const hasVisual = Boolean(image || illustration);
  /**
   * A story told in fewer words (e.g. Window Seat) gets more room around
   * those words rather than an added quote or intro to fill the space —
   * brevity reads as a deliberate pause, not as unfinished.
   */
  const isCompact = !intro && !quote;

  return (
    <Section id={id} spacing="lg" background={background}>
      <Container>
        <div
          className={cn(
            "grid items-center gap-16",
            hasVisual && "lg:grid-cols-2 lg:gap-20"
          )}
        >
          <FadeIn
            className={cn(
              "max-w-[720px]",
              hasVisual && imagePosition === "left" && "lg:order-2"
            )}
          >
            <Heading variant="section">{heading}</Heading>

            {subheading && (
              <p className="mt-8 font-heading text-2xl leading-snug text-balance whitespace-pre-line text-muted-foreground italic md:text-3xl">
                {subheading}
              </p>
            )}

            {intro && (
              <Paragraph variant="lead" constrained={false} className="mt-8">
                {intro}
              </Paragraph>
            )}

            <div
              className={cn(
                "mt-8 space-y-8",
                isCompact && "mt-10 space-y-10 md:mt-12 md:space-y-12"
              )}
            >
              {paragraphs.map((paragraph) => (
                <Paragraph key={paragraph} constrained={false}>
                  {paragraph}
                </Paragraph>
              ))}
            </div>

            {quote && (
              <QuoteBlock author={quote.author} className="mt-14">
                {quote.text}
              </QuoteBlock>
            )}

            {cta && (
              <Button
                href={cta.href}
                variant="text"
                className={cn("mt-10", isCompact && "mt-14 md:mt-16")}
              >
                {cta.label}
              </Button>
            )}
          </FadeIn>

          {hasVisual && (
            <FadeIn
              delay={DURATION.fast}
              distance={12}
              className={cn(imagePosition === "left" && "lg:order-1")}
            >
              {image ? <StoryImage {...image} /> : illustration}
            </FadeIn>
          )}
        </div>
      </Container>
    </Section>
  );
}
