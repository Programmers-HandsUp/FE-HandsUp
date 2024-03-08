"use client";

import { useState } from "react";
import SelectStatusTab from "./SelectStatusTab";
import { Status } from "../../types";
import TransactionListHeader from "./TransactionListHeader";
import TransactionItem from "./TransactionItem";
import usePurchaseStatusList from "../../../hooks/queries/usePurchaseStatusList";
import useSaleStatusList from "../../../hooks/queries/useSaleStatusList";

export type TradeMethod = "구매" | "판매";

export interface DefaultProps {
  tradeMethod: TradeMethod;
  selectStatus: Status;
}

function TransactionList({ tradeMethod }: { tradeMethod: TradeMethod }) {
  const [selectStatus, setSelectStatus] = useState<Status>("bidding");

  const { data: purchaseList } = usePurchaseStatusList(selectStatus);
  const { data: saleList } = useSaleStatusList(5, selectStatus);
  const transactionData = tradeMethod === "구매" ? purchaseList : saleList;

  return (
    <>
      <SelectStatusTab
        tradeMethod={tradeMethod}
        selectStatus={selectStatus}
        setSelectStatus={setSelectStatus}
      />
      {tradeMethod === "구매" && (
        <>
          <TransactionListHeader
            tradeMethod={tradeMethod}
            selectStatus={selectStatus}
          />
          {transactionData?.map((transaction) => (
            <TransactionItem
              key={transaction.auctionId}
              transaction={transaction}
              tradeMethod={tradeMethod}
              selectStatus={selectStatus}
            />
          ))}
        </>
      )}
      {tradeMethod === "판매" && (
        <>
          <TransactionListHeader
            tradeMethod={tradeMethod}
            selectStatus={selectStatus}
          />
          {transactionData?.map((transaction) => (
            <TransactionItem
              key={transaction.auctionId}
              transaction={transaction}
              tradeMethod={tradeMethod}
              selectStatus={selectStatus}
            />
          ))}
        </>
      )}
    </>
  );
}

export default TransactionList;
