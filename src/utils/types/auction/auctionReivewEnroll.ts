export interface AuctionReviewEnrollRequest {
  evaluationScore: number;
  content: string;
  reviewLabelIds: string[];
}

export interface AuctionReviewEnrollResponse {
  evaluationScore: number;
  content: string;
  auctionId: number;
  writerId: number;
}
