"use client";

import { useEffect, useState } from "react";

import Toast from "../../common/Toast";
import useFcmToken from "./useFcmToken";

const useNotificationPermission = () => {
  const [permissionStatus, setPermissionStatus] = useState("");
  const { getFcmToken } = useFcmToken();
  const { show } = Toast();

  useEffect(() => {
    setPermissionStatus(
      typeof Notification === "undefined" ? "granted" : Notification.permission
    );
  }, []);

  const requestPermission = () => {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getFcmToken();
        show("PUSH 알림을 허용했어요", "check-solid");
      } else if (permission === "denied") {
        show("PUSH 알림 취소", "warn-solid");
      }
      setPermissionStatus(permission);
    });
  };

  return { permissionStatus, requestPermission };
};

export default useNotificationPermission;
