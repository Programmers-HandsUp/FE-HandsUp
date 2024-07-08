"use client";

import { SearchAddress } from "@/app/_component/common/searchAddress";


const SelectResidenceForm = () => {
  return (
    <div className="animate-slideInFromRight">
      <main className="w-[300px] mx-auto">
        <h1 className="text-xl my-1">거주지 선택</h1>
        <SearchAddress
          onChange={({ si, gu, dong }) => setAddress({ si, gu, dong })}
        />
      </main>
    </div>
  );
};

export default SelectResidenceForm;
