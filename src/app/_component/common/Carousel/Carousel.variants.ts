import { cva } from "class-variance-authority";

export const carouselVariants = cva("relative", {
  variants: {
    size: {
      xxxsmall: "w-[25px] h-[25px]",
      xxsmall: "w-[40px] h-[40px]",
      xsmall: "w-[60px] h-[60px]",
      small: "w-[100px] h-[100px]",
      medium: "w-[150px] h-[150px]",
      large: "w-[200px] h-[200px]",
      xlarge: "w-[250px] h-[250px]",
      xxlarge: "w-[300px] h-[300px]",
    },
  },
  defaultVariants: {
    size: "large",
  },
});
