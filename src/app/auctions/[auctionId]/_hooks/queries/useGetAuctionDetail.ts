import { useSuspenseQueries } from "@tanstack/react-query";

import { getAuctionDetail } from "../../_api/getAuctionDetail";
import { getBids, getTopThreeRank } from "../../_api/getBids";

const useGetAuctionDetail = ({ auctionId }: { auctionId: number }) => {
  const [{ data: top3 }, { data: bids }, { data: auction }] =
    useSuspenseQueries({
      queries: [
        {
          queryKey: ["product", auctionId, "topThreeRank"],
          queryFn: () => getTopThreeRank({ auctionId }),
          staleTime: 60 * 1000
        },
        {
          queryKey: ["product", auctionId, "bids"],
          queryFn: () => getBids({ auctionId }),
          staleTime: 60 * 1000
        },
        {
          queryKey: ["product", auctionId],
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
