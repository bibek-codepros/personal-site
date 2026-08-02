import Link from "next/link";

import { FadeIn } from "@/components/animations/FadeIn";
import { Divider } from "@/components/shared/Divider";

import type { Note } from "@/lib/notebook";

const LINK_CLASSES =
  "group block rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background";
const LABEL_CLASSES = "text-xs font-medium tracking-wide text-muted-foreground uppercase";
const TITLE_CLASSES =
  "mt-2 block font-heading text-lg text-foreground transition-opacity group-hover:opacity-70";

type NoteNavigationProps = {
  volumeSlug: string;
  previous?: Note;
  next?: Note;
};

/** A book's page turn, not a "next chapter" ceremony — quiet Previous/Next
 *  links, per SPRINT_3_NOTEBOOK_IMPLEMENTATION.md's "Kindle, Apple Books,
 *  Medium. Not Notion." The first note links back to the Notebook instead
 *  of leaving an empty slot; the last note names what's next honestly. */
export function NoteNavigation({ volumeSlug, previous, next }: NoteNavigationProps) {
  return (
    <FadeIn duration={0.5} className="mt-20">
      <Divider className="mb-10" />
      <nav aria-label="Note navigation" className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          {previous ? (
            <Link href={`/notebook/${volumeSlug}/${previous.slug}`} className={LINK_CLASSES}>
              <span className={LABEL_CLASSES}>&larr; Previous</span>
              <span className={TITLE_CLASSES}>{previous.title}</span>
            </Link>
          ) : (
            <Link href="/notebook" className={LINK_CLASSES}>
              <span className={LABEL_CLASSES}>&larr; Back to</span>
              <span className={TITLE_CLASSES}>Notebook</span>
            </Link>
          )}
        </div>

        <div className="sm:text-right">
          {next ? (
            <Link href={`/notebook/${volumeSlug}/${next.slug}`} className={LINK_CLASSES}>
              <span className={LABEL_CLASSES}>Next &rarr;</span>
              <span className={TITLE_CLASSES}>{next.title}</span>
            </Link>
          ) : (
            <div>
              <span className={LABEL_CLASSES}>Next</span>
              <span className="mt-2 block font-heading text-lg text-muted-foreground italic">
                Volume 02 — coming soon
              </span>
            </div>
          )}
        </div>
      </nav>
    </FadeIn>
  );
}
