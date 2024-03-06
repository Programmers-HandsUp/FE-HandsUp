import { ReactNode } from "react";
import {
  productImageSizeVariants,
  productStateVariants
} from "./ProductCard.variants";
import { VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";
import Image from "next/image";
import setMoneyUnitString from "@/utils/setMoneyUnitString";
import getPastTime from "@/utils/getPastTime";

interface DefaultProps {
  children?: ReactNode;
  className?: string;
}

interface CardImageProps
  extends DefaultProps,
    VariantProps<typeof productImageSizeVariants> {
  titleImage: string;
}
interface CardTitleProps extends DefaultProps {
  width: number;
}
interface CardIPriceProps extends DefaultProps {
  price: number;
}
interface CardTagProps
  extends DefaultProps,
    VariantProps<typeof productStateVariants> {}
interface CardDateProps extends DefaultProps {
  date: string | Date;
}

export const CardImage = ({
  children,
  imageSize,
  titleImage,
  className
}: CardImageProps) => {
  return (
    <div className={cn(productImageSizeVariants({ imageSize }), className)}>
      <Image
        src={titleImage}
        className="bg-slate-100 object-cover group-hover:scale-125 transition-transform"
        alt="titleImage"
        fill
      />
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, width }: CardTitleProps) => {
  return (
    <div
      className={cn(
        "h-auto text-left text-2xl overflow-hidden text-ellipsis whitespace-nowrap",
        className
      )}
      style={{ width: `${width}px` }}>
      {children}
    </div>
  );
};
export const CardPrice = ({ children, className, price }: CardIPriceProps) => {
  return (
    <p className={cn("text-base text-left", className)}>
      현재 입찰가 : <strong>{setMoneyUnitString(price)}원</strong>
      {children}
    </p>
  );
};

export const CardTag = ({ children, className, tradeState }: CardTagProps) => {
  return (
    <>
      {tradeState && (
        <span className={cn(productStateVariants({ tradeState }), className)}>
          {tradeState}
          {children}
        </span>
      )}
    </>
  );
};

export const CardDate = ({ children, date }: CardDateProps) => {
  return (
    <p className="text-sm text-[#ABABAB] text-right">
      {getPastTime(date)}
      {children}
    </p>
  );
};
