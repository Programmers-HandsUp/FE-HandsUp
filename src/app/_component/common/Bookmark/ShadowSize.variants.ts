import { cva } from "class-variance-authority";

export const shadowSizeVariants = cva(
  "block bg-transparent rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 animate-blink",
  {
    variants: {
      size: {
        xsmall: "w-[2px] h-[2px]",
        small: "w-[2px] h-[2px]",
        medium: "w-[2px] h-[2px]",
        large: "w-[3px] h-[3px]",
        xlarge: "w-[4px] h-[4px]",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);
