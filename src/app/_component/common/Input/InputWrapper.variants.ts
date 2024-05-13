import { cva } from "class-variance-authority";

export const InputWrapperVariants = cva("gap-1 px-1 flex my-auto w-fit h-fit", {
  variants: {
    variant: {
      underLine: "border-b-2",
      box: "border-2",
      none: ""
    },
    borderColor: {
      gray: "border-gray-200",
      white: "border-white",
      black: "border-black",
      full: "border-transparent"
    },
    backgroundColor: {
      white: "bg-white",
      black: "bg-black",
      gray: "bg-gray-200",
      full: "border-transparent"
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
    variant: "box",
    rounded: "little",
    fontSize: "lg",
    borderColor: "gray",
    backgroundColor: "white"
  }
});
