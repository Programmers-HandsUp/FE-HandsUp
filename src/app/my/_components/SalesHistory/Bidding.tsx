import Timer from "@/app/_component/common/Timer";
import Transaction from "../Transaction/Transaction";
import { SaleList } from "./SalesHistory";

export function Bidding({ saleList }: SaleList) {
  return (
    <div>
      <Transaction.Header
        firstLabel="최고 입찰가"
        secondLabel="남은 시간"
      />
      {saleList?.map((sale) => (
        <Transaction
          transaction={sale}
          key={sale.auctionId}>
          <Transaction.Price>{sale.maxBiddingPrice}</Transaction.Price>
          <Transaction.Date>
            <Timer
              isIcon={false}
              createdAt={new Date("2024-02-29T10:59:59")}
              deadline={new Date(`${sale.auctionLeftTime}T10:59:59`)}
            />
          </Transaction.Date>
        </Transaction>
      ))}
    </div>
  );
}
