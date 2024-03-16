import React from "react";

import { ImageUrl } from "@/utils/types/image";
import { NotificationType } from "@/utils/types/notification";

import Badge from "../../common/Badge";
import Icon from "../../common/Icon";
import UserCard from "../../common/UserCard";

function PersonalNotification({
  type,
  img
}: {
  type: NotificationType;
  img: ImageUrl;
}) {
  return (
    <Badge
      content={
        <Icon
          id={type}
          className="text-[#96E4FF]"
        />
      }
      badgeType="icon">
      <UserCard.Avatar
        src={`${img}`}
        size="medium"
        rounded={"full"}
        className="bg-slate-100"
      />
    </Badge>
  );
}

export default PersonalNotification;
