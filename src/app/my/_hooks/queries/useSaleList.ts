import { useQuery } from "@tanstack/react-query";

import { Status } from "@/utils/types/user/mypage";

import { saleList } from "../../_api/mypage";

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
    }
  });
};

export default useSaleList;
