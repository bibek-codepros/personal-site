import Link from "next/link";

import { CHAPTERS_META } from "@/content/chaptersMeta";
import { cn } from "@/lib/utils";

/** 01 • 02 • 03... — chapter-based progress, never a percentage bar. */
export function ChapterNavigation({ currentNumber }: { currentNumber: number }) {
  return (
    <nav aria-label="Chapter progress">
      <ol className="flex items-center justify-center gap-4">
        {CHAPTERS_META.map((chapter) => {
          const isCurrent = chapter.number === currentNumber;
          return (
            <li key={chapter.slug}>
              <Link
                href={`/becoming/${chapter.slug}`}
                aria-current={isCurrent ? "page" : undefined}
                aria-label={`Chapter ${chapter.number}: ${chapter.title}`}
                className={cn(
                  "block size-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isCurrent
                    ? "bg-foreground"
                    : "bg-border hover:bg-muted-foreground"
                )}
              />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
