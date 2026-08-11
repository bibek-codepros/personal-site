import { Mail, ExternalLink, MapPin } from "lucide-react";
import type { Metadata } from "next";

import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/animations/StaggerGroup";
import { ContactForm } from "@/components/contact/ContactForm";
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
  "flex items-center gap-3 rounded-lg border border-border px-5 py-4 text-base text-foreground transition-[color,border-color,background-color,transform] duration-200";
const ROW_INTERACTIVE =
  "hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
const ROW_ICON = "size-4 shrink-0 text-muted-foreground";

/**
 * The front door, not a form. Header stays in the same 680px column as
 * every other page (unchanged, so the logo never drifts); everything
 * below widens into two columns — the project conversation on the left,
 * the quiet personal rows on the right — so the page reads as one
 * composition instead of a long single-column scroll.
 */
export default function ContactPage() {
  return (
    <Section spacing="lg">
      <div className="mx-auto max-w-[680px] px-6">
        <SiteHeader current="contact" />
      </div>

      <div className="mx-auto max-w-[1080px] px-6">
        <FadeIn className="mt-14 md:mt-16">
          <h1 className="font-heading text-[32px] leading-[1.2] font-normal text-foreground md:text-[40px]">
            Let&rsquo;s Talk.
          </h1>
          <p className="mt-4 font-heading text-xl text-muted-foreground italic">
            Not about projects first.
            <br />
            About people.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_340px]">
          <FadeIn>
            <h2 className="font-heading text-2xl text-foreground">Working on something?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              If you have something you&rsquo;re building, thinking about, or trying to figure
              out, tell me a little about it.
            </p>

            <div className="mt-10">
              <ContactForm />
            </div>
          </FadeIn>

          <StaggerGroup className="space-y-4">
            <StaggerItem>
              <a
                href="mailto:its.bibeksigdel@gmail.com"
                className={`${ROW_BASE} ${ROW_INTERACTIVE}`}
              >
                <Mail aria-hidden="true" strokeWidth={1.5} className={ROW_ICON} />
                its.bibeksigdel@gmail.com
              </a>
            </StaggerItem>
            <StaggerItem>
              <a
                href="https://www.linkedin.com/in/bibek-sigdel-4829b21b7/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className={`${ROW_BASE} ${ROW_INTERACTIVE}`}
              >
                <ExternalLink aria-hidden="true" strokeWidth={1.5} className={ROW_ICON} />
                LinkedIn
              </a>
            </StaggerItem>
            <StaggerItem>
              <p className={ROW_BASE}>
                <MapPin aria-hidden="true" strokeWidth={1.5} className={ROW_ICON} />
                Kathmandu, Nepal
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="pt-4 font-heading text-xl text-muted-foreground italic">
                The coffee is still on me.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </div>
    </Section>
  );
}
