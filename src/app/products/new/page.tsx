"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { useImageUpload } from "@/app/hooks/mutations/useImageUpload";
import { useRegisterAuction } from "@/app/products/new/_hooks/mutations/useReigsterAuction";
import { AuctionData } from "@/utils/types/auction/registerAuction";

import AuctionInfo from "./_component/AuctionInfo";
import ProductInfo from "./_component/ProductInfo";
import useBeforeUnload from "./_utils/useBeforeUnload";
import { AuctionSchema } from "./_utils/validation";

export type RegisterAuction = z.infer<typeof AuctionSchema>;

function RegisterAuctionPage() {
  const methods = useForm<RegisterAuction>({
    defaultValues: {
      initPrice: 0,
      images: []
    },
    resolver: zodResolver(AuctionSchema)
  });

  const { mutateImageUpload } = useImageUpload();
  const { mutateRegisterAuction } = useRegisterAuction();
  const router = useRouter();
  const setActive = useBeforeUnload();

  const onSubmit: SubmitHandler<RegisterAuction> = async (data) => {
    const { images, address, dateRangeTime, ...rest } = data;
    const imageData = new FormData();

    for (const image of images) {
      imageData.append("images", image.file);
    }

    const imageUrls = await mutateImageUpload(imageData);

    const auctionData: AuctionData = {
      ...rest,
      si: address?.gu,
      gu: address?.gu,
      dong: address?.dong,
      endDate: dateRangeTime.endDate,
      imageUrls
    };

    mutateRegisterAuction(auctionData, {
      onSuccess: (data) => {
        const { auctionId } = data;

        setActive(false);

        router.replace(`/auctions/${auctionId}`);
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
            경매 등록
          </button>
        </form>
      </FormProvider>
    </main>
  );
}

export default RegisterAuctionPage;
