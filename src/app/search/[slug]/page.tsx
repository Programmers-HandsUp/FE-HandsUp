"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef, Fragment } from "react";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";

import SearchBar from "../component/SearchBar";
import ProductCard from "@/app/_component/common/ProductCard";
import SearchFilterModal from "./component/SearchFilter";
import likeIcon from "../../../../public/assets/likeIcon.svg";
import useModal from "@/app/hooks/useModal";
import getPastTime from "@/utils/getPastTime";
import DropDown from "@/app/_component/common/DropDown";
import tempLogoImage from "../../../../public/logoIcon.png";
import useGetSearchResult from "@/app/hooks/queries/useGetSearchResults";

const SearchResultPage = () => {
  const param = usePathname();
  const [alignOption, setAlignOption] = useState("마감 임박 순");
  const { Modal, open, close } = useModal({
    modalType: "fullScreen",
    animate: "slide"
  });

  const {
    data: searchResults,
    isFetched,
    isLoading,
    fetchNextPage,
    hasNextPage
  } = useGetSearchResult(param);

  const refetch = () => {
    if (hasNextPage && isFetched) fetchNextPage();
  };
  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  if (isLoading) return <div>Loading</div>;

  return (
    <main className="w-[90%] mx-auto">
      <SearchBar />
      <h1>진행중인 경매 상품</h1>
      <div className="flex justify-between my-2 mb-6">
        <button
          onClick={open}
          className="px-4 border-2 border-black text-black bg-white rounded-md">
          필터
        </button>
        <DropDown
          setSelectedOption={(selectedOption) => setAlignOption(selectedOption)}
          selectedOption={alignOption}
          className="w-[6rem] text-sm"
          options={["마감 임박 순", "저장 순", "최신 순"]}
        />
      </div>
      <div className="pb-6">
        {searchResults.map((resultItem) => (
          <div key={resultItem.id}>
            <ProductCard
              className="my-2"
              id={resultItem.id}>
              <ProductCard.CardImage
                className="w-[6.5rem] h-[6.5rem] mr-4"
                titleImage={tempLogoImage.src}
              />
              <ProductCard.CardTitle width={200}>
                <p className="text-2xl">{resultItem.postName}</p>
                <div className="flex gap-4 text-[0.85rem]">
                  <p>{resultItem.tradePlace}</p>
                  <p>{getPastTime(new Date())}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-[1.1rem]">
                    {resultItem.nowPrice}
                  </p>
                  <div className="flex">
                    <Image
                      className="h-fit mr-1 mt-3"
                      src={likeIcon}
                      alt="likeButton"
                    />
                    <p className="text-[1rem]">10</p>
                  </div>
                </div>
              </ProductCard.CardTitle>
            </ProductCard>
            <hr />
          </div>
        ))}
        <div ref={ref}></div>
      </div>
      <Modal className="bg-black">
        <SearchFilterModal closeModal={close} />
      </Modal>
    </main>
  );
};

export default SearchResultPage;
