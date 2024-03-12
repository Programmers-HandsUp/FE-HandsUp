import { useEffect, useState } from "react";

import Toast from "../../common/Toast";
import useFcmToken from "./useFcmToken";

const useNotificationPermission = () => {
  const { show } = Toast();
  const { getFcmToken } = useFcmToken();

  const [permissionStatus, setPermissionStatus] = useState(() => {
    if (typeof Notification === "undefined") {
      return "granted";
    }
    return Notification.permission;
  });

  useEffect(() => {
    setPermissionStatus(Notification.permission);
  }, []);

  const requestPermission = async () => {
    if (permissionStatus === "denied") {
      show("알림 권한이 거부되었습니다. 설정에서 변경해주세요.", "warn-solid");
      return;
    }

    Notification.requestPermission().then(async (permissionResult) => {
      setPermissionStatus(permissionResult);
      if (permissionResult === "granted") {
        show("푸시 알림을 허용했습니다.", "check-solid");
        await getFcmToken();
      }
    });
  };

  return { permissionStatus, requestPermission };
};

export default useNotificationPermission;
