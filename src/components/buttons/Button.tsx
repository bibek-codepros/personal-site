import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-[background-color,color,border-color,transform] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 motion-safe:hover:scale-[1.02]",
        secondary:
          "border border-border bg-transparent text-foreground hover:bg-secondary motion-safe:hover:scale-[1.02]",
        ghost:
          "bg-transparent text-foreground hover:bg-secondary motion-safe:hover:scale-[1.02]",
        text: "rounded-none bg-transparent text-foreground underline-offset-4 hover:underline",
      },
      size: {
        sm: "min-h-11 px-4 text-sm",
        md: "min-h-12 px-6 text-base",
        lg: "min-h-14 px-8 text-base",
      },
    },
    compoundVariants: [
      { variant: "text", size: "sm", class: "min-h-0 px-0" },
      { variant: "text", size: "md", class: "min-h-0 px-0" },
      { variant: "text", size: "lg", class: "min-h-0 px-0" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonOwnProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

/** Primary / Secondary / Ghost / Text — the only button styles Project HOME uses. */
export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props) {
    const { href, ...linkProps } = props;
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
