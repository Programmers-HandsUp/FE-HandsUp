import { z } from "zod";

import { ERRORS } from "./constants";

export const searchFilterSchema = z
  .object({
    minPrice: z.number().min(0, { message: ERRORS.PRICE_MIN }).max(999999999, {
      message: ERRORS.PRICE_MAX
    }),
    maxPrice: z.number().min(0, { message: ERRORS.PRICE_MIN }).max(99999999, {
      message: ERRORS.PRICE_MAX
    })
  })
  .refine(
    ({ minPrice, maxPrice }) =>
      minPrice !== undefined && maxPrice !== undefined && maxPrice >= minPrice,
    {
      message: ERRORS.MINPRICE_OVERTHEN_MAXPRICE,
      path: ["maxPrice"]
    }
  );
