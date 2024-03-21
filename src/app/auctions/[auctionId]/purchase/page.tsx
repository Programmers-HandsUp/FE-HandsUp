"use client";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import ArrowBackButton from "@/app/_component/common/ArrowBackButton";
import BidsSuccessAnimation from "@/app/_component/common/BidsSuccessAnimation";
import Header from "@/app/_component/common/Header";
import InputPrice from "@/app/_component/common/InputPrice";
import ProductCard from "@/app/_component/common/ProductCard";
import Timer from "@/app/_component/common/Timer";
import setMoneyUnitString from "@/utils/function/setMoneyUnitString";

import AuctionBanner from "./_component/AuctionBanner";
import AuctionRanking from "./_component/AuctionRanking";
import useBidPost from "./_hooks/useBidPost";
import useGetBidsInfo from "./_hooks/useGetBidsInfo";

interface PurchaseFormData {
  price: number;
  title: string;
  field: FieldValues;
}

interface PurchaseProps {
  params: { auctionId: string };
}

const PurchasePage = ({ params }: PurchaseProps) => {
  const { auctionId } = params;
  const { top3, auction } = useGetBidsInfo({ auctionId: Number(auctionId) });

  const [initPrice, setInitPrice] = useState(0);

  useEffect(() => {
    if (!auction) return;
    setInitPrice(auction.currentBiddingPrice);
  }, [auction]);

  const schema = z.object({
    price: z
      .number()
      .min(initPrice + 1000, "제안가는 현재 최고가 보다 높아야 합니다")
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PurchaseFormData>({
    resolver: zodResolver(schema)
  });

  const bidPostMutation = useBidPost({ auctionId: Number(auctionId) });

  const onSubmit = (data: PurchaseFormData) => {
    bidPostMutation.mutate(data.price);
  };

  return (
    <>
      <div className="mx-[20px] my-auto flex flex-col gap-[20px]">
        <Header
          left={<ArrowBackButton />}
          center={
            <div className="flex justify-center">
              <Timer
                deadline={auction.endDate}
                createdAt={auction.createdAt}
              />
            </div>
          }
        />

        <AuctionBanner
          initPrice={auction.initPrice}
          currentBiddingPrice={auction.currentBiddingPrice}
        />
        <div>
          <ProductCard id={3}>
            <div className="flex justify-evenly items-center w-full py-4">
              <ProductCard.CardImage
                titleImage={auction?.imageUrls[0]}
                width={100}
                height={100}
                className="group-hover:[&_img]:scale-100"
              />
              <div>
                <div>
                  <ProductCard.CardTitle className="pl-2 text-base overflow-hidden whitespace-nowrap text-ellipsis">
                    {auction?.title}
                  </ProductCard.CardTitle>
                </div>
                <p className="text-sm flex-none text-center">
                  <strong>{setMoneyUnitString(auction.initPrice)}원</strong>
                </p>
              </div>
              <p className="text-sm text-[#ABABAB] text-right">
                {new Date(auction.createdAt).toLocaleDateString()}
              </p>
            </div>
          </ProductCard>
        </div>
        <AuctionRanking top3={top3} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="price"
            defaultValue={0}
            render={({ field }) => (
              <InputPrice<PurchaseFormData, "price">
                title="제안가"
                price={field.value}
                field={field}
                reset={() => reset({ price: 0 })}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="price"
            render={({ message }) => (
              <p className="text-red-600 mt-2">{message}</p>
            )}
          />
          <button className="bg-[#96E4FF] rounded-xl hover:bg-[#73adc0] mt-[20px] w-full py-2">
            입찰하기
          </button>
        </form>
      </div>
      {bidPostMutation.isSuccess && <BidsSuccessAnimation />}
    </>
  );
};

export default PurchasePage;
