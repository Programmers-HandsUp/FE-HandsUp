"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";
import { v4 } from "uuid";

import ToastItem from "./ToastItem";
import { Toast, ToastCreate } from "./type";

interface ToastManagerProps {
  bind: (createToast: ToastCreate) => void;
}

const ToastManager = ({ bind }: ToastManagerProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const createToast = useCallback(
    (message: string, icon: ReactElement, duration: number) => {
      const newToast = { id: v4(), message, icon, duration };

      setToasts((prev) => [...prev, newToast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  useEffect(() => {
    bind(createToast);
  }, [bind, createToast]);

  return (
    <div className="fixed bottom-4 z-20 translate-x-1/2">
      {toasts.map(({ id, message, icon, duration }) => (
        <ToastItem
          key={id}
          id={id}
          message={message}
          icon={icon}
          duration={duration}
          onDone={() => removeToast(id)}
        />
      ))}
    </div>
  );
};

export default ToastManager;
