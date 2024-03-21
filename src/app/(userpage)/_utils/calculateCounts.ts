import {
  PurchaseContent,
  SaleContent,
  Status
} from "@/utils/types/user/mypage";

export const calculateCounts = (content: PurchaseContent[] | SaleContent[]) => {
  const initCounts: Record<Status, number> = {
    "입찰 중": 0,
    "거래 중": 0,
    "거래 완료": 0
  };

  return content.reduce((acc, item) => {
    acc[item.auctionStatus]++;
    return acc;
  }, initCounts);
};
