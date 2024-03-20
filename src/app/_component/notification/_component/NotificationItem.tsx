import { FunctionComponent } from "react";

import { ImageUrl } from "@/utils/types/image";
import { Notification, Type } from "@/utils/types/notification";

import ProductCard from "../../common/ProductCard";
import AuctionNotification from "./AuctionNotification";
import PersonalNotification from "./PersonalNotification";

interface Props {
  type: Type;
  profileImg: ImageUrl;
}

const PersonalComponent = ({ type, profileImg }: Props) => (
  <PersonalNotification
    type={type}
    img={profileImg}
  />
);

const AuctionComponent = ({ type }: { type: Type }) => (
  <AuctionNotification type={type} />
);

const NotificationComponent: Record<Type, FunctionComponent<Props>> = {
  COMMENT: PersonalComponent,
  CHAT: PersonalComponent,
  BOOKMARK: PersonalComponent,
  COMPLETED_PURCHASE_TRADING: PersonalComponent,
  PURCHASE_WINNING: AuctionComponent,
  CANCELD_PURCHASE_WINNING: AuctionComponent
};

function NotificationItem({ notification }: { notification: Notification }) {
  const {
    notificationType,
    content,
    auctionImageUrl,
    senderProfileImageUrl,
    auctionId
  } = notification;

  const NotificationContent = NotificationComponent[notificationType];

  return (
    <ProductCard
      id={auctionId}
      className="flex justify-between items-center py-2 gap-2">
      <NotificationContent
        type={notificationType}
        profileImg={senderProfileImageUrl}
      />
      <p className="flex-1 text-left ml-4">{content}</p>
      <ProductCard.CardImage
        titleImage={auctionImageUrl}
        width={60}
        height={60}
      />
    </ProductCard>
  );
}

export default NotificationItem;
