import { PopularKeywordResponse } from "@/utils/types/search/popularKeyword";

const getPopularKeyword = async (): Promise<PopularKeywordResponse> => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/search/popular`
  );

  if (!request.ok) {
    throw new Error("서버 통신 에러");
  }
  return request.json();
};

export default getPopularKeyword;
