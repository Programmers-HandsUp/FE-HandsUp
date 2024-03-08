"use client";

import { useState } from "react";
import SearchAddress from "@/app/_component/common/searchAddress";

interface SelectResidenceProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

const SelectResidence = ({ setAddress }: SelectResidenceProps) => {
  const [isOpenSearchAdressModal, setIsOpenSearchAdressModalsetAddress] =
    useState(false);
  return (
    <div className="animate-slideInFromRight">
      <main className="w-[300px] mx-auto">
        <h1 className="text-xl my-1">거주지 선택</h1>
        <SearchAddress
          setAddress={setAddress}
          modal={isOpenSearchAdressModal}
          setModal={setIsOpenSearchAdressModalsetAddress}
        />
      </main>
    </div>
  );
};

export default SelectResidence;
