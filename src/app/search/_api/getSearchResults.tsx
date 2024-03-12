import { AuctionSearchResultResponse } from "@/utils/types/search/search";

export const getSearchResults = async (
  searchKeyword: string,
  pageParam: number
): Promise<AuctionSearchResultResponse> => {
  const res = await fetch(
    `http://localhost:9090/api${searchKeyword}?page=${pageParam}&size=5`
  );
  return await res.json();
};
