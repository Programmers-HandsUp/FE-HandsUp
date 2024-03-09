import { useQuery } from "@tanstack/react-query";
import { reviewLabelList } from "../../api/mypage";

const useReviewLabelList = (userId: number) => {
  return useQuery({
    queryKey: ["reviewLabelList", userId],
    queryFn: () => reviewLabelList(userId),
    staleTime: 5 * 60 * 1000
  });
};

export default useReviewLabelList;
