import { PropsWithChildren } from "react";

import setMoneyUnitString from "@/utils/function/setMoneyUnitString";

interface HeaderProps {
  firstLabel: "구매 희망가" | "최고 입찰가" | "낙찰가";
  secondLabel: "날짜" | "남은 시간" | "-";
}

const formatDate = (date?: Date | string) => {
  if (date) {
    const tempDate = new Date(date);
    const year = tempDate.getFullYear().toString().substring(2);
    const month = (tempDate.getMonth() + 1).toString().padStart(2, "0");
    const day = tempDate.getDate().toString().padStart(2, "0");

    return `${year}/${month}/${day}`;
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
}: PropsWithChildren<{ date?: Date | string }>) {
  return (
    <div className="text-sm text-[#ABABAB] text-right">
      {formatDate(date)}
      {children}
    </div>
  );
}
