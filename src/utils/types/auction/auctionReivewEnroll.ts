export interface AuctionReviewEnrollRequest {
  evaluationScore: number;
  content: string;
  reviewLabelIds: number[];
}

export interface AuctionReviewEnrollResponse {
  evaluationScore: number;
  content: string;
  auctionId: number;
  writerId: number;
}

export interface ReviewComplete {
  reviewId: number;
  evaluationScore: number;
  content: string;
  auctionId: number;
  writerId: number;
  writerNickname: string;
  auctionTitle: string;
  winningPrice: number;
  tradeMethod: string;
  tradingLocation: {
    si: string;
    gu: string;
    dong: string;
  };
  tradingCreatedAt: string;
  reviewCreatedAt: string;
}
