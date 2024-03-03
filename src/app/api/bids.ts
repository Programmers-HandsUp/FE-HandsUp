import { BidsType, TopThreeRankType } from "@/utils/mocks/api/types";

export async function getTopThreeRank({
  auctionId
}: {
  auctionId: number;
}): Promise<TopThreeRankType> {
  const res = await fetch(
    `http://localhost:9090/api/auctions/${auctionId}/bids/top3`,
    {
      next: {
        tags: ["top3"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}

export async function getBids({
  auctionId
}: {
  auctionId: number;
}): Promise<BidsType> {
  const res = await fetch(
    `http://localhost:9090/api/auctions/${auctionId}/bids`,
    {
      next: {
        tags: ["bids"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}
