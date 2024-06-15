import { z } from "zod";

import { ERRORS } from "./constants";

export const searchFilterSchema = z
  .object({
    minPrice: z.preprocess(
      (val) => {
        if (val === "") return undefined;
        const numberVal = Number(val);
        return isNaN(numberVal) ? undefined : numberVal;
      },
      z
        .number()
        .min(0, { message: ERRORS.PRICE_MIN })
        .max(999999999, {
          message: ERRORS.PRICE_MAX
        })
        .nullish()
    ),
    maxPrice: z.preprocess(
      (val) => {
        if (val === "") return undefined;
        const numberVal = Number(val);
        return isNaN(numberVal) ? undefined : numberVal;
      },
      z
        .number()
        .min(0, { message: ERRORS.PRICE_MIN })
        .max(99999999, {
          message: ERRORS.PRICE_MAX
        })
        .nullish()
    )
  })
  .refine(
    ({ minPrice, maxPrice }) => {
      if (minPrice != null && maxPrice != null && maxPrice < minPrice)
        return false;
      return true;
    },
    {
      message: ERRORS.MINPRICE_OVERTHEN_MAXPRICE,
      path: ["minPrice"]
    }
  );
