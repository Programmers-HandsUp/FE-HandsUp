"use client";

import { VariantProps } from "class-variance-authority";
import React, { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/utils/function/cn";

import { modalTypeVariants } from "./ModalType.variants";

interface ModalProps extends VariantProps<typeof modalTypeVariants> {
  initialValue?: boolean;
  width?: number;
  height?: number;
  elementId?: string;
  modalType?: "default" | "dropBox" | "fullScreen";
  animate?: "grow" | "slide" | "raise";
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  close: () => void;
}

const animateIn = {
  grow: "scale-100 mx-auto",
  slide: "translate-x-0",
  raise: "translate-y-[calc(50vh-70%)]"
};
const animateOut = {
  grow: "scale-0 mx-auto",
  slide: "translate-x-[100vw]",
  raise: "translate-y-[100vh]"
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

  if (!portalElement) return null;

  return createPortal(
    <>
      <div
        onClick={close}
        className={cn(
          "fixed top-0 left-0 bottom-0 right-0 w-screen h-[100vh] dark:bg-gray-100/50 bg-black/50 transition-opacity duration-500",
          isOpen
            ? "opacity-100 translate-x-0 z-50"
            : "opacity-0 translate-x-[100vw]"
        )}
      />
      <div
        className={cn(
          modalTypeVariants({ modalType }),
          isOpen
            ? `z-50 ${animateIn[animate]}`
            : `-z-50 ${animateOut[animate]}`,
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
