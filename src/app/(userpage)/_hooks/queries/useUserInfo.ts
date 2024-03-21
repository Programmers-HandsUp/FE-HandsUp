import { useSuspenseQueries } from "@tanstack/react-query";

import { Review, ReviewLabel, Sale } from "@/utils/types/user/mypage";

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
        select: (data: Sale) => calculateCounts(data.content)
      },
      {
        queryKey: ["reviewLabelList", userId],
        queryFn: () => reviewLabelList(userId),
        select: (data: ReviewLabel) => data.content
      },
      {
        queryKey: ["reviewList", userId],
        queryFn: () => reviewList(userId),
        select: (data: Review) => data.content
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
