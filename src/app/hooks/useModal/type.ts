import { ReactNode } from "react";

export interface UseModalResult {
  Modal: ({ children, className }: ModalContentProps) => JSX.Element;
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

export interface ModalContentProps {
  children: ReactNode;
  className?: string;
}
