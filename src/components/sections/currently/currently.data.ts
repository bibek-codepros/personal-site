/**
 * The four things currently occupying his working life. Present tense,
 * specific, unresolved — proper nouns (Code Pros, 2D Plus) instead of the
 * abstract categories the chapters and the Today section already cover.
 *
 * Content is authored exactly as approved — do not rephrase for polish.
 * Headlines are hand-broken; the line breaks are intentional, not computed.
 */

export type CarryingBody =
  | { kind: "prose"; lead: string; dim: string }
  | {
      kind: "reframe";
      /** Line A's shared words, its own trailing punctuation included. */
      lineAWords: readonly string[];
      /** The same shared words, without line A's closing punctuation. */
      lineBWords: readonly string[];
      /** What line B extends into, after the shared words. Gold "?" appended. */
      tail: string;
    };

export type CarryingThought = {
  contentsLabel: string;
  /** Two lines shown in the sticky panel's caption strip. */
  caption: readonly [string, string];
  kicker: string;
  /** Hand-broken lines — never re-wrapped by the container. */
  headline: readonly string[];
  glyph: "log" | "loop" | "people" | "check";
  body: CarryingBody;
  receipts: string;
};

export const CARRYING_ITEMS: readonly CarryingThought[] = [
  {
    contentsLabel: "Writing it down",
    caption: [
      "the standards, the checklists,",
      "the documents nobody enjoys writing",
    ],
    kicker: "Code Pros · Standards, QA, documentation",
    headline: ["Who remembers", "how it was built?"],
    glyph: "log",
    body: {
      kind: "prose",
      lead: "A site is easy to build once. ",
      dim: "Keeping it working after the people who built it move on is the harder part.",
    },
    receipts:
      "project knowledge hubs · QA checklists · maintenance reports · handover notes",
  },
  {
    contentsLabel: "Removing the step in the middle",
    caption: ["the report someone rebuilds", "every Monday by hand"],
    kicker: "2D Plus · Automation, integrations",
    headline: ["Why is this still", "done by hand?"],
    glyph: "loop",
    body: {
      kind: "prose",
      lead: "Most businesses already have the systems they need. ",
      dim: "What they don\u2019t have is anything connecting them.",
    },
    receipts:
      "invoice and document processing · reporting pipelines · API integrations",
  },
  {
    contentsLabel: "Working with people",
    caption: [
      "interviews, first weeks, and the",
      "conversations nobody enjoys either",
    ],
    kicker: "Hiring · Onboarding · Offboarding",
    headline: ["When did the job stop", "being about code?"],
    glyph: "people",
    body: {
      kind: "reframe",
      lineAWords: ["can", "they", "do", "the", "work?"],
      lineBWords: ["can", "they", "do", "the", "work"],
      tail: "here, in a year",
    },
    receipts: "job posts · interviews · offers · first weeks · last ones",
  },
  {
    contentsLabel: "Leaving room to be wrong",
    caption: [
      "the answer I already had, and",
      "the part I hadn’t thought about",
    ],
    kicker: "Decisions · Reviews · Second thoughts",
    headline: ["What if I’m wrong?"],
    glyph: "check",
    body: {
      kind: "prose",
      lead: "I decide faster than I used to. ",
      dim: "The habit worth keeping is the one that costs a little time.",
    },
    receipts: "design reviews · rollback plans · postmortems · second opinions",
  },
] as const;
