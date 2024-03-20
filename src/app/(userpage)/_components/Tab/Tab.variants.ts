import { cva } from "class-variance-authority";

export const TabVariants = cva("", {
  variants: {
    basePath: {
      "/my/buying": "text-blue-600",
      "/my/selling": "text-red-600"
    },
    selectTab: {
      true: "absolute w-full bottom-0 h-1 bg-black dark:bg-white",
      false: ""
    }
  }
});
