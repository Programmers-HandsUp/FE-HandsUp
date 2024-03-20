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

interface DefaultUser {
  userId: number;
  profileImageUrl: string;
  nickname: string;
  score: number;
}

export interface CheckLoginUserResponse extends DefaultUser {
  email: string;
  password: string;
  address: Address;
  reportCount: number;
  readNotificationCount: number;
}

export interface Address {
  si: string;
  gu: string;
  dong: string;
}

export interface UserProfile extends DefaultUser {
  dong: string;
  preferredProductCategories: number[]
}
