import { cva } from "class-variance-authority";

export const ProductStateVariants = cva(
  "w-[39px] h-[13px] my-[0.3rem] text-white rounded-md text-[7px] text-center",
  {
    variants: {
      state: {
        취소됨: "bg-[#8B8B8B]",
        거래완료: "bg-[#6DD43C]",
        거래중: "bg-[#96E4FF]",
        입찰실패: "bg-[#E91A1A]",
      },
    },
    defaultVariants: {},
  }
);
