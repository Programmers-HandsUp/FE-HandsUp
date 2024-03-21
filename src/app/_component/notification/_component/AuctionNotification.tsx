import Icon from "@/app/_component/common/Icon";
import { IconName } from "@/app/_component/common/Icon/type";
import { Type } from "@/utils/types/notification";

function AuctionNotification({ type }: { type: Type }) {
  return (
    <p className="w-12 h-12 rounded-full bg-[#96E4FF] flex justify-center items-center">
      <Icon id={type.toLowerCase() as IconName} />
    </p>
  );
}

export default AuctionNotification;
