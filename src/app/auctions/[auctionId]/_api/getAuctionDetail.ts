import { AuctionDetailResponse } from "@/utils/types/auction/auctionDetail";

export const getAuctionDetail = async ({
  auctionId
}: {
  auctionId: number;
}): Promise<AuctionDetailResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}`,
    {
      next: {
        tags: ["detail", String(auctionId)]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};
