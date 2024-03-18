import { AuctionDetailResponse } from "@/utils/types/auction/auctionDetail";

export const getAuctionData = async ({
  auctionId
}: {
  auctionId: number;
}): Promise<AuctionDetailResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await response.json();
};
