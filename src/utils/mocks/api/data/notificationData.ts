import { Notification } from "../../../types/notification/index";

export const notification: Notification[] = [
  {
    notification_Id: 1,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품을 관심있어 해요.",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "bookmark"
  },
  {
    notification_Id: 2,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품에서 애기하고 있어요.",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "comment"
  },
  {
    notification_Id: 3,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님과의 채팅방에서 속삭이고 있어요",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "chat"
  },
  {
    notification_Id: 4,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "입찰하신 물품이 낙찰되었습니다.",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "purchase_winning"
  },
  {
    notification_Id: 5,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "경매 낙찰이 취소되었습니다.",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "canceld_purchase_winning"
  },
  {
    notification_Id: 6,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품을 관심있어 해요.",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "bookmark"
  },
  {
    notification_Id: 7,
    profileImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f2ed3069-3c65-4cb5-97dc-2f24a64ca103.jpg",
    content: "오리님이 회원님의 경매 물품을 관심있어 해요.",
    auctionId: 1,
    auctionImg:
      "https://s3.ap-northeast-2.amazonaws.com/handsup-bucket/images/f12a1119-fafc-4107-924f-43c9d0fef67c.png",
    type: "bookmark"
  }
];

export const notificationBadge: number = 4;
