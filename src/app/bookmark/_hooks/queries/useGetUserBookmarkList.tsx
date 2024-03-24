"use client";

import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

import { BookMarkedAllCheckResponse } from "@/utils/types/bookmark/allCheck";

import { getBookMarkList } from "../../_api/getBookMarklist";

const useGetUserBookmarkList = () => {
  const {
    data,
    isRefetching,
    isLoading,
    isFetched,
    hasNextPage,
    fetchNextPage
  } = useInfiniteQuery<
    BookMarkedAllCheckResponse,
    DefaultError,
    InfiniteData<BookMarkedAllCheckResponse>,
    [string],
    number
  >({
    queryKey: ["bookmarks"],
    queryFn: ({ pageParam = 0 }) => {
      return getBookMarkList(pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.hasNext) return null;
      return lastPageParam + 1;
    }
  });

  return {
    data: data?.pages.flatMap((x) => x.content) || [],
    isFetched,
    hasNextPage,
    isLoading,
    isRefetching,
    fetchNextPage
  };
};

export default useGetUserBookmarkList;
