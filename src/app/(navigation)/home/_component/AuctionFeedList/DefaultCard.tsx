import ProductCard from "@/app/_component/common/ProductCard";
import Timer from "@/app/_component/common/Timer";
import { cn } from "@/utils/function/cn";
import { Auction } from "@/utils/mocks/api/types";

interface DefaultCardProps {
  auction: Auction;
  className?: string;
}

export const HorizontalCard = ({ auction, className }: DefaultCardProps) => {
  return (
    <div className={cn("flex gap-2 w-full", className)}>
      <ProductCard.CardImage
        width={128}
        height={128}
        titleImage={auction.product.product_image.image_url}
        className="overflow-hidden"
      />
      <div className="flex flex-col gap-5">
        <ProductCard.CardTitle width={198}>
          {auction.title}
        </ProductCard.CardTitle>

        <ProductCard.CardPrice price={auction.init_price} />
        <div className="flex justify-between my-1">
          <ProductCard.CardDate date={auction.createdAt} />
          <Timer
            createdAt={new Date(auction.createdAt)}
            deadline={new Date(auction.end_date)}
          />
        </div>
      </div>
    </div>
  );
};
export const VerticalCard = ({ auction, className }: DefaultCardProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <ProductCard.CardImage
        titleImage={auction.product.product_image.image_url}
        width={154}
        height={154}
        className="overflow-hidden"
      />
      <div className="flex flex-col gap-5">
        <ProductCard.CardTitle width={142}>
          {auction.title}
        </ProductCard.CardTitle>

        <ProductCard.CardPrice price={auction.init_price} />
        <div className="flex justify-between my-1">
          <ProductCard.CardDate date={auction.createdAt} />
          <Timer
            createdAt={new Date(auction.createdAt)}
            deadline={new Date(auction.end_date)}
          />
        </div>
      </div>
    </div>
  );
};
