import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

import { TypedQuote } from "./TypedQuote";

/**
 * One memorable quote. Large, centered, rare — the only place on the
 * homepage where the words are typed out rather than faded in.
 */
export function QuoteMomentSection() {
  return (
    <Section id="quote" spacing="md" background="card">
      <Container>
        <TypedQuote />
      </Container>
    </Section>
  );
}
