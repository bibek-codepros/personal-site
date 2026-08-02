import type { LucideIcon } from "lucide-react";

type HighlightAreaProps = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

/** One labeled reflection inside a values/highlights grid. Typography-first. */
export function HighlightArea({ title, description, icon: Icon }: HighlightAreaProps) {
  return (
    <div>
      {Icon && (
        <Icon
          aria-hidden="true"
          strokeWidth={2}
          className="size-5 text-muted-foreground"
        />
      )}
      <h3 className="mt-3 font-heading text-xl text-foreground">{title}</h3>
      <p className="mt-3 max-w-[480px] text-base leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
