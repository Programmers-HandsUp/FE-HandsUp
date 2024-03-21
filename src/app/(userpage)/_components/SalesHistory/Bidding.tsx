import Timer from "@/app/_component/common/Timer";

import EmptyList from "../EmptyList";
import Transaction from "../Transaction/Transaction";
import { SaleList } from "./SalesHistory";

export function Bidding({ saleList }: SaleList) {
  return (
    <div>
      <Transaction.Header
        firstLabel="최고 입찰가"
        secondLabel="남은 시간"
      />
      {saleList.length === 0 ? (
        <EmptyList type="판매" />
      ) : (
        saleList.map((sale) => (
          <Transaction
            transaction={sale}
            key={sale.auctionId}>
            <Transaction.Price>{sale.maxBiddingPrice}</Transaction.Price>
            <Transaction.Date>
              <Timer
                isIcon={false}
                createdAt={sale.auctionCreatedAt}
                deadline={sale.auctionEndDateTime}
              />
            </Transaction.Date>
          </Transaction>
        ))
      )}
    </div>
  );
}
