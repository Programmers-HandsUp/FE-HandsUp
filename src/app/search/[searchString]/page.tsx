"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";

import Icon from "@/app/_component/common/Icon";
import ProductCard from "@/app/_component/common/ProductCard";
import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";
import useGetSearchResult from "@/app/search/_hooks/queries/useGetSearchResults";
import getPastTime from "@/utils/function/getPastTime";
import { AuctionSearchResult } from "@/utils/types/search/search";
import tempLogoImage from "~/images/logoIcon.png";

import { SearchOptionContext } from "./layout";

const SearchResultPage = () => {
  const param = decodeURIComponent(usePathname());
  const { alignOption, filterOptions } = useContext(SearchOptionContext);

  const {
    data: searchResults,
    isFetched,
    fetchNextPage,
    hasNextPage
  } = useGetSearchResult(param, alignOption, filterOptions);

  const refetch = () => {
    if (hasNextPage && isFetched) fetchNextPage();
  };
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  return (
    <main className="w-[90%] mx-auto bg-blue">
      <div className="pb-6">
        {searchResults ? (
          searchResults.map(
            ({
              title,
              auctionId,
              currentBiddingPrice,
              dong,
              imageUrl
            }: AuctionSearchResult) => (
              <div key={auctionId}>
                <ProductCard
                  className="my-2"
                  id={auctionId}>
                  <ProductCard.CardImage
                    className="mr-4"
                    titleImage={imageUrl ? imageUrl : tempLogoImage.src}
                    width={104}
                    height={104}
                  />
                  <ProductCard.CardTitle width={200}>
                    <div className="text-2xl">{title}</div>
                    <div className="flex gap-4 text-[0.85rem]">
                      <span>{dong}</span>
                      <span>{getPastTime(new Date())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-[1.1rem]">
                        {currentBiddingPrice}
                      </span>
                      <div className="flex mt-1">
                        <Icon
                          className="h-fit mr-1 mt-1"
                          id="bookmark-fill"
                        />
                        <span className="text-[1rem]">10</span>
                      </div>
                    </div>
                  </ProductCard.CardTitle>
                </ProductCard>
                <hr />
              </div>
            )
          )
        ) : (
          <p className="text-xl mx-auto w-fit my-[11rem]">
            검색결과가 없습니다.
          </p>
        )}
        <div ref={ref}></div>
      </div>
    </main>
  );
};

export default SearchResultPage;
