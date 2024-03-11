import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

import { getSearchResults } from "@/app/_api/getSearchResults";
import { AuctionSearchResultResponse } from "@/utils/types/search/search";

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
    getNextPageParam: (lastPage) => lastPage.hasNext ?? undefined
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
