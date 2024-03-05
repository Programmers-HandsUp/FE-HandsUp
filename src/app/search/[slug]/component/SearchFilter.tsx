"use client";

import { useState } from "react";
import Icon from "@/app/_component/common/Icon";
import { Chips, Chip } from "@/app/_component/common/Chips";

const CATEGORY_LIST = [
  "디지털 기기",
  "가구/인테리어",
  "패션/잡화",
  "생활가전",
  "생활/주방",
  "스포츠/레저",
  "취미/게임/음반",
  "뷰티/미용",
  "반려동물용품",
  "티켓/교환권",
  "도서",
  "유아도서",
  "기타중고물품"
] as const;

const SearchFilterModal = () => {
  const [isShowCategory, setIsShowCateogory] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  return (
    <>
      <button
        className="flex"
        onClick={() => setIsShowCateogory((isShow) => !isShow)}>
        카테고리
        <Icon
          className={`${isShowCategory ? "-rotate-90" : "rotate-90"} my-auto`}
          id="arrow-back"
          size={16}
        />
      </button>
      {isShowCategory && (
        <Chips
          className="grid grid-cols-2 gap-y-2"
          Items={selectedCategory}
          setItems={setSelectedCategory}>
          {CATEGORY_LIST.map((value) => (
            <Chip
              className="border-0 w-[7rem] h-[2rem] my-0 text-start"
              key={value}
              value={value}>
              {value}
            </Chip>
          ))}
        </Chips>
      )}
      <h2 className="text-xl">거래 방식</h2>
      <div className="flex gap-[6rem]">
        <div>
          <input
            id="direct"
            type="radio"
            name="trade"
          />
          <label>직거래</label>
        </div>
        <div>
          <input
            id="delivery"
            type="radio"
            name="trade"
          />
          <label>택배</label>
        </div>
      </div>
      <div className="flex gap-[6rem]">
        <div>
          <input type="checkbox" />
          <label>미개봉 상품</label>
        </div>
        <div>
          <input type="checkbox" />
          <label>진행 중인 경매만 보기</label>
        </div>
      </div>
      <h2>금액</h2>
    </>
  );
};

export default SearchFilterModal;
