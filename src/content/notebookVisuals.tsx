import type { ReactElement } from "react";

import { ClosedDoorIllustration } from "@/components/story/ClosedDoorIllustration";
import { EightMillionRupiahVisual } from "@/components/story/EightMillionRupiahVisual";
import { HtmlBracketsIllustration } from "@/components/becoming/reading/illustrations/HtmlBracketsIllustration";
import { NokiaPhoneIllustration } from "@/components/story/NokiaPhoneIllustration";

export type NoteVisual = {
  Component: () => ReactElement;
  /**
   * Overrides the default 240px illustration-sized box. The reused
   * illustrations are square and read fine at that fixed size; the
   * numeral treatment is a horizontal line of text, not a square image,
   * and needs to size to its own content instead of being squeezed into
   * the same box (that's what wrapped "Rp 8,000,000" onto two lines).
   */
  className?: string;
};

/**
 * A small, deliberate exception to "Notebook is text-only": a handful of
 * notes tell the exact same memory as a Becoming chapter that already has
 * a considered illustration, or hinge on a number rather than a scene.
 * Keyed by note slug rather than embedded in the manuscript, per the same
 * principle chaptersMeta.ts already follows — this is metadata about the
 * story, not the story itself. A note with no entry here stays plain text,
 * which is the default, not an oversight.
 */
export const NOTE_VISUALS: Record<string, NoteVisual> = {
  "the-old-nokia": { Component: NokiaPhoneIllustration },
  "three-army-interviews": { Component: ClosedDoorIllustration },
  "copying-html": { Component: HtmlBracketsIllustration },
  "eight-million-rupiah": {
    Component: EightMillionRupiahVisual,
    className: "w-fit max-w-full",
  },
};
