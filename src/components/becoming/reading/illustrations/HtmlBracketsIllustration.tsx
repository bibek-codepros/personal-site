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
        <path d="M92 68 L54 120 L92 172" />
        <path d="M112 68 L150 120 L112 172" />
        <line x1="108" y1="66" x2="96" y2="174" />
      </svg>
    </IllustrationFrame>
  );
}
