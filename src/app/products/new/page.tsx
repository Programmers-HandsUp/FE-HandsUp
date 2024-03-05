"use client";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import AuctionInfo from "./_components/AuctionInfo";
import ProductInfo from "./_components/ProductInfo";
import { useImageUpload } from "@/app/hooks/mutations/useImageUpload";
import { useRegisterProduct } from "@/app/hooks/mutations/useReigsterProduct";
import { ProductSchema } from "./_utils/validation";
import useBeforeUnload from "./_utils/useBeforeUnload";
import { useRouter } from "next/navigation";
import { ProductData } from "./_utils/productType";

export type RegisterProduct = z.infer<typeof RegisterSchema>;

function RegisterProduct() {
  const methods = useForm<RegisterProduct>({
    defaultValues: {
      title: "",
      images: [],
      price: 0,
      description: "",
      dateRangeTime: {
        startDate: "",
        endDate: ""
      }
    },
    mode: "onChange",
    resolver: zodResolver(RegisterSchema)
  });

  const onSubmit: SubmitHandler<RegisterProduct> = (data) => {
    console.log(data);
  };

  /** 새로고침 감지 */
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

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
