import { getMessaging, getToken } from "firebase/messaging";

import firebaseApp from "../_api/firebase";
import { useSendFcmToken } from "./mutations/useSendFcmToken";

const useFcmToken = () => {
  const { mutateSendFcmToken } = useSendFcmToken();

  const getFcmToken = async () => {
    const messaging = getMessaging(firebaseApp);
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
    });

    if (currentToken) {
      mutateSendFcmToken(currentToken);
    } else {
      alert("잠시 후 다시 이용해주세요");
    }
  };

  return { getFcmToken };
};

export default useFcmToken;
