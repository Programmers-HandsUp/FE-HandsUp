import {
  DefaultError,
  InfiniteData,
  useInfiniteQuery
} from "@tanstack/react-query";

import { getComments } from "@/app/api/getComments";
import { CommentType } from "@/utils/mocks/api/types";

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
    [string, number, string],
    number
  >({
    queryKey: ["product", auctionId, "comments"],
    queryFn: ({ pageParam = 0 }) => getComments({ pageParam, auctionId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => {
      if (!lastPage.nextPage) return undefined;
      return lastPage.nextPage;
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
