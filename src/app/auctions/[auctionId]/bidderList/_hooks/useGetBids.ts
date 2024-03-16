"use client";

import { useQuery } from "@tanstack/react-query";

import { getBids } from "../../_api/getBids";

const useGetBids = ({ auctionId }: { auctionId: number }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["auction", auctionId, "bids"],
    queryFn: () => getBids({ auctionId }),
    staleTime: 60 * 1000
  });

  return { data, isLoading, isError };
};

export default useGetBids;
