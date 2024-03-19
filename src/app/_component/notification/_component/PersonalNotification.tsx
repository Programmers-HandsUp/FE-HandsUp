import { ImageUrl } from "@/utils/types/image";
import { Type } from "@/utils/types/notification";

import Badge from "../../common/Badge";
import Icon from "../../common/Icon";
import { IconName } from "../../common/Icon/type";
import UserCard from "../../common/UserCard";

function PersonalNotification({ type, img }: { type: Type; img: ImageUrl }) {
  return (
    <Badge
      content={
        <Icon
          id={type.toLowerCase() as IconName}
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
