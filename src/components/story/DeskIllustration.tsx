import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/**
 * A minimal, monochrome line-art placeholder for the Current Chapter
 * section — an open notebook, a pen, a cup of coffee. Used until a real
 * photograph replaces it.
 */
export function DeskIllustration() {
  return (
    <IllustrationFrame
      label="Illustration of an open notebook, a pen, and a cup of coffee on a desk"
      className="bg-[radial-gradient(circle_at_50%_30%,_var(--card)_0%,_var(--secondary)_75%)]"
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
        <path d="M38 92L98 86v104l-60 8z" />
        <path d="M158 92L98 86v104l60 8z" />
        <line x1="52" y1="106" x2="84" y2="102" />
        <line x1="52" y1="122" x2="84" y2="119" />
        <line x1="52" y1="138" x2="80" y2="136" />
        <line x1="112" y1="102" x2="144" y2="106" />
        <line x1="116" y1="119" x2="144" y2="122" />
        <line x1="120" y1="136" x2="144" y2="138" />

        <path d="M64 128l58-30" />
        <path d="M122 98l6-4 4 6-6 4z" />

        <path d="M138 168h28v18a14 14 0 0 1-28 0z" />
        <path d="M166 172a9 9 0 0 1 0 16" />
        <path d="M146 158c-4-6 4-10 0-16" />
        <path d="M158 158c-4-6 4-10 0-16" />
      </svg>
    </IllustrationFrame>
  );
}
