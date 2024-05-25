import { cva } from "class-variance-authority";

export const chipVariants = cva(
  "inline-block border rounded-lg px-2 w-full text-center hover:opacity-70 transition-all cursor-pointer",
  {
    variants: {
      rounded: {
        none: "",
        xsmall: "rounded-md",
        small: "rounded-lg",
        medium: "rounded-xl",
        large: "rounded-2xl",
        xlarge: "rounded-3xl"
      }
    },
    defaultVariants: {
      rounded: "large"
    }
  }
);
