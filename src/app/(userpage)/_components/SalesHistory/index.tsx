import { ReactNode } from "react";

import Timer from "@/app/_component/common/Timer";
import { SaleContent, StatusEn } from "@/utils/types/user/mypage";

import EmptyList from "../EmptyList";
import Transaction from "../Transaction/Transaction";
import { HeaderProps } from "../Transaction/TransactionItem";

interface SalesHistoryProps {
  status: StatusEn;
  saleList: SaleContent[];
}

const statusHeader: Record<StatusEn, HeaderProps> = {
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

function SalesHistory({ saleList, status }: SalesHistoryProps) {
  if (saleList.length === 0) {
    return <EmptyList type="판매" />;
  }

  const statusDate: Record<StatusEn, (sale: SaleContent) => ReactNode> = {
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

  return (
    <>
      <Transaction.Header
        firstLabel={statusHeader[status].firstLabel}
        secondLabel={statusHeader[status].secondLabel}
      />
      {saleList.map((sale) => (
        <Transaction
          transaction={sale}
          key={sale.auctionId}>
          <Transaction.Price>{sale.maxBiddingPrice}</Transaction.Price>
          <Transaction.Date>{statusDate[status](sale)}</Transaction.Date>
        </Transaction>
      ))}
    </>
  );
}

export default SalesHistory;
