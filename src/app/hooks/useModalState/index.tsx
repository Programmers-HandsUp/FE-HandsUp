"use client";

import { useState } from "react";

interface UseModalResult {
  open: () => void;
  close: () => void;
  isOpen: boolean;
}

const useModalState = (): UseModalResult => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const open = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  return { open, close, isOpen };
};
export default useModalState;
