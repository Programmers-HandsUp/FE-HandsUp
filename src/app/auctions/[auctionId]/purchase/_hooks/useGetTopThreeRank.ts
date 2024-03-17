import { useQuery } from "@tanstack/react-query";

import { getTopThreeRank } from "@/app/auctions/[auctionId]/_api/getBids";

export const useGetTopThreeRank = ({ auctionId }: { auctionId: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["auction", auctionId, "topThreeRank"],
    queryFn: () => getTopThreeRank({ auctionId })
  });
  return { data, isLoading };
};
