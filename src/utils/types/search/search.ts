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
  auctionId: number;
  title: string;
  currentBiddingPrice: number;
  imageUrl: string;
  bookmarkCount: number;
  dong: string;
  createdAt: string;
}
