import { useSuspenseQueries } from "@tanstack/react-query";

import {
  getSortedBids,
  getSortedBookMarks,
  getSortedCategory,
  getSortedDeadLine,
  getSortedRecentlyCreated
} from "../../_api/getAuctionRecommends";

const useRecommendedAuction = () => {
  const result = useSuspenseQueries({
    queries: [
      { queryKey: ["auction", "recently"], queryFn: getSortedRecentlyCreated },
      { queryKey: ["auction", "deadline"], queryFn: getSortedDeadLine },
      { queryKey: ["auction", "bids"], queryFn: getSortedBids },
      { queryKey: ["auction", "bookmark"], queryFn: getSortedBookMarks },
      { queryKey: ["auction", "category"], queryFn: getSortedCategory }
    ]
  });

  return result;
};

export default useRecommendedAuction;
