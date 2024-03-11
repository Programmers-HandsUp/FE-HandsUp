import { AuctionDetailType } from "../types/product";

export const getAuctionDetail = async ({
  auctionId
}: {
  auctionId: number;
}): Promise<AuctionDetailType> => {
  const res = await fetch(`http://localhost:9090/api/auctions/${auctionId}`, {
    next: {
      tags: ["detail", String(auctionId)]
    },
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};
