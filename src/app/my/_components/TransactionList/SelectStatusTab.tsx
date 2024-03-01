import { Dispatch, SetStateAction } from "react";
import usePurchaseList from "../../../hooks/queries/usePurchaseList";
import { DefaultProps } from ".";
import { Status } from "../../types";
import useSaleList from "../../../hooks/queries/useSaleList";

interface SelectStatusTabProps extends DefaultProps {
  setSelectStatus: Dispatch<SetStateAction<Status>>;
}

interface StatusList {
  status: Status;
  title: "구매 입찰" | "판매 입찰" | "진행중" | "종료";
}

function SelectStatusTab({
  tradeMethod,
  selectStatus,
  setSelectStatus
}: SelectStatusTabProps) {
  const color = tradeMethod === "구매" ? "text-red-600" : "text-blue-600";

  const STATUS_LIST: StatusList[] = [
    {
      status: "bidding",
      title: `${tradeMethod} 입찰`
    },
    {
      status: "pending",
      title: "진행중"
    },
    {
      status: "finished",
      title: "종료"
    }
  ];
  const { data: purchaseCounts } = usePurchaseList();
  const { data: saleCounts } = useSaleList(5);

  const statusCounts = tradeMethod === "구매" ? purchaseCounts : saleCounts;

  return (
    <div className="w-[360px] z-10 backdrop-blur-md opacity-80">
      <div className="grid grid-cols-3 items-center h-14 border-b">
        {STATUS_LIST.map(({ status, title }) => (
          <button
            key={status}
            className="flex flex-col items-center relative"
            onClick={() => setSelectStatus(status)}>
            <p className={selectStatus === status ? color : ""}>
              {statusCounts ? statusCounts[status] : 0}
            </p>
            <p className="pb-2">{title}</p>
            <div
              className={
                selectStatus === status
                  ? "absolute w-full bottom-0 h-1 bg-black dark:bg-white"
                  : ""
              }></div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectStatusTab;
