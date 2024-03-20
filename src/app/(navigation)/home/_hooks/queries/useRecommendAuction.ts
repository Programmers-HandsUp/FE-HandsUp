"use client";
import { useSuspenseQueries } from "@tanstack/react-query";

import {
  getSortedBids,
  getSortedBookMarks,
  getSortedCategory,
  getSortedDeadLine,
  getSortedRecentlyCreated
} from "../../_api/getAuctionRecommends";
import { AddressState } from "../../_component/MainContentSection";

const useRecommendedAuction = ({ address }: { address: AddressState }) => {
  const result = useSuspenseQueries({
    queries: [
      {
        queryKey: ["auction", "recently", address],
        queryFn: () => getSortedRecentlyCreated({ address })
      },
      {
        queryKey: ["auction", "deadline", address],
        queryFn: () => getSortedDeadLine({ address })
      },
      {
        queryKey: ["auction", "bids", address],
        queryFn: () => getSortedBids({ address })
      },
      {
        queryKey: ["auction", "bookmark", address],
        queryFn: () => getSortedBookMarks({ address })
      },
      {
        queryKey: ["auction", "category"],
        queryFn: getSortedCategory
      }
    ]
  });

  return result;
};

export default useRecommendedAuction;
