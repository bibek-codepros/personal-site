import type { Metadata } from "next";

import { FadeIn } from "@/components/animations/FadeIn";
import { Divider } from "@/components/shared/Divider";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { Heading } from "@/components/typography/Heading";
import { Paragraph } from "@/components/typography/Paragraph";
import { pageMetadata } from "@/lib/site";

const title = "Privacy | Bibek Sigdel";
const description =
  "How HOME handles the information you share here — written plainly, describing exactly what this site does.";

export const metadata: Metadata = {
  title,
  description,
  ...pageMetadata({ title, description, path: "/privacy" }),
};

type PolicySectionProps = {
  heading: string;
  children: React.ReactNode;
};

function PolicySection({ heading, children }: PolicySectionProps) {
  return (
    <section className="mt-12">
      <Heading variant="page" as="h2" className="text-xl md:text-2xl">
        {heading}
      </Heading>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

/**
 * Written from the actual implementation, not a template — see
 * src/app/api/contact/route.ts for the data flow this describes. Every
 * claim here should stay true to that file; if the contact flow ever
 * changes, this page needs to change with it.
 */
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[680px] px-6 py-16 md:py-24">
      <SiteHeader />

      <FadeIn onScroll={false} className="mt-12">
        <Heading variant="page" as="h1">
          Privacy Policy
        </Heading>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: August 2026</p>
      </FadeIn>

      <FadeIn onScroll={false} delay={0.15} className="mt-8">
        <Divider />

        <PolicySection heading="Introduction">
          <Paragraph constrained={false}>
            HOME is a personal website. It doesn&rsquo;t have user accounts,
            logins, or a checkout — most of it is simply writing, meant to
            be read. This page describes the one part of the site that
            does collect information from you: the Contact form.
          </Paragraph>
          <Paragraph constrained={false}>
            This is a plain-English description of how this specific
            website actually works, not a general-purpose legal template.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Information We Collect">
          <Paragraph constrained={false}>
            If you fill out the form on the{" "}
            <a
              href="/contact"
              className="text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              Contact
            </a>{" "}
            page, it asks for your name, email address, and a short
            description of what you&rsquo;d like to talk about. Depending on
            what you fill in, it may also include a company name, the kind
            of project you have in mind, a rough budget, and a timeline.
            All of it is optional except your name, email, and a short
            description.
          </Paragraph>
          <Paragraph constrained={false}>
            Nothing is collected anywhere else on the site. There are no
            accounts to create and no information gathered just from
            browsing the stories, chapters, or notebook entries.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="How We Use Information">
          <Paragraph constrained={false}>
            When you submit the Contact form, it&rsquo;s sent once to a
            private Google Sheet (through a Google Apps Script that this
            site talks to) and triggers a single email notification, so
            that a real reply can be sent back to you. That&rsquo;s the only
            purpose it&rsquo;s used for &mdash; reading your message and
            responding to it.
          </Paragraph>
          <Paragraph constrained={false}>
            Your submission&rsquo;s originating IP address is briefly held
            in the server&rsquo;s memory to apply a basic rate limit (so the
            form can&rsquo;t easily be spammed). That count resets whenever
            the server restarts and is never written to the Sheet or
            stored anywhere alongside your message.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="How Information Is Shared">
          <Paragraph constrained={false}>
            Contact form submissions are shared with exactly two services,
            both operated by Google, in order to deliver your message: a
            Google Sheet (where it&rsquo;s recorded) and Gmail (where the
            notification email is sent). Nobody else is given access to
            what you submit, and it is never sold, rented, or used for
            advertising.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Data Retention">
          <Paragraph constrained={false}>
            Submitted inquiries remain in the Google Sheet and the
            associated inbox until they&rsquo;re manually deleted. There is
            currently no automatic deletion schedule. If you&rsquo;d like
            your submission removed sooner, email the address below and
            it will be deleted by hand.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Data Security">
          <Paragraph constrained={false}>
            The Contact form is submitted over HTTPS. The Google Sheet and
            inbox it reaches are private and protected by the same account
            security Google provides for its own services. No payment
            information is ever collected on this site, and there is no
            guarantee of absolute security that any website can honestly
            make &mdash; only that reasonable, standard precautions are in
            place.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Your Rights">
          <Paragraph constrained={false}>
            You can ask, at any time, to see what was submitted under your
            name, have it corrected, or have it deleted. Just send an
            email &mdash; there&rsquo;s no form or account needed to make
            that request.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Third-Party Services">
          <Paragraph constrained={false}>
            This site is hosted on Vercel, which, like any hosting
            provider, processes standard web server logs (such as IP
            address and browser type) simply to serve the pages you
            request. Contact form submissions additionally reach Google
            Sheets and Gmail, as described above. This site does not use
            any analytics, advertising, or tracking scripts, and does not
            set cookies of its own.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Changes to This Policy">
          <Paragraph constrained={false}>
            If how this site handles information ever changes, this page
            will be updated to reflect it, and the date at the top will
            change too.
          </Paragraph>
        </PolicySection>

        <PolicySection heading="Contact">
          <Paragraph constrained={false}>
            Questions about this policy, or a request to see, correct, or
            delete your information, can go to{" "}
            <a
              href="mailto:its.bibeksigdel@gmail.com"
              className="text-foreground underline decoration-muted-foreground/40 underline-offset-4 transition-colors hover:decoration-foreground"
            >
              its.bibeksigdel@gmail.com
            </a>
            .
          </Paragraph>
          <Paragraph constrained={false} variant="muted" className="text-sm">
            This page describes how this website works in plain language.
            It isn&rsquo;t a substitute for legal advice, and it doesn&rsquo;t
            claim compliance with any specific regional privacy law.
          </Paragraph>
        </PolicySection>
      </FadeIn>
    </div>
  );
}
