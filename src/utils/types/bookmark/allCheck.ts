export interface BookMarkedAllCheckRequest {
  message: string;
  code: string;
}

export interface BookMarkedAllCheckResponse {
  content: BookMarkedAllCheckContent[];
  size: number;
  hasNext: boolean;
}

export interface BookMarkedAllCheckContent {
  auctionId: number;
  title: string;
  auctionStatus: string;
  imageUrl: string;
  createdDate: string;
}
