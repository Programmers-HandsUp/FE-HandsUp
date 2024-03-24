import { authCheck } from "@/utils/function/authCheck";
import { BookMarkedAllCheckResponse } from "@/utils/types/bookmark/allCheck";

const getBookMarkList = async (
  page: number
): Promise<BookMarkedAllCheckResponse> => {
  const isTokenValid = authCheck();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/bookmarks?page=${page}&size=8&sort=`,
    {
      headers: {
        Authorization: `Bearer ${isTokenValid}`
      }
    }
  );
  if (!response?.ok) {
    throw new Error("fetch 에러");
  }

  return await response?.json();
};

export { getBookMarkList };
