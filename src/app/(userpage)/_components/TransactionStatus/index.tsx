import Link from "next/link";

import { Status } from "@/utils/types/user/mypage";

import StatusCard from "./StatusCard";

interface TransactionListProps {
  type: "구매" | "판매";
  statusCounts: Record<Status, number> | undefined;
}

function TransactionStatus({ type, statusCounts }: TransactionListProps) {
  const bidding = statusCounts ? statusCounts["입찰 중"] : 0;
  const pending = statusCounts ? statusCounts["거래 중"] : 0;
  const finished = statusCounts ? statusCounts["거래 완료"] : 0;
  const total = bidding + pending + finished;

  return (
    <Link href={type === "구매" ? "/my/buying" : "/my/selling"}>
      <div className="w-full flex justify-between bg-sky-50 rounded-lg py-3 px-7 mt-2">
        <StatusCard
          status="전체"
          type={type}
          count={total}
        />
        <StatusCard
          status="입찰 중"
          type={type}
          count={bidding}
        />
        <StatusCard
          status="거래 진행 중"
          type={type}
          count={pending}
        />
        <StatusCard
          status="종료"
          type={type}
          count={finished}
        />
      </div>
    </Link>
  );
}

export default TransactionStatus;
