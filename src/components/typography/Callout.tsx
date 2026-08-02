import { cn } from "@/lib/utils";

const LABEL = {
  note: "Note",
  reflection: "Reflection",
  lesson: "Lesson",
  quote: "Quote",
} as const;

type CalloutProps = {
  variant: keyof typeof LABEL;
  children: string;
  className?: string;
};

/** Highlights a single reflection or lesson without becoming a heavy card. */
export function Callout({ variant, children, className }: CalloutProps) {
  return (
    <div className={cn("max-w-[720px] border-l-2 border-gold/50 pl-6", className)}>
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {LABEL[variant]}
      </p>
      <p className="mt-2 font-heading text-xl leading-snug text-balance text-foreground md:text-2xl">
        {children}
      </p>
    </div>
  );
}
