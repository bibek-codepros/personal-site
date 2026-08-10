import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * A minimal, monochrome line-art symbol for Window Seat — not a generic
 * "airplane window," but the specific memory the chapter lingers on: rain
 * on the glass, a glimpse of the wing, clouds below, morning light coming
 * from one side rather than glowing evenly. Every mark answers to a line
 * in the text:
 *
 * - the rain streaks: "tiny droplets slowly raced each other across the
 *   glass"
 * - the wing, low in the frame: this was a wing-side seat
 * - the clouds, further below: "watching clouds drift beneath us"
 * - the diagonal light: morning, not midday — directional, not ambient
 *
 * Still monochrome, still a placeholder for a real photograph — just
 * asked to mean something specific in the meantime.
 *
 * The rain streaks carry HOME's one piece of "environmental detail"
 * motion (see globals.css's `.rain-streak`): an extremely slow, staggered
 * opacity breathe, never position. It should not register as "this is
 * animated" — only as a faint sense that something is still happening.
 * Everything else here — the window, the wing, the clouds — stays fully
 * static; per the illustration's own object should feel physically
 * present, not alive.
 */
export function WindowSeatIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of an airplane window seat: rain on the glass, the wing just visible below, clouds further down, lit by morning light from one side"
      className="bg-[linear-gradient(135deg,_var(--card)_0%,_var(--secondary)_85%)]"
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
        <rect x="34" y="20" width="132" height="170" rx="40" />
        <rect x="50" y="36" width="100" height="138" rx="28" />
        <line x1="50" y1="128" x2="150" y2="128" />
        <path d="M50 136 L96 150 L150 136" opacity="0.8" strokeWidth="1.1" />
        <path
          d="M60 150c5-8 11-8 16 0c5-8 11-8 16 0c5-8 11-8 16 0c5-8 11-8 16 0"
          opacity="0.75"
        />
        <path
          d="M54 164c5-6 10-6 15 0c5-6 10-6 15 0c5-6 10-6 15 0c5-6 10-6 15 0c5-6 10-6 15 0"
          opacity="0.4"
        />
        <path
          d="M72 44c3 7-2 11 1 18"
          opacity="0.55"
          strokeWidth="1"
          className="rain-streak"
          style={{ animationDelay: "0s" }}
        />
        <path
          d="M92 40c2 8-3 13 0 22"
          opacity="0.55"
          strokeWidth="1"
          className="rain-streak"
          style={{ animationDelay: "1.5s" }}
        />
        <path
          d="M112 46c3 6-2 10 1 16"
          opacity="0.55"
          strokeWidth="1"
          className="rain-streak"
          style={{ animationDelay: "3s" }}
        />
        <path
          d="M132 38c2 9-3 14 0 24"
          opacity="0.55"
          strokeWidth="1"
          className="rain-streak"
          style={{ animationDelay: "4.5s" }}
        />
      </svg>
    </IllustrationFrame>
  );
}
