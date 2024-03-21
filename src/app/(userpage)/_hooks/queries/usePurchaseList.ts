import { useSuspenseQuery } from "@tanstack/react-query";

import { Purchase } from "@/utils/types/user/mypage";

import { purchaseList } from "../../_api/mypage";
import { calculateCounts } from "../../_utils/calculateCounts";

const usePurchaseList = () => {
  return useSuspenseQuery({
    queryKey: ["purchaseList"],
    queryFn: () => purchaseList(),
    select: (data: Purchase) => calculateCounts(data.content)
  });
};

export default usePurchaseList;
