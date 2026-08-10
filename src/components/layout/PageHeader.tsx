import type { ReactNode } from "react";

import { FadeIn } from "@/components/animations/FadeIn";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";

import { Container } from "./Container";
import { QuietNav } from "./QuietNav";
import { Section } from "./Section";

type PageHeaderProps = {
  title: string;
  description?: string;
  /** The section this page belongs to, for the quiet way-back nav above the title. */
  current?: "home" | "becoming" | "notebook" | "contact";
  children?: ReactNode;
};

/** Invites the visitor into a page. Minimal, quiet — no hero image. */
export function PageHeader({ title, description, current, children }: PageHeaderProps) {
  return (
    <Section as="header" spacing="lg">
      <Container>
        <FadeIn onScroll={false} className="max-w-[720px]">
          {current && <QuietNav current={current} className="mb-6" />}
          <Heading variant="hero" as="h1">
            {title}
          </Heading>
          {description && (
            <Paragraph variant="lead" constrained={false} className="mt-8">
              {description}
            </Paragraph>
          )}
          {children}
        </FadeIn>
      </Container>
    </Section>
  );
}
