import { useSuspenseQueries } from "@tanstack/react-query";

import { getAuctionDetail } from "../../_api/getAuctionDetail";
import { getBidsReverse, getTopThreeRankReverse } from "../../_api/getBids";

const useGetAuctionDetail = ({ auctionId }: { auctionId: number }) => {
  const [{ data: top3 }, { data: bids }, { data: auction }] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: ["auction", auctionId, "topThreeRank"],
          queryFn: () => getTopThreeRankReverse({ auctionId }),
          staleTime: 60 * 1000
        },
        {
          queryKey: ["auction", auctionId, "bids"],
          queryFn: () => getBidsReverse({ auctionId }),
          staleTime: 60 * 1000
        },
        {
          queryKey: ["auction", auctionId],
          queryFn: () => getAuctionDetail({ auctionId })
        }
      ]
    });

  return {
    top3,
    bids,
    auction
  };
};

export default useGetAuctionDetail;
