import EmptyList from "../EmptyList";
import Transaction from "../Transaction/Transaction";
import { SaleList } from "./SalesHistory";

export function Finished({ saleList }: SaleList) {
  return (
    <>
      <Transaction.Header
        firstLabel="낙찰가"
        secondLabel="날짜"
      />
      {saleList.length === 0 ? (
        <EmptyList type="판매" />
      ) : (
        saleList.map((sale) => (
          <Transaction
            transaction={sale}
            key={sale.auctionId}>
            <Transaction.Price>{sale.maxBiddingPrice}</Transaction.Price>
            <Transaction.Date date={sale.auctionCreatedAt} />
          </Transaction>
        ))
      )}
    </>
  );
}
