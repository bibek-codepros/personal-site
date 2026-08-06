import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const SPACING = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-28 md:py-36",
} as const;

const BACKGROUND = {
  transparent: "",
  primary: "bg-background",
  secondary: "bg-secondary",
  card: "bg-card",
} as const;

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  as?: ElementType;
  spacing?: keyof typeof SPACING;
  background?: keyof typeof BACKGROUND;
};

/** Standard vertical rhythm and optional background fill for a page section. */
export function Section({
  children,
  className,
  as: Tag = "section",
  spacing = "lg",
  background = "transparent",
  ...props
}: SectionProps) {
  return (
    <Tag
      className={cn(SPACING[spacing], BACKGROUND[background], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
