const patchCancelBidder = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/}`, {
    method: "PATCH",
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Failed to fetch data [AuctionDetail] ");

  const jsonData = await res.json();
  return jsonData;
};

export default patchCancelBidder;
