"use client";

import { useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

import ToastItem from "./ToastItem";
import { Toast, ToastCreate, ToastIconId } from "./type";

export interface ToastManagerProps {
  bind: (createToast: ToastCreate) => void;
}

const ToastManager = ({ bind }: ToastManagerProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = (
    message: string,
    iconId: ToastIconId,
    duration: number
  ) => {
    const newToast = { id: v4(), message, iconId, duration };
    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind]);

  return (
    <div className="fixed bottom-4 z-20 translate-x-[20%]">
      {toasts.map(({ id, message, iconId, duration }) => (
        <ToastItem
          key={id}
          id={id}
          message={message}
          iconId={iconId}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
