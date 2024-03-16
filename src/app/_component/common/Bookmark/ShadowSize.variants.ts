import { cva } from "class-variance-authority";

export const shadowSizeVariants = cva(
  "block bg-transparent rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-0 animate-blink",
  {
    variants: {
      size: {
        xsmall: "w-[5px] h-[5px]",
        small: "w-[7px] h-[7px]",
        medium: "w-[8px] h-[8px]",
        large: "w-[9px] h-[9px]",
        xlarge: "w-[10px] h-[10px]"
      }
    }
  }
);
