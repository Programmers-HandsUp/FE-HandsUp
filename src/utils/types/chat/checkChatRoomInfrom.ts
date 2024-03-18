export interface ChatRoomInfoResponse {
  chatRoomId: number;
  auctionId: number;
  currentBiddingId: number;
  currentBiddingPrice: number;
  tradingStatus: string;
  auctionTitle: string;
  receiverId: number;
  receiverNickName: string;
  receiverScore: number;
  receiverProfileImageUrl: string;
}
