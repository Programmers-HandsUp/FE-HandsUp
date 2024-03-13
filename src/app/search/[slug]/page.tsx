"use client";

import { usePathname } from "next/navigation";
import { Suspense, useState } from "react";

import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import ProductCard from "@/app/_component/common/ProductCard";
import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";
import useModalState from "@/app/_hooks/useModalState";
import useGetSearchResult from "@/app/search/_hooks/queries/useGetSearchResults";
import getPastTime from "@/utils/function/getPastTime";
import { AuctionSearchResult } from "@/utils/types/search/search";
import tempLogoImage from "~/images/logoIcon.png";

import SearchFilterModal from "./_component/SearchFilter";
import SearchHeader from "./_component/SearchHeader";

const SearchResultPage = () => {
  const [alignOption, setAlignOption] = useState("마감 임박 순");
  const param = decodeURIComponent(usePathname());
  const [filterOptions, setFilterOptions] =
    useState<Record<string, string | number>>();
  const { isOpen, open, close } = useModalState();

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
      <Suspense>
        <SearchHeader
          setAlignOption={setAlignOption}
          alignOption={alignOption}
          filterModalOpen={open}
        />
      </Suspense>

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
                      <div className="flex">
                        <Icon
                          className="h-fit mr-1 mt-3"
                          id="book-mark-fill"
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
      <Modal
        className="bg-black"
        modalType="fullScreen"
        animate="slide"
        isOpen={isOpen}
        close={close}>
        <SearchFilterModal
          setFilterOption={(newFilterOptions) =>
            setFilterOptions(newFilterOptions)
          }
          closeModal={close}
        />
      </Modal>
    </main>
  );
};

export default SearchResultPage;
