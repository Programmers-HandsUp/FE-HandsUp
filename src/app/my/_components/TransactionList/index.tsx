"use client";

import { useSearchParams } from "next/navigation";
import { Status } from "../../types";
import usePurchaseStatusList from "../../_hooks/queries/usePurchaseStatusList";
import useSaleStatusList from "../../_hooks/queries/useSaleStatusList";
import SalesHistory from "../SalesHistory/SalesHistory";
import PurchaseHistory from "../PurchaseHistory";
import Tab from "../Tab";

export type TradeMethod = "구매" | "판매";

function TransactionList({ tradeMethod }: { tradeMethod: TradeMethod }) {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") as Status;

  const { data: purchaseList } = usePurchaseStatusList(status);
  const { data: saleList } = useSaleStatusList(5, status);

  return (
    <>
      <div className="w-[360px] z-10 backdrop-blur-md opacity-80">
        <div className="grid grid-cols-3 items-center h-14 border-b">
          <Tab status="bidding">{tradeMethod} 입찰</Tab>
          <Tab status="pending">거래 진행 중</Tab>
          <Tab status="finished">종료</Tab>
        </div>
      </div>

      {tradeMethod === "구매" && (
        <PurchaseHistory purchaseList={purchaseList} />
      )}

      {tradeMethod === "판매" && (
        <SalesHistory
          status={status}
          saleList={saleList}
        />
      )}
    </>
  );
}

export default TransactionList;
