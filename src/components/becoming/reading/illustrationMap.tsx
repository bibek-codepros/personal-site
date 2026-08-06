import type { ReactElement } from "react";

import { DeskIllustration } from "@/components/story/DeskIllustration";
import { NokiaPhoneIllustration } from "@/components/story/NokiaPhoneIllustration";
import { QuietOfficeIllustration } from "@/components/story/QuietOfficeIllustration";
import { WindowSeatIllustration } from "@/components/story/WindowSeatIllustration";

import type { ChapterMeta } from "@/content/chaptersMeta";

import { CompassIllustration } from "./illustrations/CompassIllustration";
import { HtmlBracketsIllustration } from "./illustrations/HtmlBracketsIllustration";

/** One illustration per chapter, per BECOMING_STRUCTURE.md — never more. */
export const ILLUSTRATIONS: Record<ChapterMeta["illustrationKey"], () => ReactElement> = {
  nokia: NokiaPhoneIllustration,
  html: HtmlBracketsIllustration,
  workspace: QuietOfficeIllustration,
  compass: CompassIllustration,
  windowSeat: WindowSeatIllustration,
  desk: DeskIllustration,
};
