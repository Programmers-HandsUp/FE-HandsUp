import { useSuspenseQuery } from "@tanstack/react-query";

import { reviewList } from "../../_api/mypage";

const useReviewList = (userId: number) => {
  return useSuspenseQuery({
    queryKey: ["reviewList", userId],
    queryFn: () => reviewList(userId),
    select: (data) => data.content
  });
};

export default useReviewList;
