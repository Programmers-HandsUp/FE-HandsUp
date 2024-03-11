export interface UserReviewLabelResponse {
  content: UserReviewLabel[];
  size: number;
  hasNext: boolean;
}

export interface UserReviewLabel {
  userReviewLabelId: number;
  reviewLabelId: number;
  userId: number;
  count: number;
}
