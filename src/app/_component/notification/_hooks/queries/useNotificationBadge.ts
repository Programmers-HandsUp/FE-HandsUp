import { useSuspenseQuery } from "@tanstack/react-query";

import { notificationBadge } from "../../_api/notification";

const useNotificationBadge = () => {
  return useSuspenseQuery({
    queryKey: ["notificationBadge"],
    queryFn: notificationBadge
  });
};

export default useNotificationBadge;
