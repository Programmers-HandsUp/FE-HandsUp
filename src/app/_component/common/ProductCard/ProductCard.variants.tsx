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

export const productImageSizeVariants = cva(
  "relative overflow-hidden rounded-lg",
  {
    variants: {
      imageSize: {
        xsmall: "w-[60px] h-[60px]",
        small: "w-[108px] h-[108px]",
        medium: "w-[128px] h-[128px]",
        large: "w-[158px] h-[158px]",
        xlarge: "w-[178px] h-[178px]",
        full: "w-full h-full"
      }
    },
    defaultVariants: {
      imageSize: "medium"
    }
  }
);
