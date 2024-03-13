import { authCheck } from "@/utils/function/authCheck";
import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

//TODO : 지역으로 next tag 값 수정 및 지역값 추후 받아오는 매개변수 생성 후 적용
export async function getSortedBookMarks(): Promise<RecommendAuctionsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=북마크수`,
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
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=최근생성`,
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
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=마감일`,
    {
      next: {
        tags: ["auction", "deadline"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [deadLine] ");

  const jsonData = await res.json();
  return jsonData;
}

//
export async function getSortedBids(): Promise<RecommendAuctionsResponse> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=서울시&gu=강남구&dong=논현동&page=0&size=10&sort=입찰수`,
    {
      next: {
        tags: ["auction", "bids"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [bids] ");
  const jsonData = await res.json();
  return jsonData;
}

export async function getSortedCategory(): Promise<RecommendAuctionsResponse | null> {
  const isTokenValid = await authCheck();

  if (!isTokenValid) return null;
  // FIX: 현재는 토큰을 직접 헤더에 넣어줬음 추후 자동으로 쿠키에 들어가도록 수정돼서 요청도 수정해야함
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend/category?&page=0&size=10&sort=북마크수`,
    {
      next: {
        tags: ["auction", "bids"]
      },
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  const jsonData = await res.json();
  return jsonData;
}
