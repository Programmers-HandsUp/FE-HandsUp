import { Bidding, Finished, Pending } from ".";
import { Sale, Status } from "../../types";

export interface SaleList {
  saleList: Sale[] | undefined;
}

interface SalesHistoryProps extends SaleList {
  status: Status;
}
function SalesHistory({ saleList, status }: SalesHistoryProps) {
  return (
    <>
      {status === "bidding" && <Bidding saleList={saleList} />}
      {status === "pending" && <Pending saleList={saleList} />}
      {status === "finished" && <Finished saleList={saleList} />}
    </>
  );
}

export default SalesHistory;
