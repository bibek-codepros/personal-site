import type { Metadata } from "next";

import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { EmptyState } from "@/components/notebook/EmptyState";

export const metadata: Metadata = {
  title: "Page Not Found | Bibek Sigdel",
};

/** The one moment HOME can't avoid being a website. Kept as quiet as
 *  everywhere else — one line, one way home, nothing more. No motion:
 *  an unplanned page shouldn't ask a visitor to wait for a reveal. */
export default function NotFound() {
  return (
    <Section spacing="lg" className="flex min-h-[70svh] items-center">
      <Container size="md">
        <EmptyState message="This page doesn't exist here." />
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Back to Home →
          </Button>
        </div>
      </Container>
    </Section>
  );
}
