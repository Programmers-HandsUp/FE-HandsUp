import { ReactNode } from "react";

import Timer from "@/app/_component/common/Timer";
import { SaleContent, StatusEn } from "@/utils/types/user/mypage";

import Transaction from "../Transaction/Transaction";
import { HeaderProps } from "../Transaction/TransactionItem";

export const statusDate: Record<StatusEn, (sale: SaleContent) => ReactNode> = {
  BIDDING: (sale) => (
    <Timer
      isIcon={false}
      createdAt={sale.auctionCreatedAt}
      deadline={sale.auctionEndDateTime}
    />
  ),
  TRADING: () => <Transaction.Date />,
  COMPLETED: (sale) => <Transaction.Date date={sale.auctionCreatedAt} />
};

export const statusHeader: Record<StatusEn, HeaderProps> = {
  BIDDING: {
    firstLabel: "최고 입찰가",
    secondLabel: "남은 시간"
  },
  TRADING: {
    firstLabel: "구매 희망가",
    secondLabel: "-"
  },
  COMPLETED: {
    firstLabel: "낙찰가",
    secondLabel: "날짜"
  }
};
