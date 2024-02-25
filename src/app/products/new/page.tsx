"use client";

import { useEffect } from "react";
import AuctionInfo from "./_components/AuctionInfo";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProductInfo from "./_components/ProductInfo";

const RegisterSchema = z.object({
  images: z.array(z.object({ file: z.instanceof(File) })).min(1, "사진은 1장 이상 첨부해주세요"),
  title: z.string().min(2, { message: "상품명은 1자 이상 30자 이하로 입력해주세요" }).max(30, { message: "상품명은 1자 이상 30자 이하로 입력해주세요" }),
  category: z.string({
    required_error: "카테고리를 선택해주세요"
  }),
  state: z.string({
    required_error: "상품 상태를 선택해주세요"
  }),
  purchaseTime: z.string({
    required_error: "상품 구매 시기를 선택해주세요"
  }),
  price: z
    .string()
    .min(1, { message: "가격을 입력해주세요" })
    .transform((val) => parseInt(val.replace(/,/g, ""), 10))
    .pipe(
      z
        .number()
        .lte(1000000000, {
          message: "가격은 최대 1억원까지 입력가능해요"
        })
        .gte(1000, { message: "가격은 최소 1000원부터 입력가능해요" })
        .refine((data) => data % 100 === 0, {
          message: "금액은 100원 단위로 입력 가능해요"
        })
    ),
  tradeMethod: z.string({
    required_error: "상품 거래 방식을 선택해주세요"
  }),
  dateRangeTime: z
    .object({
      startDate: z.string(),
      endDate: z.string()
    })
    .refine((data) => data.startDate === "" && data.endDate === "", {
      message: "경매 마감일을 선택해주세요."
    }),
  description: z.string().min(10, { message: "상세 설명은 10자 이상 1000자 이하로 입력해주세요" }).max(1000, { message: "상세 설명은 10자 이상 1000자 이하로 입력해주세요" })
});

export type RegisterProduct = z.infer<typeof RegisterSchema>;

function RegisterProduct() {
  const methods = useForm<RegisterProduct>({
    defaultValues: {
      title: "",
      images: [],
      price: "0",
      description: "",
      dateRangeTime: {
        startDate: "",
        endDate: ""
      }
    },
    resolver: zodResolver(RegisterSchema)
  });

  const onSubmit: SubmitHandler<RegisterProduct> = (data) => {
    console.log(data);
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
