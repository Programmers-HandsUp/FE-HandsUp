import { useSuspenseQueries } from "@tanstack/react-query";

import {
  purchaseList,
  reviewLabelList,
  reviewList,
  saleList
} from "../../_api/mypage";
import { calculateCounts } from "../../_utils/calculateCounts";

const useMyInfo = (userId: number) => {
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

export default useMyInfo;
