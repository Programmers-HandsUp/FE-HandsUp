import { ImageUrl } from "../image";

export type Type =
  | "CHAT"
  | "COMMENT"
  | "BOOKMARK"
  | "PURCHASE_WINNING"
  | "CANCELD_PURCHASE_WINNING"
  | "COMPLETED_PURCHASE_TRADING";

export interface Notification {
  notificationId: number;
  senderProfileImageUrl: ImageUrl;
  content: string;
  auctionId: number;
  auctionImageUrl: ImageUrl;
  notificationType: Type;
}

export interface Notifications {
  content: Notification[];
  size: number;
  hasNext: boolean;
}
