import type { Metadata } from "next";

import { FadeIn } from "@/components/animations/FadeIn";
import { Section } from "@/components/layout/Section";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { pageMetadata } from "@/lib/site";

const title = "Let's Talk | Bibek Sigdel";
const description = "Not about projects first. About people.";

export const metadata: Metadata = {
  title,
  description,
  ...pageMetadata({ title, description, path: "/contact" }),
};

const ROW_BASE =
  "flex items-center rounded-lg border border-border px-6 py-5 text-lg text-foreground transition-colors";
const ROW_INTERACTIVE =
  "hover:border-foreground/30 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

/**
 * The front door, not a form. Three quiet editorial rows — email,
 * LinkedIn, city — bracketed by an invitation and a closing line. Same
 * flat "mx-auto max-w-[680px] px-6" column as the Becoming/Notebook
 * reading layout (not the generic Container component) so the header's
 * logo lands at the exact same pixel position here as it does on every
 * chapter and note.
 */
export default function ContactPage() {
  return (
    <Section spacing="lg">
      <div className="mx-auto max-w-[680px] px-6">
        <FadeIn>
          <SiteHeader current="contact" className="mb-14 md:mb-16" />

          <h1 className="font-heading text-[32px] leading-[1.2] font-normal text-foreground md:text-[40px]">
            Let&rsquo;s Talk.
          </h1>
          <p className="mt-4 font-heading text-xl text-muted-foreground italic">
            Not about projects first.
            <br />
            About people.
          </p>

          <div className="mt-16 space-y-4">
            <a
              href="mailto:its.bibeksigdel@gmail.com"
              className={`${ROW_BASE} ${ROW_INTERACTIVE}`}
            >
              its.bibeksigdel@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/bibek-sigdel-4829b21b7/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className={`${ROW_BASE} ${ROW_INTERACTIVE}`}
            >
              LinkedIn
            </a>
            <p className={ROW_BASE}>Kathmandu, Nepal</p>
          </div>

          <p className="mt-16 font-heading text-xl text-muted-foreground italic">
            The coffee is still on me.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
