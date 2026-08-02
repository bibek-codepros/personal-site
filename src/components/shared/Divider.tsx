import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  /** Visually hidden but still announced to screen readers as a boundary. */
  label?: string;
};

/** A thin, quiet rule that separates chapters. Never decorative. */
export function Divider({ className, label }: DividerProps) {
  return (
    <hr
      aria-label={label}
      className={cn("border-t border-border", className)}
    />
  );
}
