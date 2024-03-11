export interface getUserReviewLabelResponse {
  content: userReviewLabel[];
  size: number;
  hasNext: boolean;
}

export interface userReviewLabel {
  userReviewLabelId: number;
  reviewLabelId: number;
  userId: number;
  count: number;
}
