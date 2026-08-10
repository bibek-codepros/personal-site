import Link from "next/link";

import { StaggerItem } from "@/components/animations/StaggerGroup";
import { IllustrationFrame } from "@/components/shared/IllustrationFrame";
import { cn } from "@/lib/utils";

import type { HomeChapter } from "./chaptersData";

type ChapterCardProps = HomeChapter & { className?: string };

/**
 * A chapter in a book, not a milestone — the whole card is the link.
 * Each one leads with its own object rather than a generic icon, so the
 * six cards read as six specific memories, not six feature tiles.
 *
 * One hover interaction only, deliberately — the quiet "Read →" reveal.
 * The illustration itself no longer lifts on hover; a spatial lift reads
 * closer to a generic UI card than to touching an old object, and every
 * card (including Chapter 07) shares this exact same, single behavior.
 */
export function ChapterCard({
  number,
  title,
  description,
  href,
  illustration: Illustration,
  className,
}: ChapterCardProps) {
  return (
    <StaggerItem as="li" className={cn("list-none", className)}>
      <Link
        href={href}
        className="group block rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
      >
        <div className="max-w-[190px]">
          {Illustration ? <Illustration /> : <IllustrationFrame />}
        </div>
        <p className="mt-5 font-mono text-xs tracking-wide text-muted-foreground uppercase">
          Chapter {number}
        </p>
        <h3 className="mt-2 font-heading text-2xl text-foreground">
          {title}
        </h3>
        <p className="mt-3 max-w-[320px] text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
        <p className="mt-4 text-sm font-medium text-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Read →
        </p>
      </Link>
    </StaggerItem>
  );
}
