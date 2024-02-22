import { cva } from "class-variance-authority";

export const modalTypeVariants = cva(
  "p-[8px] bg-white shadow-lg box-border rounded-lg",
  {
    variants: {
      modalType: {
        default: "fixed top-0 bottom-0 left-0 right-0 m-auto",
        dropBox: "absolute",
        fullScreen: "absolute top-0 bottom-0 left-0 right-0 "
      }
    },
    defaultVariants: {
      modalType: "default"
    }
  }
);
