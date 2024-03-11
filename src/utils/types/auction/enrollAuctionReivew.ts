export interface enrollAuctionReviewRequest {
  request: {
    evaluationScore: number;
    content: string;
    reviewLabelIds: number[];
  };
  writer: {
    createdAt: string;
    updatedAt: string;
    id: number;
    email: string;
    password: string;
    nickname: string;
    score: number;
    address: {
      si: string;
      gu: string;
      dong: string;
    };
    profileImageUrl: string;
    reportCount: number;
  };
}

export interface enrollAuctionReviewResponse {
  evaluationScore: number;
  content: string;
  auctionId: number;
  writerId: number;
}
