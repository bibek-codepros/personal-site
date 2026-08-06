type HighlightAreaProps = {
  number: string;
  title: string;
  description: string;
};

/**
 * One entry in "What I'm Building Today" — numbered like a chapter rather
 * than iconed like a feature, so this reads as today's own quiet chapter
 * instead of a values/features grid. No icon: a generic productivity
 * glyph (a hammer, a compass) doesn't belong to this life any more than
 * it belongs to anyone else's — the number and the words carry it alone.
 */
export function HighlightArea({ number, title, description }: HighlightAreaProps) {
  return (
    <div>
      <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        {number}
      </p>
      <h3 className="mt-2 font-heading text-xl text-foreground">{title}</h3>
      <p className="mt-3 max-w-[480px] text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
