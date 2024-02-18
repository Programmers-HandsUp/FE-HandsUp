"use client";

import { createRoot } from "react-dom/client";
import ToastManager from "./ToastManager";
import { ToastCreate, ToastIconId } from "./type";
import { useEffect, useState } from "react";

let createToastInstance: ToastCreate | undefined;

const Toast = () => {
  const portalId = "toast-portal";
  const [hasPortal, setHasPortal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const portalElement = document.getElementById(portalId);
      if (!portalElement) {
        const newPortalElement = document.createElement("div");
        newPortalElement.id = portalId;
        document.body.appendChild(newPortalElement);

        createRoot(newPortalElement).render(
          <ToastManager
            bind={(createToast) => {
              createToastInstance = createToast;
              setHasPortal(true);
            }}
          />
        );
      } else {
        setHasPortal(true);
      }
    }
  }, []);

  const show = (message: string, iconId: ToastIconId, duration = 2000) => {
    if (!createToastInstance) throw new Error("ToastManager 초기화 오류");
    createToastInstance(message, iconId, duration);
  };

  return { show, hasPortal };
};

export default Toast;
