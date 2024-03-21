"use client";

import { useState } from "react";

import { cn } from "@/utils/function/cn";

import Icon from "../Icon";
import { Toast } from "./type";
import useTimeout from "./useTimeout";

interface ToastItemProps extends Toast {
  onDone: () => void;
}

const ToastItem = ({ message, iconId, duration, onDone }: ToastItemProps) => {
  const [show, setShow] = useState(true);

  const iconColor = {
    "check-solid": "bg-[#47D764]",
    "warn-solid": "bg-[#ff355b]",
    "info-solid": "bg-[#2F86EB]"
  };
  const iconHeader = {
    "check-solid": "Success",
    "warn-solid": "Warning",
    "info-solid": "Info"
  };

  useTimeout(() => {
    setShow(false);
    setTimeout(() => onDone(), 400);
  }, duration);

  return (
    <div
      className={cn(
        "relative mx mb-2 flex h-16 items-center w-[280px] md:w-[400px]",
        "overflow-hidden rounded bg-white p-4 shadow-md shadow-gray-700",
        show ? "animate-rightMove" : "animate-leftMove"
      )}>
      <div className="absolute top-0 left-0 overflow-hidden bg-transparent rounded-full w-full h-[4px]">
        <div
          className={cn(
            "h-full w-full rounded origin-left -translate-x-full",
            "animate-progress",
            iconColor[iconId]
          )}
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
      <div className={`${iconColor[iconId]} rounded-full`}>
        <Icon id={iconId} />
      </div>
      <div className="pl-2 pt-2">
        <h2 className="text-black font-bold">{iconHeader[iconId]}</h2>
        <p className="text-black text-sm w-[230px] md:w-[350px] truncate">
          {message}
        </p>
      </div>
    </div>
  );
};

export default ToastItem;
