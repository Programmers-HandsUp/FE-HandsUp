export interface getAuctionReviewsResponse {
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
