import type { ComponentType } from "react";

import { ClosedDoorIllustration } from "@/components/story/ClosedDoorIllustration";
import { DeskIllustration } from "@/components/story/DeskIllustration";
import { HtmlBracketsIllustration } from "@/components/becoming/reading/illustrations/HtmlBracketsIllustration";
import { NokiaPhoneIllustration } from "@/components/story/NokiaPhoneIllustration";
import { QuietOfficeIllustration } from "@/components/story/QuietOfficeIllustration";
import { WindowSeatIllustration } from "@/components/story/WindowSeatIllustration";

export type HomeChapter = {
  number: string;
  title: string;
  description: string;
  href: string;
  /** One object, not an icon — the same symbol used wherever this memory appears. */
  illustration: ComponentType;
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
    href: "/becoming/where-it-all-began",
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
    illustration: QuietOfficeIllustration,
  },
  {
    number: "05",
    title: "Window Seat",
    description:
      "Sometimes progress doesn't feel like success until you're looking back through the clouds.",
    href: "#window-seat",
    illustration: WindowSeatIllustration,
  },
  {
    number: "06",
    title: "Still Becoming",
    description: "I'm not finished. Maybe none of us ever are.",
    href: "/becoming/still-becoming",
    illustration: DeskIllustration,
  },
];
