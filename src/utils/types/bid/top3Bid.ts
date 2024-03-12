export interface Top3BidResponse {
  content: Top3BidData[];
  size: number;
  hasNext: boolean;
}

export interface Top3BidData {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
  imgUrl: string;
  createdAt: string;
}
