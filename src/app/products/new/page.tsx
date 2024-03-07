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

export type RegisterProduct = z.infer<typeof ProductSchema>;

function RegisterProduct() {
  const methods = useForm<RegisterProduct>({
    defaultValues: {
      initPrice: 0,
      images: []
    },
    resolver: zodResolver(ProductSchema)
  });

  const { mutateImageUpload } = useImageUpload();
  const { mutateRegisterProduct } = useRegisterProduct();
  const router = useRouter();
  const setActive = useBeforeUnload();

  const onSubmit: SubmitHandler<RegisterProduct> = async (data) => {
    const { images, address, dateRangeTime, ...rest } = data;
    const imageData = new FormData();

    for (const image of images) {
      imageData.append("images", image.file);
    }

    const imageUrls = await mutateImageUpload(imageData);

    const productData: ProductData = {
      ...rest,
      si: address?.gu,
      gu: address?.gu,
      dong: address?.dong,
      endDate: dateRangeTime.endDate,
      imageUrls
    };

    mutateRegisterProduct(productData, {
      onSuccess: (data) => {
        const { auctionId } = data;

        setActive(false);

        router.replace(`/products/${auctionId}`);
      }
    });
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
