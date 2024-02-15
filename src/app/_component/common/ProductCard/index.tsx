import Image from "next/image";
import { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";
import { ProductStateVariants } from "./ProductState.variatns";
import getPastTime from "@/utils/getPastTime";

interface ProductCard {
  titleImage: StaticImageData;
  productName: string;
  createDate: Date;
  price: number;
  tradeState: "취소됨" | "거래완료" | "거래중" | "입찰실패";
  className?: string;
}

const ProductCard = ({
  titleImage,
  productName,
  createDate,
  price,
  tradeState,
  className,
}: ProductCard) => {
  return (
    <div className={`w-[16rem] flex gap-6 ${className}`}>
      <Image
        className="w-[85px] h-[75px] bg-slate-100"
        src={titleImage}
        alt="titleImage"
      />
      <div className="w-full">
        <p className="w-full h-[1.4rem] text-[14px] text-ellipsis overflow-hidden">
          {productName}
        </p>
        <p className="text-[8px]">낙찰가 : {price}원</p>
        <div className="flex justify-between my-1">
          <span className={cn(ProductStateVariants({ state: tradeState }))}>
            {tradeState}
          </span>
          <p className="text-[8px] text-[#ABABAB] my-1 text-right">
            {getPastTime(createDate)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
