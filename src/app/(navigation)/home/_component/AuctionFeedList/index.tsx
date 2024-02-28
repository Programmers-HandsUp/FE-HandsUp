"use client";

import { useQuery } from "@tanstack/react-query";
import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";
import ProductCard from "@/app/_component/common/ProductCard";
import { Auction } from "@/utils/mocks/api/types";
import { divideArray } from "@/utils/arrayDivider";
import SlideCarousel from "@/app/_component/common/SlideCarousel";
import { useState } from "react";

const AuctionFeedList = () => {
  const { data, isPending } = useQuery<Auction[]>({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000
  });
  if (data === undefined || isPending) return <div>Loading...</div>;

  const fourColumns = divideArray(data, 4);
  return (
    <div>
      <div className="text-2xl">
        <h1>많은 사람들이 눈여겨보고있는 경매</h1>
      </div>
      <SlideCarousel
        childSize={360}
        groupGap={15}
        className="py-5"
        useNav>
        {fourColumns.map((data, index) => (
          <div key={index}>
            {data.map((auction) => (
              <ProductCard
                key={auction.product_id}
                createDate={auction.createdAt}
                titleImage={auction.product.product_image.image_url}
                price={auction.init_price}
                productName={auction.title}
              />
            ))}
          </div>
        ))}
      </SlideCarousel>
    </div>
  );
};

export default AuctionFeedList;
