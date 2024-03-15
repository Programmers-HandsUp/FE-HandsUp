import { useMutation } from "@tanstack/react-query";

import { Top3BidData } from "@/utils/types/bid/top3Bid";

const fetchBidders = async (): Promise<Top3BidData[]> => {
  const response = await fetch(
    "http://13.209.236.54:8080/api/auctions/3/bids/top3"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useBidders = () => {
  const mutate = useMutation({
    mutationFn: fetchBidders
  });
  return mutate;
};
