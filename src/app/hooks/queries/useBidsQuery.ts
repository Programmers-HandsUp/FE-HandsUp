"use client";

import { getBids, getTopThreeRank } from "@/app/api/getBids";
import { useSuspenseQueries } from "@tanstack/react-query";

const useBidsQuery = ({ auctionId }: { auctionId: number }) => {
  const [{ data: top3 }, { data: bids }] = useSuspenseQueries({
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
      }
    ]
  });

  return {
    top3,
    bids
  };
};

export default useBidsQuery;
