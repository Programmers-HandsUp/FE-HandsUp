import { useSuspenseQuery } from "@tanstack/react-query";

import { notificationList } from "../../_api/notification";

const useNotificationList = () => {
  return useSuspenseQuery({
    queryKey: ["notifications"],
    queryFn: notificationList
  });
};

export default useNotificationList;
