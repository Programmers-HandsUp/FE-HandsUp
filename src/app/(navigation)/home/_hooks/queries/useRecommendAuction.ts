import { useSuspenseQueries } from "@tanstack/react-query";

import {
  getSortedBids,
  getSortedBookMarks,
  getSortedDeadLine,
  getSortedRecentlyCreated
} from "../../_api/getAuctionRecommends";

const useRecommendedAuction = () => {
  const result = useSuspenseQueries({
    queries: [
      { queryKey: ["auction", "recently"], queryFn: getSortedRecentlyCreated },
      { queryKey: ["post", "deadline"], queryFn: getSortedDeadLine },
      { queryKey: ["auction", "bids"], queryFn: getSortedBids },
      { queryKey: ["post", "bookmark"], queryFn: getSortedBookMarks }
    ]
  });

  return result;
};

export default useRecommendedAuction;
