import { useQuery } from "@tanstack/react-query";
import { purchaseList } from "../../../api/mypage";
import { Status } from "../../types";

const usePurchaseList = () => {
  return useQuery({
    queryKey: ["purchaseList"],
    queryFn: () => purchaseList(),
    select: (data) => {
      const initCounts: Record<Status, number> = {
        bidding: 0,
        pending: 0,
        finished: 0
      };

      return data.reduce((acc, item) => {
        acc[item.auctionStatus]++;
        return acc;
      }, initCounts);
    },
    staleTime: 60 * 1000
  });
};

export default usePurchaseList;
