"use client";

import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import PriceRangeSelection from "./PriceRangeSelection";
import SearchCategories from "./SearchCategories";
import SearchOptionSelection from "./SearchOptionSelection";
import TradeMethodSelection from "./TradeMethodSelection";

interface SearchFilterModal {
  closeModal: () => void;
  setFilterOption: (filterOption: Record<string, string | number>) => void;
}
const SearchFilterModal = ({
  closeModal,
  setFilterOption
}: SearchFilterModal) => {
  const methods = useForm();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  return (
    <FormProvider {...methods}>
      <SearchCategories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <hr className="w-full h-1 bg-slate-200" />
      <SearchOptionSelection />
      <hr className="w-full h-1 bg-slate-200" />
      <TradeMethodSelection />
      <hr className="w-full h-1 bg-slate-200" />
      <PriceRangeSelection />
      <div className="flex w-[60%] mx-auto justify-between my-6 gap-2 text-xl">
        <button
          className="w-[8rem] h-[2.3rem] bg-blue-300 rounded-md"
          onClick={() => {
            const filterOptions = methods.getValues();
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
    </FormProvider>
  );
};

export default SearchFilterModal;
