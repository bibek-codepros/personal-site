import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * "No Room For Me" isn't about a knee — it's about becoming someone who
 * has to wait. A single hospital wristband stands for the moment that
 * happens quietly, without ceremony: you stop being a person and start
 * being a patient. Deliberately not a bed, a knee, or a diagram — one
 * small object, the way every other chapter's illustration is one small
 * object. The tag's marks are abstract, not real printed text.
 *
 * Motion: static memory. No movement.
 */
export function WristbandIllustration() {
  return (
    <IllustrationFrame label="Illustration of a hospital wristband with a blank ID tag">
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
        <path d="M46 108c0-30 24-50 54-50s54 20 54 50-24 50-54 50c-11 0-21-3-30-8" />
        <path
          d="M54 108c0-24 19-40 46-40s46 16 46 40-19 40-46 40c-9 0-17-2-24-6"
          opacity="0.45"
        />
        <rect x="92" y="148" width="54" height="32" rx="5" />
        <circle cx="104" cy="148" r="2.5" />
        <line x1="103" y1="159" x2="135" y2="159" opacity="0.7" />
        <line x1="103" y1="168" x2="127" y2="168" opacity="0.5" />
      </svg>
    </IllustrationFrame>
  );
}
