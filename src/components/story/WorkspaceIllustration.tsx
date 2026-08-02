import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * A minimal, monochrome line-art placeholder for "The Place That Believed
 * In Me" — a laptop, a small plant, morning light through a window. Used
 * until a real photograph replaces it.
 */
export function WorkspaceIllustration() {
  return (
    <IllustrationFrame label="Illustration of a laptop and a small plant on a desk, lit by soft window light">
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
        <path d="M150 22l24 22M168 16l20 18M178 30l18 16" />

        <rect x="72" y="68" width="88" height="60" rx="6" />
        <line x1="80" y1="80" x2="152" y2="80" />
        <path d="M58 132h116l-11 16H69z" />

        <path d="M32 188h20l-4 22H36z" />
        <path d="M42 188c-10-18-14-34-6-48" />
        <path d="M42 188c4-20 12-34 8-46" />
        <path d="M42 188c0-14 0-26 0-36" />
      </svg>
    </IllustrationFrame>
  );
}
