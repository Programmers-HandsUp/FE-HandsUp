import { cva } from "class-variance-authority";

export const feedDivideVariants = cva("", {
  variants: {
    divideNum: {
      1: "flex gap-5",
      4: "flex flex-col gap-5",
      8: "grid grid-cols-2 grid-rows-4 gap-5"
    }
  },
  defaultVariants: {}
});
