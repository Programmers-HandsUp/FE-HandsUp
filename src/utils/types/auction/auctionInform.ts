export interface AuctionInformGetResponse {
  auctionId: number;
  sellerId: number;
  title: string;
  productCategory: string;
  auctionStatus: string;
  initPrice: number;
  currentBiddingPrice: number;
  endDate: string;
  productStatus: string;
  purchaseTime: string;
  description: string;
  tradeMethod: string;
  imageUrls: string[];
  si: string;
  gu: string;
  dong: string;
  bookmarkCount: number;
  createdAt: string;
}
