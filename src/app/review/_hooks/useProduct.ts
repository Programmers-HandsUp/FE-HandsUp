import { useMutation } from "@tanstack/react-query";

import { AuctionReviewEnrollRequest } from "@/utils/types/auction/auctionReivewEnroll";
import { Product } from "@/utils/types/product";

const fetchProduct = async (): Promise<Product> => {
  const response = await fetch("http://13.209.236.54:8080/api/auctions/3");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const postReview = async (data: AuctionReviewEnrollRequest): Promise<void> => {
  const response = await fetch("http://13.209.236.54:8080/api/auctions/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export const useProduct = () => {
  const mutate = useMutation({
    mutationFn: fetchProduct
  });
  return mutate;
};

export const usePostReview = () => {
  const mutate = useMutation({
    mutationFn: postReview
  });
  return mutate;
};
