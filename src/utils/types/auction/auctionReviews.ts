export interface AuctionReviewsResponse {
  content: AuctionReview[];
  size: number;
  hasNext: boolean;
}

export interface AuctionReview {
  evaluationScore: number;
  content: string;
  auctionId: number;
  writerId: number;
}
