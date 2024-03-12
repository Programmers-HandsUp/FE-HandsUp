import { cva } from "class-variance-authority";

export const InputVariants = cva(
  "focus:outline-none bg-transparent h-fit my-auto",
  {
    variants: {
      size: {
        sm: "w-8",
        md: "w-16",
        lg: "w-24",
        xl: "w-32",
        xxl: "w-48",
        xxxl: "w-64",
        xxxxl: "w-96"
      },
      verticalAlign: {
        left: "text-left",
        right: "text-right",
        center: "text-center"
      },
      fontSize: {
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "3xl": "text-3xl"
      }
    },
    defaultVariants: {
      verticalAlign: "left",
      fontSize: "lg",
      size: "md"
    }
  }
);
