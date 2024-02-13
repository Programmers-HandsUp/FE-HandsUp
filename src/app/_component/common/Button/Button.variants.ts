import { cva } from "class-variance-authority";

export const ButtonVariants = cva(
  "inline-flex items-center justify-center",
  {
    variants: {
      size: {
        small: "px-2 py-1 text-sm",
        medium: "px-4 py-2",
        large: "px-6 py-3 text-lg",
      },
      rounded: {
        none: "rounded-md",
        full: "rounded-full",
      },
      color: {
        primary: "bg-[#96E4FF] text-black hover:bg-[#96E4FF]/50",
        gray: "bg-[#D9D9D9] text-black hover:bg-[#D9D9D9]/50",
        yellow: "bg-[#FFE604] text-black hover:bg-[#FFE604]/50",
      }
    },
    defaultVariants: {
      size: "medium",
      rounded: "none",
      color: "primary"
    }
  }
);