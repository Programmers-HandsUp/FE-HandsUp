import { v4 as uuidv4 } from "uuid";

import useNotificationList from "../_hooks/queries/useNotificationList";
import EmptyNotification from "./EmptyNotification";
import NotificationItem from "./NotificationItem";

function NotificationList() {
  const { data } = useNotificationList();

  if (data.content.length === 0) {
    return <EmptyNotification />;
  }

  return (
    <>
      {data.content.map((notification) => (
        <NotificationItem
          notification={notification}
          key={uuidv4()}
        />
      ))}
    </>
  );
}

export default NotificationList;
