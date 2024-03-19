import { useQuery } from "@tanstack/react-query";

import { saleList } from "../../_api/mypage";
import { calculateCounts } from "./useUserInfo";

const useSaleList = (userId: number) => {
  return useQuery({
    queryKey: ["saleList", userId],
    queryFn: () => saleList(userId),
    select: calculateCounts
  });
};

export default useSaleList;
