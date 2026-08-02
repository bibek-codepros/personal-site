import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * A minimal, monochrome line-art placeholder for the Window Seat section —
 * used until a real photograph replaces it. Per the design system,
 * illustration is only acceptable as a last resort, and only in this style.
 * The soft warm glow behind the linework is the "morning light" quality
 * Sprint 1.1 asked for — still monochrome iconography, no added color.
 */
export function WindowSeatIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of an airplane window looking out over soft clouds, lit by morning light"
      className="bg-[radial-gradient(circle_at_50%_38%,_var(--card)_0%,_var(--secondary)_72%)]"
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
        <rect x="30" y="16" width="140" height="180" rx="70" />
        <rect x="46" y="32" width="108" height="148" rx="54" />
        <line x1="46" y1="140" x2="154" y2="140" />
        <path d="M64 158c6-10 14-10 20 0c6-10 14-10 20 0c6-10 14-10 20 0" />
        <path d="M56 172c6-8 12-8 18 0c6-8 12-8 18 0c6-8 12-8 18 0c6-8 12-8 18 0" />
      </svg>
    </IllustrationFrame>
  );
}
