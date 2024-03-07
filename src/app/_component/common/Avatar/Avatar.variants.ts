import { cva } from "class-variance-authority";

export const AvatarVariants = cva("relative overflow-hidden", {
  variants: {
    size: {
      small: "w-8 h-8",
      medium: "w-12 h-12",
      large: "w-16 h-16"
    },
    rounded: {
      none: "rounded-md",
      full: "rounded-full"
    }
  },
  defaultVariants: {
    size: "medium",
    rounded: "none"
  }
});
