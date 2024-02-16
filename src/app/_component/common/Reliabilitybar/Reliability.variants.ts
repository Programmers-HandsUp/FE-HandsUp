import { cva } from "class-variance-authority";

export const ThemeVariants = cva(
  "w-full border h-full animate-fill rounded-full",
  {
    variants: {
      theme: {
        default: "bg-[#96E4FF]",
        terrible: "bg-purple-400",
        poor: "bg-red-400",
        main: "bg-sky-400",
        good: "bg-blue-400",
      },
    },
  }
);

export const TextVariants = cva("text-sm", {
  variants: {
    theme: {
      default: "text-[#96E4FF]",
      terrible: "text-purple-400 absolute left-10",
      poor: "text-red-400 absolute left-10",
      main: "text-sky-400 absolute right-10",
      good: "text-blue-400 absolute right-10",
    },
  },
});
