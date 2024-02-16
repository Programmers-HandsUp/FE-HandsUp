import { z } from "zod";

export type InputPrice = z.infer<typeof InputPriceSchema>;

export const InputPriceSchema = z.object({
  price: z
    .string()
    .min(1, { message: "가격을 입력해주세요" })
    .transform((val) => parseInt(z.string().parse(val).replace(/,/g, ""), 10))
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
    )
});
