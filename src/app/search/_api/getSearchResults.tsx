import { AuctionSearchResultResponse } from "@/utils/types/search/search";

const SORT_OPTION: { [key: string]: string } = {
  최신순: "최신순",
  "북마크 많은순": "북마크수",
  "마감 임박순": "마감일",
  "입찰수 많은순": "입찰수"
};

export const getSearchResults = async (
  pageParam: number,
  keyword: string,
  sortOption: string,
  searchRecord?: Record<string, string | number | null>
): Promise<AuctionSearchResultResponse> => {
  const newRecord = searchRecord ? { ...searchRecord } : {};
  newRecord["keyword"] = keyword.slice(8);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/auctions/search?page=${pageParam.toString()}&size=5&sort=${SORT_OPTION[sortOption]}`,
    {
      method: "POST",
      body: JSON.stringify(newRecord),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  const result = await response.json();
  return result;
};
