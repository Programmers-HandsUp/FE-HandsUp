export type Status = "pending" | "bidding" | "finished";

export interface Transaction {
  auctionId: number;
  auctionTitle: string;
  auctionImageUrl: File[] | null | string;
  auctionStatus: Status;
}

export interface Purchase extends Transaction {
  tradeTime: string;
  biddingPrice: number;
}

export interface Sale extends Transaction {
  auctionLeftTime: string;
  auctionCompleteTime: string;
  maxBiddingPrice: number;
  completeBiddingPrice: number;
}

export interface ReviewLabel {
  content: LabelContent[];
  size: number;
  hasNext: boolean;
}

export interface LabelContent {
  label:
    | "응답이 빨라요"
    | "시간 약속을 잘 지켜요"
    | "제가 있는 곳 까지 와서 거래했어요"
    | "친절하고 매너있어요"
    | "물품상태가 설명한 것과 같아요"
    | "저렴하게 구매했어요"
    | "물품설명이 자세해요";
  count: number;
}

export interface Review {
  content: ReviewContent[];
  size: number;
  hasNext: boolean;
}

export interface ReviewContent {
  reviewId: number;
  writerNickName: string;
  writerProfileImageUrl: string;
  content: string;
}
