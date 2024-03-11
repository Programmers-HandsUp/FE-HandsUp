export interface getUserReviewsResponse {
  content: UserReview[];
  size: number;
  hasNext: boolean;
}

export interface UserReview {
  reviewId: number;
  writerNickName: string;
  writerProfileImageUrl: string;
  content: string;
}
