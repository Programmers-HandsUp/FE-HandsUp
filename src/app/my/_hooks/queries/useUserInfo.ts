import { useSuspenseQueries } from "@tanstack/react-query";

import { Purchase, Sale } from "@/utils/types/user/mypage";
import { Status } from "@/utils/types/user/mypage";

import {
  purchaseList,
  reviewLabelList,
  reviewList,
  saleList
} from "../../_api/mypage";

export const calculateCounts = (data: Purchase[] | Sale[]) => {
  const initCounts: Record<Status, number> = {
    bidding: 0,
    pending: 0,
    finished: 0
  };

  return data.reduce((acc, item) => {
    acc[item.auctionStatus]++;
    return acc;
  }, initCounts);
};

const useUserInfo = (userId: number) => {
  const [
    { data: purchaseStatusCounts },
    { data: saleStatusCounts },
    { data: reviewLabels },
    { data: reviews }
  ] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["purchaseList"],
        queryFn: () => purchaseList(),
        select: calculateCounts
      },
      {
        queryKey: ["saleList", userId],
        queryFn: () => saleList(userId),
        select: calculateCounts
      },
      {
        queryKey: ["reviewLabelList", userId],
        queryFn: () => reviewLabelList(userId)
      },
      {
        queryKey: ["reviewList", userId],
        queryFn: () => reviewList(userId)
      }
    ]
  });

  return {
    purchaseStatusCounts,
    saleStatusCounts,
    reviewLabels,
    reviews
  };
};

export default useUserInfo;
