import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const VARIANT = {
  hero: "font-heading font-normal text-[32px] leading-[1.15] md:text-[40px] lg:text-[48px] xl:text-[64px]",
  section:
    "font-heading font-medium text-[26px] leading-[1.2] md:text-[30px] lg:text-[36px]",
  page: "font-heading font-normal text-[24px] leading-[1.25] md:text-[28px]",
  quote:
    "font-heading font-normal text-2xl leading-snug italic md:text-3xl lg:text-[2.75rem]",
} as const;

const DEFAULT_TAG: Record<keyof typeof VARIANT, ElementType> = {
  hero: "h1",
  section: "h2",
  page: "h1",
  quote: "p",
};

type HeadingProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  variant?: keyof typeof VARIANT;
  as?: ElementType;
  align?: "left" | "center";
};

/** Consistent heading styles across the site. Text carries the emotion. */
export function Heading({
  children,
  className,
  variant = "section",
  as,
  align = "left",
  ...props
}: HeadingProps) {
  const Tag = as ?? DEFAULT_TAG[variant];

  return (
    <Tag
      className={cn(
        "text-balance text-foreground",
        VARIANT[variant],
        align === "center" ? "text-center" : "text-left",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
