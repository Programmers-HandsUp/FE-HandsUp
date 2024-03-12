import { cva } from "class-variance-authority";

export const SubmitButtonVariants = cva("my-auto", {
  variants: {
    color: {
      lightBlue: "bg-blue-300",
      blue: "bg-blue-600",
      red: "bg-red-600",
      lightYellow: "bg-yellow-300",
      yellow: "bg-yellow-500",
      white: "bg-white",
      black: "bg-black",
      slate: "bg-slate-300",
      gray: "bg-gray-300"
    },

    size: {
      sm: "w-8 h-4",
      md: "w-12 h-6",
      lg: "w-20 h-12",
      xl: "w-24 h-16",
      xxl: "w-32 h-20"
    },
    fontSize: {
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl"
    },
    rounded: {
      full: "rounded-full",
      little: "rounded-md",
      normal: "rounded-lg",
      none: "rounded-none"
    }
  },
  defaultVariants: {
    size: "md",
    fontSize: "md",
    rounded: "little",
    color: "lightBlue"
  }
});
