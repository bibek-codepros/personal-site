import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * "The Place That Believed In Me" is not about an office — it's about
 * someone staying after everyone else had already gone home. This draws
 * that specific quiet rather than a generic workspace: one lamp still on,
 * a monitor still glowing, a mug and a notebook within reach, the rest of
 * the room left in shadow. Shared between the homepage, the chapter card,
 * and the full chapter — the same desk, wherever it appears.
 */
export function QuietOfficeIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of a desk lamp still lit after hours, a glowing monitor, a coffee mug and a notebook, the rest of the room in shadow"
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
        <line x1="26" y1="172" x2="174" y2="172" opacity="0.9" />
        <line x1="52" y1="172" x2="52" y2="140" />
        <path d="M52 140 L40 100" />
        <path d="M30 104 L50 104 L44 88 L36 88 Z" />
        <rect x="78" y="108" width="58" height="40" rx="4" />
        <line x1="107" y1="148" x2="107" y2="172" />
        <line x1="94" y1="172" x2="120" y2="172" />
        <path d="M150 148c0-5 3-8 8-8c5 0 8 3 8 8c0 4-3 6-8 6c-5 0-8-2-8-6z" />
        <path d="M166 146c3 0 5 2 5 4c0 3-2 5-5 5" />
        <rect
          x="150"
          y="160"
          width="24"
          height="16"
          rx="1.5"
          opacity="0.65"
          strokeWidth="1"
        />
        <line
          x1="154"
          y1="166"
          x2="170"
          y2="166"
          opacity="0.5"
          strokeWidth="0.9"
        />
        <line
          x1="154"
          y1="171"
          x2="164"
          y2="171"
          opacity="0.5"
          strokeWidth="0.9"
        />
      </svg>
    </IllustrationFrame>
  );
}
