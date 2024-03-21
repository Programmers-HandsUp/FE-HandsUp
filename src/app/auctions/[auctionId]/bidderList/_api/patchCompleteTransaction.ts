import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";

const patchCompleteTransaction = async ({
  biddingId
}: {
  biddingId: number | undefined;
}) => {
  if (biddingId === undefined) throw new Error("400");

  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bids/${biddingId}/complete`,
    {
      method: "PATCH"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};

export default patchCompleteTransaction;
