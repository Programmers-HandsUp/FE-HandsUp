import { cva } from "class-variance-authority";

export const InputVariants = cva("focus:outline-none", {
  variants: {
    verticalAlign: {
      left: "text-left",
      right: "text-right",
      center: "text-center",
    },
    fontSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
  },
  defaultVariants: {
    verticalAlign: "left",
  },
});
