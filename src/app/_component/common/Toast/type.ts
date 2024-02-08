export type ToastCreate = (
  message: string,
  iconId: ToastIconId,
  duration: number
) => void;

export type Toast = {
  id: string;
  message: string;
  iconId: ToastIconId;
  duration: number;
};

export type ToastIconId = "check-solid" | "info-solid" | "warn-solid";
