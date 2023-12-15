import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-800 hover:scale-[1.02] active:scale-[0.98] shadow-sm",
  {
    variants: {
      variant: {
        solid: "bg-primary text-white hover:bg-primary/90",
        faded: "bg-primary/10 text-primary hover:bg-primary/20",
        outline:
          "border  border-primary bg-transparent hover:bg-primary/10 text-primary",
        ghost:
          "hover:bg-transparent text-black border-[1.5px] border-gray-light shadow-none",
      },
      size: {
        default: "h-10 px-3.5 py-2.5",
        sm: "h-8 px-4",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
