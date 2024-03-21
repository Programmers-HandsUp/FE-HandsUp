import { useQuery } from "@tanstack/react-query";

import { getBids } from "../../_api/getBids";

const useGetBidsList = ({ auctionId }: { auctionId: number }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["auction", auctionId, "bids"],
    queryFn: () => getBids({ auctionId })
  });

  return { data, isLoading };
};

export default useGetBidsList;
