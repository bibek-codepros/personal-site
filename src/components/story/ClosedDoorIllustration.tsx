import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * "The Dream" — the Army path, and the three interviews that closed it.
 * A closed door, with light rising from beneath it, rather than any
 * literal military imagery. Answers to Bibek's own line about that
 * chapter: "Life wasn't closing a door. It was simply refusing to let me
 * enter the wrong one."
 */
export function ClosedDoorIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of a closed door with light rising from beneath it"
      className="bg-[linear-gradient(to_top,_var(--card)_0%,_var(--secondary)_26%,_var(--secondary)_100%)]"
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-2/3 w-2/3 text-muted-foreground"
        aria-hidden="true"
      >
        <path d="M58 208 L58 40c0-6 4-10 10-10h64c6 0 10 4 10 10v168" />
        <line x1="50" y1="212" x2="150" y2="212" opacity="0.9" />
        <circle cx="122" cy="122" r="3.5" />
      </svg>
    </IllustrationFrame>
  );
}
