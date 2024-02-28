import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from "@tanstack/react-query";
import DetailAuctionFeed from "./_component/DetailAuctionFeed";
import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";
import AuctionFeedList from "./_component/AuctionFeedList";

const MainPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className="">
      <HydrationBoundary state={dehydratedState}>
        <div className="flex flex-col gap-10">
          <DetailAuctionFeed />
          <AuctionFeedList />
        </div>
      </HydrationBoundary>
    </section>
  );
};
export default MainPage;
