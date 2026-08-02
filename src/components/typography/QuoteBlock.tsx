import { cn } from "@/lib/utils";

type QuoteBlockProps = {
  children: string;
  author?: string;
  context?: string;
  className?: string;
};

/** A rare, earned reflection — given room to breathe. */
export function QuoteBlock({
  children,
  author,
  context,
  className,
}: QuoteBlockProps) {
  return (
    <blockquote className={cn("max-w-[720px]", className)}>
      <p className="font-heading text-2xl leading-snug text-balance text-foreground italic md:text-3xl">
        {children}
      </p>
      {(author || context) && (
        <footer className="mt-4 text-sm text-muted-foreground not-italic">
          {author && <cite className="font-medium not-italic">{author}</cite>}
          {author && context && <span> — </span>}
          {context}
        </footer>
      )}
    </blockquote>
  );
}
