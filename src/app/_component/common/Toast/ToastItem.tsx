"use client";

import useTimeout from "./useTimeout";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { Toast } from "./type";
import Icon from "../Icon";

interface ToastItemProps extends Toast {
  onDone: () => void;
}

const ToastItem = ({ message, icon, duration, onDone }: ToastItemProps) => {
  const [show, setShow] = useState(true);
  console.log(icon);
  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  return (
    <div
      className={cn(
        "duration-400 relative mx mb-2 flex h-16 w-layout max-w-[296px] items-center ",
        "overflow-hidden rounded bg-gray-400 p-4 opacity-100 shadow-md transition-opacity ease-out",
        show ? "animate-rightMove" : "animate-leftMove"
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-1 w-0 rounded bg-primary bg-blue-500",
          "animate-progress"
        )}
        style={{ animationDuration: `${duration}ms` }}
      />
      {icon}
      <p className="text-white dark:text-black">{message}</p>
    </div>
  );
};

export default ToastItem;
