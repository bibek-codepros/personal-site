import { FadeIn } from "@/components/animations/FadeIn";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

/**
 * One memorable quote. Large, centered, rare — the only place on the
 * homepage that uses the blur-reveal moment instead of the usual fade.
 */
export function QuoteMomentSection() {
  return (
    <Section id="quote" spacing="lg">
      <Container>
        <FadeIn
          blur
          duration={0.8}
          className="mx-auto max-w-[880px] text-center"
        >
          <p className="font-heading text-3xl leading-snug text-balance text-foreground italic md:text-5xl">
            Sometimes we spend so much time mourning the doors that close&hellip;
            that we fail to notice the windows opening beside them.
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
