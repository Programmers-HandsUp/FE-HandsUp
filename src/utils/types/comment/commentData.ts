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
}

export interface CreateCommentResponse {
  writerId: number;
  nickname: string;
  profileImageUrl: string;
  content: string;
  isSeller: boolean;
}
