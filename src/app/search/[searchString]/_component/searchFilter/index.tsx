"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import FormErrorsMessage from "@/app/_component/common/FormErrorMessage";

import { searchFilterSchema } from "../../utils/validation";
import PriceRangeSelection from "./PriceRangeSelection";
import SearchCategories from "./SearchCategories";
import SearchOptionSelection from "./SearchOptionSelection";
import TradeMethodSelection from "./TradeMethodSelection";

interface SearchFilterModal {
  closeModal: () => void;
  setFilterOption: (
    filterOption: Record<string, string | number | null>
  ) => void;
}
const SearchFilterModal = ({
  closeModal,
  setFilterOption
}: SearchFilterModal) => {
  const methods = useForm<z.infer<typeof searchFilterSchema>>({
    resolver: zodResolver(searchFilterSchema),
    mode: "all",
    defaultValues: {
      minPrice: 0,
      maxPrice: 0
    }
  });

  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  function onClickFormSubmitBtn() {
    const filterOptions = methods.getValues();
    if (
      !methods.formState.errors.maxPrice &&
      !methods.formState.errors.minPrice
    ) {
      closeModal();
      setFilterOption(filterOptions);
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col gap-1 divide-y-4 divide-slate-200">
        <SearchCategories
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <SearchOptionSelection />
        <TradeMethodSelection />
        <PriceRangeSelection />
      </div>
      <FormErrorsMessage
        errors={methods.formState.errors}
        render={(errorMessageList: (string | undefined)[]) => (
          <p className="text-red-600 px-6 mx-auto mt-2">
            {errorMessageList[0]}
          </p>
        )}
      />

      <div className="flex w-[60%] mx-auto justify-between my-6 gap-2 text-xl">
        <button
          className="w-[8rem] h-[2.3rem] bg-blue-300 rounded-md"
          onClick={onClickFormSubmitBtn}>
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
