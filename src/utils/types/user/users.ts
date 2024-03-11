export interface UserReviewResponse {
  content: [
    {
      reviewId: number;
      writerNickName: string;
      writerProfileImageUrl: string;
      content: string;
    }
  ];
  size: number;
  hasNext: boolean;
}
