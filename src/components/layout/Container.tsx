import type { ElementType, HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const SIZE_MAX_WIDTH = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-[1280px]",
  xl: "max-w-[1440px]",
} as const;

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: keyof typeof SIZE_MAX_WIDTH;
  as?: ElementType;
};

/** Controls maximum width and horizontal padding for page content. */
export function Container({
  children,
  className,
  size = "lg",
  as: Tag = "div",
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        SIZE_MAX_WIDTH[size],
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
