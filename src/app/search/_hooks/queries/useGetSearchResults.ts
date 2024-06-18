import {
  DefaultError,
  InfiniteData,
  useSuspenseInfiniteQuery
} from "@tanstack/react-query";

import { AuctionSearchResultResponse } from "@/utils/types/search/search";

import { getSearchResults } from "../../_api/getSearchResults";

const useGetSearchResult = (
  keyword: string,
  sortOption: string,
  searchFilterRecord?: Record<string, string | number | null>
) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetched
  } = useSuspenseInfiniteQuery<
    AuctionSearchResultResponse,
    DefaultError,
    InfiniteData<AuctionSearchResultResponse>,
    [string, string],
    number
  >({
    queryKey: [
      "searchResult",
      `${keyword} ${JSON.stringify(searchFilterRecord)} ${sortOption}`
    ],
    queryFn: ({ pageParam = 0 }) => {
      return getSearchResults(
        pageParam,
        keyword,
        sortOption,
        searchFilterRecord
      );
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, pageParam) => {
      if (!lastPage.hasNext) return null;
      return pageParam + 1;
    }
  });

  return {
    data: data?.pages.map((item) => item.content).flat() || [],
    isFetched,
    hasNextPage,
    isLoading,
    isRefetching,
    fetchNextPage
  };
};

export default useGetSearchResult;
