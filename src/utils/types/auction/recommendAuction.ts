export interface RecommendAuctionsResponse {
  content: RecommendedAuction[];
  size: number;
  hasNext: boolean;
}

export interface RecommendedAuction {
  auctionId: number;
  title: string;
  dong: string;
  currentBiddingPrice: number;
  imgUrl: string;
  bookmarkCount: number;
  biddingCount: number;
  createdAt: string;
  endDate: string;
}
