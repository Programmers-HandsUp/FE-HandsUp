"use client";

import { useEffect } from "react";
import AuctionInfo from "./_components/AuctionInfo";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import ProductInfo from "./_components/ProductInfo";

function RegisterProduct() {
  const methods = useForm<RegisterProduct>({
    defaultValues: {
      title: "",
      images: [],
      price: "0",
      description: "",
      dateRangeTime: {
        startDate: "",
        endDate: ""
      }
    },
  });

  const onSubmit: SubmitHandler<RegisterProduct> = (data) => {
    console.log(data);
  };

  return (
    <main>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <ProductInfo />
          <AuctionInfo />
          <button
            type="submit"
            className="border w-full mt-7 py-2 rounded-lg bg-[#96E4FF]">
            상품 등록
          </button>
        </form>
      </FormProvider>
    </main>
  );
}

export default RegisterProduct;
