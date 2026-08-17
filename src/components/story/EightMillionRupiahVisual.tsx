/**
 * A typographic sibling to IllustrationFrame — same border, corner radius,
 * and background token, but built from type rather than an SVG line
 * drawing. "Eight Million Rupiah" is the one Notebook memory where the
 * story's hook is a number, not an object or a scene, so the visual
 * treatment follows that: the number itself, given room.
 *
 * Motion: static. No movement, matching every other note visual.
 */
export function EightMillionRupiahVisual() {
  return (
    <div
      role="img"
      aria-label="The number 8,000,000, in Indonesian Rupiah, roughly 500 US dollars"
      className="rounded-[20px] border border-border bg-secondary px-6 py-10 text-center"
    >
      <p className="font-heading text-3xl whitespace-nowrap text-foreground md:text-4xl">
        Rp 8,000,000
      </p>
      <p className="mt-3 text-sm whitespace-nowrap text-muted-foreground">
        &asymp; US $500, that afternoon
      </p>
    </div>
  );
}
