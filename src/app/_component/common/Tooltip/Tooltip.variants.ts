import { cva } from "class-variance-authority";

/** 툴팁 기본 위치 */
export const MainPositionVariants = cva("absolute", {
  variants: {
    position: {
      top: "left-1/2 bottom-[calc(100%+5px)]",
      bottom: "left-1/2 top-[calc(100%+5px)]",
      left: "top-1/2 right-[calc(100%+5px)]",
      right: "top-1/2 left-[calc(100%+5px)]"
    }
  }
});

/** 툴팁 위치 */
export const PositionVariants = cva(
  "absolute group bg-[#96E4FF] text-gray-700 text-sm p-2 whitespace-nowrap rounded inline-block",
  {
    variants: {
      position: {
        top: "-translate-x-1/2 bottom-[calc(100%+5px)]",
        bottom: "-translate-x-1/2 top-[calc(100%+5px)]",
        left: "-translate-y-1/2 right-[calc(100%+5px)]",
        right: "-translate-y-1/2 left-[calc(100%+5px)]"
      }
    }
  }
);

/** 툴팁 화살표 방향 */
export const ArrowPositionVariants = cva("absolute inline-block border-[6px]", {
  variants: {
    position: {
      top: "left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-[#96E4FF]",
      bottom:
        "left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-[#96E4FF]",
      left: "top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-[#96E4FF]",
      right:
        "top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-[#96E4FF]"
    }
  }
});
