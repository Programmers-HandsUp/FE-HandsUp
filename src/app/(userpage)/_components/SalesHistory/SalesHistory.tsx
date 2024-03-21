import { SaleContent, StatusEn } from "@/utils/types/user/mypage";

import { Bidding, Finished, Pending } from ".";

export interface SaleList {
  saleList: SaleContent[];
}

interface SalesHistoryProps extends SaleList {
  status: StatusEn;
}
function SalesHistory({ saleList, status }: SalesHistoryProps) {
  return (
    <>
      {status === "BIDDING" && <Bidding saleList={saleList} />}
      {status === "TRADING" && <Pending saleList={saleList} />}
      {status === "COMPLETED" && <Finished saleList={saleList} />}
    </>
  );
}

export default SalesHistory;
