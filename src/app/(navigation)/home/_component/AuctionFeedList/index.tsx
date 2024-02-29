"use client";

import { useQuery } from "@tanstack/react-query";
import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";
import ProductCard from "@/app/_component/common/ProductCard";
import { Auction } from "@/utils/mocks/api/types";
import { divideArray } from "@/utils/arrayDivider";
import SlideCarousel from "@/app/_component/common/SlideCarousel";
import { HorizontalCard, VerticalCard } from "./DefaultCard";
import { feedDivideVariants } from "./AuctionFeedList.variants";
import { cn } from "@/utils/cn";

interface AuctionFeedListProps {
  divideNum: 1 | 4 | 8;
}

const AuctionFeedList = ({ divideNum }: AuctionFeedListProps) => {
  const { data, isPending } = useQuery<Auction[]>({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });

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
                id={auction.product_id}
                key={auction.product_id}>
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
