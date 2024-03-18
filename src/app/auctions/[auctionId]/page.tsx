import {
  DefaultError,
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient
} from "@tanstack/react-query";

import { CommentListData } from "@/utils/types/comment/commentData";

import { getAuctionDetail } from "./_api/getAuctionDetail";
import { getBidsReverse, getTopThreeRankReverse } from "./_api/getBids";
import { getComments } from "./_api/getComments";
import DetailInfoSection from "./_component/DetailInfoSection";

interface AuctionProps {
  params: { auctionId: string };
}

const Auction = async ({ params }: AuctionProps) => {
  const { auctionId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId],
    queryFn: () => getAuctionDetail({ auctionId: Number(auctionId) })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "topThreeRank"],
    queryFn: () => getTopThreeRankReverse({ auctionId: Number(auctionId) })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "bids"],
    queryFn: () => getBidsReverse({ auctionId: Number(auctionId) })
  });
  await queryClient.prefetchInfiniteQuery<
    CommentListData,
    DefaultError,
    InfiniteData<CommentListData>,
    [string, number, string],
    number
  >({
    queryKey: ["auction", Number(auctionId), "comments"],
    queryFn: ({ pageParam = 0 }) =>
      getComments({ pageParam, auctionId: Number(auctionId) }),
    initialPageParam: 0
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <HydrationBoundary state={dehydratedState}>
        <DetailInfoSection auctionId={Number(auctionId)} />
      </HydrationBoundary>
    </section>
  );
};

export default Auction;
