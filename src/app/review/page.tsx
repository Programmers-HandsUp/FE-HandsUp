"use client";

import { useForm } from "react-hook-form";

import Button from "../_component/common/Button";
import Icon from "../_component/common/Icon";
import ProductCard from "../_component/common/ProductCard";
import SelectRange from "./_component/SelectRange";
import SelectReview from "./_component/SelectReview";
import { useReviewPost } from "./_hooks/useReviewPost";

interface Inputs {
  range: string;
  review: string[];
  feedback: string;
}

const mock = {
  userName: "거니니",
  partnerName: "오리리",
  image: "/assets/images/logoIcon.png",
  name: "상품 이름",
  date: new Date("2024-02-07T13:11:20"),
  price: 10000
};

const ReviewForm = () => {
  const { register, handleSubmit, setValue } = useForm<Inputs>();

  const reviewPostMutation = useReviewPost();

  const onSubmit = (data: Inputs) => {
    reviewPostMutation.mutate(data);
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
          {mock.userName}님, <br />
          {mock.partnerName}님과의 거래는 어떠셨나요?
        </p>
      </div>
      <ProductCard id={1}>
        <div className="flex justify-between items-center w-full border-t py-4">
          <ProductCard.CardImage
            titleImage={mock.image}
            width={100}
            height={100}
            className="flex-none group-hover:[&_img]:scale-100"
          />
          <div>
            <div>
              <ProductCard.CardTitle className="pl-2 text-base overflow-hidden whitespace-nowrap text-ellipsis">
                {mock.name}
              </ProductCard.CardTitle>
            </div>
            <p className="text-sm flex-none text-center">
              <strong>{mock.price}원</strong>
            </p>
          </div>
          <p className="text-sm text-[#ABABAB] text-right">
            {mock.date.toLocaleDateString()}
          </p>
        </div>
      </ProductCard>

      <SelectRange onSelected={handleRangeSelected} />
      <SelectReview onSelected={handleReviewSelected} />
      <div>
        <p>남기고 싶은 후기가 있다면 적어주세요</p>
        <textarea
          {...register("feedback")}
          style={{
            backgroundColor: "#f8f8f8",
            scrollbarColor: "#96E4FF #ffffff",
            scrollbarWidth: "thin"
          }}
          className="w-full h-[150px] resize-none border-2 rounded-xl border-[#efefef] p-2 text-black"
        />
      </div>
      <Button color="primary">후기 작성 완료하기</Button>
    </form>
  );
};

export default ReviewForm;
