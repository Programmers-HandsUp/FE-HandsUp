import { useQuery } from "@tanstack/react-query";

import { purchaseList } from "../../_api/mypage";
import { calculateCounts } from "../../_utils/calculateCounts";

const usePurchaseList = () => {
  return useQuery({
    queryKey: ["purchaseList"],
    queryFn: () => purchaseList(),
    select: calculateCounts
  });
};

export default usePurchaseList;
