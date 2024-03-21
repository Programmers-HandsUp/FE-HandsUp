import { useSuspenseQuery } from "@tanstack/react-query";

import { Sale } from "@/utils/types/user/mypage";

import { saleList } from "../../_api/mypage";
import { calculateCounts } from "../../_utils/calculateCounts";

const useSaleList = (userId: number) => {
  return useSuspenseQuery({
    queryKey: ["saleList", userId],
    queryFn: () => saleList(userId),
    select: (data: Sale) => calculateCounts(data.content)
  });
};

export default useSaleList;
