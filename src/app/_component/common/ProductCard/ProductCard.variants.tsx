import { cva } from "class-variance-authority";

export const productStateVariants = cva(
  "text-white rounded-md px-2 text-center",
  {
    variants: {
      tradeState: {
        bidding: "bg-[#6DD43C]",
        finished: "bg-[#8B8B8B]",
        pending: "bg-[#96E4FF]"
      }
    },
    defaultVariants: {}
  }
);
