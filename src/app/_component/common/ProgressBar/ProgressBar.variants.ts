import { cva } from "class-variance-authority";

export const ProgressBarVariants = cva("overflow-hidden", {
  variants: {
    bgColor: {
      red: "bg-red-600",
      blue: "bg-blue-600",
      yellow: "bg-yellow-300",
      green: "bg-green-600",
      lightred: "bg-red-300",
      lightblue: "bg-blue-300",
      lightgreen: "bg-green-300",
      purple: "bg-purple-600",
      white: "bg-white",
      black: "bg-black",
      gray: "bg-gray-600",
      slate: "bg-slate-400",
      primary: "bg-[#96E4FF]"
    },
    round: {
      full: "rounded-full",
      little: "rounded",
      normal: "rounded-md",
      large: "rounded-lg",
      none: ""
    }
  },
  defaultVariants: {
    bgColor: "white",
    round: "none"
  }
});

export const BarVariants = cva("transition-all duration-500 ease-in-out", {
  variants: {
    barColor: {
      red: "bg-red-600",
      blue: "bg-blue-600",
      yellow: "bg-yellow-300",
      green: "bg-green-600",
      lightred: "bg-red-300",
      lightblue: "bg-blue-300",
      lightgreen: "bg-green-300",
      purple: "bg-purple-600",
      white: "bg-white",
      black: "bg-black",
      gray: "bg-gray-600",
      slate: "bg-slate-400",
      primary: "bg-[#96E4FF]"
    }
  },
  defaultVariants: {
    barColor: "lightblue"
  }
});
