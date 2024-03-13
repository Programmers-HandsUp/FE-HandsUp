"use client";

import { ErrorMessage } from "@hookform/error-message";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

import Button from "../_component/common/Button";
import InputPrice from "../_component/common/InputPrice";
import ProductCard from "../_component/common/ProductCard";
import Timer from "../_component/common/Timer";
import AuctionBanner from "./_component/AuctionBanner";
import AuctionRanking from "./_component/AuctionRanking";

interface PurchaseProps {
  price: number;
  title: string;
  field: FieldValues;
}

const createdAt = new Date("2024-02-16T10:59:59");
const deadline = new Date("2024-02-17T16:59:59");
const START_PRICE = 10000;
const MAX_PRICE = 30000;

const mock = {
  image: "/assets/images/logoIcon.png",
  name: "상품 이름",
  date: new Date("2024-02-07T13:11:20"),
  price: 10000
};

const PurchasePage = () => {
  const schema = z.object({
    price: z
      .number()
      .min(MAX_PRICE + 1000, "제안가는 현재 최고가 보다 높아야 합니다")
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<PurchaseProps>({
    resolver: zodResolver(schema)
  });

  const onSubmit = (data: PurchaseProps) => {
    console.log(data);
  };

  return (
    <div
      style={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "20px"
      }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Timer
          deadline={deadline}
          createdAt={createdAt}
        />
      </div>
      <AuctionBanner
        startPrice={START_PRICE}
        maxPrice={MAX_PRICE}
      />
      <div>
        <ProductCard id={1}>
          <div className="flex justify-evenly items-center w-full py-4">
            <ProductCard.CardImage
              titleImage={mock.image}
              width={100}
              height={100}
              className="group-hover:[&_img]:scale-100"
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
      </div>
      <AuctionRanking maxPrice={MAX_PRICE} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="price"
          defaultValue={0}
          render={({ field }) => (
            <InputPrice<PurchaseProps, "price">
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
        <Button
          color="primary"
          style={{ marginTop: "20px" }}>
          입찰하기
        </Button>
      </form>
    </div>
  );
};

export default PurchasePage;
