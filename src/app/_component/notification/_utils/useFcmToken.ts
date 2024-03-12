import { getMessaging, getToken } from "firebase/messaging";

import Toast from "../../common/Toast";
import firebaseApp from "../_api/firebase";

const useFcmToken = () => {

  const { show } = Toast();

  const getFcmToken = async () => {
    const messaging = getMessaging(firebaseApp);
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
    });

    if (currentToken) {
      // token 전송 로직 추가
    } else {
      show("잠시 후 다시 이용해주세요", "warn-solid");
    }
  };

  return { getFcmToken };
};

export default useFcmToken;
