"use client";

import { useFormContext } from "react-hook-form";

import { SearchAddress } from "@/app/_component/common/searchAddress";

interface SelectResidenceForm {
  setStep: () => void;
}

const SelectResidenceForm = ({ setStep }: SelectResidenceForm) => {
  const { setValue } = useFormContext();

  return (
    <div className="animate-slideInFromRight">
      <main className="w-[300px] mx-auto">
        <h1 className="text-xl my-1">거주지 선택</h1>
        <SearchAddress
          onChange={({ si, gu, dong }) => {
            setValue("si", si);
            setValue("gu", gu);
            setValue("dong", dong);
            setStep();
          }}
        />
      </main>
    </div>
  );
};

export default SelectResidenceForm;
