import type { Metadata } from "next";

import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Paragraph } from "@/components/typography/Paragraph";
import { Signature } from "@/components/typography/Signature";

const description =
  "I genuinely believe every person is carrying a story. Some have simply never had the chance to tell it.";

export const metadata: Metadata = {
  title: "Let's Have Coffee | Bibek Sigdel",
  description,
};

/** Not a contact form. An invitation, in the same voice as the rest of HOME. */
export default function ContactPage() {
  return (
    <>
      <PageHeader title="Let&rsquo;s Have Coffee" description={description} />

      <Section spacing="md">
        <Container>
          <FadeIn className="max-w-[560px] space-y-6">
            <Paragraph>
              If you ever want to share your story, exchange ideas, or simply
              have an honest conversation&hellip; I&rsquo;d genuinely love to
              listen.
            </Paragraph>
            <Paragraph>
              Some conversations don&rsquo;t change careers. They change
              people.
            </Paragraph>

            <div className="pt-4">
              <Button href="mailto:bibek@codepros.ai" variant="primary" size="lg">
                Say hello →
              </Button>
            </div>

            <Signature className="pt-6" />
          </FadeIn>
        </Container>
      </Section>
    </>
  );
}
