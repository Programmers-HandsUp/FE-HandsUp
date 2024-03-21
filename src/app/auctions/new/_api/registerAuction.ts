import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { Auction, AuctionData } from "@/utils/types/auction/registerAuction";

export const registerAction = async (
  auctionData: AuctionData
): Promise<Auction> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(auctionData)
    }
  );

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return await res.json();
};
