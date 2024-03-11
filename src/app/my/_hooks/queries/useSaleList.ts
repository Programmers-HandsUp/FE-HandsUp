import { useQuery } from "@tanstack/react-query";

import { saleList } from "../../../api/mypage";
import { Status } from "../../types";

const useSaleList = (userId: number) => {
  return useQuery({
    queryKey: ["saleList", userId],
    queryFn: () => saleList(userId),
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

export default useSaleList;
