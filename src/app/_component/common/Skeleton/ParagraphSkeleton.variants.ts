import { cva } from "class-variance-authority";

export const ParagraphSkeletonVariants = cva("bg-gray-200 animate-pulse", {
  variants: {
    size: {
      default: "w-[330px] h-14",
      large: "w-[330px] h-9",
      medium: "w-[250px] h-9",
      small: "w-[128px] h-9",
      xsmall: "w-[100px] h-9"
    },
    shape: {
      square: "rounded-md",
      round: "rounded-lg"
    }
  },
  defaultVariants: {
    size: "default",
    shape: "square"
  }
});
