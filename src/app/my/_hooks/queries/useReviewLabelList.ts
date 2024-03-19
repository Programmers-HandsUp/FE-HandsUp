import { useQuery } from "@tanstack/react-query";

import { reviewLabelList } from "../../_api/mypage";

const useReviewLabelList = (userId: number) => {
  return useQuery({
    queryKey: ["reviewLabelList", userId],
    queryFn: () => reviewLabelList(userId)
  });
};

export default useReviewLabelList;
