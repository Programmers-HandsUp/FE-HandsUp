import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from "@tanstack/react-query";
import DetailAuctionFeed from "./_component/DetailAuctionFeed";
import { getHotAuctionRecommends } from "@/app/api/getAuctionRecommends";
import AuctionFeedList from "./_component/AuctionFeedList";

const MainPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auction"],
    queryFn: getHotAuctionRecommends
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className="px-4">
      <HydrationBoundary state={dehydratedState}>
        <div className="flex flex-col gap-10">
          <section>
            <div className="text-2xl">
              <h1>지금 핫한 경매를 구경하세요!</h1>
            </div>
            <DetailAuctionFeed />
          </section>

          <section>
            <div className="text-2xl">
              <h1>많은 사람들이 눈여겨보고있는 경매</h1>
            </div>
            <AuctionFeedList divideNum={4} />
          </section>

          <section>
            <div className="text-2xl">
              <h1>💣마감 임박 경매 </h1>
            </div>
            <AuctionFeedList divideNum={1} />
          </section>

          <section>
            <div className="text-2xl">
              <h1>✨따끈따끈한 최신 경매</h1>
            </div>
            <AuctionFeedList divideNum={8} />
          </section>

          <section>
            <div className="text-2xl">
              <h1>💌당신을 위한 추천 경매! </h1>
            </div>
            <AuctionFeedList divideNum={4} />
          </section>
        </div>
      </HydrationBoundary>
    </section>
  );
};
export default MainPage;
