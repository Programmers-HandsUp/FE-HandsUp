export interface AuctionSearchRequest {
  keyword: string;
  productCategory: string;
  tradeMethod: string;
  isNewProduct: boolean;
  isProgress: boolean;
  si: string;
  gu: string;
  dong: string;
  minPrice: number;
  maxPrice: number;
}

export interface AuctionSearchResultResponse {
  content: AuctionSearchResult[];
  size: number;
  hasNext: boolean;
}

export interface AuctionSearchResult {
  auctionId: 0;
  title: "string";
  currentBiddingPrice: 0;
  imageUrl: "string";
  bookmarkCount?: 0;
  dong: "string";
  createdAt?: "string";
}
