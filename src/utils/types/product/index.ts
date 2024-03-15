export interface Product {
  auctionId: number;
  sellerInfo: {
    userId: number;
    nickname: string;
    profileImageUrl: string;
    dong: string;
    score: number;
  };
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
  tradeSi: string;
  tradeGu: string;
  tradeDong: string;
  bookmarkCount: number;
  createdAt: string;
}
