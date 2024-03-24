"use client";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import Button from "@/app/_component/common/Button";
import Icon from "@/app/_component/common/Icon";
import Modal from "@/app/_component/common/Modal";
import ProductCard from "@/app/_component/common/ProductCard";
import useSession from "@/app/_hooks/queries/useSession";
import useModalState from "@/app/_hooks/useModalState";
import formatReadableDate from "@/utils/function/formatReadableDate";
import {
  AuctionReviewEnrollRequest,
  ReviewComplete
} from "@/utils/types/auction/auctionReivewEnroll";

import SelectRange from "./_component/SelectRange";
import SelectReview from "./_component/SelectReview";
import { useGetAuctionInfo } from "./_hooks/useGetAuctionInfo";
import { usePostReview } from "./_hooks/useProduct";
import ReviewReceipt from "./ReviewReceipt";

interface ReviewPageProps {
  params: { auctionId: string };
}

const ReviewForm = ({ params }: ReviewPageProps) => {
  const { auctionId } = params;
  const reviewPostMutation = usePostReview();
  const { data: auction, isLoading } = useGetAuctionInfo({
    auctionId: Number(auctionId)
  });

  const schema = z.object({
    evaluationScore: z.number(),
    reviewLabelIds: z.array(z.number()),
    content: z.string()
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<AuctionReviewEnrollRequest>({
    resolver: zodResolver(schema)
  });
  const { open, isOpen, close } = useModalState();
  const [review, setReview] = useState<ReviewComplete>();

  const onSubmit = (data: AuctionReviewEnrollRequest) => {
    reviewPostMutation.mutate(
      { auctionId: Number(auctionId), data },
      {
        onSuccess(data) {
          if (data !== null) {
            setReview(data);
          }
        }
      }
    );
  };

  useEffect(() => {
    review && open();
  }, [review, open]);

  const handleRangeSelected = (value: string) => {
    setValue("evaluationScore", Number(value));
  };

  const handleReviewSelected = (value: string[]) => {
    setValue(
      "reviewLabelIds",
      value.map((x) => Number(x.slice(0, 1)))
    );
  };

  const { data: userInfo, isLoading: userLoading } = useSession();

  if (isLoading || userLoading) return <div>Loading..</div>;
  if (!auction || !userInfo) return <div>오류 발생</div>;

  const currentUser = userInfo.nickname;

  return (
    <>
      <form
        className="p-[10%] flex flex-col space-y-5"
        onSubmit={handleSubmit(onSubmit)}>
        <Icon id="arrow-back" />
        <div style={{ textAlign: "center" }}>
          <p>
            {currentUser}님, <br />
            {auction.sellerInfo.nickname}님과의 거래는 어떠셨나요?
          </p>
        </div>
        <ProductCard id={1}>
          <div className="flex w-full border-t py-4">
            <ProductCard.CardImage
              titleImage={auction.imageUrls[0]}
              width={100}
              height={100}
              className="group-hover:[&_img]:scale-100"
            />
            <div className="flex grow justify-between flex-col pl-2">
              <div>
                <ProductCard.CardTitle className="text-lg w-[180px] overflow-hidden whitespace-nowrap text-ellipsis">
                  {auction.title}
                </ProductCard.CardTitle>

                <p className="text-sm">
                  최종낙찰가:
                  <strong>{auction.currentBiddingPrice}원</strong>
                </p>
              </div>
              <div className="self-end">
                <p className="text-xs text-[#ABABAB] text-right">
                  {formatReadableDate(auction.createdAt)}
                </p>
              </div>
            </div>
          </div>
        </ProductCard>

        <SelectRange onSelected={handleRangeSelected} />
        <SelectReview onSelected={handleReviewSelected} />
        <div>
          <p>남기고 싶은 후기가 있다면 적어주세요</p>
          <Controller
            control={control}
            name="content"
            defaultValue=""
            render={({ field }) => (
              <textarea
                {...field}
                style={{
                  backgroundColor: "#f8f8f8",
                  scrollbarColor: "#96E4FF #ffffff",
                  scrollbarWidth: "thin"
                }}
                className="w-full h-[150px] resize-none border-2 rounded-xl border-[#efefef] p-2 text-black"
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="content"
            render={({ message }) => (
              <p className="text-red-600 mt-2">{message}</p>
            )}
          />
        </div>
        <Button color="primary">후기 작성 완료하기</Button>
      </form>
      {review && (
        <Modal
          className="dark:bg-[#181818]"
          modalType="fullScreen"
          animate="slide"
          isOpen={isOpen}
          close={close}>
          <ReviewReceipt review={review && review} />
        </Modal>
      )}
    </>
  );
};

export default ReviewForm;
