const patchCompleteTransaction = async ({
  biddingId
}: {
  biddingId: number | undefined;
}) => {
  if (biddingId === undefined) return;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bids/${biddingId}/complete`,
    {
      method: "PATCH",
      cache: "no-store",
      headers: {
        Authorization:
          "Bearer eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjUsImlhdCI6MTcxMDMyNzk2MCwiZXhwIjoxNzExMTkxOTYwfQ.8IjNQwUpFplOcmUQO6LbtDk2Z8owwUiIGiO3f46rieM"
      }
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};

export default patchCompleteTransaction;
