import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

export async function getSortedBookMarks(): Promise<RecommendAuctionsResponse> {
  const res = await fetch(
    "http://13.209.236.54:8080/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=북마크수",
    {
      next: {
        tags: ["auction", "bookmark"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}

export async function getSortedRecentlyCreated(): Promise<RecommendAuctionsResponse> {
  const res = await fetch(
    "http://13.209.236.54:8080/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=최근생성",
    {
      next: {
        tags: ["auction", "recently"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}

export async function getSortedDeadLine(): Promise<RecommendAuctionsResponse> {
  const res = await fetch(
    "http://13.209.236.54:8080/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=마감일",
    {
      next: {
        tags: ["auction", "deadline"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}

export async function getSortedBids(): Promise<RecommendAuctionsResponse> {
  const res = await fetch(
    "http://13.209.236.54:8080/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=입찰수",
    {
      next: {
        tags: ["auction", "bids"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}
