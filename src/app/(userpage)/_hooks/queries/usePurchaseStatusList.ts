import { useSuspenseQuery } from "@tanstack/react-query";

import { StatusEn } from "@/utils/types/user/mypage";

import { purchaseList } from "../../_api/mypage";

const usePurchaseStatusList = (status: StatusEn) => {
  return useSuspenseQuery({
    queryKey: ["purchaseList", status],
    queryFn: () => purchaseList(status),
    select: (data) => data.content
  });
};

export default usePurchaseStatusList;
