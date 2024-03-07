"use client";

import { VariantProps } from "class-variance-authority";
import { modalTypeVariants } from "./ModalType.variants";
import React, { ReactNode, useEffect, useState } from "react";
import { cn } from "@/utils/cn";
import { createPortal } from "react-dom";

interface ModalProps extends VariantProps<typeof modalTypeVariants> {
  initialValue?: boolean;
  width?: number;
  height?: number;
  elementId?: string;
  modalType?: "default" | "dropBox" | "fullScreen";
  animate?: "grow" | "slide";
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
  close: () => void;
}
const animateIn = {
  grow: "scale-100 mx-auto",
  slide: "fixed translate-x-[calc(100vw - 360px)]"
};
const animateOut = {
  grow: "scale-0 mx-auto",
  slide: "fixed translate-x-[100vw]"
};

const Modal = ({
  children,
  className,
  width = 100,
  height = 100,
  modalType = "default",
  elementId = "global-modal",
  animate = "grow",
  close,
  isOpen = false
}: ModalProps) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null);

  useEffect(() => {
    setPortalElement(document.getElementById("global-modal"));
  }, []);

  if (!portalElement) return <></>;

  return createPortal(
    <>
      <div
        onClick={close}
        className={cn(
          "fixed top-0 left-0 bottom-0 right-0 w-screen h-[100vh] dark:bg-gray-100/50 bg-black/50 transition-opacity",
          isOpen ? "opacity-100 z-10" : "opacity-0 -z-10"
        )}
      />
      <div
        className={cn(
          modalTypeVariants({ modalType }),
          isOpen
            ? `z-10 ${animateIn[animate]}`
            : `-z-10 ${animateOut[animate]}`,
          className
        )}
        style={{
          width: `${modalType === "fullScreen" ? "100%" : `${width}px`}`,
          height: `${modalType === "fullScreen" ? "100%" : `${height}px`}`
        }}>
        {children}
      </div>
    </>,
    modalType === "fullScreen"
      ? portalElement!
      : document.getElementById(elementId)!
  );
};

export default Modal;
