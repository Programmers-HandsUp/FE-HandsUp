import Transaction from "../Transaction/Transaction";
import { Purchase } from "../../types";

interface PurchaseHistoryProps {
  purchaseList: Purchase[] | undefined;
}

function PurchaseHistory({ purchaseList }: PurchaseHistoryProps) {
  return (
    <>
      <Transaction.Header
        firstLabel="구매 희망가"
        secondLabel="날짜"
      />
      {purchaseList?.map((purchase) => (
        <Transaction
          transaction={purchase}
          key={purchase.auctionId}>
          <Transaction.Price>{purchase.biddingPrice}</Transaction.Price>
          <Transaction.Date date={purchase.tradeTime} />
        </Transaction>
      ))}
    </>
  );
}

export default PurchaseHistory;
