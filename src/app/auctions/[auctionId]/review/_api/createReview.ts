import { authCheck } from "@/utils/function/authCheck";
import {
  AuctionReviewEnrollRequest,
  ReviewComplete
} from "@/utils/types/auction/auctionReivewEnroll";

interface createReviewParams {
  auctionId: number;
  data: AuctionReviewEnrollRequest;
}

export const createReview = async ({
  auctionId,
  data
}: createReviewParams): Promise<ReviewComplete | null> => {
  const isTokenValid = authCheck();

  if (!isTokenValid) return null;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${isTokenValid}`
      },
      body: JSON.stringify(data)
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
