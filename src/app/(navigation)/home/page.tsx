import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";

import {
  getSortedBids,
  getSortedBookMarks,
  getSortedCategory,
  getSortedDeadLine,
  getSortedRecentlyCreated
} from "./_api/getAuctionRecommends";
import MainContentSection from "./_component/MainContentSection";

const MainPage = async () => {
  const queryClient = new QueryClient();

  const address = { si: "", gu: "", dong: "" };
  await queryClient.prefetchQuery({
    queryKey: ["auction", "bookmark"],
    queryFn: () => getSortedBookMarks({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "recently"],
    queryFn: () => getSortedRecentlyCreated({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "deadline"],
    queryFn: () => getSortedDeadLine({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "bids"],
    queryFn: () => getSortedBids({ address })
  });
  const categoryData = await getSortedCategory();
  queryClient.setQueryData(["auction", "category"], categoryData);
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
