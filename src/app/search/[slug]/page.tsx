"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useInfiniteScroll from "@/app/hooks/useInfiniteScroll";

import SearchBar from "../component/SearchBar";
import ProductCard from "@/app/_component/common/ProductCard";
import SearchFilterModal from "./component/SearchFilter";
import likeIcon from "../../../../public/assets/likeIcon.svg";
import getPastTime from "@/utils/getPastTime";
import DropDown from "@/app/_component/common/DropDown";
import tempLogoImage from "../../../../public/logoIcon.png";
import useGetSearchResult from "@/app/hooks/queries/useGetSearchResults";
import useModalState from "@/app/hooks/useModalState";
import Modal from "@/app/_component/common/Modal";

const SearchResultPage = () => {
  const param = usePathname();
  const [filterOptions, setFilterOptions] =
    useState<Record<string, string | number>>(); // @TODO : 해당 데이터로 필터링 검색 api 구현예정
  const [alignOption, setAlignOption] = useState("마감 임박 순");
  const { open, close, isOpen } = useModalState();

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
    <main className="w-[90%] mx-auto bg-blue">
      <SearchBar />
      <h1 className="text-lg">진행중인 경매 상품</h1>
      <div className="flex justify-between my-1 mb-6">
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
        {searchResults.length ? (
          searchResults.map((resultItem) => (
            <div key={resultItem.id}>
              <ProductCard
                className="my-2"
                id={resultItem.id}>
                <ProductCard.CardImage
                  className="mr-4"
                  titleImage={tempLogoImage.src}
                  width={104}
                  height={104}
                />
                <ProductCard.CardTitle width={200}>
                  <div className="text-2xl">{resultItem.postName}</div>
                  <div className="flex gap-4 text-[0.85rem]">
                    <span>{resultItem.tradePlace}</span>
                    <span>{getPastTime(new Date())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-[1.1rem]">
                      {resultItem.nowPrice}
                    </span>
                    <div className="flex">
                      <Image
                        className="h-fit mr-1 mt-3"
                        src={likeIcon}
                        alt="likeButton"
                      />
                      <span className="text-[1rem]">10</span>
                    </div>
                  </div>
                </ProductCard.CardTitle>
              </ProductCard>
              <hr />
            </div>
          ))
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
