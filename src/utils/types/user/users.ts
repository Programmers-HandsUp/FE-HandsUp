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

export interface CheckLoginUserResponse {
  userId: number;
  email: string;
  password: string;
  nickname: string;
  score: number;
  address: Address;
  profileImageUrl: string;
  reportCount: number;
  readNotificationCount: number;
}

export interface Address {
  si: string;
  gu: string;
  dong: string;
}
