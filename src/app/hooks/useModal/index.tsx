"use client";

import { ReactNode, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/utils/cn";
import useClickAway from "../useClickAway";
import { modalTypeVariants } from "./ModalType.variants";
import { VariantProps } from "class-variance-authority";

interface useModalParams extends VariantProps<typeof modalTypeVariants> {
  initialValue?: boolean;
  width?: number;
  height?: number;
  elementId?: string;
  modalType?: "default" | "dropBox" | "fullScreen";
  animate?: "grow" | "slide";
  className?: string;
}

export interface UseModalResult {
  Modal: ({ children }: { children: ReactNode }) => JSX.Element;
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const animateIn = {
  grow: "animate-growIn",
  slide: "animate-slideIn"
};
const animateOut = {
  grow: "animate-growOut",
  slide: "animate-slideOut"
};

const useModal = ({
  initialValue = false,
  width = 100,
  height = 100,
  modalType = "default",
  elementId = "global-modal",
  animate = "grow",
  className
}: useModalParams): UseModalResult => {
  const [isOpen, setOpen] = useState<boolean>(initialValue);
  const [isUnmount, setIsUnmount] = useState(false);

  const open = useCallback(() => {
    setIsUnmount(false);
    setTimeout(() => {
      setOpen(true);
    }, 300);
    setOpen(true);
  }, [setOpen]);

  const close = useCallback(() => {
    setIsUnmount(true);
    setTimeout(() => {
      setOpen(false);
    }, 300);
  }, [setOpen]);

  const Modal = ({ children }: { children: ReactNode }) => {
    const ModalContent = ({ children }: { children: ReactNode }) => {
      const ref = useClickAway<HTMLDivElement>(() => {
        close();
      });
      return (
        <div
          ref={ref}
          className={cn(
            modalTypeVariants({ modalType }),
            isOpen ? "flex" : "hidden",
            isUnmount ? animateOut[animate] : animateIn[animate],
            elementId ? "z-50" : "",
            className
          )}
          style={{
            width: `${modalType === "fullScreen" ? "100%" : `${width}px`}`,
            height: `${modalType === "fullScreen" ? "100%" : `${height}px`}`
          }}>
          {children}
        </div>
      );
    };

    if (!isOpen) return <></>;

    return createPortal(
      <>
        <div
          className={cn(
            "fixed top-0 left-0 bottom-0 right-0 w-screen h-[100vh] bg-[rgba(0,0,0,0.5)]",
            isOpen ? "block" : "hidden",
            elementId ? "z-50" : ""
          )}
        />
        <ModalContent>{children}</ModalContent>
      </>,
      modalType === "fullScreen"
        ? document.getElementById("global-modal")!
        : document.getElementById(elementId)!
    );
  };

  return { Modal, open, close, isOpen };
};
export default useModal;
