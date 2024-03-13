export interface BidResponse {
  content: BidsData[];
  size: number;
  hasNext: boolean;
}

export interface BidsData {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
  imgUrl: string;
  createdAt: string | Date;
}
