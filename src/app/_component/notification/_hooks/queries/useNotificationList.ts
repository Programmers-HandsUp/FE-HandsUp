import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

import { notificationList } from "../../_api/notification";

const useNotificationList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["notifications"],
    queryFn: notificationList,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      if (!lastPage) return;
      if (!lastPage.hasNext) return undefined;
      return lastPageParam + 1;
    },
    select: (data) => data.pages.map((item) => item.content).flat(),
    retry: 0,
    staleTime: 0
  });
};

export default useNotificationList;
