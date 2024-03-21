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
