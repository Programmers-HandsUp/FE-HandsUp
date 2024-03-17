import { useMutation } from "@tanstack/react-query";

import { BidsData } from "@/utils/types/bid/bids";
import { Top3BidData } from "@/utils/types/bid/top3Bid";

const BidderTop3 = async (): Promise<Top3BidData[]> => {
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
    mutationFn: BidderTop3
  });
  return mutate;
};

const BidData = async (): Promise<BidsData> => {
  const response = await fetch("http://13.209.236.54:8080/api/auctions/3/bids");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useBidData = () => {
  const mutate = useMutation({
    mutationFn: BidData
  });
  return mutate;
};
