import { getMessaging, onMessage } from "firebase/messaging";
import { useEffect } from "react";

import firebaseApp from "./_api/firebase";
import useFcmToken from "./_utils/useFcmToken";

function Notification() {
  const { fcmToken } = useFcmToken();
  fcmToken && console.log("FCM token:", fcmToken);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (typeof window !== "undefined" && "serviceWorker" in navigator) {
      const messaging = getMessaging(firebaseApp);
      const unsubscribe = onMessage(messaging, (payload) => {
        console.log("Foreground push notification received:", payload);
      });
      return () => {
        unsubscribe();
      };
    }
  }, []);
  return <div>PWA TEST</div>;
}

export default Notification;
