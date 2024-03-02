"use client";

import { getBids } from "@/app/api/bids";
import { useQuery } from "@tanstack/react-query";

const useBidsQuery = ({ auctionId }: { auctionId: number }) => {
  const { data, isPending } = useQuery({
    queryKey: ["bids", auctionId],
    queryFn: () => getBids({ auctionId }),
    staleTime: 60 * 1000
  });

  return {
    data,
    isPending
  };
};

export default useBidsQuery;
