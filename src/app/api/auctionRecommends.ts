export async function getHotAuctionRecommends() {
  const res = await fetch("http://localhost:9090/api/auctionList", {
    next: {
      tags: ["auction"]
    },
    cache: "no-store"
  });
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}
