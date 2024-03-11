import {
  CATEGORY_LIST,
  PURCHASE_TIME_VALUE,
  STATE_LIST,
  TRADEMETHOD_LIST
} from "@/app/products/new/_utils/constants";

import { ImageUrl } from "../image";

export type Category = (typeof CATEGORY_LIST)[number];
export type StateList = (typeof STATE_LIST)[number];
export type PurchaseTime = (typeof PURCHASE_TIME_VALUE)[number];
export type TradeMethod = (typeof TRADEMETHOD_LIST)[number];

export interface ProductData {
  title: string;
  description: string;
  initPrice: number;
  productCategory: Category;
  productStatus: StateList;
  purchaseTime: PurchaseTime;
  tradeMethod: TradeMethod;
  imageUrls: ImageUrl[];
  endDate: string;
  si?: string;
  gu?: string;
  dong?: string;
}

export interface Product extends ProductData {
  auctionId: number;
  sellerId: number;
  bookmarkCount: number;
  createdAt: Date;
}
