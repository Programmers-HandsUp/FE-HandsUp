import Transaction from "../Transaction/Transaction";
import { SaleList } from "./SalesHistory";

export function Pending({ saleList }: SaleList) {
  return (
    <>
      <Transaction.Header
        firstLabel="구매 희망가"
        secondLabel="-"
      />
      {saleList?.map((sale) => (
        <Transaction
          transaction={sale}
          key={sale.auctionId}>
          <Transaction.Price>{sale.maxBiddingPrice}</Transaction.Price>
          <Transaction.Date></Transaction.Date>
        </Transaction>
      ))}
    </>
  );
}
