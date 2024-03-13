import { useSuspenseQueries } from "@tanstack/react-query";

import { getAuctionDetail } from "../../_api/getAuctionDetail";
import { getBids, getTopThreeRank } from "../../_api/getBids";
import { getCheckBookmark } from "../../_api/getCheckBookmark";

const useGetAuctionDetail = ({ auctionId }: { auctionId: number }) => {
  const [
    { data: top3 },
    { data: bids },
    { data: auction },
    { data: bookmark }
  ] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["auction", auctionId, "topThreeRank"],
        queryFn: () => getTopThreeRank({ auctionId }),
        staleTime: 60 * 1000
      },
      {
        queryKey: ["auction", auctionId, "bids"],
        queryFn: () => getBids({ auctionId }),
        staleTime: 60 * 1000
      },
      {
        queryKey: ["auction", auctionId],
        queryFn: () => getAuctionDetail({ auctionId })
      },
      {
        queryKey: ["auction", auctionId, "bookmark"],
        queryFn: () => getCheckBookmark({ auctionId })
      }
    ]
  });

  return {
    top3,
    bids,
    auction,
    bookmark
  };
};

export default useGetAuctionDetail;
