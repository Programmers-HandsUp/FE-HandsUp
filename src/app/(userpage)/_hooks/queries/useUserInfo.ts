import { useSuspenseQueries } from "@tanstack/react-query";

import {
  reviewLabelList,
  reviewList,
  saleList,
  userProfile
} from "../../_api/mypage";
import { calculateCounts } from "../../_utils/calculateCounts";

const useUserInfo = (userId: number) => {
  const [
    { data: profile },
    { data: saleStatusCounts },
    { data: reviewLabels },
    { data: reviews }
  ] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["profile", userId],
        queryFn: () => userProfile(userId)
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
    profile,
    saleStatusCounts,
    reviewLabels,
    reviews
  };
};

export default useUserInfo;
