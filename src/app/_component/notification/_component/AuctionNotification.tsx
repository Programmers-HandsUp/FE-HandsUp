import { Type } from "@/utils/types/notification";

import { IconName } from "../../common/Icon/type";

function AuctionNotification({ type }: { type: Type }) {
  return (
    <p className="w-12 h-12 rounded-full bg-[#96E4FF] flex justify-center items-center">
      id={type.toLowerCase() as IconName}
    </p>
  );
}

export default AuctionNotification;
