import { cn } from "@/lib/utils";

type PlaceholderNoteProps = {
  label?: string;
  children: string;
  className?: string;
};

/**
 * An obviously-a-placeholder block — never mistaken for finished copy.
 * Used everywhere real narrative content is still pending.
 */
export function PlaceholderNote({
  label = "Placeholder — replace with your words",
  children,
  className,
}: PlaceholderNoteProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-dashed border-border bg-secondary/60 p-6",
        className
      )}
    >
      <p className="font-mono text-xs tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-2 text-base leading-relaxed text-muted-foreground italic">
        {children}
      </p>
    </div>
  );
}

/** A small inline tag for labeling a placeholder without a full box — used
 * where the placeholder content itself needs to stay large (e.g. a hero
 * headline) and a boxed treatment would break the layout. */
export function PlaceholderTag({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "font-mono text-xs tracking-wide text-muted-foreground/80 uppercase",
        className
      )}
    >
      Placeholder — replace with your words
    </p>
  );
}
