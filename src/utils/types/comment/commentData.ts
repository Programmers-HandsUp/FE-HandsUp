export interface CommentData {
  messageId: number;
  auctionId: number;
  userId: number;
  userNickname: string;
  userProfileImage: string;
  content: string;
  createdAt: Date;
}

export interface CommentListData {
  content: CommentData[];
  size: number;
  hasNext: number;
}
