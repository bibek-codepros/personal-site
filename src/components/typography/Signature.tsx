import { cn } from "@/lib/utils";

const SIZE = {
  sm: "text-lg",
  md: "text-xl",
} as const;

type SignatureProps = {
  size?: keyof typeof SIZE;
  className?: string;
};

/** The quiet "— Bibek" signoff used to close a letter or the footer. */
export function Signature({ size = "md", className }: SignatureProps) {
  return (
    <p
      className={cn(
        "font-heading text-muted-foreground italic",
        SIZE[size],
        className
      )}
    >
      &mdash; Bibek
    </p>
  );
}
