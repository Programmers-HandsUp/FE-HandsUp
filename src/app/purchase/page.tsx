"use client";

import { Controller, useForm } from "react-hook-form";
import Button from "../_component/common/Button";
import InputPrice from "../_component/common/InputPrice";
import ProductCard from "../_component/common/ProductCard";
import Timer from "../_component/common/Timer";
import AuctionBanner from "./AuctionBanner";
import AuctionRanking from "./AuctionRanking";
import tempImage from "../../public/tempImage.png";

interface Inputs {
  price: number;
}

const PurchasePage = () => {
  const createdAt = new Date("2024-02-16T10:59:59");
  const deadline = new Date("2024-02-17T16:59:59");
  const START_PRICE = 10000;
  const MAX_PRICE = 30000;

  const { control, handleSubmit, setValue, getValues } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard
          titleImage={tempImage}
          productName="상품명"
          createDate={new Date("2024-02-26T21:29:00")}
          price={100000}
        />
      </div>
      <AuctionRanking maxPrice={MAX_PRICE} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          control={control}
          name="price"
          defaultValue={0}
          render={({ field }) => (
            <InputPrice
              title="입찰 시작가"
              price={field.value}
              field={{
                ...field,
                onChange: (value: number) => {
                  field.onChange(value);
                  setValue("price", value);
                }
              }}
            />
          )}
        />
        <Button
          color="primary"
          disabled={getValues("price") <= MAX_PRICE}
          style={{ marginTop: "20px" }}>
          입찰하기
        </Button>
      </form>
    </div>
  );
};

export default PurchasePage;
