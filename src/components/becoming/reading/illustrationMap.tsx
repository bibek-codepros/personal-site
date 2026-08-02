import type { ReactElement } from "react";

import { DeskIllustration } from "@/components/story/DeskIllustration";
import { WindowSeatIllustration } from "@/components/story/WindowSeatIllustration";
import { WorkspaceIllustration } from "@/components/story/WorkspaceIllustration";

import type { ChapterMeta } from "@/content/chaptersMeta";

import { CompassIllustration } from "./illustrations/CompassIllustration";
import { HtmlBracketsIllustration } from "./illustrations/HtmlBracketsIllustration";
import { NokiaPhoneIllustration } from "./illustrations/NokiaPhoneIllustration";

/** One illustration per chapter, per BECOMING_STRUCTURE.md — never more. */
export const ILLUSTRATIONS: Record<ChapterMeta["illustrationKey"], () => ReactElement> = {
  nokia: NokiaPhoneIllustration,
  html: HtmlBracketsIllustration,
  workspace: WorkspaceIllustration,
  compass: CompassIllustration,
  windowSeat: WindowSeatIllustration,
  desk: DeskIllustration,
};
