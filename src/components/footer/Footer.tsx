import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/typography/Heading";
import { Signature } from "@/components/typography/Signature";

const FOOTER_NAV = [
  { label: "Stories", href: "/becoming" },
  { label: "Notebook", href: "/notebook" },
  { label: "Conversations", href: "/contact" },
  { label: "Today", href: "/#today" },
  { label: "Contact", href: "/contact" },
] as const;

const LINK_CLASSES =
  "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-secondary";

/** The visitor is leaving someone's home, not closing a browser tab. */
export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <Container>
        <div className="py-20 md:py-24">
          <div className="max-w-[560px]">
            <Heading variant="page" as="h2">
              Before You Leave
            </Heading>

            <div className="mt-6 space-y-4">
              <p className="text-lg leading-[1.7] text-foreground">
                Thank you for spending a little time here.
              </p>
              <p className="text-lg leading-[1.7] text-foreground">
                If my story reminded you of your own&hellip; then perhaps
                HOME has already done its job.
              </p>
              <p className="text-lg leading-[1.7] text-foreground">
                If you ever want to share your story, exchange ideas, or
                simply have an honest conversation&hellip; I&rsquo;d
                genuinely love to listen.
              </p>
              <p className="text-lg leading-[1.7] text-foreground">
                Some conversations don&rsquo;t change careers. They change
                people.
              </p>
              <p className="font-heading text-xl text-foreground italic">
                The coffee is on me.
              </p>
            </div>

            <Signature size="sm" className="mt-6" />
          </div>

          <nav aria-label="Footer" className="mt-14">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={LINK_CLASSES}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <p className="mt-14 text-xs text-muted-foreground">
            © Bibek Sigdel. Built with curiosity. Still becoming.
          </p>
        </div>
      </Container>
    </footer>
  );
}
