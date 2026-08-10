import Link from "next/link";

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

const LINK_CLASSES =
  "rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

type RunningHeaderProps = {
  chapterNumber: number;
  backgroundTint: string;
};

/**
 * A small, sticky reminder of where the reader is — "almost invisible,"
 * per 02_VISUAL_LANGUAGE.md. Pure CSS (position: sticky), no JS needed.
 * "Home" and "Becoming" are real links — a reader partway through a
 * chapter shouldn't need the browser's Back button just to leave.
 */
export function RunningHeader({ chapterNumber, backgroundTint }: RunningHeaderProps) {
  return (
    <div
      style={{ backgroundColor: backgroundTint }}
      className="sticky top-0 z-40 -mx-6 mb-8 border-b border-border/50 px-6 py-3 text-center md:-mx-0"
    >
      <p className="text-[11px] tracking-[0.2em] text-muted-foreground/70 uppercase">
        <Link href="/" className={LINK_CLASSES}>
          Home
        </Link>
        {" · "}
        <Link href="/becoming" className={LINK_CLASSES}>
          Becoming
        </Link>
        {" · "}
        Chapter {ROMAN[chapterNumber - 1]}
      </p>
    </div>
  );
}
