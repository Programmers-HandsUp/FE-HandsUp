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

import NotSearchResult from "./_component/NotSearchResult";
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
        {searchResults.length ? (
          searchResults.map(
            ({
              title,
              auctionId,
              currentBiddingPrice,
              dong,
              imageUrl,
              createdAt,
              bookmarkCount
            }: AuctionSearchResult) => (
              <div key={auctionId}>
                <ProductCard
                  className="my-2"
                  id={auctionId}>
                  <ProductCard.CardImage
                    className="mr-4"
                    titleImage={imageUrl ? imageUrl : tempLogoImage.src}
                    width={100}
                    height={100}
                  />
                  <ProductCard.CardTitle width={200}>
                    <div className="text-lg text-ellipsis overflow-hidden">
                      {title}
                    </div>
                    <div className="flex gap-4 text-[0.7rem]">
                      <span>{dong ? dong : "택배"}</span>
                      <span>{getPastTime(createdAt)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold text-[0.9rem]">
                        {currentBiddingPrice}
                      </span>
                      <div className="flex mt-1">
                        <Icon
                          className="h-fit mr-1 mt-1"
                          id="bookmark-fill"
                        />
                        <span className="text-[0.9rem]">{bookmarkCount}</span>
                      </div>
                    </div>
                  </ProductCard.CardTitle>
                </ProductCard>
                <hr />
              </div>
            )
          )
        ) : (
          <NotSearchResult />
        )}
        <div ref={ref}></div>
      </div>
    </main>
  );
};

export default SearchResultPage;
