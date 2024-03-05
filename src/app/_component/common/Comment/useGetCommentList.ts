import { getComments } from "@/app/api/getComments";
import { CommentType } from "@/utils/mocks/api/types";

import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

export interface ICommentListAPI {
  content: CommentType[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  nextPage: number;
}

const useGetCommentList = ({ auctionId }: { auctionId: number }) => {
  const {
    data,
    isRefetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetched
  } = useInfiniteQuery<
    ICommentListAPI,
    DefaultError,
    InfiniteData<ICommentListAPI>,
    [string, number],
    number
  >({
    queryKey: ["comment", auctionId],
    queryFn: ({ pageParam = 0 }) => getComments({ pageParam, auctionId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.nextPage) return undefined;
      return lastPage.nextPage;
    }
    // enabled: !!(session?.user?.email && id),
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

export default useGetCommentList;
