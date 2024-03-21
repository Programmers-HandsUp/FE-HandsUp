import {
  PurchaseContent,
  SaleContent,
  Status
} from "@/utils/types/user/mypage";

export const calculateCounts = (content: PurchaseContent[] | SaleContent[]) => {
  const initCounts: Record<Status, number> = {
    입찰중: 0,
    거래중: 0,
    거래완료: 0
  };

  return content.reduce((acc, item) => {
    acc[item.auctionStatus]++;
    return acc;
  }, initCounts);
};
