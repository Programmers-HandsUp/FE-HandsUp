export interface BidsResponse {
  content: BidsData[];
  size: number;
  hasNext: boolean;
}

export interface BidsData {
  biddingId: number;
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
  tradingStatus: "대기중" | "준비중" | "진행중" | "취소됨" | "완료됨";
  imgUrl: string;
  createdAt: string | Date;
}
