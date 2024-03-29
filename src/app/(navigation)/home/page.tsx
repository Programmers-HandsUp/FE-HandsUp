import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";

import { getLoginUserInfo } from "@/app/_api/user";
import { CheckLoginUserResponse } from "@/utils/types/user/users";

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

  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: getLoginUserInfo
  });

  const user = queryClient.getQueryData<CheckLoginUserResponse>(["user"]);
  const address = user ? user.address : { si: "", gu: "", dong: "" };

  await queryClient.prefetchQuery({
    queryKey: ["auction", "bookmark", address],
    queryFn: () => getSortedBookMarks({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "recently", address],
    queryFn: () => getSortedRecentlyCreated({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "deadline", address],
    queryFn: () => getSortedDeadLine({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "bids", address],
    queryFn: () => getSortedBids({ address })
  });
  await queryClient.prefetchQuery({
    queryKey: ["auction", "category"],
    queryFn: getSortedCategory
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className="px-4">
      <HydrationBoundary state={dehydratedState}>
        <MainContentSection
          userSi={address.si}
          userGu={address.gu}
          userDong={address.dong}
          user={user ? user : null}
        />
      </HydrationBoundary>
    </section>
  );
};
export default MainPage;
