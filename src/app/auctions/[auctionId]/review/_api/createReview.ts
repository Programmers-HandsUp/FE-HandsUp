import { authCheck } from "@/utils/function/authCheck";
import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { AuctionReviewEnrollRequest } from "@/utils/types/auction/auctionReivewEnroll";

interface createReviewParams {
  auctionId: number;
  data: AuctionReviewEnrollRequest;
}

export const createReview = async ({ auctionId, data }: createReviewParams) => {
  const isTokenValid = authCheck();

  if (!isTokenValid) return null;

  const response = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
