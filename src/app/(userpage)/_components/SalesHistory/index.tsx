import { SaleContent, StatusEn } from "@/utils/types/user/mypage";

import EmptyList from "../EmptyList";
import Transaction from "../Transaction/Transaction";
import { statusDate, statusHeader } from "./StatusComponents";

interface SalesHistoryProps {
  status: StatusEn;
  saleList: SaleContent[];
}

function SalesHistory({ saleList, status }: SalesHistoryProps) {
  if (saleList.length === 0) {
    return <EmptyList type="판매" />;
  }

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
