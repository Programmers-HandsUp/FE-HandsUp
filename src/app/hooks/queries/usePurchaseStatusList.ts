import { useQuery } from "@tanstack/react-query";
import { purchaseList } from "../../api/mypage";
import { Status } from "../../my/types";

const usePurchaseStatusList = (status: Status) => {
  return useQuery({
    queryKey: ["purchaseList", status],
    queryFn: () => purchaseList(status),
    staleTime: 60 * 1000
  });
};

export default usePurchaseStatusList;
