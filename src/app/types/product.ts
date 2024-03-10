export interface IBids {
  content: IBidsData[];
  size: number;
  hasNext: boolean;
}

export interface IBidsData {
  biddingPrice: number;
  auctionId: number;
  bidderId: number;
  bidderNickname: string;
  imgUrl: string;
  createdAt: string;
}

export interface IAuctionDetail {
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
