import type { ComponentType } from "react";

import { CompassIllustration } from "@/components/becoming/reading/illustrations/CompassIllustration";
import { HtmlBracketsIllustration } from "@/components/becoming/reading/illustrations/HtmlBracketsIllustration";
import { ChairsIllustration } from "@/components/story/ChairsIllustration";
import { ClosedDoorIllustration } from "@/components/story/ClosedDoorIllustration";
import { DeskIllustration } from "@/components/story/DeskIllustration";
import { NokiaPhoneIllustration } from "@/components/story/NokiaPhoneIllustration";
import { RoomIllustration } from "@/components/story/RoomIllustration";
import { WindowSeatIllustration } from "@/components/story/WindowSeatIllustration";

export type HomeChapter = {
  number: string;
  title: string;
  description: string;
  href: string;
  /** One object, not an icon — the same symbol used wherever this memory
   *  appears. Omitted entirely for a chapter with no fitting illustration,
   *  rather than filled with a placeholder. */
  illustration?: ComponentType;
};

export const HOME_CHAPTERS: HomeChapter[] = [
  {
    number: "01",
    title: "Curiosity",
    description:
      "Everything started with a Nokia phone, endless questions, and the simple desire to understand how things worked.",
    href: "/becoming/where-it-all-began",
    illustration: NokiaPhoneIllustration,
  },
  {
    number: "02",
    title: "The Dream",
    description:
      "For years, I believed my future would wear an Army uniform. Life had another plan.",
    href: "/becoming/the-dream",
    illustration: ClosedDoorIllustration,
  },
  {
    number: "03",
    title: "Starting Again",
    description:
      "HTML wasn't where I expected to begin. It became the foundation of everything that followed.",
    href: "/becoming/starting-again",
    illustration: HtmlBracketsIllustration,
  },
  {
    number: "04",
    title: "The Place That Believed In Me",
    description:
      "Some opportunities don't just change your career. They quietly change who you become.",
    href: "#code-pros",
    illustration: ChairsIllustration,
  },
  {
    number: "05",
    title: "Leading Beyond Code",
    description:
      "Mistakes are not evidence that someone shouldn't lead. They're evidence that someone is still learning how.",
    href: "/becoming/leading-beyond-code",
    illustration: CompassIllustration,
  },
  {
    number: "06",
    title: "No Room For Me",
    description: "There was no room for me. Would I get a bed.",
    href: "/becoming/no-room-for-me",
  },
  {
    number: "07",
    title: "Room, Kitchen, Bathroom",
    description:
      "Some days, the hardest problem wasn't a decision at all. It was getting to the bathroom.",
    href: "/becoming/room-kitchen-bathroom",
    illustration: RoomIllustration,
  },
  {
    number: "08",
    title: "Window Seat",
    description:
      "Sometimes progress doesn't feel like success until you're looking back through the clouds.",
    href: "#window-seat",
    illustration: WindowSeatIllustration,
  },
  {
    number: "09",
    title: "Still Becoming",
    description: "I'm not finished. Maybe none of us ever are.",
    href: "/becoming/still-becoming",
    illustration: DeskIllustration,
  },
];
