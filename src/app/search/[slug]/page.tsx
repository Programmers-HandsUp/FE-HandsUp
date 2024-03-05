"use client";

import Image from "next/image";
import { useState } from "react";

import SearchBar from "../component/SearchBar";
import ProductCard from "@/app/_component/common/ProductCard";
import SearchFilterModal from "./component/SearchFilter";
import getPastTime from "@/utils/getPastTime";
import tempLogoImage from "../../../../public/logoIcon.png";
import likeIcon from "../../../../public/assets/likeIcon.svg";
import DropDown from "@/app/_component/common/DropDown";

interface SearchResultPageProps {
  params: string;
}

const MockData = {
  id: 12491249,
  title: "휴대폰",
  price: 15000,
  dong: "성수동",
  date: "Wed Mar 06 2024 00:43:11 GMT+0900",
  likeCount: 10
};

const SearchResultPage = ({ params }: SearchResultPageProps) => {
  const resultList = [MockData, MockData];
  const [alignOption, setAlignOption] = useState("마감 임박 순");
  return (
    <main className="w-[90%] mx-auto">
      <SearchBar />
      <h1>진행중인 경매 상품</h1>
      <div className="flex justify-between">
        <button>필터</button>
        <DropDown
          setSelectedOption={(selectedOption) => setAlignOption(selectedOption)}
          selectedOption={alignOption}
          className="w-[6rem] text-sm"
          options={["마감 임박 순", "저장 순", "최신 순"]}
        />
      </div>
      {resultList.map((resultItem, index) => (
        <div key={index}>
          <ProductCard
            className="my-2"
            id={resultItem.id}>
            <ProductCard.CardImage
              className="w-[6.5rem] h-[6.5rem] mr-4"
              titleImage={tempLogoImage.src}
            />
            <ProductCard.CardTitle width={200}>
              <p className="text-2xl">{resultItem.title}</p>
              <div className="flex gap-4 text-[1rem]">
                <p>{resultItem.dong}</p>
                <p>{getPastTime(new Date(resultItem.date))}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-bold text-[1.3rem]">{resultItem.price}</p>
                <div className="flex">
                  <Image
                    className="h-fit mr-1 mt-3"
                    src={likeIcon}
                    alt="likeButton"
                  />
                  <p className="text-[1rem]">{resultItem.likeCount}</p>
                </div>
              </div>
            </ProductCard.CardTitle>
          </ProductCard>
          <hr />
        </div>
      ))}
    </main>
  );
};

export default SearchResultPage;
