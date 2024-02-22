"use client";

import { useState } from "react";
import SearchAddress from "@/app/_component/common/searchAddress";

const SelectResidence = () => {
  const [address, setAddress] = useState("");
  const [isOpenSearchAdressModal, setIsOpenSearchAdressModalsetAddress] =
    useState(false);
  return (
    <div>
      <main className="">
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
