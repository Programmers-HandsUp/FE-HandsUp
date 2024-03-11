import {
  DefaultError,
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient
} from "@tanstack/react-query";

import { getAuctionDetail } from "@/app/api/getAuctionDetail";
import { getBids, getTopThreeRank } from "@/app/api/getBids";
import { getComments } from "@/app/api/getComments";
import { ICommentListAPI } from "@/app/products/[auctionId]/_hooks/queries/useGetCommentList";

import DetailInfoSection from "./_component/DetailInfoSection";

interface ProductProps {
  params: { auctionId: number };
}

const Product = async ({ params }: ProductProps) => {
  const { auctionId } = params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", auctionId],
    queryFn: () => getAuctionDetail({ auctionId })
  });
  await queryClient.prefetchQuery({
    queryKey: ["product", auctionId, "topThreeRank"],
    queryFn: () => getTopThreeRank({ auctionId }),
    staleTime: 60 * 1000
  });
  await queryClient.prefetchQuery({
    queryKey: ["product", auctionId, "bids"],
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
    queryKey: ["product", auctionId, "comments"],
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

export default Product;
