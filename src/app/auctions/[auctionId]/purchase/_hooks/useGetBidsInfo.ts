import { useSuspenseQueries } from "@tanstack/react-query";

import { getAuctionDetail } from "../../_api/getAuctionDetail";
import { getTopThreeRank } from "../../_api/getBids";

const useGetBidsInfo = ({ auctionId }: { auctionId: number }) => {
  const [{ data: top3 }, { data: auction }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["auction", auctionId, "topThreeRank"],
        queryFn: () => getTopThreeRank({ auctionId })
      },
      {
        queryKey: ["auction", auctionId],
        queryFn: () => getAuctionDetail({ auctionId })
      }
    ]
  });

  return {
    top3,
    auction
  };
};
export default useGetBidsInfo;
