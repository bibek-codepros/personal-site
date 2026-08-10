import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type IllustrationFrameProps = {
  /** Omit only for a deliberately empty frame (no illustration exists for
   *  this chapter) — the frame then renders as a decorative, unlabeled
   *  box rather than an empty "image" with nothing to describe. */
  label?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Shared shell for the minimal, monochrome line-art placeholders used in
 * place of real photography. `label` is the accessible description —
 * the SVG inside stays `aria-hidden`.
 */
export function IllustrationFrame({
  label,
  children,
  className,
}: IllustrationFrameProps) {
  return (
    <div
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
      className={cn(
        "flex aspect-4/5 w-full items-center justify-center overflow-hidden rounded-[20px] border border-border bg-secondary",
        className
      )}
    >
      {children}
    </div>
  );
}
