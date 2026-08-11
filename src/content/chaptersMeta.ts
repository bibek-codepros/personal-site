/**
 * Metadata for the Becoming manuscript — lives in the application, not the
 * manuscript itself (per docs/becoming/02_BECOMING_CONTENT_FLOW.md: "This
 * information comes from the application. Not from the manuscript.").
 *
 * The markdown files in content/stories/ stay untouched. If a future
 * chapter file DOES include frontmatter, the loader in src/lib/stories.ts
 * prefers that over this registry — this is the fallback for chapters
 * that don't.
 *
 * Every marker below (`startMarker`/`endMarker`) is an exact substring
 * copied from the manuscript, used only to locate where a special visual
 * treatment begins and ends. The words themselves are never altered, and
 * `location`/`year` are only ever filled in where the manuscript states
 * them plainly — never inferred or invented.
 */

export type TextRange = {
  /** Exact substring from the manuscript marking where the block starts. */
  startMarker: string;
  /** Exact substring from the manuscript marking where the block ends. */
  endMarker: string;
};

export type MemoryBlockConfig = TextRange & {
  title: string;
  location?: string;
};

export type ArmyJourneyCallout = {
  heading: string;
  attempts: number;
  stages: { stage: string; result: string }[];
  note: string;
};

export type SupportingDetail = {
  icon: "MapPin" | "Plane";
  label: string;
};

export type IllustrationKey =
  | "nokia"
  | "closedDoor"
  | "html"
  | "workspace"
  | "compass"
  | "windowSeat"
  | "desk"
  | "room"
  | "wristband";

export type ChapterMeta = {
  slug: string;
  filename: string;
  number: number;
  title: string;
  /** The emotional question this chapter answers — used as its subtitle. */
  subtitle: string;
  backgroundTint: string;
  /** Omitted entirely where no existing illustration fits — never a
   *  placeholder or an invented symbol just to fill the slot. */
  illustrationKey?: IllustrationKey;
  memoryBlocks?: MemoryBlockConfig[];
  /** One verbatim, self-contained sentence — the chapter's pull quote. */
  pullQuote?: TextRange;
  armyJourneyCallout?: ArmyJourneyCallout;
  supportingDetails?: SupportingDetail[];
};

export const CHAPTERS_META: ChapterMeta[] = [
  {
    slug: "where-it-all-began",
    filename: "01_where_it_all_began.md",
    number: 1,
    title: "Where It All Began",
    subtitle: "Where did curiosity begin?",
    backgroundTint: "#faf8f5",
    illustrationKey: "nokia",
    memoryBlocks: [
      {
        title: "The Old Nokia Phone",
        startMarker: "When I was around twelve years old, my mother owned a small Nokia phone.",
        endMarker: "To me, it was something waiting to be explored.",
      },
    ],
  },
  {
    // New chapter, split out of "Where It All Began" in Phase 12 — the
    // Army-dream material was always its own conceptual arc; it now has
    // its own page. Subtitle is newly authored (app-layer metadata, like
    // every other chapter's subtitle already is) — not manuscript prose.
    slug: "the-dream",
    filename: "02_the_dream.md",
    number: 2,
    title: "The Dream",
    subtitle: "What happens when a dream doesn't choose you back?",
    backgroundTint: "#f8f6f2",
    illustrationKey: "closedDoor",
    memoryBlocks: [
      {
        title: "Three Attempts",
        startMarker: "Three attempts.",
        endMarker: '"Not this path."',
      },
    ],
    pullQuote: {
      startMarker: "Life wasn't closing a door.",
      endMarker: "It was simply refusing to let me enter the wrong one.",
    },
    armyJourneyCallout: {
      heading: "Three Attempts. Same Ending.",
      attempts: 3,
      stages: [
        { stage: "Physical Examination", result: "Passed" },
        { stage: "Written Examination", result: "Passed" },
        { stage: "Lok Sewa Examination", result: "Passed" },
        { stage: "Interview", result: "Not Selected" },
      ],
      note: "This sequence repeated three times.",
    },
  },
  {
    slug: "starting-again",
    filename: "03_starting_again.md",
    number: 3,
    title: "Starting Again",
    subtitle: "What happened when the original dream ended?",
    backgroundTint: "#f7f8f3",
    illustrationKey: "html",
    memoryBlocks: [
      {
        title: "The Copied HTML File",
        location: "Code Pros",
        startMarker: "One of my earliest tasks was to build an HTML landing page.",
        endMarker: "Copied everything.",
      },
    ],
    pullQuote: {
      startMarker: "That willingness turned out to matter far more than experience.",
      endMarker: "That willingness turned out to matter far more than experience.",
    },
  },
  {
    slug: "the-place-that-believed-in-me",
    filename: "04_the_place_that_believed_in_me.md",
    number: 4,
    title: "The Place That Believed In Me",
    subtitle: "Who believed in me before I believed in myself?",
    backgroundTint: "#f6f6f5",
    illustrationKey: "workspace",
    memoryBlocks: [
      {
        title: "Walking Into Code Pros",
        location: "Code Pros",
        startMarker: "For me, one of those moments arrived when I walked into Code Pros.",
        endMarker: "I had found something much more valuable.",
      },
    ],
    pullQuote: {
      startMarker: "Growth rarely arrives after we feel ready.",
      endMarker: "Confidence catches up later.",
    },
  },
  {
    slug: "leading-beyond-code",
    filename: "05_leading_beyond_code.md",
    number: 5,
    title: "Leading Beyond Code",
    subtitle: "What does leadership actually mean?",
    backgroundTint: "#f5f7f8",
    illustrationKey: "compass",
    pullQuote: {
      startMarker: "Mistakes are not evidence that someone shouldn't lead.",
      endMarker: "They're evidence that someone is still learning how.",
    },
  },
  {
    // New chapter (Phase 12) — the first half of the former single ACL
    // chapter, split at its existing "One flight of stairs." divider.
    // Subtitle newly authored, same basis as "The Dream"'s.
    //
    // Illustration added later (Phase 16 identity refinement): a single
    // hospital wristband, not a bed/knee/diagram — the chapter isn't
    // about the injury, it's about becoming someone who has to wait.
    slug: "no-room-for-me",
    filename: "06_no_room_for_me.md",
    number: 6,
    title: "No Room For Me",
    subtitle: "What do you fear when the fear changes shape?",
    backgroundTint: "#f5f4f2",
    illustrationKey: "wristband",
  },
  {
    // Second half of the former single ACL chapter (Phase 12 split).
    slug: "room-kitchen-bathroom",
    filename: "07_room_kitchen_bathroom.md",
    number: 7,
    title: "Room, Kitchen, Bathroom",
    subtitle: "How small can a world become?",
    backgroundTint: "#f6f6f4",
    illustrationKey: "room",
  },
  {
    slug: "window-seat",
    filename: "08_window_seat.md",
    number: 8,
    title: "Window Seat",
    subtitle: "When did life begin making sense?",
    backgroundTint: "#f6f8fa",
    illustrationKey: "windowSeat",
    memoryBlocks: [
      {
        title: "The Window Seat",
        location: "Tribhuvan International Airport, Kathmandu",
        startMarker: "Boarding.",
        endMarker: "It felt strangely symbolic.",
      },
    ],
    pullQuote: {
      startMarker: "Sometimes changing countries also changes the way we look at our own lives.",
      endMarker: "Sometimes changing countries also changes the way we look at our own lives.",
    },
    supportingDetails: [
      { icon: "MapPin", label: "Tribhuvan International Airport, Kathmandu" },
      { icon: "MapPin", label: "Singapore — transit" },
      { icon: "MapPin", label: "Bali — destination" },
    ],
  },
  {
    slug: "still-becoming",
    filename: "09_still_becoming.md",
    number: 9,
    title: "Still Becoming",
    subtitle: "What am I still searching for?",
    backgroundTint: "#faf6ee",
    illustrationKey: "desk",
    pullQuote: {
      startMarker: "Peace doesn't come from pleasing everybody.",
      endMarker: "It comes from acting with honesty and accepting that some paths simply aren't yours to control.",
    },
  },
];

export function getChapterMeta(slug: string): ChapterMeta | undefined {
  return CHAPTERS_META.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(number: number) {
  return {
    previous: CHAPTERS_META.find((chapter) => chapter.number === number - 1),
    next: CHAPTERS_META.find((chapter) => chapter.number === number + 1),
  };
}
