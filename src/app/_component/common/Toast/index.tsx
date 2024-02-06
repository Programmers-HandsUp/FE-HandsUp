"use client";

import { createRoot } from "react-dom/client";

import ToastManager from "./ToastManager";
import { ToastCreate } from "./type";
import { ReactElement } from "react";

class Toast {
  portal: HTMLElement | null = null;
  createToast: ToastCreate | undefined;

  constructor() {
    if (typeof window !== "undefined") {
      const portalId = "toast-portal";
      const portalElement = document.getElementById(portalId);

      if (portalElement) {
        this.portal = portalElement;
        return;
      }

      this.portal = document.createElement("div");
      this.portal.id = portalId;
      document.body.appendChild(this.portal);

      createRoot(this.portal).render(
        <ToastManager
          bind={(createToast: ToastCreate) => {
            this.createToast = createToast;
          }}
        />
      );
    }
  }

  show(message: string, icon: ReactElement, duration = 2000) {
    if (!this.createToast) throw new Error("ToastManager 초기화 오류");
    this.createToast(message, icon, duration);
  }
}
const toastInstance = new Toast();
export default toastInstance;
