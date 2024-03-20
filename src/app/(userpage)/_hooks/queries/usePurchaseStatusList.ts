import { useQuery } from "@tanstack/react-query";

import { Status } from "@/utils/types/user/mypage";

import { purchaseList } from "../../_api/mypage";

const usePurchaseStatusList = (status: Status) => {
  return useQuery({
    queryKey: ["purchaseList", status],
    queryFn: () => purchaseList(status)
  });
};

export default usePurchaseStatusList;
