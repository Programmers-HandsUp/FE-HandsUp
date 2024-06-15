"use client";
import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { searchFilterSchema } from "../../utils/validation";
import PriceRangeSelection from "./PriceRangeSelection";
import SearchCategories from "./SearchCategories";
import SearchOptionSelection from "./SearchOptionSelection";
import TradeMethodSelection from "./TradeMethodSelection";

interface SearchFilterModal {
  closeModal: () => void;
  setFilterOption: (
    filterOption: Record<string, string | number | null | undefined>
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
  useEffect(() => {
    console.log(methods.formState.errors);
  }, [methods.formState]);

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
      <ErrorMessage
        errors={methods.formState.errors}
        name={"minPrice" || "maxPrice"}
        render={({ message }) => (
          <p className="text-red-600 px-6 mx-auto mt-2">{message}</p>
        )}
      />
      <div className="flex w-[60%] mx-auto justify-between my-6 gap-2 text-xl">
        <button
          className="w-[8rem] h-[2.3rem] bg-blue-300 rounded-md"
          onClick={() => {
            const filterOptions = methods.getValues();
            console.log(methods.formState.errors);
            if (
              !methods.formState.errors.maxPrice &&
              !methods.formState.errors.minPrice
            ) {
              closeModal();
              setFilterOption(filterOptions);
            }
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
