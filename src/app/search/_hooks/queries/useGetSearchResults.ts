import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

import { AuctionSearchResultResponse } from "@/utils/types/search/search";

import { getSearchResults } from "../../_api/getSearchResults";

const useGetSearchResult = (keyword: string) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetched
  } = useInfiniteQuery<
    AuctionSearchResultResponse,
    DefaultError,
    InfiniteData<AuctionSearchResultResponse>,
    [string, string],
    number
  >({
    queryKey: ["searchResult", keyword],
    queryFn: ({ pageParam = 0 }) => getSearchResults(keyword, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, pageParam) => {
      if (!lastPage.hasNext) return undefined;
      return pageParam + 1;
    }
  });

  return {
    data: data?.pages.map((x) => x.content).flat() || [],
    isFetched,
    hasNextPage,
    isLoading,
    isRefetching,
    fetchNextPage
  };
};

export default useGetSearchResult;
