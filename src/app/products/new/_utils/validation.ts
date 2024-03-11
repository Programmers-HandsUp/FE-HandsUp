import { z } from "zod";

import {
  CATEGORY_LIST,
  ERRORS,
  PURCHASE_TIME_VALUE,
  STATE_LIST,
  TRADEMETHOD_LIST
} from "./constants";

export const AuctionSchema = z
  .object({
    images: z
      .array(z.object({ file: z.instanceof(File) }))
      .min(1, ERRORS.IMAGE_MIN),
    title: z
      .string()
      .min(2, { message: ERRORS.TITLE_LENGTH })
      .max(30, { message: ERRORS.TITLE_LENGTH }),
    productCategory: z.enum(CATEGORY_LIST, {
      required_error: ERRORS.CATEGORY_REQUIRED
    }),
    productStatus: z.enum(STATE_LIST, {
      required_error: ERRORS.STATUS_REQUIRED
    }),
    purchaseTime: z.enum(PURCHASE_TIME_VALUE, {
      required_error: ERRORS.PURCHASE_TIME_REQUIRED
    }),
    initPrice: z
      .number()
      .lte(1000000000, {
        message: ERRORS.PRICE_MAX
      })
      .gte(1000, { message: ERRORS.PRICE_MIN })
      .refine((data) => data % 100 === 0, {
        message: ERRORS.PRICE_UNIT
      }),
    tradeMethod: z.enum(TRADEMETHOD_LIST, {
      required_error: ERRORS.TRADE_METHOD_REQUIRED
    }),
    address: z
      .object({
        si: z.string(),
        gu: z.string(),
        dong: z.string()
      })
      .optional(),
    dateRangeTime: z
      .object({
        startDate: z.string(),
        endDate: z.string()
      })
      .refine((data) => data.startDate !== "" && data.endDate !== "", {
        message: ERRORS.AUCTION_DATE_REQUIRED
      }),
    description: z
      .string()
      .min(10, { message: ERRORS.DESCRIPTION_LENGTH })
      .max(1000, {
        message: ERRORS.DESCRIPTION_LENGTH
      })
  })
  .refine(
    (data) => {
      if (data.tradeMethod === "직거래" && !data.address) {
        return false;
      }
      return true;
    },
    {
      message: ERRORS.ADDRESS_REQUIRED,
      path: ["address"]
    }
  );
