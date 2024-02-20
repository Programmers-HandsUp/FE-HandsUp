import { cva } from "class-variance-authority";

export const InputInnerBoxVariants = cva(
  "gap-1 px-1 flex bg-slate-100 my-auto w-fit h-fit",
  {
    variants: {
      fontSize: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl",
      },
      rounded: {
        full: "rounded-full",
        little: "rounded-md",
        normal: "rounded-lg",
        none: "rounded-none",
      },
    },

    defaultVariants: {
      rounded: "little",
      fontSize: "lg",
    },
  }
);
