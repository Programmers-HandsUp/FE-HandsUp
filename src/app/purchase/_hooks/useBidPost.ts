import { useMutation } from "@tanstack/react-query";

import { BidsData } from "@/utils/types/bid/bids";

const postBid = async (bidData: BidsData): Promise<void> => {
  const response = await fetch("http://13.209.236.54:8080/api/auctions/3/bids", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(bidData)
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export const useBidPost = () => {
  const mutate = useMutation({
    mutationFn: postBid
  });
  return mutate;
};
