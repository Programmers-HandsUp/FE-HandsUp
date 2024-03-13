export interface AuctionDetailResponse {
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
  auctionStatus: "입찰중" | "거래중" | "거래완료";
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
