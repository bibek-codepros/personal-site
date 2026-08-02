const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

type RunningHeaderProps = {
  chapterNumber: number;
  backgroundTint: string;
};

/**
 * A small, sticky reminder of where the reader is — "almost invisible,"
 * per 02_VISUAL_LANGUAGE.md. Pure CSS (position: sticky), no JS needed.
 */
export function RunningHeader({ chapterNumber, backgroundTint }: RunningHeaderProps) {
  return (
    <div
      style={{ backgroundColor: backgroundTint }}
      className="sticky top-0 z-40 -mx-6 mb-8 border-b border-border/50 px-6 py-3 text-center md:-mx-0"
    >
      <p className="text-[11px] tracking-[0.2em] text-muted-foreground/70 uppercase">
        Home · Becoming · Chapter {ROMAN[chapterNumber - 1]}
      </p>
    </div>
  );
}
