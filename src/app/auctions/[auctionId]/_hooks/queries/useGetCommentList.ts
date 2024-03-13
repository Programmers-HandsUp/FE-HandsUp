import {
  DefaultError,
  InfiniteData,
  useSuspenseInfiniteQuery
} from "@tanstack/react-query";

import { getComments } from "../../_api/getComments";

import { CommentListData } from "@/utils/types/comment/commentData";

const useGetCommentList = ({ auctionId }: { auctionId: number }) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetched
  } = useSuspenseInfiniteQuery<
    CommentListData,
    DefaultError,
    InfiniteData<CommentListData>,
    [string, number, string],
    number
  >({
    queryKey: ["product", auctionId, "comments"],
    queryFn: ({ pageParam = 0 }) => getComments({ pageParam, auctionId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage.hasNext) return undefined;
      return lastPageParam + 1;
    }
    // enabled: !!(session?.user?.email && id),
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
