import { fetchWithTokenRenewal } from "@/utils/function/fetchWithTokenRenewal";
import { BookMarkedAddResponse } from "@/utils/types/bookmark/add";
import { BookMarkedAllCheckResponse } from "@/utils/types/bookmark/allCheck";
import { BookMarkedDeleteResponse } from "@/utils/types/bookmark/delete";

export type getCheckBookmarkParams = { auctionId: number };

export type getCheckBookmarkResponse = { isBookmarked: boolean };

export const getCheckBookmark = async ({
  auctionId
}: getCheckBookmarkParams): Promise<getCheckBookmarkResponse> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks/${auctionId}`
  );
  if (!res.ok) {
    throw new Error("서버 에러 발생");
  }

  return await res.json();
};

export const addBookmark = async (
  auctionId: number
): Promise<BookMarkedAddResponse> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks/${auctionId}`,
    {
      method: "POST"
    }
  );
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  const result = await res.json();

  return result;
};

export const deleteBookmark = async (
  auctionId: number
): Promise<BookMarkedDeleteResponse> => {
  const res = await fetchWithTokenRenewal(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks/${auctionId}`,
    {
      method: "DELETE"
    }
  );
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  const result = await res.json();

  return result;
};

export const getCheckBookmarkList =
  async (): Promise<BookMarkedAllCheckResponse> => {
    const res = await fetchWithTokenRenewal(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auctions/bookmarks`
    );
    if (!res.ok) {
      throw new Error("서버 에러 발생");
    }

    const result = await res.json();

    return result;
  };
