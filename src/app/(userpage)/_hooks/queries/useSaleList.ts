import { useQuery } from "@tanstack/react-query";

import { saleList } from "../../_api/mypage";
import { calculateCounts } from "../../_utils/calculateCounts";

const useSaleList = (userId: number) => {
  return useQuery({
    queryKey: ["saleList", userId],
    queryFn: () => saleList(userId),
    select: calculateCounts
  });
};

export default useSaleList;
