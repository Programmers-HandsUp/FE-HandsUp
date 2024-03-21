import {
  DefaultError,
  InfiniteData,
  useSuspenseInfiniteQuery
} from "@tanstack/react-query";

import { CommentListResponse } from "@/utils/types/comment/commentData";

import { getCommentList } from "../../_api/getCommentList";

const useGetCommentList = ({ auctionId }: { auctionId: number }) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetched
  } = useSuspenseInfiniteQuery<
    CommentListResponse,
    DefaultError,
    InfiniteData<CommentListResponse>,
    [string, number, string],
    number
  >({
    queryKey: ["auction", auctionId, "comments"],
    queryFn: ({ pageParam = 0 }) => getCommentList({ pageParam, auctionId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.hasNext) return undefined;
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

export default useGetCommentList;
