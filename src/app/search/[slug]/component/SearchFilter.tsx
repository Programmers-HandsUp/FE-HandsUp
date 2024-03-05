"use client";

import { useState } from "react";
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
      <button> 카테고리</button>
      {isShowCategory && (
        <Chips
          Items={selectedCategory}
          setItems={setSelectedCategory}
          size={90}>
          {CATEGORY_LIST.map((value) => (
            <Chip
              key={value}
              value={value}>
              {value}
            </Chip>
          ))}
        </Chips>
      )}
    </>
  );
};

export default SearchFilterModal;
