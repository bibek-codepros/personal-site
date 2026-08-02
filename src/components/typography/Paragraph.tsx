import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const VARIANT = {
  default: "text-lg leading-[1.7] text-foreground",
  muted: "text-lg leading-[1.7] text-muted-foreground",
  large: "text-xl leading-[1.7] text-foreground",
  lead: "text-xl leading-[1.6] text-foreground md:text-2xl",
} as const;

type ParagraphProps = HTMLAttributes<HTMLParagraphElement> & {
  children: ReactNode;
  as?: ElementType;
  variant?: keyof typeof VARIANT;
  /** Constrain to the 720px reading width. Disable for grid/card layouts. */
  constrained?: boolean;
};

/** Readable body copy. Defaults to the 720px maximum reading width. */
export function Paragraph({
  children,
  className,
  as: Tag = "p",
  variant = "default",
  constrained = true,
  ...props
}: ParagraphProps) {
  return (
    <Tag
      className={cn(
        VARIANT[variant],
        constrained && "max-w-[720px]",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
