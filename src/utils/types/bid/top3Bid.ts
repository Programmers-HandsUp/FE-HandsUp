export interface Top3BidResponse {
  content: [
    {
      biddingPrice: number;
      auctionId: number;
      bidderId: number;
      bidderNickname: string;
      imgUrl: string;
      createdAt: string;
    }
  ];
  size: number;
  hasNext: boolean;
}