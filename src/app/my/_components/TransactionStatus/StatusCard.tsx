import { cn } from "@/utils/cn";

interface StatusCardProps {
  status: "전체" | "입찰 중" | "진행 중" | "종료";
  type: "구매" | "판매";
  count: number;
}

function StatusCard({ status, type, count }: StatusCardProps) {
  const textColor = cn({
    "text-red-600": status === "전체" && type === "구매",
    "text-blue-600": status === "전체" && type === "판매"
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-gray-800">{status}</p>
      <p className={`font-bold text-lg text-black ${textColor}`}>{count}</p>
    </div>
  );
}

export default StatusCard;
