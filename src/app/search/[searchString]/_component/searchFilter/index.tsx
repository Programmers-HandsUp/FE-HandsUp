"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

import PriceRangeSelection from "./PriceRangeSelection";
import SearchCategories from "./SearchCategories";
import TradeMethodSelection from "./TradeMethodSelection";
interface SearchFilterModal {
  closeModal: () => void;
  setFilterOption: (filterOption: Record<string, string | number>) => void;
}
const SearchFilterModal = ({
  closeModal,
  setFilterOption
}: SearchFilterModal) => {
  const { getValues } = useForm();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  return (
    <div className="pl-2">
      <SearchCategories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <TradeMethodSelection />
      <PriceRangeSelection />
      <div className="flex w-[60%] mx-auto justify-between my-6 gap-2 text-xl">
        <button
          className="w-[8rem] h-[2.3rem] bg-blue-300 rounded-md"
          onClick={() => {
            const filterOptions = getValues();
            closeModal();
            setFilterOption(filterOptions);
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
