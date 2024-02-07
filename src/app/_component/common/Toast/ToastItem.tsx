"use client";

import useTimeout from "./useTimeout";
import { useState } from "react";
import { cn } from "@/utils/cn";
import { Toast } from "./type";
import Icon from "../Icon";

interface ToastItemProps extends Toast {
  onDone: () => void;
}

const ToastItem = ({ message, iconId, duration, onDone }: ToastItemProps) => {
  const [show, setShow] = useState(true);

  const iconColor = {
    "check-solid": "bg-[#47D764]",
    "warn-solid": "bg-[#ff355b]",
    "info-solid": "bg-[#2F86EB]",
  };
  const iconHeader = {
    "check-solid": "Success",
    "warn-solid": "Warning",
    "info-solid": "Info",
  };

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  return (
    <div
      className={cn(
        "duration-400 relative mx mb-2 flex h-16 w-layout items-center min-w-[150px]",
        "overflow-hidden rounded bg-white p-4 shadow-md shadow-gray-700 ease-out",
        show ? "animate-rightMove" : "animate-leftMove"
      )}
    >
      <div
        className={cn(
          "absolute left-0 top-0 h-1 w-0 rounded",
          "animate-progress",
          iconColor[iconId]
        )}
        style={{ animationDuration: `${duration}ms` }}
      />
      <div className={`${iconColor[iconId]} rounded-full`}>
        <Icon id={iconId} />
      </div>
      <div className="pl-2">
        <h2 className="text-black font-bold">{iconHeader[iconId]}</h2>
        <p className="text-black text-sm">{message}</p>
      </div>
    </div>
  );
};

export default ToastItem;
