import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";

import type { ChapterMeta } from "@/content/chaptersMeta";

import { ChapterNavigation } from "./ChapterNavigation";

const CHAPTER_WORDS = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

type ChapterEndingProps = {
  current: ChapterMeta;
  next?: ChapterMeta;
};

/**
 * The ending should feel slower than the beginning — never abrupt.
 *
 * Two independent things decide what shows here — whether a chapter is
 * the true final one (`isFinalChapter`, purely from whether a `next`
 * exists — never hardcoded to a slug, so this stays correct through any
 * future reorder), and whether a chapter's own words already did the
 * emotional work well enough that site chrome would undercut them
 * (`hasOwnClosingWords`):
 *
 * - "Still Becoming" closes with its own goodbye ("Welcome to HOME," "The
 *   coffee is on me") — and is also HOME's true final chapter, so it gets
 *   neither the "you have reached the end" text nor a next-chapter button.
 * - "Room, Kitchen, Bathroom" ends on "She bathed me. / She stayed. /
 *   (I'm crying, writing this.)" — its own words, just as final-feeling,
 *   even though the site continues past it into Window Seat. It skips the
 *   "reached the end" text like Still Becoming does, but — unlike Still
 *   Becoming — still gets the quiet way into the next chapter, since it
 *   isn't actually HOME's last one.
 */
export function ChapterEnding({ current, next }: ChapterEndingProps) {
  const isFinalChapter = !next;
  const hasOwnClosingWords =
    current.slug === "still-becoming" || current.slug === "room-kitchen-bathroom";

  return (
    <FadeIn duration={0.6} className="mt-20 flex flex-col items-center gap-10 text-center">
      {!isFinalChapter && !hasOwnClosingWords && (
        <div className="space-y-3">
          <p className="text-lg text-foreground">
            You have reached the end of Chapter {CHAPTER_WORDS[current.number - 1]}.
          </p>
          <p className="text-lg text-muted-foreground">Take a breath.</p>
          <p className="text-lg text-muted-foreground">
            Continue when you&rsquo;re ready.
          </p>
        </div>
      )}

      <ChapterNavigation currentNumber={current.number} />

      {!isFinalChapter && (
        <Button href={`/becoming/${next.slug}`} variant="primary" size="lg">
          Open Chapter {CHAPTER_WORDS[next.number - 1]} →
        </Button>
      )}
    </FadeIn>
  );
}
