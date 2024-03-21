import { PropsWithChildren } from "react";

import ProductCard from "@/app/_component/common/ProductCard";
import { PurchaseContent, SaleContent } from "@/utils/types/user/mypage";

import {
  TransactionDate,
  TransactionHeader,
  TransactionPrice
} from "./TransactionItem";

function TransactionWrapper({
  children,
  transaction
}: PropsWithChildren<{ transaction: PurchaseContent | SaleContent }>) {
  return (
    <>
      <ProductCard
        key={transaction.auctionId}
        id={transaction.auctionId}>
        <div className="grid grid-cols-6 items-center w-full border-t py-4">
          <ProductCard.CardImage
            titleImage="/assets/images/logo.webp"
            width={60}
            height={60}
          />
          <ProductCard.CardTitle className="pl-2 col-span-2 text-base overflow-hidden whitespace-nowrap text-ellipsis">
            {transaction.auctionTitle}
          </ProductCard.CardTitle>
          {children}
        </div>
      </ProductCard>
    </>
  );
}

const Transaction = Object.assign(TransactionWrapper, {
  Header: TransactionHeader,
  Price: TransactionPrice,
  Date: TransactionDate
});

export default Transaction;
