import { MapPin, Plane } from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";

import type { SupportingDetail as SupportingDetailData } from "@/content/chaptersMeta";

const ICONS = { MapPin, Plane } as const;

/**
 * Tiny captions that reward attentive readers — never dominate. Lucide
 * icons stand in for the emoji examples in BECOMING_CONTENT_FLOW.md, to
 * stay consistent with the rest of HOME's icon system.
 */
export function SupportingDetails({ details }: { details: SupportingDetailData[] }) {
  return (
    <FadeIn
      onScroll={false}
      delay={0.6}
      className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
    >
      {details.map((detail) => {
        const Icon = ICONS[detail.icon];
        return (
          <span
            key={detail.label}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"
          >
            <Icon aria-hidden="true" strokeWidth={2} className="size-3.5" />
            {detail.label}
          </span>
        );
      })}
    </FadeIn>
  );
}
