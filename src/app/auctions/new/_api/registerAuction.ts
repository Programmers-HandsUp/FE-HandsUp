import { authCheck } from "@/utils/function/authCheck";
import { Auction, AuctionData } from "@/utils/types/auction/registerAuction";

export const registerAction = async (
  auctionData: AuctionData
): Promise<Auction> => {
  const isValidToken = authCheck();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${isValidToken}`
    },
    body: JSON.stringify(auctionData)
  });

  if (!res.ok) {
    const errData = await res.json();
    throw new Error(errData.message);
  }

  return await res.json();
};
