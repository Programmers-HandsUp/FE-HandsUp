import {
  DefaultError,
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient
} from "@tanstack/react-query";

import { CommentListResponse } from "@/utils/types/comment/commentData";

import { getAuctionDetail } from "./_api/getAuctionDetail";
import { getBidsReverse, getTopThreeRankReverse } from "./_api/getBids";
import { getCommentList } from "./_api/getCommentList";
import DetailInfoSection from "./_component/DetailInfoSection";
interface AuctionProps {
  params: { auctionId: string };
}

const AuctionPage = async ({ params }: AuctionProps) => {
  const { auctionId } = params;
  const numberOfAuctionId = Number(auctionId);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["auction", numberOfAuctionId],
    queryFn: () => getAuctionDetail({ auctionId: numberOfAuctionId })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", numberOfAuctionId, "topThreeRank", "reverse"],
    queryFn: () => getTopThreeRankReverse({ auctionId: numberOfAuctionId })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", numberOfAuctionId, "bids", "reverse"],
    queryFn: () => getBidsReverse({ auctionId: numberOfAuctionId })
  });
  await queryClient.prefetchInfiniteQuery<
    CommentListResponse,
    DefaultError,
    InfiniteData<CommentListResponse>,
    [string, number, string],
    number
  >({
    queryKey: ["auction", numberOfAuctionId, "comments"],
    queryFn: ({ pageParam = 0 }) =>
      getCommentList({ pageParam, auctionId: numberOfAuctionId }),
    initialPageParam: 0
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section>
      <HydrationBoundary state={dehydratedState}>
        <DetailInfoSection auctionId={numberOfAuctionId} />
      </HydrationBoundary>
    </section>
  );
};

export default AuctionPage;
