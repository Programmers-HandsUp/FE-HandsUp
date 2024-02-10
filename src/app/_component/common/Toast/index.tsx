"use client";

import { createRoot } from "react-dom/client";

import ToastManager from "./ToastManager";
import { ToastCreate, ToastIconId } from "./type";
import { useEffect, useState } from "react";

const Toast = () => {
  const portalId = "toast-portal";
  const [createToast, setCreateToast] = useState<ToastCreate>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const portalElement = document.getElementById(portalId);
      if (portalElement === undefined) {
        return;
      }
      const newPortalElement = document.createElement("div");
      newPortalElement.id = portalId;
      document.body.appendChild(newPortalElement);

      createRoot(newPortalElement).render(
        <ToastManager
          bind={(createToast) => {
            setCreateToast(() => createToast);
          }}
        />
      );
    }
  }, []);

  const show = (message: string, iconId: ToastIconId, duration = 2000) => {
    if (!createToast) throw new Error("ToastManager 초기화 오류");
    createToast(message, iconId, duration);
  };

  return { show };
};

export default Toast;
