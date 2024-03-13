import { Top3BidResponse } from "@/utils/types/bid/top3Bid";
import { BidResponse } from "@/utils/types/bid/bids";
export async function getTopThreeRank({
  auctionId
}: {
  auctionId: number;
}): Promise<Top3BidResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_END_POINT}/api/auctions/${auctionId}/bids/top3`,
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
    `${process.env.NEXT_PUBLIC_API_END_POINT}/api/auctions/${auctionId}/bids`,
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
