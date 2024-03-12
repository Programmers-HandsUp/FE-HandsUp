import {
  DefaultError,
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient
} from "@tanstack/react-query";

import { getAuctionDetail } from "@/app/_api/getAuctionDetail";
import { getBids, getTopThreeRank } from "@/app/_api/getBids";
import { getComments } from "@/app/_api/getComments";

import DetailInfoSection from "./_component/DetailInfoSection";
import { ICommentListAPI } from "./_hooks/queries/useGetCommentList";

interface AuctionProps {
  params: { auctionId: number };
}

const Auction = async ({ params }: AuctionProps) => {
  const { auctionId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId],
    queryFn: () => getAuctionDetail({ auctionId })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "topThreeRank"],
    queryFn: () => getTopThreeRank({ auctionId }),
    staleTime: 60 * 1000
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "bids"],
    queryFn: () => getBids({ auctionId }),
    staleTime: 60 * 1000
  });
  await queryClient.prefetchInfiniteQuery<
    ICommentListAPI,
    DefaultError,
    InfiniteData<ICommentListAPI>,
    [string, number, string],
    number
  >({
    queryKey: ["auction", auctionId, "comments"],
    queryFn: ({ pageParam = 0 }) => getComments({ pageParam, auctionId }),
    initialPageParam: 0,
    getNextPageParam: (lastPage: ICommentListAPI) => {
      if (!lastPage.nextPage) return undefined;
      return lastPage.nextPage;
    }
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <HydrationBoundary state={dehydratedState}>
        <DetailInfoSection auctionId={auctionId} />
      </HydrationBoundary>
    </section>
  );
};

export default Auction;
