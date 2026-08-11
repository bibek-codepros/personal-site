import type { ReactElement } from "react";

import { ClosedDoorIllustration } from "@/components/story/ClosedDoorIllustration";
import { DeskIllustration } from "@/components/story/DeskIllustration";
import { NokiaPhoneIllustration } from "@/components/story/NokiaPhoneIllustration";
import { QuietOfficeIllustration } from "@/components/story/QuietOfficeIllustration";
import { RoomIllustration } from "@/components/story/RoomIllustration";
import { WindowSeatIllustration } from "@/components/story/WindowSeatIllustration";
import { WristbandIllustration } from "@/components/story/WristbandIllustration";

import type { IllustrationKey } from "@/content/chaptersMeta";

import { CompassIllustration } from "./illustrations/CompassIllustration";
import { HtmlBracketsIllustration } from "./illustrations/HtmlBracketsIllustration";

/** One illustration per chapter that has one, per BECOMING_STRUCTURE.md —
 *  never more. A chapter with no `illustrationKey` simply has no entry
 *  here to look up, not a placeholder. */
export const ILLUSTRATIONS: Record<IllustrationKey, () => ReactElement> = {
  nokia: NokiaPhoneIllustration,
  closedDoor: ClosedDoorIllustration,
  html: HtmlBracketsIllustration,
  workspace: QuietOfficeIllustration,
  compass: CompassIllustration,
  windowSeat: WindowSeatIllustration,
  desk: DeskIllustration,
  room: RoomIllustration,
  wristband: WristbandIllustration,
};
