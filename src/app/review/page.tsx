"use client";

import { useForm } from "react-hook-form";
import Button from "../_component/common/Button";
import Icon from "../_component/common/Icon";
import ProductCard from "../_component/common/ProductCard";
import tempImage from "../../public/tempImage.png";
import SelectRange from "./_component/SelectRange";
import SelectReview from "./_component/SelectReview";

interface Inputs {
  range: string;
  review: string[];
  feedback: string;
}

const ReviewForm = () => {
  const mock = {
    userName: "거니니",
    partnerName: "오리리",
    image: tempImage,
    name: "상품 이름",
    date: new Date("2024-02-07T13:11:20"),
    price: 10000
  };

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data: Inputs) => {
    console.log(data);
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
      <hr className="w-[30%] mx-auto" />
      <ProductCard
        titleImage={mock.image}
        productName={mock.name}
        createDate={mock.date}
        price={mock.price}
      />
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
