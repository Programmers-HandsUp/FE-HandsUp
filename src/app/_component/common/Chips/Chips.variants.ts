import { cva } from "class-variance-authority";

export const chipsVariants = cva("flex flex-wrap", {
  variants: {
    spacing: {
      xsmall: "gap-1",
      small: "gap-2",
      medium: "gap-3",
      large: "gap-4",
      xlarge: "gap-5"
    },
    rounded: {
      xsmall: "rounded-sm",
      small: "rounded-md",
      medium: "rounded-lg",
      large: "rounded-xl",
      xlarge: "rounded-2xl"
    }
  },
  defaultVariants: {
    spacing: "medium",
    rounded: "medium"
  }
});
