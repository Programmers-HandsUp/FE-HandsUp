import { BidResponse } from "@/utils/types/bid/bids";
import { Top3BidResponse } from "@/utils/types/bid/top3Bid";
export async function getTopThreeRank({
  auctionId
}: {
  auctionId: number;
}): Promise<Top3BidResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/bids/top3`,
    {
      next: {
        tags: ["top3"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [Top3bids] ");

  const jsonData = await res.json();
  return jsonData;
}

export async function getBids({
  auctionId
}: {
  auctionId: number;
}): Promise<BidResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/bids`,
    {
      next: {
        tags: ["bids"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [bids] ");

  const jsonData = await res.json();
  return jsonData;
}
