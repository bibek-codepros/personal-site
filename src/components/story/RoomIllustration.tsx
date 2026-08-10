import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * A window, mostly. A fold of a bed in the corner. A small bird passing
 * outside, easy to miss on a first look. It should read as a quiet,
 * ordinary window before it means anything — the story is what makes it
 * mean that the world kept moving on one side of the glass and stopped
 * on the other. Nothing medical, nothing symbolic-on-purpose: just a
 * room, seen from inside it.
 *
 * Motion: static memory, deliberately — not "environmental," even though
 * the bird could plausibly drift. This chapter has been flagged for
 * restraint at every previous pass; giving the bird any movement risks
 * reading as more than intended for a story this quiet. No movement here.
 */
export function RoomIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of a window seen from inside a quiet room, a small bird passing outside, a fold of a bed in the corner"
      className="bg-[linear-gradient(120deg,_var(--secondary)_0%,_var(--card)_55%,_var(--secondary)_100%)]"
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
        <rect x="90" y="30" width="80" height="130" rx="6" />
        <line x1="130" y1="30" x2="130" y2="160" opacity="0.5" />
        <line x1="90" y1="95" x2="170" y2="95" opacity="0.5" />
        <path d="M148 55c4-4 8-4 12 0c-4-2-8-2-12 0" opacity="0.7" />
        <path d="M20 200c15-4 25 0 35 8" opacity="0.45" />
        <path d="M18 212c12-3 20 0 28 6" opacity="0.25" strokeWidth="1" />
      </svg>
    </IllustrationFrame>
  );
}
