"use client";

import ProductCard from "@/app/_component/common/ProductCard";
import SlideCarousel from "@/app/_component/common/SlideCarousel";
import { divideArray } from "@/utils/function/arrayDivider";
import { cn } from "@/utils/function/cn";
import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

import { feedDivideVariants } from "./AuctionFeedList.variants";
import { HorizontalCard, VerticalCard } from "./DefaultCard";

interface AuctionFeedListProps {
  data: RecommendAuctionsResponse;
  divideNum: 1 | 4 | 8;
}

const childCardSize = {
  1: 175,
  4: 328,
  8: 328
};

const AuctionFeedList = ({ data, divideNum }: AuctionFeedListProps) => {
  const fourColumns = divideArray(data.content, divideNum);

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
