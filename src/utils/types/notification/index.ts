import { ImageUrl } from "../image";

export type NotificationType =
  | "chat"
  | "comment"
  | "bookmark"
  | "purchase_winning"
  | "canceld_purchase_winning";

export interface Notification {
  notification_Id: number;
  profileImg: ImageUrl;
  content: string;
  auctionId: number;
  auctionImg: ImageUrl;
  type: NotificationType;
}
