import type { ReactNode } from "react";

type ReadingLayoutProps = {
  backgroundTint: string;
  children: ReactNode;
};

/**
 * The reading room. 680px column, a barely-there per-chapter background
 * tint — "felt more than noticed" per docs/becoming/01_BECOMING_STRUCTURE.md.
 */
export function ReadingLayout({ backgroundTint, children }: ReadingLayoutProps) {
  return (
    <div
      style={{ backgroundColor: backgroundTint }}
      className="min-h-[100dvh] transition-colors duration-700"
    >
      <div className="mx-auto max-w-[680px] px-6 py-20 md:py-28">
        {children}
      </div>
    </div>
  );
}
