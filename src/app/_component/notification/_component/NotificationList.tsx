import useInfiniteScroll from "@/app/_hooks/useInfiniteScroll";

import useNotificationBadge from "../_hooks/queries/useNotificationBadge";
import useNotificationList from "../_hooks/queries/useNotificationList";
import EmptyNotification from "./EmptyNotification";
import NotificationItem from "./NotificationItem";

function NotificationList() {
  const {
    data: notifications,
    fetchNextPage,
    hasNextPage,
    isError,

    isFetched
  } = useNotificationList();

  const { data: isRead, isError: badgeError } = useNotificationBadge();

  const refetch = () => {
    if (hasNextPage && isFetched) fetchNextPage();
  };

  const { ref } = useInfiniteScroll<HTMLDivElement>(refetch);

  if (notifications.length === 0) {
    return <EmptyNotification />;
  }

  if (isError || badgeError) return <div>에러</div>;

  return (
    <>
      {notifications.map((notification, index) => (
        <NotificationItem
          notification={notification}
          key={notification.notificationId}
          isBadgeVisible={index <= isRead.count}
        />
      ))}
      <div ref={ref}></div>
    </>
  );
}

export default NotificationList;
