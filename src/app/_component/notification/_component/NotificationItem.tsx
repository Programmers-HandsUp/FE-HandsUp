import React, { FunctionComponent } from "react";

import { ImageUrl } from "@/utils/types/image";
import { Notification, NotificationType } from "@/utils/types/notification";

import ProductCard from "../../common/ProductCard";
import AuctionNotification from "./AuctionNotification";
import PersonalNotification from "./PersonalNotification";

interface Props {
  type: NotificationType;
  profileImg: ImageUrl;
}

const PersonalComponent = ({ type, profileImg }: Props) => (
  <PersonalNotification
    type={type}
    img={profileImg}
  />
);

const AuctionComponent = ({ type }: { type: NotificationType }) => (
  <AuctionNotification type={type} />
);

const NotificationComponent: Record<
  NotificationType,
  FunctionComponent<Props>
> = {
  comment: PersonalComponent,
  chat: PersonalComponent,
  bookmark: PersonalComponent,
  purchase_winning: AuctionComponent,
  canceld_purchase_winning: AuctionComponent
};

function NotificationItem({ notification }: { notification: Notification }) {
  const { notification_Id, type, content, auctionImg, profileImg } =
    notification;
  const NotificationContent = NotificationComponent[type];

  return (
    <ProductCard
      id={notification_Id}
      className="flex justify-between items-center py-2 gap-2">
      <NotificationContent
        type={type}
        profileImg={profileImg}
      />
      <p className="flex-1 text-left ml-4">{content}</p>
      <ProductCard.CardImage
        titleImage={auctionImg}
        width={60}
        height={60}
      />
    </ProductCard>
  );
}

export default NotificationItem;
