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
  const numberOfAuctionId = Number(auctionId);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId],
    queryFn: () => getAuctionDetail({ auctionId: numberOfAuctionId })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "topThreeRank", "reverse"],
    queryFn: () => getTopThreeRankReverse({ auctionId: numberOfAuctionId })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "bids", "reverse"],
    queryFn: () => getBidsReverse({ auctionId: numberOfAuctionId })
  });
  await queryClient.prefetchInfiniteQuery<
    CommentListData,
    DefaultError,
    InfiniteData<CommentListData>,
    [string, number, string],
    number
  >({
    queryKey: ["auction", numberOfAuctionId, "comments"],
    queryFn: ({ pageParam = 0 }) =>
      getComments({ pageParam, auctionId: numberOfAuctionId }),
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

export default Auction;
