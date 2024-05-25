import { cva } from "class-variance-authority";

export const modalTypeVariants = cva(
  "bg-white shadow-lg box-border z-40 overflow-scroll scrollbar-hide transition-transform duration-500",
  {
    variants: {
      modalType: {
        default: "fixed top-0 bottom-0 left-0 right-0 m-auto rounded-lg",
        dropBox: "absolute rounded-lg",
        fullScreen: "fixed top-0 right-0 max-w-[360px]"
      }
    },
    defaultVariants: {
      modalType: "default"
    }
  }
);
