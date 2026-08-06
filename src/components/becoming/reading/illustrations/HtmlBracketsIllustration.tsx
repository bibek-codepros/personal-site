import { IllustrationFrame } from "@/components/shared/IllustrationFrame";

/** A minimal, monochrome line-art placeholder for "Starting Again". */
export function HtmlBracketsIllustration() {
  return (
    <IllustrationFrame label="Illustration of HTML angle brackets, the foundation everything else was built on">
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
        <path d="M84 72 L48 120 L84 168" />
        <path d="M116 72 L152 120 L116 168" />
        <line x1="106" y1="96" x2="94" y2="144" />
      </svg>
    </IllustrationFrame>
  );
}
