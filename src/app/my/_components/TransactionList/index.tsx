"use client";

import { useSearchParams } from "next/navigation";
import SelectStatusTab from "./SelectStatusTab";
import { Status } from "../../types";
import usePurchaseStatusList from "../../../hooks/queries/usePurchaseStatusList";
import useSaleStatusList from "../../../hooks/queries/useSaleStatusList";
import SalesHistory from "../SalesHistory/SalesHistory";
import PurchaseHistory from "../PurchaseHistory";

export type TradeMethod = "구매" | "판매";

function TransactionList({ tradeMethod }: { tradeMethod: TradeMethod }) {
  const searchParams = useSearchParams();
  const status = searchParams.get("status") as Status;

  const { data: purchaseList } = usePurchaseStatusList(status);
  const { data: saleList } = useSaleStatusList(5, status);

  return (
    <>
      {tradeMethod === "구매" && (
        <>
          <SelectStatusTab
            tradeMethod={tradeMethod}
            selectStatus={status}
          />
          <PurchaseHistory purchaseList={purchaseList} />
        </>
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
