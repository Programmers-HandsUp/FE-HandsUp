import { Notification } from "@/utils/types/notification";

export const notification: Notification[] = [
  {
    notificationId: 1,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품을 관심있어 해요.",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "BOOKMARK"
  },
  {
    notificationId: 2,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품에서 애기하고 있어요.",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "COMMENT"
  },
  {
    notificationId: 3,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님과의 채팅방에서 속삭이고 있어요",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "CHAT"
  },
  {
    notificationId: 4,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "입찰하신 물품이 낙찰되었습니다.",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "PURCHASE_WINNING"
  },
  {
    notificationId: 5,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "경매 낙찰이 취소되었습니다.",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "CANCELD_PURCHASE_WINNING"
  },
  {
    notificationId: 6,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품을 관심있어 해요.",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "BOOKMARK"
  },
  {
    notificationId: 7,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품을 관심있어 해요.",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "BOOKMARK"
  },
  {
    notificationId: 8,
    senderProfileImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님과 거래 성공",
    auctionId: 1,
    auctionImageUrl:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    notificationType: "COMPLETED_PURCHASE_TRADING"
  }
];

export const notificationBadge: number = 4;
