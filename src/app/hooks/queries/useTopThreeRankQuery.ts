"use client";

import { getTopThreeRank } from "@/app/api/bids";
import { useQuery } from "@tanstack/react-query";

const useTopThreeRankQuery = ({ auctionId }: { auctionId: number }) => {
  const { data, isPending } = useQuery({
    queryKey: ["topThreeRank"],
    queryFn: () => getTopThreeRank({ auctionId }),
    staleTime: 60 * 1000
  });

  return {
    data,
    isPending
  };
};

export default useTopThreeRankQuery;
