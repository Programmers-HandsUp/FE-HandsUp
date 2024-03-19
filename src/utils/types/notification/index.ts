import { ImageUrl } from "../image";

export type Type =
  | "CHAT"
  | "COMMENT"
  | "BOOKMARK"
  | "PURCHASE_WINNING"
  | "CANCELD_PURCHASE_WINNING";

export interface Notification {
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
