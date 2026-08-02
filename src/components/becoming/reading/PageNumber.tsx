/**
 * A small page number, bottom corner — not because websites need them,
 * because books do. Per 02_VISUAL_LANGUAGE.md: very subtle, low contrast,
 * never interactive.
 */
export function PageNumber({ number }: { number: number }) {
  return (
    <p
      aria-hidden="true"
      className="pointer-events-none fixed right-6 bottom-6 z-30 font-mono text-xs text-muted-foreground/40 select-none"
    >
      {String(number).padStart(2, "0")}
    </p>
  );
}
