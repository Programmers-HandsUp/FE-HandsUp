import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

import { getSearchResults } from "@/app/_api/getSearchResults";
import { PostType } from "@/utils/mocks/api/types";

export interface SearchResultListAPI {
  content: PostType[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  nextPage: number;
}

const useGetSearchResult = (keyword: string) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetched
  } = useInfiniteQuery<
    SearchResultListAPI,
    DefaultError,
    InfiniteData<SearchResultListAPI>,
    [string, string],
    number
  >({
    queryKey: ["searchResult", keyword],
    queryFn: ({ pageParam = 0 }) => getSearchResults(keyword, pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.nextPage) return undefined;
      return lastPage.nextPage;
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
