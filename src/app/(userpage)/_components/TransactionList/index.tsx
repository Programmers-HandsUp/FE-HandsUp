"use client";

import { useSearchParams } from "next/navigation";

import { StatusEn } from "@/utils/types/user/mypage";

import usePurchaseStatusList from "../../../(userpage)/_hooks/queries/usePurchaseStatusList";
import useSaleStatusList from "../../../(userpage)/_hooks/queries/useSaleStatusList";
import PurchaseHistory from "../PurchaseHistory";
import SalesHistory from "../SalesHistory/SalesHistory";
import Tab from "../Tab";

export type TradeMethod = "구매" | "판매";

interface TransactionListProps {
  tradeMethod: TradeMethod;
  userId: number;
}
function TransactionList({ tradeMethod, userId }: TransactionListProps) {
  const searchParams = useSearchParams();
  const status = searchParams.get("status")?.toUpperCase() as StatusEn;

  const { data: purchaseList } = usePurchaseStatusList(status);
  const { data: saleList } = useSaleStatusList(userId, status);

  return (
    <>
      <div className="w-[360px] z-10 backdrop-blur-md opacity-80">
        <div className="grid grid-cols-3 items-center h-14 border-b">
          <Tab status="BIDDING">{tradeMethod} 입찰</Tab>
          <Tab status="TRADING">거래 진행 중</Tab>
          <Tab status="COMPLETED">종료</Tab>
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
