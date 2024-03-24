import { authCheck } from "@/utils/function/authCheck";
import { RecommendAuctionsResponse } from "@/utils/types/auction/recommendAuction";

import { AddressState } from "../_component/MainContentSection";

interface RecommendAuctionRegion {
  address: AddressState;
}

export async function getSortedBookMarks({
  address
}: RecommendAuctionRegion): Promise<RecommendAuctionsResponse> {
  const { si, gu, dong } = address;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=${si}&gu=${gu}&dong=${dong}&page=0&size=10&sort=북마크수`,
    {
      next: {
        tags: ["auction", "bookmark"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  return res.json();
}

export async function getSortedRecentlyCreated({
  address
}: RecommendAuctionRegion): Promise<RecommendAuctionsResponse> {
  const { si, gu, dong } = address;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=${si}&gu=${gu}&dong=${dong}&page=0&size=10&sort=최근생성`,
    {
      next: {
        tags: ["auction", "recently"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");

  return res.json();
}

export async function getSortedDeadLine({
  address
}: RecommendAuctionRegion): Promise<RecommendAuctionsResponse> {
  const { si, gu, dong } = address;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=${si}&gu=${gu}&dong=${dong}&page=0&size=10&sort=마감일`,
    {
      next: {
        tags: ["auction", "deadline"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [deadLine] ");

  return res.json();
}

//
export async function getSortedBids({
  address
}: RecommendAuctionRegion): Promise<RecommendAuctionsResponse> {
  const { si, gu, dong } = address;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend?si=${si}&gu=${gu}&dong=${dong}&page=0&size=10&sort=입찰수`,
    {
      next: {
        tags: ["auction", "bids"]
      },
      cache: "no-store"
    }
  );
  if (!res.ok) throw new Error("Failed to fetch data [bids] ");

  return res.json();
}

export async function getSortedCategory(): Promise<RecommendAuctionsResponse | null> {
  try {
    const accessToken = authCheck();

    if (!accessToken) return null;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/recommend/category?&page=0&size=10&sort=북마크수`,
      {
        next: {
          tags: ["auction", "bids"]
        },
        headers: {
          Authorization: `Bearer ${accessToken}`
        },
        cache: "no-store"
      }
    );
    if (res === null) {
      return null;
    }

    if (!res.ok) throw new Error("Failed to fetch data [hotAuctionList] ");
    return res.json();
  } catch (error) {
    console.error("로그인이 되어있지 않아 카테고리별 추천은 제외됩니다.");
  }
  return null;
}
