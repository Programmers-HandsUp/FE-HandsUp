"use client";

import { useState } from "react";
import Icon from "@/app/_component/common/Icon";
import Input from "@/app/_component/common/Input";
import { Chips, Chip } from "@/app/_component/common/Chips";
import InputForm from "@/app/_component/common/Input/InputForm";

interface SearchFilterModal {
  closeModal: () => void;
}

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

const SearchFilterModal = ({ closeModal }: SearchFilterModal) => {
  const [isShowCategory, setIsShowCateogory] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  return (
    <div>
      <button
        className="flex text-2xl my-1"
        onClick={() => setIsShowCateogory((isShow) => !isShow)}>
        카테고리
        <Icon
          className={`${isShowCategory ? "-rotate-90" : "rotate-90"} ml-1 my-auto`}
          id="arrow-back"
          size={16}
        />
      </button>
      {isShowCategory && (
        <Chips
          className="grid grid-cols-2"
          Items={selectedCategory}
          setItems={setSelectedCategory}>
          {CATEGORY_LIST.map((value) => (
            <Chip
              className="border-0 w-[7rem] h-[1.5rem] my-0 text-start"
              key={value}
              value={value}>
              {value}
            </Chip>
          ))}
        </Chips>
      )}
      <h2 className="text-2xl mt-4">거래 방식</h2>
      <div className="flex gap-[6.7rem] my-3 px-2">
        <div>
          <input
            className="mr-2"
            id="direct"
            type="radio"
            name="trade"
          />
          <label>직거래</label>
        </div>
        <div>
          <input
            className="mr-2"
            id="delivery"
            type="radio"
            name="trade"
          />
          <label>택배</label>
        </div>
      </div>
      <div className="flex gap-[5rem] px-2">
        <div>
          <input
            type="checkbox"
            className="mr-2"
          />
          <label>미개봉 상품</label>
        </div>
        <div>
          <input
            type="checkbox"
            className="mr-2"
          />
          <label>진행 중인 경매만 보기</label>
        </div>
      </div>
      <h2 className="mt-4 text-xl">금액</h2>
      <div className="px-1">
        <Input className="my-1">
          <label className="my-auto mr-4 text-lg">이상</label>
          <Input.InputInnerBox className="w-[14rem] h-[2.8rem]">
            <Input.InputForm
              className="w-[11.5rem] text-start"
              type="number"
            />
            <label className="text-black my-auto text-2xl">원</label>
          </Input.InputInnerBox>
        </Input>
        <Input>
          <label className="my-auto mr-4 text-lg">이하</label>
          <Input.InputInnerBox className="w-[14rem] h-[2.8rem]">
            <Input.InputForm
              className="w-[11.5rem] text-start"
              type="number"
            />
            <label className="text-black my-auto text-2xl">원</label>
          </Input.InputInnerBox>
        </Input>
      </div>
      <div className="flex w-[60%] mx-auto justify-between my-6 gap-2 text-xl">
        <button
          className="w-[8rem] h-[2.3rem] bg-blue-300 rounded-md"
          onClick={() => {
            closeModal();
          }}>
          적용
        </button>
        <button
          className="w-[8rem] h-[2.3rem] bg-blue-300 rounded-md"
          onClick={closeModal}>
          취소
        </button>
      </div>
    </div>
  );
};

export default SearchFilterModal;
