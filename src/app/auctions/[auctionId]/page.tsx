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
    queryFn: async () => {
      const originalResponse = await getTopThreeRank({ auctionId });
      // content 배열만 역순으로 뒤집기
      return {
        ...originalResponse,
        content: [...originalResponse.content].reverse()
      };
    }
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", auctionId, "bids"],
    queryFn: async () => {
      const originalResponse = await getBids({ auctionId });
      // content 배열만 역순으로 뒤집기
      return {
        ...originalResponse,
        content: [...originalResponse.content].reverse()
      };
    }
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
