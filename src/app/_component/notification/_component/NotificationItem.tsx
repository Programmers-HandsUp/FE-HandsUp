import { Notification } from "@/utils/types/notification";

import ProductCard from "../../common/ProductCard";
import AuctionNotification from "./AuctionNotification";
import PersonalNotification from "./PersonalNotification";

function NotificationItem({ notification }: { notification: Notification }) {
  const { notification_Id, type, content, auctionImg, profileImg } =
    notification;

  const renderNotificationContent = () => {
    const isAuctionNotification =
      type === "purchase_winning" || type === "canceld_purchase_winning";

    return isAuctionNotification ? (
      <AuctionNotification type={type} />
    ) : (
      <PersonalNotification
        type={type}
        img={profileImg}
      />
    );
  };

  return (
    <ProductCard
      id={notification_Id}
      className="flex justify-between items-center py-2 gap-2">
      {renderNotificationContent()}
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
