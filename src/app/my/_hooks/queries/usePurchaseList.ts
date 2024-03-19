import { useQuery } from "@tanstack/react-query";

import { purchaseList } from "../../_api/mypage";
import { calculateCounts } from "./useUserInfo";

const usePurchaseList = () => {
  return useQuery({
    queryKey: ["purchaseList"],
    queryFn: () => purchaseList(),
    select: calculateCounts
  });
};

export default usePurchaseList;
