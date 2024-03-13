import React from "react";

import { NotificationType } from "@/utils/types/notification";

import Icon from "../../common/Icon";

function AuctionNotification({ type }: { type: NotificationType }) {
  return (
    <p className="w-12 h-12 rounded-full bg-[#96E4FF] flex justify-center items-center">
      <Icon id={type} />
    </p>
  );
}

export default AuctionNotification;
