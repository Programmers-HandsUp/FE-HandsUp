import { Purchase, Sale, Status } from "@/utils/types/user/mypage";

export const calculateCounts = (data: Purchase[] | Sale[]) => {
  const initCounts: Record<Status, number> = {
    bidding: 0,
    pending: 0,
    finished: 0
  };

  return data.reduce((acc, item) => {
    acc[item.auctionStatus]++;
    return acc;
  }, initCounts);
};
