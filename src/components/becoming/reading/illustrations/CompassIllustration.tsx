import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * A minimal, monochrome line-art placeholder for "Leading Beyond Code".
 * Motion: static memory. No movement — a compass held still, not spinning.
 */
export function CompassIllustration() {
  return (
    <IllustrationFrame label="Illustration of a compass, representing quiet direction rather than standing in front">
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
        <circle cx="100" cy="120" r="66" />
        <line x1="100" y1="46" x2="100" y2="58" />
        <line x1="100" y1="182" x2="100" y2="194" />
        <line x1="26" y1="120" x2="38" y2="120" />
        <line x1="162" y1="120" x2="174" y2="120" />
        <path d="M100 88 L114 120 L100 152 L86 120 Z" />
      </svg>
    </IllustrationFrame>
  );
}
