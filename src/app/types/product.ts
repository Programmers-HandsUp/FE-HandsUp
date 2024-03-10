export interface Bids {
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

export interface AuctionDetailType {
  auctionId: number;
  sellerId: number;
  title: string;
  productCategory: string;
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
  auctionStatus: "경매중" | "거래진행중" | "거래완료";
}

export interface TopThreeRankType {
  content: TopThreeRankDataType[];
  size: number;
  hasNext: boolean;
}

export interface TopThreeRankDataType {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
}
