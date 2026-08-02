import { cn } from "@/lib/utils";

type EmptyStateProps = {
  message: string;
  className?: string;
};

/** Never "No data." Every empty state gets thoughtful, human language. */
export function EmptyState({ message, className }: EmptyStateProps) {
  return (
    <p className={cn("font-heading text-xl text-muted-foreground italic", className)}>
      {message}
    </p>
  );
}
