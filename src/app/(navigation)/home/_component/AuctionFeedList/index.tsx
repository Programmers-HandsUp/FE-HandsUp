"use client";

import { useQuery } from "@tanstack/react-query";
import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";
import ProductCard from "@/app/_component/common/ProductCard";
import { Auction } from "@/utils/mocks/api/types";
import { divideArray } from "@/utils/arrayDivider";
import SlideCarousel from "@/app/_component/common/SlideCarousel";

interface AuctionFeedListProps {
  divideNum: 0 | 4 | 8;
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
  return (
    <div>
      <SlideCarousel
        childSize={360}
        groupGap={15}
        className="py-5"
        useNav>
        {fourColumns.map((data, index) => (
          <div
            key={index}
            className="flex flex-col gap-5">
            {data.map((auction) => (
              <ProductCard
                key={auction.product_id}
                id={auction.product_id}>
                <div className="flex gap-2 w-full">
                  <ProductCard.CardImage
                    titleImage={auction.product.product_image.image_url}
                    imageSize="medium"
                  />
                  <div className="flex flex-col gap-5">
                    <ProductCard.CardTitle width={232}>
                      {auction.title}
                    </ProductCard.CardTitle>
                    <ProductCard.CardPrice price={auction.init_price} />
                    <div className="flex justify-between my-1">
                      <ProductCard.CardTag
                        tradeState={auction.auction_status}
                      />
                      <ProductCard.CardDate date={auction.createdAt} />
                    </div>
                  </div>
                </div>
              </ProductCard>
            ))}
          </div>
        ))}
      </SlideCarousel>
    </div>
  );
};

export default AuctionFeedList;
