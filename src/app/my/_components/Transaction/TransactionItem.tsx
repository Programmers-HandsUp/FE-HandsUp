import setMoneyUnitString from "@/utils/setMoneyUnitString";
import { PropsWithChildren } from "react";

interface HeaderProps {
  firstLabel: "구매 희망가" | "최고 입찰가" | "낙찰가";
  secondLabel: "날짜" | "남은 시간" | "-";
}

const formatDate = (dateString?: string) => {
  if (dateString) {
    const date = dateString.split("-");
    const year = date[0].substring(2);
    return `${year}/${date[1]}/${date[2]}`;
  }
};

export function TransactionHeader({ firstLabel, secondLabel }: HeaderProps) {
  return (
    <div className="grid grid-cols-4 text-sm text-end py-2 px-1">
      <p className="col-start-3">{firstLabel}</p>
      <p>{secondLabel}</p>
    </div>
  );
}

export function TransactionPrice({ children }: { children: number }) {
  return (
    <p className="text-sm col-span-2 text-center">
      <strong>{setMoneyUnitString(children)}원</strong>
    </p>
  );
}

export function TransactionDate({
  children,
  date
}: PropsWithChildren<{ date?: string }>) {
  return (
    <div className="text-sm text-[#ABABAB] text-right">
      {formatDate(date)}
      {children}
    </div>
  );
}
