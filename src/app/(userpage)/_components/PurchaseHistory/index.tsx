import { PurchaseContent } from "@/utils/types/user/mypage";

import EmptyList from "../EmptyList";
import Transaction from "../Transaction/Transaction";

interface PurchaseHistoryProps {
  purchaseList: PurchaseContent[];
}

function PurchaseHistory({ purchaseList }: PurchaseHistoryProps) {
  if (purchaseList.length === 0) {
    return <EmptyList type="구매" />;
  }

  return (
    <>
      <Transaction.Header
        firstLabel="구매 희망가"
        secondLabel="날짜"
      />
      {purchaseList.map((purchase) => (
        <Transaction
          transaction={purchase}
          key={purchase.auctionId}>
          <Transaction.Price>{purchase.winningPrice || "-"}</Transaction.Price>
          <Transaction.Date date={purchase.auctionCreatedAt} />
        </Transaction>
      ))}
    </>
  );
}

export default PurchaseHistory;
