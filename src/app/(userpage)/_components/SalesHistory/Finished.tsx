import Transaction from "../Transaction/Transaction";
import { SaleList } from "./SalesHistory";

export function Finished({ saleList }: SaleList) {
  return (
    <>
      <Transaction.Header
        firstLabel="낙찰가"
        secondLabel="날짜"
      />
      {saleList?.map((sale) => (
        <Transaction
          transaction={sale}
          key={sale.auctionId}>
          <Transaction.Price>{sale.completeBiddingPrice}</Transaction.Price>
          <Transaction.Date date={sale.auctionCompleteTime} />
        </Transaction>
      ))}
    </>
  );
}
