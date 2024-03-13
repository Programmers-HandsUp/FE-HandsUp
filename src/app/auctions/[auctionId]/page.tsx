import {
  DefaultError,
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient
} from "@tanstack/react-query";

import { CommentListData } from "@/utils/types/comment/commentData";

import { getAuctionDetail } from "./_api/getAuctionDetail";
import { getBids, getTopThreeRank } from "./_api/getBids";
import { getComments } from "./_api/getComments";
import DetailInfoSection from "./_component/DetailInfoSection";

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
    CommentListData,
    DefaultError,
    InfiniteData<CommentListData>,
    [string, number, string],
    number
  >({
    queryKey: ["auction", auctionId, "comments"],
    queryFn: ({ pageParam = 0 }) => getComments({ pageParam, auctionId }),
    initialPageParam: 0
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
