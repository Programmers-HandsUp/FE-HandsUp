import Image from "next/image";
import { StaticImageData } from "next/image";

import { cn } from "@/utils/cn";
import { ProductStateVariants } from "./ProductState.variatns";
import setMoneyUnityString from "@/utils/setMoneyUnityString";
import getPastTime from "@/utils/getPastTime";

interface ProductCard {
  id?: string;
  width?: string;
  titleImage: StaticImageData;
  productName: string;
  createDate: Date;
  price: number;
  tradeState?: "취소됨" | "거래완료" | "거래중" | "입찰실패" | undefined;
  className?: string;
  isShowStateTag?: boolean;
  onClickProductCard?: () => void;
}

const ProductCard = ({
  id,
  width = "18rem",
  onClickProductCard,
  titleImage,
  productName,
  createDate,
  price,
  isShowStateTag = true,
  tradeState,
  className,
}: ProductCard) => {
  https: return (
    <button onClick={onClickProductCard} className={`flex gap-6 ${className}`}>
      <Image
        className="w-[85px] h-[75px] bg-slate-100"
        src={titleImage}
        alt="titleImage"
      />
      <div className="w-full">
        <p className="w-[9rem] h-[1.4rem] text-left text-[14px] overflow-hidden text-ellipsis whitespace-nowrap">
          {productName}
        </p>
        <p className="text-[8px] text-left">
          낙찰가 : {setMoneyUnityString(price)}원
        </p>
        <div className="flex justify-between my-1">
          {isShowStateTag && (
            <span className={cn(ProductStateVariants({ state: tradeState }))}>
              {tradeState}
            </span>
          )}
          <p className="text-[8px] text-[#ABABAB] my-1 text-right">
            {getPastTime(createDate)}
          </p>
        </div>
      </div>
    </button>
  );
};

export default ProductCard;
