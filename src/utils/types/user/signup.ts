export interface SignUpRequest {
  email: string;
  password: string;
  nickname: string;
  si: string;
  gu: string;
  dong: string;
  profileImageUrl: string;
  productCategoryIds: number[];
}

export interface SignUpResponse {
  userId: number;
}
