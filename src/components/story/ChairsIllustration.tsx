import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * "The Place That Believed In Me" was never about an office — it's about
 * someone making room before there was a reason to. Two chairs: one
 * already settled, one turned slightly outward, as if just pulled back
 * to make space. Replaces the earlier desk/lamp scene, which read as
 * atmosphere rather than something the manuscript actually says. Shared
 * between the homepage, the chapter card, and the full chapter — the
 * same two chairs, wherever it appears.
 *
 * Motion: static memory. No movement.
 */
export function ChairsIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of two simple chairs — one settled, one turned slightly outward as if room has been made beside it"
      className="bg-[radial-gradient(circle_at_30%_30%,_var(--card)_0%,_var(--secondary)_62%,_var(--secondary)_100%)]"
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
        {/* chair, already settled */}
        <rect x="35" y="88" width="10" height="64" rx="3" />
        <rect x="35" y="150" width="60" height="10" rx="3" />
        <line x1="91" y1="160" x2="87" y2="206" />
        <line x1="39" y1="160" x2="43" y2="206" />

        {/* chair, turned outward — room made */}
        <g transform="rotate(-10 135 170)">
          <rect x="155" y="88" width="10" height="64" rx="3" />
          <rect x="105" y="150" width="60" height="10" rx="3" />
          <line x1="109" y1="160" x2="113" y2="206" />
          <line x1="161" y1="160" x2="157" y2="206" />
        </g>

        <line x1="15" y1="212" x2="185" y2="212" opacity="0.3" />
      </svg>
    </IllustrationFrame>
  );
}
