import { ReactElement } from "react";

export type ToastCreate = (
  message: string,
  icon: ReactElement,
  duration: number
) => void;

export type Toast = {
  id: string;
  message: string;
  icon: ReactElement;
  duration: number;
};
