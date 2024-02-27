export async function getHotAuctionRecommends() {
  const res = await fetch("http://localhost:9090/api/hot", {
    next: {
      tags: ["posts", "recommends"]
    }
  });
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  console.log(jsonData);

  return jsonData;
}
