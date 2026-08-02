import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

import type { ArmyJourneyCallout as ArmyJourneyCalloutData } from "@/content/chaptersMeta";

/**
 * An elegant fact card, not a table or a résumé — enriches the story
 * without interrupting it, per BECOMING_CONTENT_FLOW.md's Callout Sections.
 */
export function ArmyJourneyCallout({ heading, attempts, stages, note }: ArmyJourneyCalloutData) {
  return (
    <FadeIn className="my-10 rounded-lg border border-border bg-secondary/40 p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          {heading}
        </p>
        <span className="font-mono text-xs text-muted-foreground">×{attempts}</span>
      </div>
      <ol className="mt-6 space-y-4">
        {stages.map((item, index) => (
          <li
            key={item.stage}
            className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-4 last:border-0 last:pb-0"
          >
            <span className="font-heading text-lg text-foreground">{item.stage}</span>
            <span
              className={cn(
                "text-sm text-muted-foreground",
                index === stages.length - 1 && "italic"
              )}
            >
              {item.result}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted-foreground">{note}</p>
    </FadeIn>
  );
}
