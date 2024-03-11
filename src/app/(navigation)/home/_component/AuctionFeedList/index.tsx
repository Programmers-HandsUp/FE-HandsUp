"use client";

import ProductCard from "@/app/_component/common/ProductCard";
import { divideArray } from "@/utils/function/arrayDivider";
import SlideCarousel from "@/app/_component/common/SlideCarousel";
import { HorizontalCard, VerticalCard } from "./DefaultCard";
import { feedDivideVariants } from "./AuctionFeedList.variants";
import { cn } from "@/utils/function/cn";
import useHotAuctionRecommends from "../../_hooks/queries/useHotAuctionRecommends";

interface AuctionFeedListProps {
  divideNum: 1 | 4 | 8;
}

const AuctionFeedList = ({ divideNum }: AuctionFeedListProps) => {
  const { data, isPending } = useHotAuctionRecommends();

  if (data === undefined || isPending) return <div>Loading...</div>;

  const fourColumns = divideArray(data, divideNum);

  const childCardSize = {
    1: 175,
    4: 328,
    8: 328
  };

  return (
    <div>
      <SlideCarousel
        childSize={childCardSize[divideNum]}
        groupGap={15}
        itemsToShow={2}
        className="py-5"
        useNav={divideNum === 1 ? false : true}>
        {fourColumns.map((data, index) => (
          <div
            key={index}
            className={cn(feedDivideVariants({ divideNum }))}>
            {data.map((auction) => (
              <ProductCard
                id={auction.auctionId}
                key={auction.auctionId}>
                {divideNum === 1 ? (
                  <VerticalCard auction={auction} />
                ) : divideNum === 4 ? (
                  <HorizontalCard auction={auction} />
                ) : (
                  <VerticalCard auction={auction} />
                )}
              </ProductCard>
            ))}
          </div>
        ))}
      </SlideCarousel>
    </div>
  );
};

export default AuctionFeedList;
