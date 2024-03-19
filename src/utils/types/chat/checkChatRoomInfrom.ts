export interface ChatRoomInfoResponse {
  chatRoomId: number;
  auctionId: number;
  currentBiddingId: number;
  currentBiddingPrice: number;
  tradingStatus: "대기중" | "준비중" | "진행중" | "취소됨" | "완료됨";
  auctionTitle: string;
  receiverId: number;
  receiverNickName: string;
  receiverScore: number;
  receiverProfileImageUrl: string;
}
