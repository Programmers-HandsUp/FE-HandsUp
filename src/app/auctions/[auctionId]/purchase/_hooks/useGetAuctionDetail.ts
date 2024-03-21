import { useQuery } from "@tanstack/react-query";

import { getAuctionDetail } from "@/app/auctions/[auctionId]/_api/getAuctionDetail";

export const useGetAuctionDetail = ({ auctionId }: { auctionId: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["auction", auctionId],
    queryFn: () => getAuctionDetail({ auctionId })
  });
  return { data, isLoading };
};
