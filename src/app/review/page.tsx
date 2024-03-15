"use client";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import Button from "../_component/common/Button";
import Icon from "../_component/common/Icon";
import ProductCard from "../_component/common/ProductCard";
import SelectRange from "./_component/SelectRange";
import SelectReview from "./_component/SelectReview";
import { usePostReview, useProduct } from "./_hooks/useProduct";

interface ReviewInputProps {
  range: string;
  review: string[];
  feedback: string;
}

const ReviewForm = () => {
  const reviewPostMutation = usePostReview();
  const { data: product } = useProduct();

  const schema = z.object({
    range: z.string(),
    review: z.array(z.string()),
    feedback: z.string()
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<ReviewInputProps>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: ReviewInputProps) => {
    reviewPostMutation.mutate({
      request: {
        evaluationScore: parseInt(data.range),
        content: data.feedback,
        reviewLabelIds: data.review.map(Number)
      },
      writer: {
        createdAt: "",
        updatedAt: "",
        id: 0,
        email: "",
        password: "",
        nickname: "",
        score: 0,
        address: {
          si: "",
          gu: "",
          dong: ""
        },
        profileImageUrl: "",
        reportCount: 0
      }
    });
  };

  const handleRangeSelected = (value: string) => {
    setValue("range", value);
  };

  const handleReviewSelected = (value: string[]) => {
    setValue("review", value);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-[10%] flex flex-col space-y-5">
      <Icon id="arrow-back" />
      <div style={{ textAlign: "center" }}>
        <p>
          {product?.sellerInfo?.nickname}님, <br />
          {product?.sellerInfo?.nickname}님과의 거래는 어떠셨나요?
        </p>
      </div>
      <ProductCard id={1}>
        <div className="flex justify-between items-center w-full border-t py-4">
          <ProductCard.CardImage
            titleImage={product?.imageUrls ? product.imageUrls[0] : ""}
            width={100}
            height={100}
            className="flex-none group-hover:[&_img]:scale-100"
          />
          <div>
            <div>
              <ProductCard.CardTitle className="pl-2 text-base overflow-hidden whitespace-nowrap text-ellipsis">
                {product?.title}
              </ProductCard.CardTitle>
            </div>
            <p className="text-sm flex-none text-center">
              <strong>{product?.currentBiddingPrice}원</strong>
            </p>
          </div>
          <p className="text-sm text-[#ABABAB] text-right">
            {product?.createdAt}
          </p>
        </div>
      </ProductCard>

      <SelectRange onSelected={handleRangeSelected} />
      <SelectReview onSelected={handleReviewSelected} />
      <div>
        <p>남기고 싶은 후기가 있다면 적어주세요</p>
        <Controller
          control={control}
          name="feedback"
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
          name="feedback"
          render={({ message }) => (
            <p className="text-red-600 mt-2">{message}</p>
          )}
        />
      </div>
      <Button color="primary">후기 작성 완료하기</Button>
    </form>
  );
};

export default ReviewForm;
