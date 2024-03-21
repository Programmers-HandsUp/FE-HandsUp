import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";

const postBid = async ({
  auctionId,
  biddingPrice
}: {
  auctionId: number;
  biddingPrice: number;
}): Promise<void> => {
  const response = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/${auctionId}/bids`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ biddingPrice })
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export default postBid;
