import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/buttons/Button";

import type { ChapterMeta } from "@/content/chaptersMeta";

import { ChapterNavigation } from "./ChapterNavigation";

const CHAPTER_WORDS = ["One", "Two", "Three", "Four", "Five", "Six"];

type ChapterEndingProps = {
  current: ChapterMeta;
  next?: ChapterMeta;
};

/** The ending should feel slower than the beginning — never abrupt. */
export function ChapterEnding({ current, next }: ChapterEndingProps) {
  const isFinalChapter = !next;

  return (
    <FadeIn duration={0.6} className="mt-20 flex flex-col items-center gap-10 text-center">
      {isFinalChapter ? (
        <div className="space-y-3">
          <p className="font-heading text-2xl text-foreground italic">
            You have reached the end.
          </p>
          <p className="text-lg text-muted-foreground">
            But not the end of the journey.
          </p>
          <p className="text-lg text-muted-foreground">
            Thank you for spending time inside HOME.
          </p>
        </div>
      ) : (
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

      {isFinalChapter ? (
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Button href="/" variant="primary" size="lg">
            Return Home
          </Button>
          <Button href="/notebook" variant="secondary" size="lg">
            Visit Notebook
          </Button>
          <Button href="/contact" variant="text" size="lg">
            Start a Conversation
          </Button>
        </div>
      ) : (
        <Button href={`/becoming/${next.slug}`} variant="primary" size="lg">
          Open Chapter {CHAPTER_WORDS[next.number - 1]} →
        </Button>
      )}
    </FadeIn>
  );
}
