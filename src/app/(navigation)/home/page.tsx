import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from "@tanstack/react-query";
import DetailAuctionFeed from "./_component/DetailAuctionFeed";
import { getHotAuctionRecommends } from "@/app/api/auctionRecommends";

const MainPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auction", "hot"],
    queryFn: getHotAuctionRecommends
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className="">
      <HydrationBoundary state={dehydratedState}>
        <DetailAuctionFeed />
      </HydrationBoundary>
    </section>
  );
};
export default MainPage;
