import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";

import {
  getSortedBids,
  getSortedBookMarks,
  getSortedDeadLine,
  getSortedRecentlyCreated
} from "./_api/getAuctionRecommends";
import MainContentSection from "./_component/MainContentSection";

const MainPage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["auction", "bookmark"],
    queryFn: getSortedBookMarks
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "recently"],
    queryFn: getSortedRecentlyCreated
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "deadline"],
    queryFn: getSortedDeadLine
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "bids"],
    queryFn: getSortedBids
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className="px-4">
      <HydrationBoundary state={dehydratedState}>
        <MainContentSection />
      </HydrationBoundary>
    </section>
  );
};
export default MainPage;
