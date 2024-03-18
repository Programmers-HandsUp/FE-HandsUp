import { AuctionReviewEnrollRequest } from "@/utils/types/auction/auctionReivewEnroll";

interface createReviewParams {
  auctionId: number;
  data: AuctionReviewEnrollRequest;
}

export const createReview = async ({ auctionId, data }: createReviewParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/reviews`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjExLCJpYXQiOjE3MTA3MzIxNjIsImV4cCI6MTcxMTU5NjE2Mn0.428qoPYhmrHfFjuqznh4vDn_4mHtklXBETudKXXoG4k"
      },
      body: JSON.stringify({ data })
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
