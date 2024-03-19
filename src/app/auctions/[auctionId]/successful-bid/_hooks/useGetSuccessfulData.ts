import { useSuspenseQueries } from "@tanstack/react-query";

import { getAuctionDetail } from "../../_api/getAuctionDetail";
import { getBids } from "../../_api/getBids";

const useGetSuccessfulData = ({ auctionId }: { auctionId: number }) => {
  const [{ data: auction }, { data: bids }] = useSuspenseQueries({
    queries: [
      {
        queryKey: ["auction", auctionId],
        queryFn: () => getAuctionDetail({ auctionId })
      },
      {
        queryKey: ["auction", auctionId, "bids"],
        queryFn: () => getBids({ auctionId })
      }
    ]
  });

  return {
    auction,
    bids
  };
};

export default useGetSuccessfulData;
