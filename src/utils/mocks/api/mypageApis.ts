import { http, HttpResponse } from "msw";

import { Status, StatusEn } from "@/utils/types/user/mypage";

import {
  purchaseList,
  reviewLabelList,
  reviewList,
  saleList
} from "../mockData/mypageData";

export const statusMap: Record<StatusEn, Status> = {
  TRADING: "거래 중",
  BIDDING: "입찰 중",
  COMPLETED: "거래 완료"
};

const handlers = [
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/buys`,
    ({ request }) => {
      const url = new URL(request.url);
      const status = url.searchParams.get("auctionStatus") as StatusEn;

      switch (status) {
        case "TRADING":
        case "BIDDING":
        case "COMPLETED":
          const responseList = purchaseList.content.filter(
            (item) => item.auctionStatus === statusMap[status]
          );

          const result = {
            content: responseList,
            size: 10,
            hasNext: false
          };
          return HttpResponse.json(result);
        default:
          return HttpResponse.json(purchaseList);
      }
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/:userId/sales`,
    ({ request }) => {
      const url = new URL(request.url);
      const status = url.searchParams.get("auctionStatus") as StatusEn;

      switch (status) {
        case "TRADING":
        case "BIDDING":
        case "COMPLETED":
          const responseList = saleList.content.filter(
            (item) => item.auctionStatus === statusMap[status]
          );

          const result = {
            content: responseList,
            size: 10,
            hasNext: false
          };
          return HttpResponse.json(result);
        default:
          return HttpResponse.json(saleList);
      }
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/:userId/reviews/labels`,
    () => {
      return HttpResponse.json(reviewLabelList);
    }
  ),
  http.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/:userId/reviews`,
    () => {
      return HttpResponse.json(reviewList);
    }
  )
];

export default handlers;
