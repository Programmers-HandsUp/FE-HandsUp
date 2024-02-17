import { cva } from "class-variance-authority";

export const SubmitButtonVariants = cva("bg-blue-300", {
  variants: {
    size: {
      sm: "w-8 h-4",
      md: "w-12 h-8",
      lg: "w-20 h-12",
      xl: "w-24 h-16",
      xxl: "w-30 h-24",
    },
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
    size: "md",
    fontSize: "md",
    rounded: "little",
  },
});
