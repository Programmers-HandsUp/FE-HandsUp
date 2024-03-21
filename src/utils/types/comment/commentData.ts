export interface CommentListResponse {
  content: CommentContent[];
  size: number;
  hasNext: boolean;
}

export interface CommentContent {
  writerId: number;
  nickname: string;
  profileImageUrl: string;
  content: string;
  isSeller: boolean;
  createdAt: string;
}

export interface CreateCommentResponse {
  writerId: number;
  nickname: string;
  profileImageUrl: string;
  content: string;
  isSeller: boolean;
}
