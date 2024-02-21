"use client";

import useClickAway from "@/app/hooks/useClickAway";
import { cn } from "@/utils/cn";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

interface ModalProps {
  children: ReactNode;
  width?: number;
  height?: number;
  visible?: boolean;
  onClose?: () => void;
  style?: CSSProperties;
}

const DropBoxSelect = ({
  children,
  width = 100,
  height,
  visible = false,
  onClose,
  ...props
}: ModalProps) => {
  const ref = useClickAway<HTMLDivElement>(() => {
    onClose && onClose();
  });

  return (
    <>
      <div
        className={cn(
          "fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)]",
          visible ? "block'" : "hidden"
        )}
      ></div>
      <div
        ref={ref}
        className={cn(
          "absolute top-5 p-[8px] bg-white shadow-lg box-border rounded-lg",
          visible ? "block" : "hidden"
        )}
        {...props}
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        {children}
      </div>
    </>
  );
};

export default DropBoxSelect;
