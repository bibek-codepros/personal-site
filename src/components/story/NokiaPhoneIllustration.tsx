import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * The old Nokia — where curiosity started, long before HTML or Code Pros.
 * Shared between the Hero (the very first thing a visitor sees) and
 * "Where It All Began" (the very first thing that happened), on purpose:
 * the same object standing for the same origin, wherever it appears.
 */
export function NokiaPhoneIllustration() {
  return (
    <IllustrationFrame label="Illustration of a small candy-bar phone, like the one that started it all">
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
        <rect x="68" y="28" width="64" height="168" rx="14" />
        <rect x="78" y="44" width="44" height="52" rx="4" />
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2].map((col) => (
            <circle
              key={`${row}-${col}`}
              cx={86 + col * 14}
              cy={112 + row * 18}
              r="3.5"
            />
          ))
        )}
      </svg>
    </IllustrationFrame>
  );
}
