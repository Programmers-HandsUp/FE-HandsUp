import { cva } from "class-variance-authority";

export const SkeletonVariants = cva("bg-gray-200 animate-pulse", {
  variants: {
    size: {
      large: "w-[330px] h-[330px] ", // 메인 이미지 사이즈
      small: "w-[128px] h-[128px] ", // 상품 이미지
      xsmall: "w-[60px] h-[60px]" // 마이페이지 상품 이미지
    },
    shape: {
      square: "rounded-md",
      round: "rounded-lg",
      circle: "rounded-full"
    }
  },
  defaultVariants: {
    size: "large",
    shape: "square"
  }
});
