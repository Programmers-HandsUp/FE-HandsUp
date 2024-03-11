import { ReactNode } from "react";

import {
  Category,
  Description,
  Tag,
  TagWrapper,
  Title,
  TradeMethod,
  TradeRegion,
  TradeWrapper
} from "./DefaultComponent";

export interface InfoComponentProps {
  children: ReactNode;
}

const AuctionDetailInfoWrapper = ({ children }: InfoComponentProps) => {
  return (
    <div>
      {children}
      <div className="flex justify-end py-2">
        <button className="text-gray-500 underline">게시글 신고하기</button>
      </div>
    </div>
  );
};

const AuctionDetailInfo = Object.assign(AuctionDetailInfoWrapper, {
  Title,
  Category,
  TagWrapper,
  Tag,
  Description,
  TradeWrapper,
  TradeMethod,
  TradeRegion
});

export default AuctionDetailInfo;
