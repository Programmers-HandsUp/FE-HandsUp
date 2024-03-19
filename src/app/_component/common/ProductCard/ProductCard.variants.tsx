import { cva } from "class-variance-authority";

export const productStateVariants = cva(
  "text-white rounded-md px-2 text-center",
  {
    variants: {
      tradeState: {
        대기중: "bg-[#fdcc83]",
        준비중: "bg-[#6DD43C]",
        완료됨: "bg-[#9189ff]",
        취소됨: "bg-[#8B8B8B]",
        진행중: "bg-[#96E4FF]"
      }
    },
    defaultVariants: {}
  }
);
