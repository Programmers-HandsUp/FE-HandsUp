import { ImageUrl } from "../image";
export type StatusEn = "BIDDING" | "TRADING" | "COMPLETED";
export type Status = "입찰 중" | "거래 중" | "거래 완료";
export interface Transaction {
  auctionId: number;
  auctionTitle: string;
  auctionImageUrl: ImageUrl;
  auctionStatus: Status;
  auctionEndDateTime: Date;
  auctionCreatedAt: Date;
  winningPrice: number;
}

export interface Purchase {
  content: PurchaseContent[];
  size: number;
  hasNext: boolean;
}

export interface PurchaseContent extends Transaction {}

export interface Sale {
  content: SaleContent[];
  size: number;
  hasNext: boolean;
}

export interface SaleContent extends Transaction {
  maxBiddingPrice: number; // 최고 입찰가
}

export interface ReviewLabel {
  content: LabelContent[];
  size: number;
  hasNext: boolean;
}

export interface LabelContent {
  reviewLabelValue:
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
